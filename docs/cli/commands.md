---
sidebar_position: 2
---

# Commands

```
Mina NFT CLI tool (c) DFST 2024 www.minanft.io

Usage: minanft [options] [command]

Mina NFT CLI tool

Options:
  -V, --version                                         output the version number
  -p, --password <string>                               password
  -o, --offline                                         offline mode
  -d, --debug                                           debug mode
  -h, --help                                            display help for command

Commands:
  rollup.blocks [options]                               Show information about the last 10 Rollup blocks
  rollup.list                                           List all Rollup NFT names
  rollup.name <name>                                    Get the information about the Rollup NFT name
  rollup.prove.keys [options] <name>                    Prove Rollup NFT private values off-chain
  rollup.prove.key [options] <name>                     Prove Rollup NFT private value on-chain
  verifier.deploy <privateKey>                          Deploy Rollup NFT verifier contract
  verifier.upgrade <privateKey>                         Upgrade Rollup NFT verifier contract
  balance <name>                                        Check the balance of the existing MINA protocol account
  createaccount [options] <name>                        Create new MINA protocol account or import existing one
  exportaccount <name>                                  Export existing MINA protocol account
  reserve <name> [account]                              Reserve NFT name
  create [options] <name> [owner]                       Create NFT
  index <name>                                          Index NFT name for minanft.io frontend
  prove [options] <name>                                Prove NFT metadata
  provefile [options] <name> <key>                      Prove NFT file
  provetext [options] <name> <key>                      Prove NFT text
  provepng [options] <name> <key> <original> <redacte>  Prove NFT png image
  verify <name>                                         Verify NFT metadata
  verifyfile [options] <name> <key> <file>              Verify NFT file
  verifytext <name> <key>                               Verify NFT redacted text file
  verifypng <name> <key> <png>                          Verify NFT redacted png file
  mask <name> <star> <end>                              Create or update file mask
  redact [options] <name> <mask>                        Create redacted file using mask
  regexp <name> <mask>                                  Create redacted file using regular expression
  redactedproof [options] <name>                        Create redacted file proof
  verifyredactedproof [options] <name>                  Verify redacted file proof
  jwt <jwt>                                             Set JWT token for the online MinaNFT API
  exportjwt                                             Export MinaNFT JWT token
  word <name>                                           Convert word file to text
  ipfs <jwt>                                            Set Pinata JWT token for the IPFS storage
  arweave <key>                                         Set Arweave private key for the Arweave storage
  changepassword <name> <type> <oldPwd> <newPwd>        Change password for existing file
  help [command]                                        display help for command

```
