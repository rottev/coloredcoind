define({ "api": [
  {
    "type": "get",
    "url": "/stakeholders/:assetId/:blockheight",
    "title": "Request User information",
    "name": "GetAssetHolders",
    "group": "Color",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "assetId",
            "description": "<p>Asset unique ID.</p> "
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "blockheight",
            "description": "<p>Block hieght to consider.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "asset",
            "description": "<p>asset metadata.</p> "
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "asset.block_height",
            "description": "<p>block height at which to start search.</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "asset.asset_id",
            "description": "<p>asset metadata.</p> "
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "asset.owners",
            "description": "<p>asset metadata.</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "asset.ownersscript",
            "description": "<p>Script for the asset.</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "asset.ownersaddress",
            "description": "<p>Adress holding the asset.</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "asset.owners.asset_quantity",
            "description": "<p>quantity of the asset.</p> "
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "apidoc/colordoc.js",
    "groupTitle": "Color"
  },
  {
    "type": "get",
    "url": "/asset/:id",
    "title": "Request User information",
    "name": "GetAssetMetadata",
    "group": "Color",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Asset unique ID.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "AssetMetadata",
            "description": "<p>asset metadata.</p> "
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "apidoc/colordoc.js",
    "groupTitle": "Color"
  },
  {
    "type": "post",
    "url": "/coloraddress",
    "title": "Get the color address of a corrisponding base58 bitcoin address",
    "name": "GetColoredAddressFromAddress",
    "group": "Color",
    "description": "<p>Assets can only be sent to a color adress, if you dont have a color adress or wish to send assets to someone only knowing thier bitcoin address use this to get the base58 corrisponding color adress</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>your base58 address.</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>your email.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "your",
            "description": "<p>base58 colored address.</p> "
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "apidoc/colordoc.js",
    "groupTitle": "Color"
  },
  {
    "type": "post",
    "url": "/issue",
    "title": "Request to issue an asset",
    "name": "IssueAsset",
    "group": "Color",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "issue_adress",
            "description": "<p>Base58 public key adress of asset issuer.</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the asset you want to issue.</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "short_name",
            "description": "<p>short name for the asset you want to issue.</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "amount",
            "description": "<p>amount of units for the asset you wish to issue.</p> "
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "fee",
            "description": "<p>mining fee for the issueance recommended a minimum of 1000 satoshi.</p> "
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "selfhost",
            "description": "<p>Flag to indicate if you are hosting the metadta file or server will (recommended that you host it)</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "metadat_url",
            "description": "<p>url where you host the metadata file (if you host it)</p> "
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "sorten_url",
            "description": "<p>use goo.gl to shorten your url and encode it</p> "
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "AssetMetadata",
            "description": ""
          }
        ],
        "AssetMetadata": [
          {
            "group": "AssetMetadata",
            "type": "String",
            "optional": false,
            "field": "issuer",
            "description": "<p>Name of the asset issuer</p> "
          },
          {
            "group": "AssetMetadata",
            "type": "Number",
            "optional": false,
            "field": "divisibility",
            "description": "<p>How divisible is the asset</p> "
          },
          {
            "group": "AssetMetadata",
            "type": "String",
            "optional": false,
            "field": "icon_url",
            "description": "<p>The URL to an icon representing the asset, image file should be 48x48 pixels</p> "
          },
          {
            "group": "AssetMetadata",
            "type": "String",
            "optional": false,
            "field": "image_url",
            "description": "<p>the URL to an image representing the asset, image file should be 260 pixels wide at least</p> "
          },
          {
            "group": "AssetMetadata",
            "type": "String",
            "optional": false,
            "field": "version",
            "description": "<p>Version of protocol as string (currently 1.0)</p> "
          },
          {
            "group": "AssetMetadata",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>String for the type of the token</p> "
          },
          {
            "group": "AssetMetadata",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>String that describes the asset</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "CreatedAsset",
            "description": "<p>asset metadata.</p> "
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "apidoc/colordoc.js",
    "groupTitle": "Color"
  },
  {
    "type": "post",
    "url": "/sendasset",
    "title": "Returns a transaction that send the asset",
    "name": "SendAsset",
    "group": "Color",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "fees",
            "description": "<p>Fees for transaction in satoshi.</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Colored",
            "description": "<p>adress to send the asset from.</p> "
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "SendAssetToAdress",
            "description": "<p>Array of SendAssetToAdress items.</p> "
          }
        ],
        "SendAssetToAdress": [
          {
            "group": "SendAssetToAdress",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Address that will recive the asset</p> "
          },
          {
            "group": "SendAssetToAdress",
            "type": "String",
            "optional": false,
            "field": "amount",
            "description": "<p>Units of the asset to send</p> "
          },
          {
            "group": "SendAssetToAdress",
            "type": "String",
            "optional": false,
            "field": "asset_id",
            "description": "<p>Id of the asset</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "AssetMetadata",
            "description": "<p>asset metadata.</p> "
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "apidoc/colordoc.js",
    "groupTitle": "Color"
  }
] });