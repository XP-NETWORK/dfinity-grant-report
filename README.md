# DFINITY (Internet Computer) Grant Delivery Report

## NFT Token Standards

1. ERC-721 analog: https://github.com/C3-Office/standards
2. Toniq Labbs (EXT standard): 
   1. [ERC-721](https://github.com/Toniq-Labs/extendable-token/blob/main/examples/erc721.mo)
   2. [ERC-1155](https://github.com/Toniq-Labs/extendable-token)

## `Milestone 1` — Smart Contract Development
0. We have researched the Dfinity standards and other factors & protocols that distinguish it from other chains
https://github.com/XP-NETWORK/dfinity-integration/blob/master/src/xpnft/xpnft.mo
<br/>
We have developed smart contracts that can:  1. Support Singe & Batch transfers
https://github.com/XP-NETWORK/dfinity-integration/blob/8130c3e84abb58e24d9326d4b87c88bd274ccb5f/src/minter/src/lib.rs#L220
https://github.com/XP-NETWORK/dfinity-integration/blob/8130c3e84abb58e24d9326d4b87c88bd274ccb5f/src/minter/src/lib.rs#L236
https://github.com/XP-NETWORK/dfinity-integration/blob/8130c3e84abb58e24d9326d4b87c88bd274ccb5f/src/minter/src/lib.rs#L235-L258
2. Freeze/Unfreeze Native NFTs
https://github.com/XP-NETWORK/dfinity-integration/blob/8130c3e84abb58e24d9326d4b87c88bd274ccb5f/src/minter/src/lib.rs#L228
https://github.com/XP-NETWORK/dfinity-integration/blob/8130c3e84abb58e24d9326d4b87c88bd274ccb5f/src/minter/src/lib.rs#L248
3. Mint/Burn wrapped NFTs
https://github.com/XP-NETWORK/dfinity-integration/blob/8130c3e84abb58e24d9326d4b87c88bd274ccb5f/src/minter/src/lib.rs#L148
https://github.com/XP-NETWORK/dfinity-integration/blob/8130c3e84abb58e24d9326d4b87c88bd274ccb5f/src/minter/src/lib.rs#L152
4. Withdraw the TX fees on the target chain in native tokens
https://github.com/XP-NETWORK/dfinity-integration/blob/8130c3e84abb58e24d9326d4b87c88bd274ccb5f/src/minter/src/lib.rs#L197

## `Milestone 2` — Smart Contract Development
We have developed smart contracts that can:
1. Trust the multisig of the bridge oracle validators
https://github.com/XP-NETWORK/dfinity-integration/blob/8130c3e84abb58e24d9326d4b87c88bd274ccb5f/src/minter/src/lib.rs#L93-L138
2. [Whitelist](https://github.com/XP-NETWORK/dfinity-integration/search?q=whitelist) NFT smart contracts.
3. Pause/Unpause for maintenance or if compromised
https://github.com/XP-NETWORK/dfinity-integration/blob/8130c3e84abb58e24d9326d4b87c88bd274ccb5f/src/minter/src/lib.rs#L140
https://github.com/XP-NETWORK/dfinity-integration/blob/8130c3e84abb58e24d9326d4b87c88bd274ccb5f/src/minter/src/lib.rs#L181
4. Reimburse the bridge validators their expenses
https://github.com/XP-NETWORK/dfinity-integration/blob/8130c3e84abb58e24d9326d4b87c88bd274ccb5f/src/minter/src/lib.rs#L198

## `Milestone 3` — Testing & Documenting

| Length | Deliverable | Specification |
|-|-|-|
| 1 month | Tests & Documentation | 1. We will provide both [inline documentation](https://github.com/XP-NETWORK/dfinity-integration/commit/cbe0df3b82025f3246f282c32d5f77167b73ae62) of the code and a [basic tutorial](./script_usage.md) that can interact with the deployed smart contracts and backend service.<br/>2. The code will have proper [functional test coverage](https://github.com/XP-NETWORK/dfinity-integration/blob/ext721/src/minter/src/tests.rs) 85% to ensure functionality and robustness. In the guide, we will describe how to run these tests for the auditing purposes<br/>3. [Deploying](#bridge-contracts-deployed-on-testnet) and testing the contracts in the testnet environment|

### Bridge contracts deployed on the Mainnet

|Name|Address|Functionality|
|:-:|:-:|:-|
|Bridge Contract|[e3io4-qaaaa-aaaak-qasua-cai](https://icscan.io/canister/e3io4-qaaaa-aaaak-qasua-cai)|1. Interaction with the oracle-validators<br/>2. Orchestrating the work of the NFT contracts|
|XPNFT|[e4jii-5yaaa-aaaak-qasuq-cai](https://icscan.io/canister/e4jii-5yaaa-aaaak-qasuq-cai)|The default NFT contract|
|UMT|[evkdu-lqaaa-aaaak-qasva-cai](https://icscan.io/canister/evkdu-lqaaa-aaaak-qasva-cai)|NFT contract for free minting & testing bridging transactions|



# TODO

## `Milestone 4` — Integrating into the Live Bridge
| Specification |
|-|
| 1. We've developed validation logic relevant for the Dfinity part of the bridge<br/>2. Adding Dfinity to the Bridge NFT-Indexer<br/>3. Integrating TX fee estimation<br/>4. Plugging Dfinity in the [heartbeat](./Proof.md/#44-heartbeat)<br/>5. Integrating with a Dfinity [rpc node](./Proof.md/#45-integrated-nodes)<br/>6. Integrating Dfinity in the bridge UI<br/>7. [Deployed](./Proof.md/#47-deployed-mainnet-contracts) smart contracts on the mainnet<br/>8. Added Dfinity to the bridge [JS library](./Proof.md/#48-dfinity-in-xpjs)<br/>9. Adding Dfinity to the bridge widget|