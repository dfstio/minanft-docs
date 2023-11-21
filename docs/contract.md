---
sidebar_position: 3
---

# NFT Contract

The `MinaNFTContract` is a smart contract implemented for the Mina blockchain, designed to support the creation and management of Non-Fungible Tokens (NFTs) with enhanced features focusing on metadata and privacy.

![Docusaurus logo](/img/contract/nft.png)

## Key Features

- **Rich Metadata Support**: The contract allows for the inclusion of diverse metadata types such as strings, text, images, files, video, and documents.
- **Public and Private Metadata**: Metadata can be set as public or private, giving creators control over the visibility of their content.
- **Provable Data**: Leveraging Merkle Maps and Trees, every byte of metadata can be proven on-chain and off-chain, ensuring the integrity of the data.
- **Redacted Data Proof**: The contract supports the proving of redacted (sanitized) data content using recursive proofs, allowing for the verification of authenticity while maintaining privacy.
- **Recursive Proofs for Updates**: All updates to the metadata Merkle Map are verified through recursive proofs, ensuring correct and secure changes.
- **Account Abstraction**: Ownership is controlled through a private key that is not registered on the network, enhancing privacy. Additionally, there is an escrow mechanism with three private keys that can collectively alter the owner key, useful for recovery or complex transactions.
- **Verification badges**: The state of the metadata, like Twitter name or Mina Navigator badge, can be verified through Badge contracts that issue verification badges. The badges are valid, subject to the metadata not being changed. If metadata is changed, new verification should be passed, and a new verification badge should be received.

### Usage

To interact with the `MinaNFTContract`, you'll use methods such as `update`, `transfer`, and `approveEscrow` to manage your NFTs. Each method requires specific parameters and may require proofs to execute, reflecting the robust and secure nature of the contract.

### Example

```typescript
// Updating NFT metadata
nft.update({ key: `twitter`, value: '@minanft_io' });
const tx = await nft.commit({
            deployer,
            ownerPrivateKey,
            pinataJWT,
            nameService,
          });
...
let proof: MinaNFTMetadataUpdateProof;
const update: Update = new Update({
      oldRoot: proof.publicInput.oldRoot,
      newRoot: proof.publicInput.newRoot,
      storage: storageHash,
      verifier: nameService.address,
      version: newVersion,
      name: MinaNFT.stringToField(this.name),
      owner,
    });
const signature = Signature.create(ownerPrivateKey, update.toFields());

console.log("Sending update...");
const tx = await Mina.transaction(
  { sender, fee: await MinaNFT.fee(), memo: "minanft.io", nonce },
  () => {
    zkApp.update(address, update, signature, ownerPublicKey, proof!);
  }
);


// Transferring NFT ownership thru esrow sale transaction
const escrow = new MinaNFTEscrow();
await escrow.deploy(escrowPrivateKey);
await escrow.approveSale(escrowData!, sellerPrivateKey!);
await escrow.deposit(
      escrowData!,
      buyerPrivateKey!,
      escrowPublicKey!
    );
await escrow.transfer({
      data: escrowData!,
      escrow: escrowPrivateKey!,
      sellerDeposited,
      buyerDeposited,
      nft: nft.address,
      nameService: nameService.address,
      tokenId: nft.tokenId,
      seller: sellerPublicKey!,
      buyer: buyerPublicKey!,
      isKYCpassed,
    });

// Issuing the badge
const badge = new MinaNFTBadge({
    name: `badgetest`,
    owner: `badgetest`,
    verifiedKey: `twitter`,
    verifiedKind: `string`,
    oracle: badgeOraclePrivateKey.toPublicKey(),
    tokenSymbol: `BADGE`,
  });

await badge.issue(
          deployer,
          nft[i],
          badgeOraclePrivateKey,
        );
...
const badgeEvent: MinaNFTVerifierBadgeEvent = new MinaNFTVerifierBadgeEvent(
  {
    address: nftAddress,
    owner: nft.owner,
    name: MinaNFT.stringToField(nft.name),
    version: nft.version,
    data: nftdata,
    key: MinaNFT.stringToField(this.verifiedKey),
  }
);
const badgeDataWitness: BadgeDataWitness = {
  root: {
    data: data.getRoot(),
    kind: kind.getRoot(),
  } as Metadata,
  value: badgeEvent.data,
  key: badgeEvent.key,
  witness: {
    data: data.getWitness(badgeEvent.key),
    kind: kind.getWitness(badgeEvent.key),
  } as MetadataWitness,
};
const badgeState = BadgeData.create(badgeDataWitness);
const badgeStateProof = await MinaNFTBadgeCalculation.create(
  badgeState,
  badgeDataWitness
);
const signature = Signature.create(oraclePrivateKey, badgeEvent.toFields());
await Mina.transaction(
      {
        sender,
        fee: await MinaNFT.fee(),
        memo: "minanft.io",
        nonce: deployNonce,
      },
      () => {
        if (!hasAccount) AccountUpdate.fundNewAccount(sender);
        issuer.issueBadge(
          nftAddress,
          nftTokenId,
          badgeEvent,
          signature,
          redactedProof,
          badgeStateProof
        );
      }
    );
```

## Full Contract Text

```typescript
/**
 * MinaNFTContract is a smart contract that implements the Mina NFT standard.
 * @property name The name of the NFT.
 * @property metadata The metadata of the NFT.
 * @property storage The storage of the NFT - IPFS (i:...) or Arweave (a:...) hash string
 * @property owner The owner of the NFT - Poseidon hash of owner's public key
 * @property escrow The escrow of the NFT - Poseidon hash of three escrow's public keys
 * @property version The version of the NFT, increases by one with the changing of the metadata or the owner
 */
class MinaNFTContract extends SmartContract {
  @state(Field) name = State<Field>();
  @state(Metadata) metadata = State<Metadata>();
  @state(Storage) storage = State<Storage>();
  @state(Field) owner = State<Field>();
  @state(Field) escrow = State<Field>();
  @state(UInt64) version = State<UInt64>();

  /**
   * Update metadata of the NFT
   * @param update {@link Update} - data for the update
   * @param signature signature of the owner
   * @param owner owner's public key
   * @param proof {@link MinaNFTMetadataUpdateProof} - proof of the update of the metadata to be correctly inserted into the Merkle Map
   */
  @method update(
    update: Update,
    signature: Signature,
    owner: PublicKey,
    proof: MinaNFTMetadataUpdateProof
  ) {
    // Check that the metadata is correct
    const metadata = this.metadata.getAndAssertEquals();
    Metadata.assertEquals(metadata, update.oldRoot);
    Metadata.assertEquals(metadata, proof.publicInput.oldRoot);
    Metadata.assertEquals(proof.publicInput.newRoot, update.newRoot);

    // Check that the proof verifies
    proof.verify();

    signature.verify(owner, update.toFields()).assertEquals(true);
    update.owner.assertEquals(Poseidon.hash(owner.toFields()));

    this.owner
      .getAndAssertEquals()
      .assertEquals(update.owner, "Owner mismatch");
    this.name.getAndAssertEquals().assertEquals(update.name, "Name mismatch");

    const version = this.version.getAndAssertEquals();
    const newVersion: UInt64 = version.add(UInt64.from(1));
    newVersion.assertEquals(update.version);

    this.metadata.set(update.newRoot);
    this.version.set(newVersion);
    this.storage.set(update.storage);
  }
  /**
   * Transfer the NFT to new owner
   * @param data {@link EscrowTransfer} - data for the transfer
   * @param signature1 signature of the first escrow
   * @param signature2 signature of the second escrow
   * @param signature3 signature of the third escrow
   * @param escrow1 public key of the first escrow
   * @param escrow2 public key of the second escrow
   * @param escrow3 public key of the third escrow
   */
  @method transfer(
    data: EscrowTransfer,
    signature1: Signature,
    signature2: Signature,
    signature3: Signature,
    escrow1: PublicKey,
    escrow2: PublicKey,
    escrow3: PublicKey
  ) {
    this.owner
      .getAndAssertEquals()
      .assertEquals(data.oldOwner, "Owner mismatch");
    this.escrow
      .getAndAssertEquals()
      .assertNotEquals(Field(0), "Escrow is not set");
    this.escrow.assertEquals(data.escrow);
    this.name.getAndAssertEquals().assertEquals(data.name, "Name mismatch");
    const version = this.version.getAndAssertEquals();
    const newVersion: UInt64 = version.add(UInt64.from(1));
    newVersion.assertEquals(data.version);
    const dataFields = data.toFields();
    signature1.verify(escrow1, dataFields).assertEquals(true);
    signature2.verify(escrow2, dataFields).assertEquals(true);
    signature3.verify(escrow3, dataFields).assertEquals(true);
    data.escrow.assertEquals(
      Poseidon.hash([
        Poseidon.hash(escrow1.toFields()),
        Poseidon.hash(escrow2.toFields()),
        Poseidon.hash(escrow3.toFields()),
      ])
    );

    this.owner.set(data.newOwner);
    this.version.set(newVersion);
    this.escrow.set(Field(0));
  }
  /**
   * Approve setting of the new escrow
   * @param data {@link EscrowApproval} - data for the approval
   * @param signature signature of the owner
   * @param owner owner's public key
   */
  @method approveEscrow(
    data: EscrowApproval,
    signature: Signature,
    owner: PublicKey
  ) {
    signature.verify(owner, data.toFields()).assertEquals(true);
    data.owner.assertEquals(Poseidon.hash(owner.toFields()));

    this.owner.getAndAssertEquals().assertEquals(data.owner, "Owner mismatch");
    this.name.getAndAssertEquals().assertEquals(data.name, "Name mismatch");

    const version = this.version.getAndAssertEquals();
    const newVersion: UInt64 = version.add(UInt64.from(1));
    newVersion.assertEquals(data.version);

    this.version.set(newVersion);
    this.escrow.set(data.escrow);
  }
}
```

For more detailed examples and method usage, refer to the [MinaNFT Documentation](https://lib.minanft.io/classes/minanftcontract).
