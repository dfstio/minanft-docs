---
sidebar_position: 7
---

# Example

## Clone the repo

You need to install node and git and clone the example repo

```
git clone https://github.com/dfstio/minanft-lib-example
cd minanft-lib-example
yarn
```

## Run the code

```
yarn example
```

### The command will run the following code

```typescript
import {
  MinaNFT,
  MapData,
  MinaNFTNameService,
  MINANFT_NAME_SERVICE,
  accountBalanceMina,
} from "minanft";
import { PrivateKey, PublicKey, Poseidon } from "o1js";
import { PINATA_JWT, DEPLOYER, NAMES_ORACLE_SK } from "./env.json";

async function main() {
  MinaNFT.minaInit("testworld2");
  const deployer = PrivateKey.fromBase58(DEPLOYER);
  const oraclePrivateKey = PrivateKey.fromBase58(NAMES_ORACLE_SK);
  const nameServiceAddress = PublicKey.fromBase58(MINANFT_NAME_SERVICE);
  const ownerPrivateKey = PrivateKey.random();
  const ownerPublicKey = ownerPrivateKey.toPublicKey();
  const owner = Poseidon.hash(ownerPublicKey.toFields());
  const pinataJWT = PINATA_JWT;

  console.log(
    `Deployer balance: ${await accountBalanceMina(deployer.toPublicKey())}`
  );

  const nft = new MinaNFT({ name: "@sunnyday" });

  nft.updateText({
    key: `description`,
    text: "This is my long description of the NFT @sunnyday. Can be of any length, supports **markdown**.",
  });
  nft.update({ key: `twitter`, value: `@sunnyday` });
  nft.update({ key: `secret`, value: `mysecretvalue`, isPrivate: true });

  await nft.updateImage({
    filename: "./images/sunnyday.png",
    pinataJWT,
  });

  const map = new MapData();
  map.update({ key: `level2-1`, value: `value21` });
  map.update({ key: `level2-2`, value: `value22` });
  map.updateText({
    key: `level2-3`,
    text: `This is text on level 2. Can be very long`,
  });

  await map.updateFile({
    key: "woman",
    filename: "./images/woman.png",
    pinataJWT,
  });

  const mapLevel3 = new MapData();
  mapLevel3.update({ key: `level3-1`, value: `value31` });
  mapLevel3.update({ key: `level3-2`, value: `value32`, isPrivate: true });
  mapLevel3.update({ key: `level3-3`, value: `value33` });
  map.updateMap({ key: `level2-4`, map: mapLevel3 });
  nft.updateMap({ key: `level 2 and 3 data`, map });

  console.log(`json:`, JSON.stringify(nft.toJSON(), null, 2));
  console.log("Compiling...");
  await MinaNFT.compile();

  const nameService = new MinaNFTNameService({
    oraclePrivateKey,
    address: nameServiceAddress,
  });

  const tx = await nft.mint({
    deployer,
    owner,
    pinataJWT,
    nameService,
  });
  if (tx === undefined) {
    throw new Error("Mint failed");
  }
  console.log("Waiting for transaction to be included in a block...");
  console.time("Transaction included in a block");
  await MinaNFT.wait(tx);
  console.timeEnd("Transaction included in a block");
}

main().catch((error) => {
  console.error(error);
});
```

### The log

```
yarn run v1.22.19
$ ts-node example.ts
Deployer balance: 207.65
Pinning image to IPFS...
pinFile result: {
  IpfsHash: 'QmQRAK6oDejNqCGEQEPwtSQRHw3eL8bkUf93odRnuFAmji',
  PinSize: 2092933,
  Timestamp: '2023-11-22T16:57:04.690Z'
}
Calculating image Merkle tree root...
Image Merkle tree root calculated: 4:03.807 (m:ss.mmm)
Calculated SHA-3 512: 13.39ms
Pinning file to IPFS...
pinFile result: {
  IpfsHash: 'Qme3jDkLmEKHDkkMpp1H15zzWhQMmqBizVBcRj2UmWe5Lj',
  PinSize: 265638,
  Timestamp: '2023-11-10T13:10:48.471Z',
  isDuplicate: true
}
Calculating file Merkle tree root...
File Merkle tree root calculated: 25.548s
Calculated SHA-3 512: 2.598ms
json: {
  "name": "@sunnyday",
  "description": "This is my long description of the NFT @sunnyday. Can be of any length, supports **markdown**.",
  "image": "https://ipfs.io/ipfs/QmQRAK6oDejNqCGEQEPwtSQRHw3eL8bkUf93odRnuFAmji",
  "external_url": "https://minanft.io/@sunnyday",
  "version": "1",
  "time": 1700672498243,
  "creator": "MinaNFT library",
  "properties": {
    "description": {
      "data": "4359148999788115957121990244371864028574152617768258057324179111099275666697",
      "kind": "text",
      "linkedObject": {
        "type": "text",
        "MerkleTreeHeight": 8,
        "size": 94,
        "text": "This is my long description of the NFT @sunnyday. Can be of any length, supports **markdown**."
      }
    },
    "twitter": {
      "data": "@sunnyday",
      "kind": "string"
    },
    "secret": {
      "data": "mysecretvalue",
      "kind": "string",
      "isPrivate": true
    },
    "image": {
      "data": "744742074545472599884809883673302584306873974532224044179248737055122594019",
      "kind": "image",
      "linkedObject": {
        "type": "file",
        "fileMerkleTreeRoot": "14266728062141337782249168943771328782029971768091245136926749831180834044568",
        "MerkleTreeHeight": 18,
        "size": 2092429,
        "mimeType": "image/png",
        "SHA3_512": "1Q/NRemwLpwlofSARRFNz186jqXqFSL0I2P2vZIgJvN+wKkOyp2nTFUdAAMbROqMt6ogGXM5TvU2lV6dHa+giQ==",
        "filename": "sunnyday.png",
        "storage": "i:QmQRAK6oDejNqCGEQEPwtSQRHw3eL8bkUf93odRnuFAmji"
      }
    },
    "level 2 and 3 data": {
      "data": "17454595903045636927347010836081236993389843594527776621819823169384033052897",
      "kind": "map",
      "linkedObject": {
        "type": "map",
        "properties": {
          "level2-1": {
            "data": "value21",
            "kind": "string"
          },
          "level2-2": {
            "data": "value22",
            "kind": "string"
          },
          "level2-3": {
            "data": "17918742563826681862408641965129071963958922660597457205933767099995396120858",
            "kind": "text",
            "linkedObject": {
              "type": "text",
              "MerkleTreeHeight": 7,
              "size": 41,
              "text": "This is text on level 2. Can be very long"
            }
          },
          "woman": {
            "data": "19568479839056312372186989986426075833813097455848029420463865331716879702558",
            "kind": "file",
            "linkedObject": {
              "type": "file",
              "fileMerkleTreeRoot": "4911692193899654945543701504504186590310741443090166466526044610874096406940",
              "MerkleTreeHeight": 15,
              "size": 265511,
              "mimeType": "image/png",
              "SHA3_512": "LvUjVX9PlqxWsfHgIf3lvpVFy7o5hAcHVAFueQt+RP4hyr6h2f6XyeinP5jwgKhcogOhEyxHchdBdnvbdeDL9A==",
              "filename": "woman.png",
              "storage": "i:Qme3jDkLmEKHDkkMpp1H15zzWhQMmqBizVBcRj2UmWe5Lj"
            }
          },
          "level2-4": {
            "data": "8285588111605202531040894738541072590635328681101967631265604553962773840451",
            "kind": "map",
            "linkedObject": {
              "type": "map",
              "properties": {
                "level3-1": {
                  "data": "value31",
                  "kind": "string"
                },
                "level3-2": {
                  "data": "value32",
                  "kind": "string",
                  "isPrivate": true
                },
                "level3-3": {
                  "data": "value33",
                  "kind": "string"
                }
              }
            }
          }
        }
      }
    }
  }
}
Compiling...
MinaNFTMetadataUpdate compiled: 11.427s
MinaNFT compiled: 6.684s
MinaNFTNameServiceContract compiled: 10.986s
Pinning to IPFS...
pinJSON result: {
  IpfsHash: 'QmfGWsENxvgiaxMZd8NUou3RQjxAYmYwcJ6q3AFR7Hjfp7',
  PinSize: 2387,
  Timestamp: '2023-11-22T17:02:09.572Z'
}
MinaNFT mint transaction sent: 5JuCSCUXDryD8mg2eRZ8DTWB8JR5qQ4mBTXagqQS5zzUbFbFP87S
Waiting for transaction to be included in a block...
Transaction wait time: 2:02.775 (m:ss.mmm)
Transaction included in a block: 2:02.775 (m:ss.mmm)
✨  Done in 448.84s.
```

### The result

Transaction on the blockchain explorer:
https://minascan.io/testworld/tx/5JuCSCUXDryD8mg2eRZ8DTWB8JR5qQ4mBTXagqQS5zzUbFbFP87S?type=zk-tx
