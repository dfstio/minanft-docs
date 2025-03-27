---
sidebar_position: 2
---

# Running Tests for NFT Standard and Usage Examples

## Installation

```
git clone https://github.com/SilvanaOne/silvana-lib
cd silvana-lib
npm i
npm run build
```

## Setup environment

run

```sh
cp packages/nft/.env.example packages/nft/.env
```

Set the environment variables in the packages/nft/.env file for Pinata IPFS and Mina private keys, getting the values from the pinata.cloud

```
PINATA_IPFS_GATEWAY=https://xxxxxx.mypinata.cloud/ipfs/
PINATA_GATEWAY_TOKEN=ggY9...
PINATA_JWT=eyJh...

# Test accounts
# Account 1
TEST_ACCOUNT_1_PRIVATE_KEY=EK...
TEST_ACCOUNT_1_PUBLIC_KEY=B62...

# Account 2
TEST_ACCOUNT_2_PRIVATE_KEY=EK...
TEST_ACCOUNT_2_PUBLIC_KEY=B62...
```

## Running tests

Run the tests from root folder of the repo:

### Local network

Run one test:

```sh
npm run nft:local:contract
```

It will take 10-20 min depending on your CPU

Run all tests:

```sh
npm run nft:local
```

The test will take approximately 2 hours to complete on Mac M2 Max. If you run out of memory during first three compilations of all contracts, just restart the test. As soon as prover keys are stored in the cache, memory requirements of o1js will be decreased and the test will go thru.

### Lightnet network

```sh
zk lightnet start
npm run nft:lightnet
```

The test will take approximately 7 hours to complete on Mac M2 Max

### Devnet network

```sh
npm run nft:devnet
```

The test will take approximately one day to complete on Mac M2 Max. In case of the devnet node instability, some tests can fail and can be rerun by running from packages/nft folder
`npm run devnet:auction:rerun`, setting the `RERUN` environment variable to the number of the test to rerun (1-16)
`npm run devnet:contract:matrix`
`npm run devnet:zkprogram:matrix`

### Test coverage

Test coverage results:

https://docs.minanft.io/coverage/

To rerun:

```sh
npm run nft:coverage
```

It takes few hours to rerun
