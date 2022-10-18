import { Config, setup } from "./index";
import { NftInfo } from "xp.network";
import { DfinityNft } from "xp.network/dist/helpers/dfinity/dfinity";
import { config } from "dotenv";
config();

const Transfer = async (
  to: string,
  nft: NftInfo<DfinityNft>,
  _mintWith: string,
): Promise<any> => {
  const {
    dfinity,
    wallet,
    bsc,
    factory,
  } = await setup();

  const transfer = await factory.transferNft(
    dfinity,
    bsc,
    nft,
    //@ts-ignore
    wallet,
    to,
  );
  return transfer;
};

(async () => {
  // Destination Address
  const to: string = Config.dfinity.to!;

  // Selected NFT
  const nft = {
    uri: Config.dfinity.url,
    native: {
      canisterId: Config.dfinity.umt,
      tokenId: Config.dfinity.tokenId,
    },
    collectionIdent: Config.dfinity.umt,
  } as NftInfo<DfinityNft>;

  // Destination contract address to mint with
  const mintWith: string = Config.dfinity.mintWith!;

  const Result = await Transfer(to, nft, mintWith);
  console.log(Result);
  process.exit(0);
})().catch((e) => {
  console.error(e);
  process.exit(1);
});

// From ICP: 2022-10-13, 12:58:38 PM UTC
// https://dashboard.internetcomputer.org/transaction/f8e7858a1efd285c12d0b65eed96090379d79b275ff867e2b7b6cbe3d0cf23d5
// To BSC:Oct-13-2022 12:59:09 PM +UTC
// https://testnet.bscscan.com/tx/0xcce56626da8538eab7aa7a68398be12dd7a56d0f936413f2979046acbb93d0f5 

// address: 1edcee2ef5cebda5dd1dae03eec294fac1df8258e7ef600bfd9efacb24caae9b

// {
//   uri: 'https://bridge-wnftapi.herokuapp.com/w/30726113198060013108955993115',
//   native: {
//     chainId: '4',
//     tokenId: '30726113198060013108955993115',
//     contract: '0x783eF7485DCF27a3Cf59F5A0A406eEe3f9b2AaeB',
//     owner: '0x0d7df42014064a163DfDA404253fa9f6883b9187',
//     uri: 'https://bridge-wnftapi.herokuapp.com/w/30726113198060013108955993115',
//     symbol: 'XPNFT',
//     name: 'XPNFT',
//     contractType: 'ERC721'
//   },
//   collectionIdent: '0x783ef7485dcf27a3cf59f5a0a406eee3f9b2aaeb'
// }