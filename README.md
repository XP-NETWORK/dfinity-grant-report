# DFINITY (Internet Computer) Grant Delivery Report

## Milestone 1 — Smart Contract Development
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

## Milestone 2 — Smart Contract Development
We have developed smart contracts that can:
1. Trust the multisig of the bridge oracle validators
https://github.com/XP-NETWORK/dfinity-integration/blob/8130c3e84abb58e24d9326d4b87c88bd274ccb5f/src/minter/src/lib.rs#L93-L138
2. Whitelist NFT smart contracts - Irrelevant
3. Pause/Unpause for maintenance or if compromised
https://github.com/XP-NETWORK/dfinity-integration/blob/8130c3e84abb58e24d9326d4b87c88bd274ccb5f/src/minter/src/lib.rs#L140
https://github.com/XP-NETWORK/dfinity-integration/blob/8130c3e84abb58e24d9326d4b87c88bd274ccb5f/src/minter/src/lib.rs#L181
4. Reimburse the bridge validators their expenses
https://github.com/XP-NETWORK/dfinity-integration/blob/8130c3e84abb58e24d9326d4b87c88bd274ccb5f/src/minter/src/lib.rs#L198