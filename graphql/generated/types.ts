export default {
    "scalars": [
        6,
        10,
        16,
        17,
        18,
        20,
        24,
        27,
        30,
        31,
        32,
        33,
        36,
        46,
        52,
        59,
        60,
        64,
        65,
        66,
        69,
        70,
        71,
        72,
        73,
        74,
        75,
        78,
        82,
        83
    ],
    "types": {
        "AdminUser": {
            "apps": [
                1
            ],
            "email": [
                18
            ],
            "id": [
                24
            ],
            "image": [
                71
            ],
            "name": [
                71
            ],
            "organizations": [
                56
            ],
            "__typename": [
                71
            ]
        },
        "App": {
            "contract": [
                12
            ],
            "id": [
                24
            ],
            "name": [
                71
            ],
            "__typename": [
                71
            ]
        },
        "AppCreateInput": {
            "blockchain": [
                6
            ],
            "name": [
                71
            ],
            "organizationId": [
                71
            ],
            "redirectUris": [
                71
            ],
            "__typename": [
                71
            ]
        },
        "AppUser": {
            "app": [
                1
            ],
            "createdAt": [
                17
            ],
            "email": [
                18
            ],
            "id": [
                24
            ],
            "image": [
                71
            ],
            "name": [
                71
            ],
            "primaryWallet": [
                80
            ],
            "updatedAt": [
                17
            ],
            "wallet": [
                80
            ],
            "wallets": [
                80
            ],
            "__typename": [
                71
            ]
        },
        "AppUserList": {
            "cursor": [
                71
            ],
            "items": [
                3
            ],
            "__typename": [
                71
            ]
        },
        "Attributable": {
            "attributes": [
                32
            ],
            "on_NFTListing": [
                42
            ],
            "on_NFTModel": [
                45
            ],
            "on_NFTSet": [
                51
            ],
            "on_Wallet": [
                80
            ],
            "__typename": [
                71
            ]
        },
        "Blockchain": {},
        "BlockchainEntity": {
            "blockchainId": [
                71
            ],
            "metadata": [
                32
            ],
            "on_NFT": [
                35
            ],
            "on_NFTModel": [
                45
            ],
            "on_NFTSet": [
                51
            ],
            "__typename": [
                71
            ]
        },
        "BlockchainResource": {
            "attributes": [
                32
            ],
            "blockchainId": [
                71
            ],
            "createdAt": [
                17
            ],
            "id": [
                24
            ],
            "metadata": [
                32
            ],
            "status": [
                70
            ],
            "updatedAt": [
                17
            ],
            "on_NFTModel": [
                45
            ],
            "on_NFTSet": [
                51
            ],
            "__typename": [
                71
            ]
        },
        "BlockchainTransaction": {
            "blockchain": [
                6
            ],
            "hash": [
                71
            ],
            "name": [
                71
            ],
            "__typename": [
                71
            ]
        },
        "Boolean": {},
        "CheckoutWithDapperWalletResponse": {
            "brand": [
                71
            ],
            "cadence": [
                71
            ],
            "expiry": [
                71
            ],
            "nftDatabaseId": [
                71
            ],
            "nftId": [
                71
            ],
            "nftTypeRef": [
                71
            ],
            "price": [
                71
            ],
            "registryAddress": [
                71
            ],
            "setId": [
                71
            ],
            "signerAddress": [
                71
            ],
            "signerKeyId": [
                27
            ],
            "templateId": [
                71
            ],
            "__typename": [
                71
            ]
        },
        "Contract": {
            "address": [
                71
            ],
            "blockchain": [
                6
            ],
            "id": [
                24
            ],
            "name": [
                71
            ],
            "__typename": [
                71
            ]
        },
        "CreateFileOptionsInput": {
            "contentType": [
                71
            ],
            "posterFileId": [
                24
            ],
            "uploadToIPFS": [
                10
            ],
            "__typename": [
                71
            ]
        },
        "CreateNFTListingInput": {
            "attributes": [
                32
            ],
            "description": [
                71
            ],
            "nftModelId": [
                24
            ],
            "price": [
                59
            ],
            "title": [
                71
            ],
            "__typename": [
                71
            ]
        },
        "CreateNiftoryWalletInput": {
            "attributes": [
                32
            ],
            "__typename": [
                71
            ]
        },
        "Currency": {},
        "DateTime": {},
        "EmailAddress": {},
        "File": {
            "contentType": [
                71
            ],
            "id": [
                24
            ],
            "md5": [
                71
            ],
            "name": [
                71
            ],
            "state": [
                20
            ],
            "url": [
                73
            ],
            "on_NFTFile": [
                39
            ],
            "on_SimpleFile": [
                68
            ],
            "__typename": [
                71
            ]
        },
        "FileState": {},
        "FixedPricing": {
            "currency": [
                16
            ],
            "price": [
                59
            ],
            "__typename": [
                71
            ]
        },
        "FixedPricingInput": {
            "currency": [
                16
            ],
            "price": [
                59
            ],
            "__typename": [
                71
            ]
        },
        "HasTimes": {
            "createdAt": [
                17
            ],
            "updatedAt": [
                17
            ],
            "on_AppUser": [
                3
            ],
            "on_Invoice": [
                28
            ],
            "on_NFTListing": [
                42
            ],
            "on_NFTModel": [
                45
            ],
            "on_NFTSet": [
                51
            ],
            "on_Wallet": [
                80
            ],
            "__typename": [
                71
            ]
        },
        "ID": {},
        "Identifiable": {
            "id": [
                24
            ],
            "on_AdminUser": [
                0
            ],
            "on_App": [
                1
            ],
            "on_AppUser": [
                3
            ],
            "on_Contract": [
                12
            ],
            "on_Invoice": [
                28
            ],
            "on_NFT": [
                35
            ],
            "on_NFTContent": [
                37
            ],
            "on_NFTListing": [
                42
            ],
            "on_NFTModel": [
                45
            ],
            "on_NFTSet": [
                51
            ],
            "on_Organization": [
                56
            ],
            "on_Wallet": [
                80
            ],
            "__typename": [
                71
            ]
        },
        "InitiateCheckoutResponse": {
            "redirectUrl": [
                73
            ],
            "status": [
                71
            ],
            "statusMessage": [
                71
            ],
            "__typename": [
                71
            ]
        },
        "Int": {},
        "Invoice": {
            "createdAt": [
                17
            ],
            "id": [
                24
            ],
            "listingId": [
                71
            ],
            "state": [
                30
            ],
            "total": [
                59
            ],
            "updatedAt": [
                17
            ],
            "userId": [
                71
            ],
            "__typename": [
                71
            ]
        },
        "InvoiceList": {
            "cursor": [
                71
            ],
            "items": [
                28
            ],
            "__typename": [
                71
            ]
        },
        "InvoiceState": {},
        "JSON": {},
        "JSONObject": {},
        "ListingState": {},
        "Mutation": {
            "checkout": [
                26,
                {
                    "invoiceId": [
                        71,
                        "String!"
                    ],
                    "onError": [
                        71,
                        "String!"
                    ],
                    "onSuccess": [
                        71,
                        "String!"
                    ]
                }
            ],
            "checkoutWithDapperWallet": [
                11,
                {
                    "address": [
                        71
                    ],
                    "expiry": [
                        75
                    ],
                    "nftModelId": [
                        24,
                        "ID!"
                    ],
                    "price": [
                        74
                    ],
                    "userId": [
                        24
                    ],
                    "walletId": [
                        24
                    ]
                }
            ],
            "completeCheckoutWithDapperWallet": [
                35,
                {
                    "nftDatabaseId": [
                        71
                    ],
                    "transactionId": [
                        71,
                        "String!"
                    ]
                }
            ],
            "createFileUploadUrl": [
                19,
                {
                    "appId": [
                        24
                    ],
                    "description": [
                        71
                    ],
                    "name": [
                        71,
                        "String!"
                    ],
                    "options": [
                        13
                    ]
                }
            ],
            "createNFTListing": [
                42,
                {
                    "data": [
                        14,
                        "CreateNFTListingInput!"
                    ]
                }
            ],
            "createNFTModel": [
                45,
                {
                    "appId": [
                        24
                    ],
                    "data": [
                        47,
                        "NFTModelCreateInput!"
                    ],
                    "setId": [
                        24,
                        "ID!"
                    ]
                }
            ],
            "createNFTSet": [
                51,
                {
                    "appId": [
                        24
                    ],
                    "data": [
                        53,
                        "NFTSetCreateInput!"
                    ]
                }
            ],
            "createNiftoryWallet": [
                80,
                {
                    "appId": [
                        24
                    ],
                    "data": [
                        15
                    ],
                    "userId": [
                        24
                    ]
                }
            ],
            "createOrganization": [
                56,
                {
                    "data": [
                        57,
                        "OrganizationCreateInput!"
                    ]
                }
            ],
            "deleteFile": [
                19,
                {
                    "id": [
                        24
                    ],
                    "url": [
                        71
                    ]
                }
            ],
            "deleteNFTListing": [
                42,
                {
                    "id": [
                        24,
                        "ID!"
                    ]
                }
            ],
            "deleteNFTModel": [
                45,
                {
                    "id": [
                        24,
                        "ID!"
                    ]
                }
            ],
            "deployContract": [
                12,
                {
                    "appId": [
                        71,
                        "String!"
                    ],
                    "blockchain": [
                        6,
                        "Blockchain!"
                    ],
                    "name": [
                        71,
                        "String!"
                    ]
                }
            ],
            "mintNFT": [
                35,
                {
                    "nftModelId": [
                        24,
                        "ID!"
                    ]
                }
            ],
            "mintNFTModel": [
                45,
                {
                    "appId": [
                        24
                    ],
                    "id": [
                        24,
                        "ID!"
                    ],
                    "quantity": [
                        60
                    ]
                }
            ],
            "readyWallet": [
                80,
                {
                    "address": [
                        71,
                        "String!"
                    ]
                }
            ],
            "registerWallet": [
                80,
                {
                    "address": [
                        71,
                        "String!"
                    ],
                    "data": [
                        62
                    ]
                }
            ],
            "reserve": [
                28,
                {
                    "listingId": [
                        24,
                        "ID!"
                    ]
                }
            ],
            "setPrimaryWallet": [
                80,
                {
                    "address": [
                        71
                    ],
                    "walletId": [
                        71
                    ]
                }
            ],
            "signTransactionForDapperWallet": [
                71,
                {
                    "transaction": [
                        71
                    ]
                }
            ],
            "transfer": [
                35,
                {
                    "address": [
                        71
                    ],
                    "appId": [
                        24
                    ],
                    "force": [
                        10
                    ],
                    "id": [
                        24
                    ],
                    "nftModelId": [
                        24
                    ],
                    "userId": [
                        24
                    ],
                    "walletId": [
                        24
                    ]
                }
            ],
            "unlinkWallet": [
                80,
                {
                    "address": [
                        71
                    ],
                    "walletId": [
                        71
                    ]
                }
            ],
            "updateNFTListing": [
                42,
                {
                    "data": [
                        76,
                        "UpdateNFTListingInput!"
                    ],
                    "id": [
                        24,
                        "ID!"
                    ]
                }
            ],
            "updateNFTModel": [
                45,
                {
                    "data": [
                        50,
                        "NFTModelUpdateInput!"
                    ],
                    "id": [
                        24,
                        "ID!"
                    ]
                }
            ],
            "updateNFTSet": [
                51,
                {
                    "data": [
                        55,
                        "NFTSetUpdateInput!"
                    ],
                    "id": [
                        24,
                        "ID!"
                    ]
                }
            ],
            "updateWallet": [
                80,
                {
                    "address": [
                        71,
                        "String!"
                    ],
                    "data": [
                        77
                    ]
                }
            ],
            "uploadNFTContent": [
                37,
                {
                    "contentType": [
                        71
                    ],
                    "description": [
                        71
                    ],
                    "name": [
                        71
                    ],
                    "posterContentType": [
                        71
                    ]
                }
            ],
            "verifyWallet": [
                80,
                {
                    "address": [
                        71,
                        "String!"
                    ],
                    "signedVerificationCode": [
                        31,
                        "JSON!"
                    ]
                }
            ],
            "withdraw": [
                35,
                {
                    "appId": [
                        24
                    ],
                    "id": [
                        24,
                        "ID!"
                    ],
                    "niftoryWalletAddress": [
                        71
                    ],
                    "receiverAddress": [
                        71,
                        "String!"
                    ]
                }
            ],
            "__typename": [
                71
            ]
        },
        "NFT": {
            "blockchainId": [
                71
            ],
            "blockchainState": [
                36
            ],
            "id": [
                24
            ],
            "metadata": [
                32
            ],
            "model": [
                45
            ],
            "modelId": [
                24
            ],
            "saleState": [
                66
            ],
            "serialNumber": [
                27
            ],
            "status": [
                72
            ],
            "transactions": [
                9
            ],
            "wallet": [
                80
            ],
            "__typename": [
                71
            ]
        },
        "NFTBlockchainState": {},
        "NFTContent": {
            "files": [
                39
            ],
            "id": [
                24
            ],
            "poster": [
                68
            ],
            "__typename": [
                71
            ]
        },
        "NFTContentInput": {
            "fileId": [
                24
            ],
            "posterId": [
                24
            ],
            "__typename": [
                71
            ]
        },
        "NFTFile": {
            "contentType": [
                71
            ],
            "id": [
                24
            ],
            "ipfsContentAddress": [
                71
            ],
            "ipfsMetadataAddress": [
                71
            ],
            "md5": [
                71
            ],
            "name": [
                71
            ],
            "state": [
                20
            ],
            "url": [
                73
            ],
            "__typename": [
                71
            ]
        },
        "NFTFilterInput": {
            "blockchainIds": [
                71
            ],
            "blockchainStates": [
                36
            ],
            "ids": [
                24
            ],
            "nftModelIds": [
                24
            ],
            "saleStates": [
                66
            ],
            "transferStates": [
                72
            ],
            "__typename": [
                71
            ]
        },
        "NFTList": {
            "cursor": [
                71
            ],
            "items": [
                35
            ],
            "__typename": [
                71
            ]
        },
        "NFTListing": {
            "appId": [
                24
            ],
            "attributes": [
                32
            ],
            "createdAt": [
                17
            ],
            "description": [
                71
            ],
            "id": [
                24
            ],
            "nftModel": [
                45
            ],
            "pricing": [
                21
            ],
            "state": [
                33
            ],
            "title": [
                71
            ],
            "updatedAt": [
                17
            ],
            "__typename": [
                71
            ]
        },
        "NFTListingFilterInput": {
            "ids": [
                24
            ],
            "state": [
                33
            ],
            "title": [
                71
            ],
            "__typename": [
                71
            ]
        },
        "NFTListingList": {
            "cursor": [
                71
            ],
            "items": [
                42
            ],
            "__typename": [
                71
            ]
        },
        "NFTModel": {
            "attributes": [
                32
            ],
            "blockchainId": [
                71
            ],
            "content": [
                37
            ],
            "createdAt": [
                17
            ],
            "description": [
                71
            ],
            "id": [
                24
            ],
            "metadata": [
                32
            ],
            "nftListings": [
                42
            ],
            "nfts": [
                35
            ],
            "quantity": [
                60
            ],
            "quantityMinted": [
                75
            ],
            "rarity": [
                69
            ],
            "set": [
                51
            ],
            "state": [
                46
            ],
            "status": [
                70
            ],
            "title": [
                71
            ],
            "updatedAt": [
                17
            ],
            "__typename": [
                71
            ]
        },
        "NFTModelBlockchainState": {},
        "NFTModelCreateInput": {
            "attributes": [
                32
            ],
            "content": [
                38
            ],
            "contentId": [
                24
            ],
            "description": [
                71
            ],
            "metadata": [
                32
            ],
            "quantity": [
                60
            ],
            "status": [
                70
            ],
            "subtitle": [
                71
            ],
            "tags": [
                71
            ],
            "title": [
                71
            ],
            "__typename": [
                71
            ]
        },
        "NFTModelFilterInput": {
            "blockchainIds": [
                71
            ],
            "ids": [
                24
            ],
            "setIds": [
                24
            ],
            "status": [
                70
            ],
            "tags": [
                71
            ],
            "__typename": [
                71
            ]
        },
        "NFTModelList": {
            "cursor": [
                71
            ],
            "items": [
                45
            ],
            "__typename": [
                71
            ]
        },
        "NFTModelUpdateInput": {
            "attributes": [
                32
            ],
            "content": [
                38
            ],
            "contentId": [
                24
            ],
            "description": [
                71
            ],
            "metadata": [
                32
            ],
            "quantity": [
                60
            ],
            "status": [
                70
            ],
            "subtitle": [
                71
            ],
            "tags": [
                71
            ],
            "title": [
                71
            ],
            "__typename": [
                71
            ]
        },
        "NFTSet": {
            "app": [
                1
            ],
            "attributes": [
                32
            ],
            "blockchainId": [
                71
            ],
            "createdAt": [
                17
            ],
            "id": [
                24
            ],
            "image": [
                73
            ],
            "metadata": [
                32
            ],
            "models": [
                45
            ],
            "state": [
                52
            ],
            "status": [
                70
            ],
            "tags": [
                71
            ],
            "title": [
                71
            ],
            "updatedAt": [
                17
            ],
            "__typename": [
                71
            ]
        },
        "NFTSetBlockchainState": {},
        "NFTSetCreateInput": {
            "attributes": [
                32
            ],
            "tags": [
                71
            ],
            "title": [
                71
            ],
            "__typename": [
                71
            ]
        },
        "NFTSetFilterInput": {
            "blockchainIds": [
                71
            ],
            "ids": [
                24
            ],
            "tags": [
                71
            ],
            "title": [
                71
            ],
            "__typename": [
                71
            ]
        },
        "NFTSetUpdateInput": {
            "attributes": [
                32
            ],
            "tags": [
                71
            ],
            "title": [
                71
            ],
            "__typename": [
                71
            ]
        },
        "Organization": {
            "apps": [
                1
            ],
            "id": [
                24
            ],
            "members": [
                0
            ],
            "name": [
                71
            ],
            "__typename": [
                71
            ]
        },
        "OrganizationCreateInput": {
            "name": [
                71
            ],
            "__typename": [
                71
            ]
        },
        "Pageable": {
            "cursor": [
                71
            ],
            "on_AppUserList": [
                4
            ],
            "on_InvoiceList": [
                29
            ],
            "on_NFTList": [
                41
            ],
            "on_NFTListingList": [
                44
            ],
            "on_NFTModelList": [
                49
            ],
            "on_WalletList": [
                81
            ],
            "__typename": [
                71
            ]
        },
        "PositiveFloat": {},
        "PositiveInt": {},
        "Query": {
            "adminUser": [
                0
            ],
            "app": [
                1
            ],
            "appById": [
                1,
                {
                    "id": [
                        24
                    ],
                    "name": [
                        71
                    ]
                }
            ],
            "appUser": [
                3
            ],
            "appUserById": [
                3,
                {
                    "id": [
                        24,
                        "ID!"
                    ]
                }
            ],
            "appUsers": [
                4,
                {
                    "cursor": [
                        71
                    ],
                    "maxResults": [
                        60
                    ]
                }
            ],
            "contract": [
                12
            ],
            "createApp": [
                1,
                {
                    "data": [
                        2,
                        "AppCreateInput!"
                    ]
                }
            ],
            "file": [
                68,
                {
                    "id": [
                        24,
                        "ID!"
                    ]
                }
            ],
            "invoice": [
                28,
                {
                    "id": [
                        24,
                        "ID!"
                    ]
                }
            ],
            "invoices": [
                29,
                {
                    "appId": [
                        24
                    ],
                    "cursor": [
                        71
                    ],
                    "maxResults": [
                        60
                    ]
                }
            ],
            "nft": [
                35,
                {
                    "id": [
                        24,
                        "ID!"
                    ]
                }
            ],
            "nftContent": [
                37,
                {
                    "id": [
                        24,
                        "ID!"
                    ]
                }
            ],
            "nftFile": [
                39,
                {
                    "id": [
                        71
                    ],
                    "ipfsUrl": [
                        71
                    ],
                    "url": [
                        71
                    ]
                }
            ],
            "nftListing": [
                42,
                {
                    "id": [
                        24,
                        "ID!"
                    ]
                }
            ],
            "nftListings": [
                44,
                {
                    "cursor": [
                        71
                    ],
                    "filter": [
                        43
                    ],
                    "maxResults": [
                        60
                    ]
                }
            ],
            "nftModel": [
                45,
                {
                    "id": [
                        24,
                        "ID!"
                    ]
                }
            ],
            "nftModels": [
                49,
                {
                    "appId": [
                        24
                    ],
                    "cursor": [
                        71
                    ],
                    "filter": [
                        48
                    ],
                    "maxResults": [
                        60
                    ]
                }
            ],
            "nfts": [
                41,
                {
                    "appId": [
                        24
                    ],
                    "cursor": [
                        71
                    ],
                    "filter": [
                        40
                    ],
                    "maxResults": [
                        60
                    ],
                    "userId": [
                        24
                    ]
                }
            ],
            "nftsByWallet": [
                41,
                {
                    "address": [
                        71
                    ],
                    "cursor": [
                        71
                    ],
                    "filter": [
                        40
                    ],
                    "maxResults": [
                        60
                    ],
                    "walletId": [
                        24
                    ]
                }
            ],
            "organization": [
                56,
                {
                    "id": [
                        24,
                        "ID!"
                    ]
                }
            ],
            "set": [
                51,
                {
                    "id": [
                        24,
                        "ID!"
                    ]
                }
            ],
            "sets": [
                51,
                {
                    "appId": [
                        24
                    ],
                    "filter": [
                        54
                    ]
                }
            ],
            "wallet": [
                80
            ],
            "walletByAddress": [
                80,
                {
                    "address": [
                        71,
                        "String!"
                    ],
                    "appId": [
                        24
                    ]
                }
            ],
            "walletById": [
                80,
                {
                    "id": [
                        24,
                        "ID!"
                    ]
                }
            ],
            "walletByUserId": [
                80,
                {
                    "userId": [
                        24,
                        "ID!"
                    ]
                }
            ],
            "wallets": [
                81,
                {
                    "appId": [
                        24,
                        "ID!"
                    ],
                    "cursor": [
                        71
                    ],
                    "maxResults": [
                        60
                    ]
                }
            ],
            "__typename": [
                71
            ]
        },
        "RegisterWalletInput": {
            "attributes": [
                32
            ],
            "__typename": [
                71
            ]
        },
        "Resource": {
            "attributes": [
                32
            ],
            "createdAt": [
                17
            ],
            "id": [
                24
            ],
            "status": [
                70
            ],
            "updatedAt": [
                17
            ],
            "on_NFTModel": [
                45
            ],
            "on_NFTSet": [
                51
            ],
            "__typename": [
                71
            ]
        },
        "Role": {},
        "SaleProcessingState": {},
        "SaleState": {},
        "SellableEntity": {
            "saleState": [
                66
            ],
            "on_NFT": [
                35
            ],
            "__typename": [
                71
            ]
        },
        "SimpleFile": {
            "contentType": [
                71
            ],
            "id": [
                24
            ],
            "md5": [
                71
            ],
            "name": [
                71
            ],
            "state": [
                20
            ],
            "url": [
                73
            ],
            "__typename": [
                71
            ]
        },
        "SimpleRarityLevel": {},
        "Status": {},
        "String": {},
        "TransferState": {},
        "URL": {},
        "UnsignedFloat": {},
        "UnsignedInt": {},
        "UpdateNFTListingInput": {
            "attributes": [
                32
            ],
            "description": [
                71
            ],
            "nftModelId": [
                24
            ],
            "price": [
                59
            ],
            "title": [
                71
            ],
            "__typename": [
                71
            ]
        },
        "UpdateWalletInput": {
            "attributes": [
                32
            ],
            "__typename": [
                71
            ]
        },
        "Upload": {},
        "UserData": {
            "email": [
                18
            ],
            "image": [
                71
            ],
            "name": [
                71
            ],
            "on_AdminUser": [
                0
            ],
            "on_AppUser": [
                3
            ],
            "__typename": [
                71
            ]
        },
        "Wallet": {
            "address": [
                71
            ],
            "appUser": [
                3
            ],
            "attributes": [
                32
            ],
            "createdAt": [
                17
            ],
            "id": [
                24
            ],
            "nfts": [
                35
            ],
            "state": [
                82
            ],
            "updatedAt": [
                17
            ],
            "verificationCode": [
                71
            ],
            "walletType": [
                83
            ],
            "__typename": [
                71
            ]
        },
        "WalletList": {
            "cursor": [
                71
            ],
            "items": [
                80
            ],
            "__typename": [
                71
            ]
        },
        "WalletState": {},
        "WalletType": {}
    }
}