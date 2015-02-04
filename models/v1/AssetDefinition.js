exports.models = {
    "AssetDefinition": {
        "id": "AssetDefinition",
        "required": ["issue_adress", "name", "sort_name", "amount","fee","selfhost", "metadata"],
        "properties": {
             "issue_adress": {
                "type": "string",
                "description": "Base58 public key adress of asset issuer"
            },
             "name": {
                "type": "string",
                "description": "Name of the asset"
            },
             "sort_name": {
                "type": "string",
                "description": "Sort name of the asset"
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
            "selfhost": {
                "type": "boolean",
                "description": "Flag to indicate if you are hosting the metadta file or server will (recommended that you host it)"
            },
            "metadata": {
                "type": "AssetMetadata",
                "description": "Asset metadata object"
            },
            "metadat_url": {
                "type": "string",
                "description": "Url where the asset metadata will be saved (needed only when selfhost is set to true)"
            },
            "sorten_url": {
                "type": "boolean",
                "description": "if metadat_url is set, shorten the url there"
            }

        }
    }
}