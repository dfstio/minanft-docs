---
sidebar_position: 5
---

# Plugins

MinaNFT offers a suite of powerful plugins and contracts designed to enhance the functionality and security of your NFTs on the Mina Protocol.

## MinaNFTVerifierBadge Contract

![Illustration of the MinaNFTVerifierBadge Contract](/img/contract/badge.png)

The `MinaNFTVerifierBadge` contract is integral for issuing verification badges to NFTs. It is designed to verify a single key such as "twitter" and issues tokens to the NFT address. The quantity of tokens issued corresponds to the version number of the NFT.

### Features:

- **Badge Issuance**: Automatically issues verification badges to NFTs.
- **Version Tracking**: The number of tokens reflects the NFT version, ensuring up-to-date verification.

### Version Updates:

When an NFT's metadata is updated or ownership changes, resulting in a version increment, the previously issued verification becomes invalid. The NFT must undergo the verification process again to receive a new badge.

## Escrow Contract

The `Escrow` contract acts as an escrow agent, providing a secure transactional layer for NFT sales. It handles deposits in MINA and tokens, and ensures that the NFT owner's approval for sale is in place.

### Functionality:

- **Secure Deposits**: Accepts MINA and token deposits.
- **Sale Approval**: Waits for NFT owner's confirmation to proceed with the sale.
- **KYC Compliance**: Verifies that all parties have passed the necessary KYC checks.

After all confirmations and funds are received, the contract facilitates the transfer of the NFT to the new owner.

## Verifier Stateless Contract

The `Verifier` stateless contract is tasked with on-chain verification of redacted metadata. It is streamlined for efficiency, with a single function that takes the NFT address and `RedactedMinaNFTMapStateProof` as arguments.

### Verification:

- **On-Chain Proof**: Checks the validity of `RedactedMinaNFTMapStateProof`.
- **Metadata Integrity**: Ensures that the redacted metadata matches the original.

## RedactedMinaNFTMapCalculation ZkProgram

This `ZkProgram` is at the heart of recursive proof generation. It confirms that all elements of the redacted Merkle Map, which holds the metadata, are present in the original Merkle Map.

### Recursive Proofs:

- **Proof Generation**: Creates recursive proofs to confirm the integrity of redacted metadata.
- **Map Validation**: Ensures the redacted Merkle Map is a valid subset of the original NFT metadata map.

---

Our suite of plugins and contracts empowers users with secure, verifiable, and efficient NFT transactions. For more detailed documentation on each plugin, please visit the [API Reference](https://lib.minanft.io/classes/minanftverifierbadge).
