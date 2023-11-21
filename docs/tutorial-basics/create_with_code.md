---
sidebar_position: 1
---

# Creating an NFT with TypeScript

This tutorial will guide you through creating a Non-Fungible Token (NFT) using the MinaNFT library. Follow these simple steps to mint your NFT.

## Prerequisites

- Ensure you have the MinaNFT library installed.
- You should have an image file ready to use as your NFT's visual representation.
- Make sure you have your Pinata JWT for IPFS pinning.

## Step-by-Step Guide

### 1. Initialize Your NFT

First, create a new instance of `MinaNFT` with a unique name for your NFT.

```typescript
const nft = new MinaNFT({ name: `@test` });
```

### 2. Set the NFT Description

Next, add a description to your NFT. You can use a long text and even Markdown for formatting.

```typescript
nft.updateText({
  key: `description`,
  text: "This is my long description of the NFT. Can be of any length, supports markdown.",
});
```

### 3. Add an Image to Your NFT

Now, update your NFT with an image. Provide the path to your image file and your Pinata JWT for IPFS pinning.

```typescript
await nft.updateImage({
  filename: "./images/navigator.png",
  pinataJWT,
});
```

![Docusaurus logo](/img/navigator.png)

### 4. Mint Your NFT

Finally, mint your NFT by providing necessary parameters like the name service, deployer, and owner information.

```typescript
const tx = await nft.mint({
  nameService,
  deployer,
  owner,
  pinataJWT,
});
```

Congratulations! You have successfully created your NFT using MinaNFT.

## Next Steps

- Explore different features and options provided by the MinaNFT library.
- Experiment with different images and descriptions.
- Learn more about how to trade or transfer your NFT.

Happy NFT creating!
