/**
     * @api {get} /asset/:id Request User information
     * @apiName GetAssetMetadata
     * @apiGroup Color
     *
     * @apiParam {Number} id Asset unique ID.
     *
     * @apiSuccess {Object} AssetMetadata asset metadata.
     * @apiVersion 1.0.0
     * 
     */


     /**
     * @api {post} /coloraddress Get the color address of a corrisponding base58 bitcoin address
     * @apiName GetColoredAddressFromAddress
     * @apiGroup Color
     * @apiDescription Assets can only be sent to a color adress, if you dont have a color adress
     * or wish to send assets to someone only knowing thier bitcoin address use this to get the base58
     * corrisponding color adress
     *
     * @apiParam {String} address your base58 address.
     * @apiParam {String} email your email.
     *
     * @apiSuccess {String} your base58 colored address.
     * @apiVersion 1.0.0
     * 
     */



     /**
     * @api {post} /issue  Request to issue an asset
     * @apiName IssueAsset
     * @apiGroup Color
     *
     * @apiParam {String} issue_adress Base58 public key adress of asset issuer.
     * @apiParam {String} name Name of the asset you want to issue.
     * @apiParam {String} short_name short name for the asset you want to issue.
     * @apiParam {String} amount amount of units for the asset you wish to issue.
     * @apiParam {Number} fee mining fee for the issueance recommended a minimum of 1000 satoshi.
     * @apiParam {Boolean} selfhost Flag to indicate if you are hosting the metadta file or server will (recommended that you host it)
     * @apiParam {String} [metadat_url] url where you host the metadata file (if you host it)
     * @apiParam {Boolean} [sorten_url] use goo.gl to shorten your url and encode it
     * @apiParam {Object} AssetMetadata
     * @apiParam (AssetMetadata) {String} issuer Name of the asset issuer
 	 * @apiParam (AssetMetadata) {Number} divisibility How divisible is the asset
 	 * @apiParam (AssetMetadata) {String} icon_url The URL to an icon representing the asset, image file should be 48x48 pixels
 	 * @apiParam (AssetMetadata) {String} image_url the URL to an image representing the asset, image file should be 260 pixels wide at least
 	 * @apiParam (AssetMetadata) {String} version Version of protocol as string (currently 1.0)
 	 * @apiParam (AssetMetadata) {String} type String for the type of the token
 	 * @apiParam (AssetMetadata) {String} description String that describes the asset 	  	 
     *
     * @apiSuccess {Object} CreatedAsset asset metadata.
     * @apiVersion 1.0.0
     * 
     */



     /**
     * @api {post} /sendasset Returns a transaction that send the asset
     * @apiName SendAsset
     * @apiGroup Color
     *
     * @apiParam {Number} fees Fees for transaction in satoshi.
     * @apiParam {String} Colored adress to send the asset from. 
	 * @apiParam {Object[]} SendAssetToAdress Array of SendAssetToAdress items.
     * @apiParam (SendAssetToAdress) {String} address Address that will recive the asset
 	 * @apiParam (SendAssetToAdress) {String} amount Units of the asset to send
 	 * @apiParam (SendAssetToAdress) {String} asset_id Id of the asset	  	 
     *
     * @apiSuccess {Object} AssetMetadata asset metadata.
     * @apiVersion 1.0.0
     * 
     */



     /**
     * @api {get} /stakeholders/:assetId/:blockheight Request User information
     * @apiName GetAssetHolders
     * @apiGroup Color
     *
     * @apiParam {String} assetId Asset unique ID.
     * @apiParam {Number} blockheight Block hieght to consider.     
     *
     * @apiSuccess {Object[]} AssetHolders asset metadata.
     * @apiSuccess (AssetHolders) {Number} block_height block height at which to start search.
     * @apiSuccess (AssetHolders) {String} asset_id asset metadata.
     * @apiSuccess (AssetHolders) {Object[]} owners asset metadata.
     * @apiSuccess (AssetHolders.owners) {String} Script for the asset.
     * @apiSuccess (AssetHolders.owners) {String} Adress holding the asset.
     * @apiSuccess (AssetHoldersowners) {String} asset_quantity quantity of the asset.
     * @apiVersion 1.0.0
     * 
     */