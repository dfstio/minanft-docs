---
sidebar_position: 7
---

# Files

## Uploading file

To upload the file, send it to the bot:

![Upload](/screenshots/bot/upload.png)

## Listing files

To get the list of the files, ask the bot:

![List files](/screenshots/bot/files.png)

### Function specification

```
list_files: {
    type: "function",
    function: {
      name: "list_files",
      description: "List files (including images) uploaded by user",
    },
  }
```
