# DFINITY (Internet Computer) Grant Delivery Report

## `Milestone 1` — Smart Contract Development
0. We have researched the Dfinity standards and other factors & protocols that distinguish it from other chains
https://github.com/XP-NETWORK/dfinity-integration/blob/master/src/xpnft/xpnft.mo
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
2. Whitelist NFT smart contracts - Irrelevant
3. Pause/Unpause for maintenance or if compromised
https://github.com/XP-NETWORK/dfinity-integration/blob/8130c3e84abb58e24d9326d4b87c88bd274ccb5f/src/minter/src/lib.rs#L140
https://github.com/XP-NETWORK/dfinity-integration/blob/8130c3e84abb58e24d9326d4b87c88bd274ccb5f/src/minter/src/lib.rs#L181
4. Reimburse the bridge validators their expenses
https://github.com/XP-NETWORK/dfinity-integration/blob/8130c3e84abb58e24d9326d4b87c88bd274ccb5f/src/minter/src/lib.rs#L198


# TODO

## `Milestone 3` — Testing & Documenting

| Length | Deliverable | Specification |
|-|-|-|
| 1 month | Tests & Documentation | 1. We will provide both inline documentation of the code and a basic tutorial that can interact with the deployed smart contracts and backend service.<br/>2. The code will have proper unit-test coverage 85% to ensure functionality and robustness. In the guide, we will describe how to run these tests preparing for auditing<br/>3. Deploying and testing the contracts in the testnet environment|

## `Milestone 4` — Integrating into the Live Bridge
| Length | Deliverable | Specification |
|-|-|-|
| 1 month | Validators, Backend, Frontend | 1. Developing validation logic relevant for the Dfinity part of the bridge<br/>2. Adding Dfinity to the Bridge NFT-Indexer<br/>3. Integrating TX fee estimation<br/>4. Plugging Dfinity in the heartbeat<br/>5. Integrating with a Dfinity rpc node<br/>6. Integrating Dfinity in the bridge UI<br/>7. Deploying smart contracts<br/>8. Adding Dfinity to the bridge JS library<br/>9. Adding access to Dfinity from the REST API<br/>10. Adding Dfinity to the bridge widget|