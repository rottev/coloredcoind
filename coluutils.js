module.exports = (function () {
    var config = require("./config");
    var Client = require('node-rest-client').Client;
    var Q = require("q");
    var rpc = require("bitcoin");
    var AWS = require("aws-sdk");
    var crypto = require('crypto');



    var creds = {};
    try
    { creds = require('../../credentials.js'); }
    catch(e)
    { console.log("no credentials file loading from env "); 
     creds.AWSAKI = process.env.AWSAKI;
     creds.AWSSSK = process.env.AWSSSK; }

    var client = new Client();

/*
 var rpcclient = new rpc.Client({
          host: 'testnet.api.colu.co',
          port: 443,
          user: 'admin',
          pass: '9lpcjZpv221j47zF',
          ssl: true,
          sslStrict: false,
          path: '/rpc',
          timeout: 30000
        });
*/


    var rpcclient = new rpc.Client({
          host: 'localhost',
          port: 8332,
          user: 'rotem',
          pass: 'bitcoind',
          timeout: 30000
        });

    function coluutils() {

        //coluutils.getBlockCount().then(function() { console.log('count:', arguments[0][1]); } );
        //coluutils.sendRawTransaction("0100000001c37465105275a6de0163220da4db306cb5815e1f5b76f5868c7d2b7c5b13aa0d0f0000008b483045022100e570db30b46c3758d65cf01c91a1ad6ec068fd2fcec75f22242434fbe2eb13990220268ab329874cba6f962e5ec281ffeb3f86392af36eb7b8bdf2693e608eb59633014104ecf1a1c51032dd523f1a23ca734d3740314b3d7d3db6011b50d50aec4c6e5a1043909082e54fe48b74d84b256b25552f82e9e2316da29485b1c9df003febac3dffffffff0240060000000000001976a91472c383889fc9d4c4658feabe478ae08698120cd888ac00000000000000001976a91496ab0dbf3d61fb63d07da6981cfa5d5341c5587088ac00000000").then(function() { console.log(arguments) } );

    }

    coluutils.sendRawTransaction = function sendRawTransaction(txHex) {     
        return callservice('sendrawtransaction',txHex);       
    }

    coluutils.getBlockCount = function getBlockCount() {     
        return callservice('getblockcount');       
    }



    function callservice() {
        var deferred = Q.defer();

        var args = [].slice.call(arguments);
        var command = args[0];
        args.shift();
        var batch = [{
            method: command,
            params: args
        }];



        rpcclient.cmd(batch, function(err){
          if (err) {
             console.log(err);
              deferred.reject(new Error("failed: Status code was " + err));
          }
          else {
            deferred.resolve(arguments);
          }

        });
        
       
        return deferred.promise;
    }


    coluutils.createAssetFile = function createAssetFile(data) {
        var deferred = Q.defer();

        var key = sha1(sha256(data));
        
        AWS.config.update({ accessKeyId: process.env.AWSAKI,
                        secretAccessKey: process.env.AWSSSK });

        var s3bucket = new AWS.S3({params: {Bucket: 'coloredcoin-assets'}});

        s3bucket.upload({Key: key, Body:JSON.stringify(metadata), ContentType: 'application/json' }, function(err, data) {
            if (err) {
              console.log("Error uploading data: ", err);
                deferred.reject(new Error("Status code was " + err));
            } else {
              console.log("Successfully uploaded data to coloredcoin-assets");
               deferred.resolve("https://s3.amazonaws.com/coloredcoin-assets/" + key);
            }
        });
               

                
        return deferred.promise;


    }


    coluutils.sha256 =  function sha256(buffer) {
      return crypto.createHash('sha256').update(buffer).digest()
    }
      coluutils.sha1 = function sha1(buffer) {
      return crypto.createHash('sha1').update(buffer).digest()
    }


    coluutils();

    return coluutils;
})();