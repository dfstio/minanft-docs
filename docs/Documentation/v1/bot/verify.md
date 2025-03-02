---
sidebar_position: 6
---

# Verify Keys

To verify the public and private keys of the NFT using the proof, ask the bot:

![Prove](/screenshots/bot/verify.png)

## Function specification

```
   verify: {
    type: "function",
    function: {
      name: "verify",
      description:
        "Verifies the ZK proof for public or private key-values pairs",
      parameters: {
        type: "object",
        properties: {
          proofFilename: {
            type: "string",
            description:
              "Filename of the ZK proof json file. Should be one of the files of the user, ends with .proof.json and have application/json mime type",
          },
        },
      },
    },
  }
```
