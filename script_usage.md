# Testing Dfinity integration
This project is a part of the Dfinity grant

## Project initiation

```bash
yarn init -y
yarn add "git+https://github.com/xp-network/xpjs#bleeding-edge" @elrondnetwork/erdjs ethers @taquito/taquito @temple-wallet/dapp dotenv
yarn add @dfinity/agent @dfinity/candid @dfinity/identity @dfinity/nns @dfinity/principal
mkdir src
```

## Populate the environment variables

Rename the `.env.example` to `.env`
```bash
mv .env.example .env
```

Populate the keys of the `.env` file with the relevant values.


## Minting a testnet NFT
Before we can test, we need at least one NFT on our account, so let's mint it.

```bash
yarn mint
```
Example of the expected output:
```bash
$ tsc && node ./dist/mint.js
{
  requestId: ArrayBuffer {
    [Uint8Contents]: <f7 55 2b 32 37 4c ea 46 1a 40 0c 89 dc 56 8b a3 85 e1 68 8f 12 14 2f 5c 45 27 56 96 f4 79 44 29>,
    byteLength: 32
  },
  response: { ok: true, status: 202, statusText: 'Accepted' }
}
✨  Done in 31.54s.
```


## Listing NFTs on the ICP Testnet
To be sure we're bridging the right NFT, let's see that we have it on the chain:

```bash
yarn nft-index
```

## Approving an NFT for Transfer
Before the bridge is allowed to transfer an NFT, it must be given the right to do so:

```bash
yarn approve
```

## Transferring an NFT
Make sure to run the steps above before transferring.
```bash
yarn transfer
```

The present repository explains transferring NFTs FROM Dfinity.<br/>
Sending TO Dfinity from other chains is as easy as selecting the Dfinity as the target chain & providing a relevat receiver address.