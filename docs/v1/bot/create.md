---
sidebar_position: 3
---

# Create an NFT

To create an NFT in full mode, just ask the bot to create it, giving to the bot the detailed information about the bot that you want to create:

- Name of the NFT
- Filename of the image
- Description
- Public and private keys
- Files to attach to the NFT

![Create NFT](/screenshots/bot/create.png)

### Function specification

```
create_nft: {
    type: "function",
    function: {
      name: "create_nft",
      description:
        "Create new NFT. You should ask the user about all the parameters of the NFT and then call this function. Do not call this function without getting user's confirmation on all the parameters",
      parameters: {
        type: "object",
        properties: {
          nft_name: {
            type: "string",
            description:
              "The name of the NFT. Must be less than 30 characters, start with @ and contain only letters, numbers and _",
          },
          nft_image: {
            type: "string",
            description:
              "The filename of the image to be used as NFT avatar. Must be one of the files uploaded by the user and have image mime type",
          },
          nft_description: {
            type: "string",
            description: "The NFT description, can be long",
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
          files: {
            type: "array",
            description: "array of filenames",
            items: {
              filename: {
                type: "string",
                description:
                  "The filename of the file. Must be one of the files uploaded by the user. Can have any mime type",
              },
            },
          },
        },
        required: ["nft_name", "nft_image"],
      },
    },
  }
```
