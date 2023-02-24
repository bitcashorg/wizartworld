export default {
    "scalars": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        17,
        19,
        20,
        49,
        69,
        70,
        71,
        72,
        73,
        74,
        75,
        76,
        77,
        78
    ],
    "types": {
        "Blockchain": {},
        "Currency": {},
        "FileState": {},
        "InvoiceState": {},
        "ListingState": {},
        "NFTBlockchainState": {},
        "NFTModelBlockchainState": {},
        "NFTSetBlockchainState": {},
        "Role": {},
        "SaleProcessingState": {},
        "SaleState": {},
        "SimpleRarityLevel": {},
        "Status": {},
        "TransferState": {},
        "WalletState": {},
        "WalletType": {},
        "AppCreateInput": {
            "name": [
                17
            ],
            "blockchain": [
                0
            ],
            "organizationId": [
                17
            ],
            "redirectUris": [
                17
            ],
            "adminUserEmail": [
                70
            ],
            "__typename": [
                17
            ]
        },
        "String": {},
        "CreateFileOptionsInput": {
            "uploadToIPFS": [
                19
            ],
            "contentType": [
                17
            ],
            "posterFileId": [
                20
            ],
            "__typename": [
                17
            ]
        },
        "Boolean": {},
        "ID": {},
        "CreateNFTListingInput": {
            "title": [
                17
            ],
            "description": [
                17
            ],
            "price": [
                73
            ],
            "attributes": [
                72
            ],
            "nftModelId": [
                20
            ],
            "__typename": [
                17
            ]
        },
        "CreateNiftoryWalletInput": {
            "attributes": [
                72
            ],
            "__typename": [
                17
            ]
        },
        "FixedPricingInput": {
            "currency": [
                1
            ],
            "price": [
                73
            ],
            "__typename": [
                17
            ]
        },
        "NFTContentInput": {
            "fileId": [
                20
            ],
            "posterId": [
                20
            ],
            "__typename": [
                17
            ]
        },
        "NFTFilterInput": {
            "nftModelIds": [
                20
            ],
            "ids": [
                20
            ],
            "blockchainIds": [
                17
            ],
            "saleStates": [
                10
            ],
            "blockchainStates": [
                5
            ],
            "transferStates": [
                13
            ],
            "__typename": [
                17
            ]
        },
        "NFTListingFilterInput": {
            "state": [
                4
            ],
            "title": [
                17
            ],
            "ids": [
                20
            ],
            "__typename": [
                17
            ]
        },
        "NFTModelCreateInput": {
            "title": [
                17
            ],
            "description": [
                17
            ],
            "subtitle": [
                17
            ],
            "quantity": [
                74
            ],
            "contentId": [
                20
            ],
            "content": [
                24
            ],
            "status": [
                12
            ],
            "metadata": [
                72
            ],
            "attributes": [
                72
            ],
            "tags": [
                17
            ],
            "__typename": [
                17
            ]
        },
        "NFTModelFilterInput": {
            "status": [
                12
            ],
            "setIds": [
                20
            ],
            "ids": [
                20
            ],
            "blockchainIds": [
                17
            ],
            "tags": [
                17
            ],
            "__typename": [
                17
            ]
        },
        "NFTModelUpdateInput": {
            "title": [
                17
            ],
            "description": [
                17
            ],
            "subtitle": [
                17
            ],
            "quantity": [
                74
            ],
            "contentId": [
                20
            ],
            "content": [
                24
            ],
            "status": [
                12
            ],
            "metadata": [
                72
            ],
            "attributes": [
                72
            ],
            "tags": [
                17
            ],
            "__typename": [
                17
            ]
        },
        "NFTSetCreateInput": {
            "title": [
                17
            ],
            "attributes": [
                72
            ],
            "tags": [
                17
            ],
            "__typename": [
                17
            ]
        },
        "NFTSetFilterInput": {
            "ids": [
                20
            ],
            "blockchainIds": [
                17
            ],
            "title": [
                17
            ],
            "tags": [
                17
            ],
            "__typename": [
                17
            ]
        },
        "NFTSetUpdateInput": {
            "title": [
                17
            ],
            "attributes": [
                72
            ],
            "tags": [
                17
            ],
            "__typename": [
                17
            ]
        },
        "OrganizationCreateInput": {
            "name": [
                17
            ],
            "adminUserEmail": [
                70
            ],
            "__typename": [
                17
            ]
        },
        "RegisterWalletInput": {
            "attributes": [
                72
            ],
            "__typename": [
                17
            ]
        },
        "UpdateNFTListingInput": {
            "title": [
                17
            ],
            "description": [
                17
            ],
            "price": [
                73
            ],
            "nftModelId": [
                20
            ],
            "attributes": [
                72
            ],
            "__typename": [
                17
            ]
        },
        "UpdateWalletInput": {
            "attributes": [
                72
            ],
            "__typename": [
                17
            ]
        },
        "BlockchainEntity": {
            "blockchainId": [
                17
            ],
            "metadata": [
                72
            ],
            "on_NFT": [
                56
            ],
            "on_NFTModel": [
                62
            ],
            "on_NFTSet": [
                64
            ],
            "__typename": [
                17
            ]
        },
        "BlockchainResource": {
            "id": [
                20
            ],
            "attributes": [
                72
            ],
            "createdAt": [
                69
            ],
            "updatedAt": [
                69
            ],
            "status": [
                12
            ],
            "blockchainId": [
                17
            ],
            "metadata": [
                72
            ],
            "on_NFTModel": [
                62
            ],
            "on_NFTSet": [
                64
            ],
            "__typename": [
                17
            ]
        },
        "File": {
            "id": [
                20
            ],
            "url": [
                75
            ],
            "state": [
                2
            ],
            "name": [
                17
            ],
            "contentType": [
                17
            ],
            "md5": [
                17
            ],
            "on_NFTFile": [
                58
            ],
            "on_SimpleFile": [
                66
            ],
            "__typename": [
                17
            ]
        },
        "Resource": {
            "id": [
                20
            ],
            "attributes": [
                72
            ],
            "createdAt": [
                69
            ],
            "updatedAt": [
                69
            ],
            "status": [
                12
            ],
            "on_NFTModel": [
                62
            ],
            "on_NFTSet": [
                64
            ],
            "__typename": [
                17
            ]
        },
        "SellableEntity": {
            "saleState": [
                10
            ],
            "on_NFT": [
                56
            ],
            "__typename": [
                17
            ]
        },
        "UserData": {
            "email": [
                70
            ],
            "image": [
                17
            ],
            "name": [
                17
            ],
            "on_AdminUser": [
                43
            ],
            "on_AppUser": [
                45
            ],
            "__typename": [
                17
            ]
        },
        "AdminUser": {
            "email": [
                70
            ],
            "image": [
                17
            ],
            "name": [
                17
            ],
            "id": [
                20
            ],
            "apps": [
                44
            ],
            "organizations": [
                65
            ],
            "__typename": [
                17
            ]
        },
        "App": {
            "id": [
                20
            ],
            "name": [
                17
            ],
            "contract": [
                50
            ],
            "__typename": [
                17
            ]
        },
        "AppUser": {
            "email": [
                70
            ],
            "image": [
                17
            ],
            "name": [
                17
            ],
            "id": [
                20
            ],
            "createdAt": [
                69
            ],
            "updatedAt": [
                69
            ],
            "wallet": [
                67
            ],
            "primaryWallet": [
                67
            ],
            "wallets": [
                67
            ],
            "app": [
                44
            ],
            "__typename": [
                17
            ]
        },
        "AppUserList": {
            "cursor": [
                17
            ],
            "items": [
                45
            ],
            "__typename": [
                17
            ]
        },
        "BlockchainTransaction": {
            "blockchain": [
                0
            ],
            "hash": [
                17
            ],
            "name": [
                17
            ],
            "__typename": [
                17
            ]
        },
        "CheckoutWithDapperWalletResponse": {
            "cadence": [
                17
            ],
            "registryAddress": [
                17
            ],
            "brand": [
                17
            ],
            "nftId": [
                17
            ],
            "nftTypeRef": [
                17
            ],
            "nftDatabaseId": [
                17
            ],
            "setId": [
                17
            ],
            "templateId": [
                17
            ],
            "price": [
                17
            ],
            "expiry": [
                17
            ],
            "signerKeyId": [
                49
            ],
            "signerAddress": [
                17
            ],
            "__typename": [
                17
            ]
        },
        "Int": {},
        "Contract": {
            "id": [
                20
            ],
            "address": [
                17
            ],
            "blockchain": [
                0
            ],
            "name": [
                17
            ],
            "__typename": [
                17
            ]
        },
        "DapperTransactions": {
            "purchase": [
                17
            ],
            "metadata": [
                17
            ],
            "setup": [
                17
            ],
            "__typename": [
                17
            ]
        },
        "FixedPricing": {
            "currency": [
                1
            ],
            "price": [
                73
            ],
            "__typename": [
                17
            ]
        },
        "InitiateCheckoutResponse": {
            "redirectUrl": [
                75
            ],
            "status": [
                17
            ],
            "statusMessage": [
                17
            ],
            "__typename": [
                17
            ]
        },
        "Invoice": {
            "id": [
                20
            ],
            "createdAt": [
                69
            ],
            "updatedAt": [
                69
            ],
            "state": [
                3
            ],
            "total": [
                73
            ],
            "listingId": [
                17
            ],
            "userId": [
                17
            ],
            "__typename": [
                17
            ]
        },
        "InvoiceList": {
            "cursor": [
                17
            ],
            "items": [
                54
            ],
            "__typename": [
                17
            ]
        },
        "NFT": {
            "blockchainId": [
                17
            ],
            "metadata": [
                72
            ],
            "saleState": [
                10
            ],
            "id": [
                20
            ],
            "serialNumber": [
                49
            ],
            "blockchainState": [
                5
            ],
            "modelId": [
                20
            ],
            "model": [
                62
            ],
            "wallet": [
                67
            ],
            "status": [
                13
            ],
            "transactions": [
                47
            ],
            "__typename": [
                17
            ]
        },
        "NFTContent": {
            "id": [
                20
            ],
            "files": [
                58
            ],
            "poster": [
                66
            ],
            "__typename": [
                17
            ]
        },
        "NFTFile": {
            "id": [
                20
            ],
            "url": [
                75
            ],
            "state": [
                2
            ],
            "name": [
                17
            ],
            "contentType": [
                17
            ],
            "md5": [
                17
            ],
            "ipfsContentAddress": [
                17
            ],
            "ipfsMetadataAddress": [
                17
            ],
            "__typename": [
                17
            ]
        },
        "NFTList": {
            "cursor": [
                17
            ],
            "items": [
                56
            ],
            "__typename": [
                17
            ]
        },
        "NFTListing": {
            "attributes": [
                72
            ],
            "id": [
                20
            ],
            "createdAt": [
                69
            ],
            "updatedAt": [
                69
            ],
            "title": [
                17
            ],
            "description": [
                17
            ],
            "pricing": [
                52
            ],
            "appId": [
                20
            ],
            "nftModel": [
                62
            ],
            "state": [
                4
            ],
            "__typename": [
                17
            ]
        },
        "NFTListingList": {
            "cursor": [
                17
            ],
            "items": [
                60
            ],
            "__typename": [
                17
            ]
        },
        "NFTModel": {
            "id": [
                20
            ],
            "attributes": [
                72
            ],
            "createdAt": [
                69
            ],
            "updatedAt": [
                69
            ],
            "status": [
                12
            ],
            "blockchainId": [
                17
            ],
            "metadata": [
                72
            ],
            "title": [
                17
            ],
            "description": [
                17
            ],
            "rarity": [
                11
            ],
            "quantity": [
                74
            ],
            "quantityMinted": [
                77
            ],
            "content": [
                57
            ],
            "state": [
                6
            ],
            "set": [
                64
            ],
            "nfts": [
                56
            ],
            "nftListings": [
                60
            ],
            "__typename": [
                17
            ]
        },
        "NFTModelList": {
            "cursor": [
                17
            ],
            "items": [
                62
            ],
            "__typename": [
                17
            ]
        },
        "NFTSet": {
            "id": [
                20
            ],
            "attributes": [
                72
            ],
            "createdAt": [
                69
            ],
            "updatedAt": [
                69
            ],
            "status": [
                12
            ],
            "blockchainId": [
                17
            ],
            "metadata": [
                72
            ],
            "title": [
                17
            ],
            "image": [
                75
            ],
            "state": [
                7
            ],
            "tags": [
                17
            ],
            "models": [
                62
            ],
            "app": [
                44
            ],
            "__typename": [
                17
            ]
        },
        "Organization": {
            "id": [
                20
            ],
            "name": [
                17
            ],
            "apps": [
                44
            ],
            "members": [
                43
            ],
            "__typename": [
                17
            ]
        },
        "SimpleFile": {
            "id": [
                20
            ],
            "url": [
                75
            ],
            "state": [
                2
            ],
            "name": [
                17
            ],
            "contentType": [
                17
            ],
            "md5": [
                17
            ],
            "__typename": [
                17
            ]
        },
        "Wallet": {
            "attributes": [
                72
            ],
            "id": [
                20
            ],
            "createdAt": [
                69
            ],
            "updatedAt": [
                69
            ],
            "address": [
                17
            ],
            "state": [
                14
            ],
            "verificationCode": [
                17
            ],
            "nfts": [
                56
            ],
            "appUser": [
                45
            ],
            "walletType": [
                15
            ],
            "__typename": [
                17
            ]
        },
        "WalletList": {
            "cursor": [
                17
            ],
            "items": [
                67
            ],
            "__typename": [
                17
            ]
        },
        "DateTime": {},
        "EmailAddress": {},
        "JSON": {},
        "JSONObject": {},
        "PositiveFloat": {},
        "PositiveInt": {},
        "URL": {},
        "UnsignedFloat": {},
        "UnsignedInt": {},
        "Upload": {},
        "Identifiable": {
            "id": [
                20
            ],
            "on_AdminUser": [
                43
            ],
            "on_App": [
                44
            ],
            "on_AppUser": [
                45
            ],
            "on_Contract": [
                50
            ],
            "on_Invoice": [
                54
            ],
            "on_NFT": [
                56
            ],
            "on_NFTContent": [
                57
            ],
            "on_NFTListing": [
                60
            ],
            "on_NFTModel": [
                62
            ],
            "on_NFTSet": [
                64
            ],
            "on_Organization": [
                65
            ],
            "on_Wallet": [
                67
            ],
            "__typename": [
                17
            ]
        },
        "Attributable": {
            "attributes": [
                72
            ],
            "on_NFTListing": [
                60
            ],
            "on_NFTModel": [
                62
            ],
            "on_NFTSet": [
                64
            ],
            "on_Wallet": [
                67
            ],
            "__typename": [
                17
            ]
        },
        "HasTimes": {
            "createdAt": [
                69
            ],
            "updatedAt": [
                69
            ],
            "on_AppUser": [
                45
            ],
            "on_Invoice": [
                54
            ],
            "on_NFTListing": [
                60
            ],
            "on_NFTModel": [
                62
            ],
            "on_NFTSet": [
                64
            ],
            "on_Wallet": [
                67
            ],
            "__typename": [
                17
            ]
        },
        "Pageable": {
            "cursor": [
                17
            ],
            "on_AppUserList": [
                46
            ],
            "on_InvoiceList": [
                55
            ],
            "on_NFTList": [
                59
            ],
            "on_NFTListingList": [
                61
            ],
            "on_NFTModelList": [
                63
            ],
            "on_WalletList": [
                68
            ],
            "__typename": [
                17
            ]
        },
        "Query": {
            "adminUser": [
                43
            ],
            "appUser": [
                45
            ],
            "appUserById": [
                45,
                {
                    "id": [
                        20,
                        "ID!"
                    ]
                }
            ],
            "appUsers": [
                46,
                {
                    "cursor": [
                        17
                    ],
                    "maxResults": [
                        74
                    ]
                }
            ],
            "app": [
                44
            ],
            "appById": [
                44,
                {
                    "id": [
                        20
                    ],
                    "name": [
                        17
                    ]
                }
            ],
            "contract": [
                50
            ],
            "file": [
                66,
                {
                    "id": [
                        20,
                        "ID!"
                    ]
                }
            ],
            "nftContent": [
                57,
                {
                    "id": [
                        20,
                        "ID!"
                    ]
                }
            ],
            "nftFile": [
                58,
                {
                    "id": [
                        17
                    ],
                    "url": [
                        17
                    ],
                    "ipfsUrl": [
                        17
                    ]
                }
            ],
            "invoice": [
                54,
                {
                    "id": [
                        20,
                        "ID!"
                    ]
                }
            ],
            "organization": [
                65,
                {
                    "id": [
                        20,
                        "ID!"
                    ]
                }
            ],
            "invoices": [
                55,
                {
                    "appId": [
                        20
                    ],
                    "cursor": [
                        17
                    ],
                    "maxResults": [
                        74
                    ]
                }
            ],
            "dapperTransactions": [
                51,
                {
                    "appId": [
                        17
                    ]
                }
            ],
            "nftListing": [
                60,
                {
                    "id": [
                        20,
                        "ID!"
                    ]
                }
            ],
            "nftListings": [
                61,
                {
                    "filter": [
                        26
                    ],
                    "cursor": [
                        17
                    ],
                    "maxResults": [
                        74
                    ]
                }
            ],
            "nftModel": [
                62,
                {
                    "id": [
                        20,
                        "ID!"
                    ]
                }
            ],
            "nftModels": [
                63,
                {
                    "appId": [
                        20
                    ],
                    "filter": [
                        28
                    ],
                    "cursor": [
                        17
                    ],
                    "maxResults": [
                        74
                    ]
                }
            ],
            "set": [
                64,
                {
                    "id": [
                        20,
                        "ID!"
                    ]
                }
            ],
            "sets": [
                64,
                {
                    "filter": [
                        31
                    ],
                    "appId": [
                        20
                    ]
                }
            ],
            "nft": [
                56,
                {
                    "id": [
                        20,
                        "ID!"
                    ]
                }
            ],
            "nfts": [
                59,
                {
                    "userId": [
                        20
                    ],
                    "appId": [
                        20
                    ],
                    "filter": [
                        25
                    ],
                    "cursor": [
                        17
                    ],
                    "maxResults": [
                        74
                    ]
                }
            ],
            "nftsByWallet": [
                59,
                {
                    "walletId": [
                        20
                    ],
                    "address": [
                        17
                    ],
                    "filter": [
                        25
                    ],
                    "cursor": [
                        17
                    ],
                    "maxResults": [
                        74
                    ]
                }
            ],
            "wallet": [
                67
            ],
            "walletById": [
                67,
                {
                    "id": [
                        20,
                        "ID!"
                    ]
                }
            ],
            "walletByAddress": [
                67,
                {
                    "appId": [
                        20
                    ],
                    "address": [
                        17,
                        "String!"
                    ]
                }
            ],
            "walletByUserId": [
                67,
                {
                    "userId": [
                        20,
                        "ID!"
                    ]
                }
            ],
            "wallets": [
                68,
                {
                    "appId": [
                        20,
                        "ID!"
                    ],
                    "cursor": [
                        17
                    ],
                    "maxResults": [
                        74
                    ]
                }
            ],
            "__typename": [
                17
            ]
        },
        "Mutation": {
            "createApp": [
                44,
                {
                    "data": [
                        16,
                        "AppCreateInput!"
                    ]
                }
            ],
            "deployContract": [
                50,
                {
                    "appId": [
                        17,
                        "String!"
                    ],
                    "name": [
                        17,
                        "String!"
                    ],
                    "blockchain": [
                        0,
                        "Blockchain!"
                    ]
                }
            ],
            "createFileUploadUrl": [
                39,
                {
                    "name": [
                        17,
                        "String!"
                    ],
                    "description": [
                        17
                    ],
                    "appId": [
                        20
                    ],
                    "options": [
                        18
                    ]
                }
            ],
            "deleteFile": [
                39,
                {
                    "id": [
                        20
                    ],
                    "url": [
                        17
                    ]
                }
            ],
            "uploadNFTContent": [
                57,
                {
                    "name": [
                        17
                    ],
                    "description": [
                        17
                    ],
                    "contentType": [
                        17
                    ],
                    "posterContentType": [
                        17
                    ]
                }
            ],
            "completeCheckoutWithDapperWallet": [
                56,
                {
                    "transactionId": [
                        17,
                        "String!"
                    ],
                    "nftDatabaseId": [
                        17
                    ]
                }
            ],
            "createNFTListing": [
                60,
                {
                    "data": [
                        21,
                        "CreateNFTListingInput!"
                    ]
                }
            ],
            "checkout": [
                53,
                {
                    "invoiceId": [
                        17,
                        "String!"
                    ],
                    "onSuccess": [
                        17,
                        "String!"
                    ],
                    "onError": [
                        17,
                        "String!"
                    ]
                }
            ],
            "checkoutWithDapperWallet": [
                48,
                {
                    "nftModelId": [
                        20,
                        "ID!"
                    ],
                    "userId": [
                        20
                    ],
                    "walletId": [
                        20
                    ],
                    "address": [
                        17
                    ],
                    "price": [
                        76
                    ],
                    "expiry": [
                        77
                    ]
                }
            ],
            "reserve": [
                54,
                {
                    "listingId": [
                        20,
                        "ID!"
                    ]
                }
            ],
            "signTransactionForDapperWallet": [
                17,
                {
                    "transaction": [
                        17
                    ]
                }
            ],
            "updateNFTListing": [
                60,
                {
                    "id": [
                        20,
                        "ID!"
                    ],
                    "data": [
                        35,
                        "UpdateNFTListingInput!"
                    ]
                }
            ],
            "deleteNFTListing": [
                60,
                {
                    "id": [
                        20,
                        "ID!"
                    ]
                }
            ],
            "mintNFTModel": [
                62,
                {
                    "id": [
                        20,
                        "ID!"
                    ],
                    "quantity": [
                        74
                    ],
                    "appId": [
                        20
                    ]
                }
            ],
            "createNFTModel": [
                62,
                {
                    "setId": [
                        20,
                        "ID!"
                    ],
                    "data": [
                        27,
                        "NFTModelCreateInput!"
                    ],
                    "appId": [
                        20
                    ]
                }
            ],
            "deleteNFTModel": [
                62,
                {
                    "id": [
                        20,
                        "ID!"
                    ]
                }
            ],
            "updateNFTModel": [
                62,
                {
                    "id": [
                        20,
                        "ID!"
                    ],
                    "data": [
                        29,
                        "NFTModelUpdateInput!"
                    ]
                }
            ],
            "createNFTSet": [
                64,
                {
                    "data": [
                        30,
                        "NFTSetCreateInput!"
                    ],
                    "appId": [
                        20
                    ]
                }
            ],
            "updateNFTSet": [
                64,
                {
                    "id": [
                        20,
                        "ID!"
                    ],
                    "data": [
                        32,
                        "NFTSetUpdateInput!"
                    ]
                }
            ],
            "mintNFT": [
                56,
                {
                    "nftModelId": [
                        20,
                        "ID!"
                    ]
                }
            ],
            "transfer": [
                56,
                {
                    "id": [
                        20
                    ],
                    "nftModelId": [
                        20
                    ],
                    "userId": [
                        20
                    ],
                    "walletId": [
                        20
                    ],
                    "address": [
                        17
                    ],
                    "appId": [
                        20
                    ],
                    "force": [
                        19
                    ]
                }
            ],
            "withdraw": [
                56,
                {
                    "id": [
                        20,
                        "ID!"
                    ],
                    "receiverAddress": [
                        17,
                        "String!"
                    ],
                    "niftoryWalletAddress": [
                        17
                    ],
                    "appId": [
                        20
                    ]
                }
            ],
            "createOrganization": [
                65,
                {
                    "data": [
                        33,
                        "OrganizationCreateInput!"
                    ]
                }
            ],
            "createNiftoryWallet": [
                67,
                {
                    "userId": [
                        20
                    ],
                    "data": [
                        22
                    ],
                    "appId": [
                        20
                    ]
                }
            ],
            "readyWallet": [
                67,
                {
                    "address": [
                        17,
                        "String!"
                    ]
                }
            ],
            "registerWallet": [
                67,
                {
                    "address": [
                        17,
                        "String!"
                    ],
                    "data": [
                        34
                    ]
                }
            ],
            "setPrimaryWallet": [
                67,
                {
                    "walletId": [
                        17
                    ],
                    "address": [
                        17
                    ]
                }
            ],
            "unlinkWallet": [
                67,
                {
                    "walletId": [
                        17
                    ],
                    "address": [
                        17
                    ]
                }
            ],
            "updateWallet": [
                67,
                {
                    "address": [
                        17,
                        "String!"
                    ],
                    "data": [
                        36
                    ]
                }
            ],
            "verifyWallet": [
                67,
                {
                    "address": [
                        17,
                        "String!"
                    ],
                    "signedVerificationCode": [
                        71,
                        "JSON!"
                    ]
                }
            ],
            "__typename": [
                17
            ]
        }
    }
}