exports.models = {
    "AssetDefinition": {
        "id": "AssetDefinition",
        "required": ["issue_address", "name", "short_name", "amount","fee","issuer", "metadata", "reissueable"],
        "properties": {
             "issue_address": {
                "type": "string",
                "description": "Base58 public key address of asset issuer"
            },
             "name": {
                "type": "string",
                "description": "Name of the asset"
            },
             "short_name": {
                "type": "string",
                "description": "Short name of the asset"
            },
            "amount": {
                "type": "string",
                "description": "Amonut of asset to issue",
            },
            "fee": {
                "type": "integer",
                "format": "int32",
                "description": "Minnig fee for issueing the asset",
                "minimum": "1000",
                "maximum": "1000000000"
            },
            "issuer": {
                "type": "string",
                "description": "Name of the asset issuer"
            },
            "icon_url": {
                "type": "string",
                "description": "The URL to an icon representing the asset, image file should be 48x48 pixels"
            },
            "image_url": {
                "type": "string",
                "description": "he URL to an image representing the asset, image file should be 260 pixels wide at least"
            },
            "version": {
                "type": "string",
                "description": "Version as string (currently 1.0)"
            },
            "type": {
                "type": "string",
                "description": "String for the type of the token"
            },
            "description": {
                "type": "string",
                "description": "String that describes the asset"
            },
            "reissueable":{
                 "type": "boolean",
                "description": "can the asset be reissued, in simple cases there is no need for mint tokens, the same key can resissue the asset"
            },
            "reissue":{
                 "type": "Reissue",
                "description": "section used only if the transaction is a reissueance trasaction"
            },
            "bills": {
                 "type": "array",
                 "items": {
                    "$ref": "Bill"
                
                },
                "description": "list of bills that this asset can have, in case of a single use token there is no need for this field, if a bill is used but not issued it needs to appier on the list with amount 0"
            },
            "transferfees": {
                 "type": "TransferFees",
                "description": "settings for transfer fees of this asset"
            },
            "validity": {
                "type": "Validity",
                "description": "settings that need to be met in order for this asset to be considerd valid"
            },
            "constraints": {
                "type": "array",
                 "items": {
                   "$ref": "Constraint"
                },
                "description": "constraints that need to be met when trasffering the asset"
            },
            "mints": {
                "type": "Mints",
                "description": "special token that allow the holder to reissue more of the asset"
            },
            "test": {
                 "type": "array",
                 "items": {
                             "to": {
                                "type": "string",
                                "description": "Base58 public key adress that weill revice the fee"
                            },
                            "amount": {
                                "type": "string",
                                "description": "amount of asset you wish to recive as transfer fee"
                            },
                            "asset": {
                                "type": "string",
                                "description": "Asset identifyier for the fee you wish to recive (if empty is BTC)"
                            }
                        }               
            }
        }
    }
}