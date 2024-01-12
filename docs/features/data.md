---
sidebar_position: 2
---

# Data structures

## Data that can be put into NFT

- **Keys and Values:** strings up to 30 characters and Fields, written as Fields
- **Texts:** texts of any length, written as Field arrays
- **Files:** text, image, word, any other formats, including audio, video, PDF, binary. Written as two Merkle Trees: one with metadata and the other with file data: 30 bytes per Field for binary files, one character per Field for text files, and one pixel per Field for image files
- **Maps:** any collection of the types above grouped together.
- All the data can be marked as public or private

## Proving and verifying the data

- Proving and verifying key-value pairs
- Proving and verifying the texts, including redacted
- Proving and verifying the text and binary files as a whole file using SHA3-512
- Proving and verifying the redacted text and word files (some characters can be redacted by using masks)
- Proving and verifying the redacted PNG image files (some pixels can be redacted by using masks)
