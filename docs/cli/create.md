---
sidebar_position: 3
---

# Create NFT Commands

```
  key [options] <key> <value>  Add key-value pair to NFT
  image [options] <file>       Add image to NFT
  file [options] <key> <file>  Add file to NFT
  text [options] <key> <text>  Add text to NFT
  description <text>           Add description to NFT
  help [command]               display help for command
  mint                         Mint NFT
  exit                         Exit without minting

```

## Example

### Creating NFT

```
minanft-cli % minanft help create
Mina NFT CLI tool (c) DFST 2024 www.minanft.io

Usage: minanft create [options] <name> [owner]

Create NFT

Arguments:
  name                Reserved name of the NFT
  owner               Owner account, should have private key

Options:
  --arweave           Use Arweave for storage
  --creator <string>  Creator name
  -h, --help          display help for command

minanft-cli % minanft create @clitool
Mina NFT CLI tool (c) DFST 2024 www.minanft.io

Creating NFT @clitool...
File ./data/@clitool.name.json does not exist or has wrong format
Error loading name reservation data, reserving name @clitool...
Name reservation result: {
  success: true,
  error: undefined,
  price: {
    username: 'clitool',
    price: 19,
    currency: 'usd',
    description: 'Avatar NFT name'
  },
  isReserved: true,
  signature: '7mXAcK8ELag3KaBqMC42FzwHzEam8LvAHSkSs7pG3iXbGBXRGTJQBGtA4f3WtUhjUK5AgYDC9UyuzQnXX1cKquYxHoDi9CML',
  reason: ''
}
Name @clitool has been reserved
After adding metadata and files, execute mint command.
To exit without minting, execute exit command.

  Commands:
  key [options] <key> <value>  Add key-value pair to NFT
  image [options] <file>       Add image to NFT
  file [options] <key> <file>  Add file to NFT
  text [options] <key> <text>  Add text to NFT
  description <text>           Add description to NFT
  help [command]               display help for command
  mint                         Mint NFT
  exit                         Exit without minting

command > key tool cli
Creating key tool...
command > key secret bhjdsbfhjsa --private
Creating key secret...
command > image ./example/cli.png
Adding image ./example/cli.png...
Pinning image...
pinFile result: {
  IpfsHash: 'QmWWxEWDDNH2giNL31biZCeGFD8fyKRxf827JivQKVvKz9',
  PinSize: 2197497,
  Timestamp: '2024-01-17T08:15:29.877Z'
}
Calculating image Merkle tree root...
Image Merkle tree root calculated: 4:09.418 (m:ss.mmm)
Calculated SHA-3 512: 7.269ms
command > mint
Minting...
RSS memory before minting: 476 MB
MinaNFTMetadataUpdate compiled: 10.925s
MinaNFT compiled: 6.442s
MinaNFTNameServiceContract compiled: 10.757s
Pinning to IPFS...
pinJSON result: {
  IpfsHash: 'QmetNkDmwM79us3LwCuLXgBz33h6kYEBfG4Nxwn1tWSfU8',
  PinSize: 1164,
  Timestamp: '2024-01-17T08:20:29.130Z'
}
MinaNFT mint transaction sent: 5Ju8v35vqmFr8F5ua7vXHX31J9G3Qoq79rAqY39pWMN552g5eBSL
RSS memory minted: 2880 MB, changed by 2404 MB
```

### Indexing NFT

After the transaction is included in the block, this NFT can be indexed to be visible on the frontend:

```
minanft-cli % minanft index @clitool
Mina NFT CLI tool (c) DFST 2024 www.minanft.io

Indexing NFT name @clitool...
NFT indexation result:
 { success: true, isIndexed: true, error: '', reason: '' }

```

## @clitool JSON files

### NFT account

```
{
  "filename": "@clitool",
  "type": "account",
  "timestamp": 1705479252332,
  "data": {
    "publicKey": "B62qoyWDWWCxNMFkqoh67hHAMVAu1R9whVUmUc8bi37bAVijdNPYos9",
    "privateKey": "EKFXz7xzWkzqoo6sMRJXvrTh9oei6uNgee9XDVub7ndd8w8kn5kA"
  }
}
```

### Owner account

```
{
  "filename": "@clitool.owner",
  "type": "account",
  "timestamp": 1705479257574,
  "data": {
    "publicKey": "B62qr2MAcc96d7ioC5gpg5ygsUVDGqxozNALUKL5VTnEnF68wwUx8SW",
    "privateKey": "EKEazyy1iADrjY1eBAVL6D4yvgBuaEscBpyjurPkmUpLYDrxfZFm"
  }
}
```

### Name reservation

```
{
  "filename": "@clitool",
  "type": "name",
  "timestamp": 1705479257570,
  "data": {
    "name": "@clitool",
    "account": "@clitool",
    "address": "B62qoyWDWWCxNMFkqoh67hHAMVAu1R9whVUmUc8bi37bAVijdNPYos9",
    "signature": "7mXAcK8ELag3KaBqMC42FzwHzEam8LvAHSkSs7pG3iXbGBXRGTJQBGtA4f3WtUhjUK5AgYDC9UyuzQnXX1cKquYxHoDi9CML"
  }
}
```

### Metadata

```
{
  "filename": "@clitool",
  "type": "nft",
  "timestamp": 1705479645998,
  "data": {
    "name": "@clitool",
    "description": "",
    "image": "https://gateway.pinata.cloud/ipfs/QmWWxEWDDNH2giNL31biZCeGFD8fyKRxf827JivQKVvKz9",
    "external_url": "https://minanft.io/@clitool",
    "version": "1",
    "time": 1705479645997,
    "creator": "MinaNFT CLI tool",
    "address": "B62qoyWDWWCxNMFkqoh67hHAMVAu1R9whVUmUc8bi37bAVijdNPYos9",
    "owner": "17748746950531765101907662342668098795711251650651006136324456382913393022661",
    "escrow": "0",
    "metadata": {
      "data": "15445108691966970210963456101241894056670593604383649439865682155150914790068",
      "kind": "15853170648088012636981427180854098449511304511908142021423262519089929568785"
    },
    "properties": {
      "tool": {
        "data": "cli",
        "kind": "string"
      },
      "secret": {
        "data": "bhjdsbfhjsa",
        "kind": "string",
        "isPrivate": true
      },
      "image": {
        "data": "8409448015850823023386079272827373524976829463036543458561207176065788078068",
        "kind": "image",
        "linkedObject": {
          "fileMerkleTreeRoot": "15309895152650606807240139431425095077268175268448355531590642420440466870783",
          "MerkleTreeHeight": 18,
          "size": 2196930,
          "mimeType": "image/png",
          "SHA3_512": "TQQiGv25XMpmndNdbglnS7q6Gw6HJ04I8u7bftK1uSJiCbm9ydA7FlazWPFShVkBic0C3lfJgJ/R3Bf9xfeAVw==",
          "filename": "cli.png",
          "storage": "i:QmWWxEWDDNH2giNL31biZCeGFD8fyKRxf827JivQKVvKz9",
          "fileType": "binary",
          "metadata": "0"
        }
      }
    }
  }
}
```
