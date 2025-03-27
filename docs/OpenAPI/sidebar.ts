import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "OpenAPI/silvana-openapi",
    },
    {
      type: "category",
      label: "FungibleToken",
      items: [
        {
          type: "doc",
          id: "OpenAPI/launch-token",
          label: "Deploy a new fungible token contract.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "OpenAPI/mint-tokens",
          label: "Mint new tokens to a specified address.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "OpenAPI/transfer-tokens",
          label: "Transfer tokens from one address to another.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "OpenAPI/airdrop-tokens",
          label: "Distribute tokens to multiple addresses via airdrop.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "OpenAPI/redeem-tokens",
          label: "Redeem tokens for a MINA (applicable for Fungible Tokens with Bonding Curve Admin)",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "OpenAPI/burn-tokens",
          label: "Burn tokens from one address.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "OpenAPI/token-bid",
          label: "Place a bid on a token",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "OpenAPI/token-offer",
          label: "Create an offer to sell tokens at a specified price.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "OpenAPI/buy-tokens",
          label: "Purchase tokens from an existing offer.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "OpenAPI/sell-tokens",
          label: "Sell a token to the Bid contract.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "OpenAPI/withdraw-token-bid",
          label: "Withdraw a previously placed bid on an token.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "OpenAPI/withdraw-token-offer",
          label: "Withdraw a previously made offer to sell a token.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "OpenAPI/update-token-bid-whitelist",
          label: "Update the bid whitelist",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "OpenAPI/update-token-offer-whitelist",
          label: "Update the offer whitelist",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "OpenAPI/update-token-admin-whitelist",
          label: "Update the advanced admin whitelist",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Transaction",
      items: [
        {
          type: "doc",
          id: "OpenAPI/prove",
          label: "Generate proofs for signed token transactions.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "OpenAPI/get-proof",
          label: "Check the status of a proof generation job and retrieve proofs.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "OpenAPI/send-transaction",
          label: "Send a transaction to the Mina blockchain.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "OpenAPI/tx-status",
          label: "Retrieve the status of a transaction by its hash.",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Information",
      items: [
        {
          type: "doc",
          id: "OpenAPI/get-contract-info",
          label: "Retrieve contract info",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "OpenAPI/get-nft-info",
          label: "Retrieve NFT Info for Mina NFT V3",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "OpenAPI/get-nft-v-2-info",
          label: "Retrieve NFT Info for Mina NFT V2",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "OpenAPI/get-token-info",
          label: "Retrieve information about a fungible token.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "OpenAPI/get-token-balance",
          label: "Retrieve the balance of a specific token for an address.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "OpenAPI/get-nonce",
          label: "Retrieve the nonce for an address",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "OpenAPI/get-token-holders",
          label: "Retrieve the holders of a token",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "OpenAPI/get-transactions",
          label: "Retrieve the transactions of a address",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "NFT",
      items: [
        {
          type: "doc",
          id: "OpenAPI/launch-nft-collection",
          label: "Deploy a new NFT Collection contract.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "OpenAPI/mint-nft",
          label: "Mint new NFT to a specified address.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "OpenAPI/transfer-nft",
          label: "Transfer NFT to a specified address.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "OpenAPI/approve-nft",
          label: "Approve a specified address to transfer NFT.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "OpenAPI/sell-nft",
          label: "Sell NFT at a specified price by creating a Offer contract.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "OpenAPI/buy-nft",
          label: "Buy NFT.",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Faucet",
      items: [
        {
          type: "doc",
          id: "OpenAPI/faucet",
          label: "Request Funds from Faucet",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Schemas",
      items: [
        {
          type: "doc",
          id: "OpenAPI/schemas/tokeninforequestparams",
          label: "TokenInfoRequestParams",
          className: "schema",
        },
        {
          type: "doc",
          id: "OpenAPI/schemas/tokensymbolandadmin",
          label: "TokenSymbolAndAdmin",
          className: "schema",
        },
        {
          type: "doc",
          id: "OpenAPI/schemas/balancerequestparams",
          label: "BalanceRequestParams",
          className: "schema",
        },
        {
          type: "doc",
          id: "OpenAPI/schemas/transactionslistrequestparams",
          label: "TransactionsListRequestParams",
          className: "schema",
        },
        {
          type: "doc",
          id: "OpenAPI/schemas/balanceresponse",
          label: "BalanceResponse",
          className: "schema",
        },
        {
          type: "doc",
          id: "OpenAPI/schemas/noncerequestparams",
          label: "NonceRequestParams",
          className: "schema",
        },
        {
          type: "doc",
          id: "OpenAPI/schemas/nonceresponse",
          label: "NonceResponse",
          className: "schema",
        },
        {
          type: "doc",
          id: "OpenAPI/schemas/tokenholder",
          label: "TokenHolder",
          className: "schema",
        },
        {
          type: "doc",
          id: "OpenAPI/schemas/tokenholdersrequestparams",
          label: "TokenHoldersRequestParams",
          className: "schema",
        },
        {
          type: "doc",
          id: "OpenAPI/schemas/tokenholdersresponse",
          label: "TokenHoldersResponse",
          className: "schema",
        },
        {
          type: "doc",
          id: "OpenAPI/schemas/transactiondata",
          label: "TransactionData",
          className: "schema",
        },
        {
          type: "doc",
          id: "OpenAPI/schemas/transactionslistresponse",
          label: "TransactionsListResponse",
          className: "schema",
        },
        {
          type: "doc",
          id: "OpenAPI/schemas/errorresponse",
          label: "ErrorResponse",
          className: "schema",
        },
        {
          type: "doc",
          id: "OpenAPI/schemas/jobid",
          label: "JobId",
          className: "schema",
        },
        {
          type: "doc",
          id: "OpenAPI/schemas/jobresults",
          label: "JobResults",
          className: "schema",
        },
        {
          type: "doc",
          id: "OpenAPI/schemas/jobresult",
          label: "JobResult",
          className: "schema",
        },
        {
          type: "doc",
          id: "OpenAPI/schemas/sendtransactionparams",
          label: "SendTransactionParams",
          className: "schema",
        },
        {
          type: "doc",
          id: "OpenAPI/schemas/sendtransactionreply",
          label: "SendTransactionReply",
          className: "schema",
        },
        {
          type: "doc",
          id: "OpenAPI/schemas/transactionstatusparams",
          label: "TransactionStatusParams",
          className: "schema",
        },
        {
          type: "doc",
          id: "OpenAPI/schemas/transactionstatus",
          label: "TransactionStatus",
          className: "schema",
        },
        {
          type: "doc",
          id: "OpenAPI/schemas/txstatus",
          label: "TxStatus",
          className: "schema",
        },
        {
          type: "doc",
          id: "OpenAPI/schemas/faucetparams",
          label: "FaucetParams",
          className: "schema",
        },
        {
          type: "doc",
          id: "OpenAPI/schemas/faucetresponse",
          label: "FaucetResponse",
          className: "schema",
        },
        {
          type: "doc",
          id: "OpenAPI/schemas/nftrequestparams",
          label: "NFTRequestParams",
          className: "schema",
        },
        {
          type: "doc",
          id: "OpenAPI/schemas/nftv-2-requestanswer",
          label: "NftV2RequestAnswer",
          className: "schema",
        },
        {
          type: "doc",
          id: "OpenAPI/schemas/nftinfo",
          label: "NFTInfo",
          className: "schema",
        },
        {
          type: "doc",
          id: "OpenAPI/schemas/collectioninfo",
          label: "CollectionInfo",
          className: "schema",
        },
        {
          type: "doc",
          id: "OpenAPI/schemas/nftrequestanswer",
          label: "NFTRequestAnswer",
          className: "schema",
        },
        {
          type: "doc",
          id: "OpenAPI/schemas/tokentransactiontype",
          label: "TokenTransactionType",
          className: "schema",
        },
        {
          type: "doc",
          id: "OpenAPI/schemas/nfttransactiontype",
          label: "NftTransactionType",
          className: "schema",
        },
        {
          type: "doc",
          id: "OpenAPI/schemas/tokentransactionbaseparams",
          label: "TokenTransactionBaseParams",
          className: "schema",
        },
        {
          type: "doc",
          id: "OpenAPI/schemas/nfttransactionbaseparams",
          label: "NftTransactionBaseParams",
          className: "schema",
        },
        {
          type: "doc",
          id: "OpenAPI/schemas/deployedtokentransactionbaseparams",
          label: "DeployedTokenTransactionBaseParams",
          className: "schema",
        },
        {
          type: "doc",
          id: "OpenAPI/schemas/deployednftcollectiontransactionbaseparams",
          label: "DeployedNftCollectionTransactionBaseParams",
          className: "schema",
        },
        {
          type: "doc",
          id: "OpenAPI/schemas/deployednfttransactionbaseparams",
          label: "DeployedNftTransactionBaseParams",
          className: "schema",
        },
        {
          type: "doc",
          id: "OpenAPI/schemas/launchtokentransactionbaseparams",
          label: "LaunchTokenTransactionBaseParams",
          className: "schema",
        },
        {
          type: "doc",
          id: "OpenAPI/schemas/collectiondata",
          label: "CollectionData",
          className: "schema",
        },
        {
          type: "doc",
          id: "OpenAPI/schemas/nftmetadata",
          label: "NftMetadata",
          className: "schema",
        },
        {
          type: "doc",
          id: "OpenAPI/schemas/nftdata",
          label: "NftData",
          className: "schema",
        },
        {
          type: "doc",
          id: "OpenAPI/schemas/nfttransferparams",
          label: "NftTransferParams",
          className: "schema",
        },
        {
          type: "doc",
          id: "OpenAPI/schemas/nftapproveparams",
          label: "NftApproveParams",
          className: "schema",
        },
        {
          type: "doc",
          id: "OpenAPI/schemas/nftsellparams",
          label: "NftSellParams",
          className: "schema",
        },
        {
          type: "doc",
          id: "OpenAPI/schemas/nftbuyparams",
          label: "NftBuyParams",
          className: "schema",
        },
        {
          type: "doc",
          id: "OpenAPI/schemas/nftmintparams",
          label: "NftMintParams",
          className: "schema",
        },
        {
          type: "doc",
          id: "OpenAPI/schemas/launchnftcollectiontransactionbaseparams",
          label: "LaunchNftCollectionTransactionBaseParams",
          className: "schema",
        },
        {
          type: "doc",
          id: "OpenAPI/schemas/tokenminttransactionparams",
          label: "TokenMintTransactionParams",
          className: "schema",
        },
        {
          type: "doc",
          id: "OpenAPI/schemas/nftminttransactionparams",
          label: "NftMintTransactionParams",
          className: "schema",
        },
        {
          type: "doc",
          id: "OpenAPI/schemas/nfttransfertransactionparams",
          label: "NftTransferTransactionParams",
          className: "schema",
        },
        {
          type: "doc",
          id: "OpenAPI/schemas/nftapprovetransactionparams",
          label: "NftApproveTransactionParams",
          className: "schema",
        },
        {
          type: "doc",
          id: "OpenAPI/schemas/nftselltransactionparams",
          label: "NftSellTransactionParams",
          className: "schema",
        },
        {
          type: "doc",
          id: "OpenAPI/schemas/nftbuytransactionparams",
          label: "NftBuyTransactionParams",
          className: "schema",
        },
        {
          type: "doc",
          id: "OpenAPI/schemas/tokenburntransactionparams",
          label: "TokenBurnTransactionParams",
          className: "schema",
        },
        {
          type: "doc",
          id: "OpenAPI/schemas/tokenredeemtransactionparams",
          label: "TokenRedeemTransactionParams",
          className: "schema",
        },
        {
          type: "doc",
          id: "OpenAPI/schemas/tokentransfertransactionparams",
          label: "TokenTransferTransactionParams",
          className: "schema",
        },
        {
          type: "doc",
          id: "OpenAPI/schemas/tokenairdroptransactionparams",
          label: "TokenAirdropTransactionParams",
          className: "schema",
        },
        {
          type: "doc",
          id: "OpenAPI/schemas/tokenbidtransactionparams",
          label: "TokenBidTransactionParams",
          className: "schema",
        },
        {
          type: "doc",
          id: "OpenAPI/schemas/tokenoffertransactionparams",
          label: "TokenOfferTransactionParams",
          className: "schema",
        },
        {
          type: "doc",
          id: "OpenAPI/schemas/tokenbuytransactionparams",
          label: "TokenBuyTransactionParams",
          className: "schema",
        },
        {
          type: "doc",
          id: "OpenAPI/schemas/tokenselltransactionparams",
          label: "TokenSellTransactionParams",
          className: "schema",
        },
        {
          type: "doc",
          id: "OpenAPI/schemas/tokenwithdrawbidtransactionparams",
          label: "TokenWithdrawBidTransactionParams",
          className: "schema",
        },
        {
          type: "doc",
          id: "OpenAPI/schemas/tokenwithdrawoffertransactionparams",
          label: "TokenWithdrawOfferTransactionParams",
          className: "schema",
        },
        {
          type: "doc",
          id: "OpenAPI/schemas/tokenupdatebidwhitelisttransactionparams",
          label: "TokenUpdateBidWhitelistTransactionParams",
          className: "schema",
        },
        {
          type: "doc",
          id: "OpenAPI/schemas/tokenupdateofferwhitelisttransactionparams",
          label: "TokenUpdateOfferWhitelistTransactionParams",
          className: "schema",
        },
        {
          type: "doc",
          id: "OpenAPI/schemas/tokenupdateadminwhitelisttransactionparams",
          label: "TokenUpdateAdminWhitelistTransactionParams",
          className: "schema",
        },
        {
          type: "doc",
          id: "OpenAPI/schemas/launchtokenstandardadminparams",
          label: "LaunchTokenStandardAdminParams",
          className: "schema",
        },
        {
          type: "doc",
          id: "OpenAPI/schemas/launchnftcollectionstandardadminparams",
          label: "LaunchNftCollectionStandardAdminParams",
          className: "schema",
        },
        {
          type: "doc",
          id: "OpenAPI/schemas/launchtokenadvancedadminparams",
          label: "LaunchTokenAdvancedAdminParams",
          className: "schema",
        },
        {
          type: "doc",
          id: "OpenAPI/schemas/advancednftcollectionadmindata",
          label: "AdvancedNftCollectionAdminData",
          className: "schema",
        },
        {
          type: "doc",
          id: "OpenAPI/schemas/launchnftcollectionadvancedadminparams",
          label: "LaunchNftCollectionAdvancedAdminParams",
          className: "schema",
        },
        {
          type: "doc",
          id: "OpenAPI/schemas/launchtokenbondingcurveadminparams",
          label: "LaunchTokenBondingCurveAdminParams",
          className: "schema",
        },
        {
          type: "doc",
          id: "OpenAPI/schemas/tokeninfo",
          label: "TokenInfo",
          className: "schema",
        },
        {
          type: "doc",
          id: "OpenAPI/schemas/transactionpayloads",
          label: "TransactionPayloads",
          className: "schema",
        },
        {
          type: "doc",
          id: "OpenAPI/schemas/tokentransactionparams",
          label: "TokenTransactionParams",
          className: "schema",
        },
        {
          type: "doc",
          id: "OpenAPI/schemas/nfttransactionparams",
          label: "NftTransactionParams",
          className: "schema",
        },
        {
          type: "doc",
          id: "OpenAPI/schemas/tokentransaction",
          label: "TokenTransaction",
          className: "schema",
        },
        {
          type: "doc",
          id: "OpenAPI/schemas/nfttransaction",
          label: "NftTransaction",
          className: "schema",
        },
        {
          type: "doc",
          id: "OpenAPI/schemas/tokentransactions",
          label: "TokenTransactions",
          className: "schema",
        },
        {
          type: "doc",
          id: "OpenAPI/schemas/nfttransactions",
          label: "NftTransactions",
          className: "schema",
        },
        {
          type: "doc",
          id: "OpenAPI/schemas/provetokentransaction",
          label: "ProveTokenTransaction",
          className: "schema",
        },
        {
          type: "doc",
          id: "OpenAPI/schemas/provenfttransaction",
          label: "ProveNftTransaction",
          className: "schema",
        },
        {
          type: "doc",
          id: "OpenAPI/schemas/provetokentransactions",
          label: "ProveTokenTransactions",
          className: "schema",
        },
        {
          type: "doc",
          id: "OpenAPI/schemas/provenfttransactions",
          label: "ProveNftTransactions",
          className: "schema",
        },
        {
          type: "doc",
          id: "OpenAPI/schemas/tokenstate",
          label: "TokenState",
          className: "schema",
        },
        {
          type: "doc",
          id: "OpenAPI/schemas/proofresult",
          label: "ProofResult",
          className: "schema",
        },
        {
          type: "doc",
          id: "OpenAPI/schemas/airdroptransactionresponse",
          label: "AirdropTransactionResponse",
          className: "schema",
        },
        {
          type: "doc",
          id: "OpenAPI/schemas/whitelist",
          label: "Whitelist",
          className: "schema",
        },
        {
          type: "doc",
          id: "OpenAPI/schemas/contractinforequest",
          label: "ContractInfoRequest",
          className: "schema",
        },
        {
          type: "doc",
          id: "OpenAPI/schemas/contractpropertytype",
          label: "ContractPropertyType",
          className: "schema",
        },
        {
          type: "doc",
          id: "OpenAPI/schemas/contractproperty",
          label: "ContractProperty",
          className: "schema",
        },
        {
          type: "doc",
          id: "OpenAPI/schemas/contractinfo",
          label: "ContractInfo",
          className: "schema",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
