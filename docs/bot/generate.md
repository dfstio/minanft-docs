---
sidebar_position: 2
---

# Generate an image

To generate an image using a DALL-E model, ask the bot to generate it and provide a description of the image that you want to generate:

![Generate image](/screenshots/bot/generate.png)

### Function specification

```
generate_image: {
    type: "function",
    function: {
      name: "generate_image",
      description:
        "Generate am image using DALL-E based on description and save it to user's files",
      parameters: {
        type: "object",
        properties: {
          description: {
            type: "string",
            description:
              "The description of the image to be generated by DALL-E. Maximum 999 characters. Please ask the user to provide the description of the image to be generated by DALL-E.",
          },
        },
      },
    },
  }
```
