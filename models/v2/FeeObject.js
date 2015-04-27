exports.models = {
    "FeeObject": {
        "id": "FeeObject",
        "required": ["to", "amount", "asset"],
        "properties": {
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