---
sidebar_position: 4
---

# Keys

## Getting NFT's keys

To get the list of the public and private keys of the NFT, ask the bot:

![Generate image](/screenshots/bot/keys.png)

### Function specification

```
  listKeys: {
    type: "function",
    function: {
      name: "listKeys",
      description: "List key value pairs for user's NFT",
      parameters: {
        type: "object",
        properties: {
          nft_name: {
            type: "string",
            description: "The name of the NFT",
            enum: nft_names,
          },
        },
        required: ["nft_name"],
      },
    },
  }
```

## Setting NFT's keys

To set the public and private keys of the NFT, ask the bot:

![Set keys](/screenshots/bot/setkeys.png)

### Function specification

```
add_keys: {
    type: "function",
    function: {
      name: "add_keys",
      description:
        "Add to the NFT owned by the user a public or private key-values pairs",
      parameters: {
        type: "object",
        properties: {
          nft_name: {
            type: "string",
            description: "The name of the nft",
            enum: nft_names,
          },
          keys: {
            type: "array",
            description: "array of key-value pairs",
            items: {
              type: "object",
              properties: {
                key: {
                  type: "string",
                  description:
                    "The key of the key-value pair, maximum 30 characters",
                },
                value: {
                  type: "string",
                  description:
                    "The value of the key-value pair, maximum 30 characters",
                },
                isPrivate: {
                  type: "boolean",
                  description:
                    "If this key is private, only the owner can see it",
                },
              },
            },
          },
        },
        required: ["nft_name", "keys"],
      },
    },
  }
```
