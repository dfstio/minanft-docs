---
sidebar_position: 6
---

# API calls code examples

## Getting API key

Get your API key at https://minatokens.com/api

## Installing NFT API library

```
npm i @silvana-one/api

```

## Using NFT API library

Example: https://github.com/SilvanaOne/token-api-example/blob/main/tests/nft.test.ts

### Configure

```typescript
import Client from "mina-signer";
import * as api from "@silvana-one/api";

type Chain = "zeko" | "devnet" | "mainnet";
const chain: Chain = "devnet" as Chain;
const soulBound = false as boolean; // set to true to mint soulbound NFTs

api.config({
  apiKey: API_KEY,
  chain,
});
```

### Get NFT info

```typescript
const info = (
  await api.getNftInfo({
    body: {
      nftAddress: "B62qiwSqsfS8jGszg6HfGBzSe2CuQbnqGBVJcSvQncUJJrJSVwvMD8x",
      collectionAddress:
        "B62qrfuCkQpEJxgLnACWAp7q2hMVYgneQn8FHMt23JUX87rjXjVuyyK",
    },
  })
).data;
console.log("NFT info:", info);
```

### Launch Collection

```typescript
const tx = (
  await api.launchNftCollection({
    body: {
      collectionName,
      sender: creator.publicKey,
      adminContract: "standard",
      symbol: "NFT",
      masterNFT: {
        name: collectionName,
        data: {
          owner: creator.publicKey,
        },
        metadata: {
          name: collectionName,
          image: randomImage(),
          banner: randomBanner(),
          description: randomText(),
          traits: [
            {
              key: "Collection Public Trait 1",
              type: "string",
              value: "Collection Public Value 1",
            },
            {
              key: "Collection Private Trait 2",
              type: "string",
              value: "Collection Private Value 2",
              isPrivate: true,
            },
          ],
        },
      },
    },
  })
).data;
if (!tx) throw new Error("Token not deployed");

const { minaSignerPayload } = tx;
if (!tx.request || !("adminContractAddress" in tx.request))
  throw new Error("NFT collection is not deployed");
const adminContractAddress = tx?.request?.adminContractAddress;
collectionAddress = tx?.request?.collectionAddress;
if (!collectionAddress) throw new Error("NFT collection is not deployed");
console.log("NFT collection address:", collectionAddress);
console.log("Admin contract address:", adminContractAddress);
console.log("Storage address:", tx?.storage);
console.log("Metadata root:", tx?.metadataRoot);
if (tx?.privateMetadata && collectionAddress) {
  await fs.writeFile(
    `./data/collection-${collectionAddress}-metadata.json`,
    tx.privateMetadata
  );
}

if (collectionAddress) {
  await fs.writeFile(
    `./data/collection-${collectionAddress}-keys.json`,
    JSON.stringify(
      {
        collectionName,
        collectionAddress,
        masterNFT: tx?.nftName,
        adminContractAddress,
        collectionContractPrivateKey: tx?.request?.collectionContractPrivateKey,
        adminContractPrivateKey: tx?.request?.adminContractPrivateKey,
        storage: tx?.storage,
        metadataRoot: tx?.metadataRoot,
      },
      null,
      2
    )
  );
}

const proveTx = (
  await api.prove({
    body: {
      tx,
      signedData: JSON.stringify(
        client.signTransaction(minaSignerPayload as any, creator.privateKey)
          .data
      ),
    },
  })
).data;

if (!proveTx?.jobId) throw new Error("No jobId");

const proofs = await api.waitForProofs(proveTx?.jobId);
expect(proofs).toBeDefined();
if (!proofs) throw new Error("No proofs");
expect(proofs.length).toBe(1);
const hash = proofs[0];
expect(hash).toBeDefined();
if (!hash) throw new Error("No hash");
await api.waitForTransaction(hash);
await new Promise((resolve) => setTimeout(resolve, 30000));
const info = (
  await api.getNftInfo({
    body: {
      collectionAddress,
    },
  })
).data;
console.log("Collection info:", info);
```

### Mint NFT

```typescript
const tx = (
  await api.mintNft({
    body: {
      txType: "nft:mint",
      sender: creator.publicKey,
      collectionAddress,
      nftMintParams: {
        name: nftName,
        data: {
          owner: creator.publicKey,
          canApprove: !soulBound,
          canTransfer: !soulBound,
          canChangeMetadata: false,
          canChangeMetadataVerificationKeyHash: false,
          canChangeName: false,
          canChangeOwnerByProof: false,
          canChangeStorage: false,
          canPause: true,
        },
        metadata: {
          name: nftName,
          image: randomImage(),
          description: randomText(),
          traits: [
            {
              key: "NFT Trait 1",
              type: "string",
              value: "NFT Value 1",
            },
            {
              key: "NFT Trait 2",
              type: "string",
              value: "NFT private value 2",
              isPrivate: true,
            },
          ],
        },
      },
    },
  })
).data;
if (!tx) throw new Error("No tx");
const nftMintParams = (tx?.request as api.NftMintTransactionParams)
  .nftMintParams;
nftAddress = nftMintParams?.address;
if (!nftAddress) throw new Error("NFT not minted");
console.log("NFT address:", nftAddress);
console.log("Storage address:", tx?.storage);
console.log("Metadata root:", tx?.metadataRoot);
if (tx?.privateMetadata && collectionAddress && nftAddress) {
  await fs.writeFile(
    `./data/nft-${collectionAddress}-${nftAddress}.json`,
    tx.privateMetadata
  );
}
if (collectionAddress) {
  await fs.writeFile(
    `./data/nft-${collectionAddress}-${nftAddress}-keys.json`,
    JSON.stringify(
      {
        nftName,
        collectionName: tx?.collectionName,
        collectionAddress,
        nftAddress,
        nftContractPrivateKey: nftMintParams?.addressPrivateKey,
        storage: tx?.storage,
        metadataRoot: tx?.metadataRoot,
      },
      null,
      2
    )
  );
}
const proveTx = (
  await api.prove({
    body: {
      tx,
      signedData: JSON.stringify(
        client.signTransaction(tx.minaSignerPayload as any, creator.privateKey)
          .data
      ),
    },
  })
).data;

if (!proveTx?.jobId) throw new Error("No jobId");

const proofs = await api.waitForProofs(proveTx.jobId);
expect(proofs).toBeDefined();
if (!proofs) throw new Error("No proofs");
expect(proofs.length).toBe(1);
const hash = proofs[0];
expect(hash).toBeDefined();
if (!hash) return;
await api.waitForTransaction(hash);
await new Promise((resolve) => setTimeout(resolve, 30000));
const status = await api.txStatus({
  body: { hash },
});
console.log("Tx status:", hash, status?.data);
```

### Sell NFT

```typescript

```

### Buy NFT

```typescript

```

### Transfer NFT

```typescript
const tx = (
  await api.transferNft({
    body: {
      txType: "nft:transfer",
      sender: creator.publicKey,
      collectionAddress,
      nftAddress,
      nftTransferParams: {
        from: creator.publicKey,
        to: nftHolders[0].publicKey,
      },
    },
  })
).data;
if (!tx) throw new Error("No tx");

const proveTx = (
  await api.prove({
    body: {
      tx,
      signedData: JSON.stringify(
        client.signTransaction(tx.minaSignerPayload as any, creator.privateKey)
          .data
      ),
    },
  })
).data;

if (!proveTx?.jobId) throw new Error("No jobId");

const proofs = await api.waitForProofs(proveTx.jobId);
expect(proofs).toBeDefined();
if (!proofs) throw new Error("No proofs");
expect(proofs.length).toBe(1);
const hash = proofs[0];
expect(hash).toBeDefined();
if (!hash) return;
await api.waitForTransaction(hash);
await new Promise((resolve) => setTimeout(resolve, 30000));
const status = await api.txStatus({
  body: { hash },
});
console.log("Tx status:", hash, status?.data);
```

### Approve
