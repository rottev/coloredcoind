exports.models = {

    "Reissue": {
        "id": "Reissue",
        "required": ["assetid", "blockhash", "txhash"],
        "properties": {
             "assetid": {
                "type": "string",
                "description": "assetid is the hash of the original issueance"
            },
            "blockhash": {
                "type": "string",
                "description": "block where the original issueance transaction is"
            },
            "txhash": {
                "type": "integer",
                "format": "int32",
                "description": "transaction hash of orignial issueance"
            }
        }
    }


}