module.exports = (function () {
    var api = require('../../api.js');
    var google = require('../../googleapi.js');
    var sw = require("swagger-node-express");
    var utils = require('../../utils.js');
    var config = require('../../config.js');
    var Q = require("q");


    function color() { };

    console.log("loading color")

    color.registerRoutes = function registerRoutes(app, path, swagger) {
     

        var issueAsset = {
            'spec': {
                "description": "",
                "path": "/issue",
                "notes": "Returns a issued asset",
                "summary": "",
                "method": "POST",
                "parameters": [
                        sw.bodyParam("AssetDefinition", "Asset Issue Object", "AssetDefinition")
                //swagger.pathParam("AssetIssue", "Asset Issue Object", "string")     
                /* swagger.pathParam("petId", "ID of pet that needs to be fetched", "string") */
                ],
                "type": "CreatedAsset",
                "errorResponses": [swagger.errors.notFound('asset')],
                "nickname": "issueAsset"
            },
            'action': function (req, res) {
                console.log("issue action");
                tryIssueAsset(req, res);
            }
        };

        swagger.addPost(issueAsset);

        var getAsset = {
            'spec': {
                "description": "",
                "path": "/asset/{assetId}",
                "notes": "Returns information about an asset",
                "summary": "",
                "method": "GET",
                "parameters": [sw.pathParam("assetId", "ID of Asset we want to get info for", "string")],
                "type": "Asset",
                "errorResponses": [swagger.errors.notFound('asset')],
                "nickname": "getAsset"
            },
            'action': function (req, res) {
                // res.send(JSON.stringify({ ok: "ok" }));
                res.send(api.getAssetDefeintion(req.params.assetId));
            }
        };

        swagger.addGet(getAsset);


         var getHoldingAdressesForAsset = {
            'spec': {
                "description": "",
                "path": "/stakeholders/{assetId}/:{blockheight}?",
                "notes": "Returns a all adresses holding the asset",
                "summary": "",
                "method": "GET",
                "parameters": [
                        sw.pathParam("assetId", "ID of Asset we want to get info for", "string"),
                        sw.pathParam("blockheight", "block hieght to consider (optional)", "int")
                //swagger.pathParam("AssetIssue", "Asset Issue Object", "string")     
                /* swagger.pathParam("petId", "ID of pet that needs to be fetched", "string") */
                ],
                "type": "AssetHolder",
                "errorResponses": [swagger.errors.notFound('asset')],
                "nickname": "getStakeholders"
            },
            'action': function (req, res) {
                console.log("issue action");
                trygetAssetStakeholders(req, res);
            }
        };

        swagger.addGet(getHoldingAdressesForAsset);


        console.log("color routes added.");


    }


    function tryIssueAsset(req, res) {
        console.log("issueAsset")
        getOpenAssetsItem(req.body)
        .then(function (item) {
            api.createAsset(item)
            .then(function (data) {
                console.log("createAsset success");
                var transaction = returnIssuedAsset(data);
                transaction.assetid = utils.getAssetId(req.body.issue_adress);
                newAssetResponseFromOpenAssets(transaction, function (response, error) {
                    if (error)
                        res.status(500).send({ error: error.message });
                    else
                        res.json(response);
                });
            },
            function (error) {
                console.log("createAsset failed");
                res.send({ error: error });
            });
        }).catch(function (error) {
            console.log(error)
            res.json(error);
        });

    }

    function trygetAssetStakeholders(req, res) {
        try{
            
        }
        catch(e) {
            
        }
    }

    function newAssetResponseFromOpenAssets(newAsset, callback) {
        try {
            var hex = JSON.parse(newAsset.transaction);
            var resp = {
                txHex: hex.raw,
                metadata: newAsset.asset.metadata,
                assetId: newAsset.assetid,
                assetAdress: newAsset.asset.address
            }
            callback(resp, null);
        }
        catch (e) {
            console.log(e);
            callback(null, e);
        }
    }

    function getOpenAssetsItem(AssetDefinition) {
        var deferred = Q.defer();
        if (AssetDefinition.selfhost) {
            var openAsset = {
                fees: AssetDefinition.fee,
                from: AssetDefinition.issue_adress,
                address: utils.getAssetAddressId(AssetDefinition.issue_adress),
                amount: AssetDefinition.amount,
                metadata: "u=" + AssetDefinition.metadat_url
            };
            deferred.resolve(openAsset);
        }
        else {
            hostMetadataFile(AssetDefinition)
            .then(function (url) {
                var openAsset = {
                    fees: AssetDefinition.fee,
                    from: AssetDefinition.issue_adress,
                    address: utils.getAssetAddressId(AssetDefinition.issue_adress),
                    amount: AssetDefinition.amount,
                    metadata: "u=" + url
                }
                deferred.resolve(openAsset);
            },
            function (error) {
                console.log(error);
                deferred.reject(new Error("error code was " + error));
            });

        }

        return deferred.promise;
        /*
        AssetDefinition.issue_adress
        AssetDefinition.name
        AssetDefinition.sort_name
        AssetDefinition.amount
        AssetDefinition.fee
        AssetDefinition.selfhost
        AssetDefinition.metadata.issuer
        AssetDefinition.metadata.divisibility
        AssetDefinition.metadata.icon_url
        AssetDefinition.metadata.image_url
        AssetDefinition.metadata.version
        AssetDefinition.metadata.type
        AssetDefinition.metadat_url
        */
    }

    function hostMetadataFile(AssetDefinition) {
        var deferred = Q.defer();

        var longurl = generateLocalMetadataPath(AssetDefinition);
        google.getShortUrl(longurl)
        .then(function (url) {
            AssetDefinition.contract_url = url;
            utils.createMetadata(AssetDefinition);
            deferred.resolve(url);
        },
        function (error) {
            deferred.reject(new Error("Status code was " + response.statusCode));
        });

        AssetDefinition.contract_url;

        return deferred.promise;
    }

    function generateLocalMetadataPath(AssetDefinition) {
        var path = config.machineurl + "/metadata/" + AssetDefinition.sort_name;
        return path;
    }

    function returnIssuedAsset(transaction) {
        return transaction;
    }

    return color;
})();