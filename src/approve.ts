// import { Config, setup } from "./index";
// import { NftInfo } from "xp.network";
// import { DfinityNft } from "xp.network/dist/helpers/dfinity/dfinity";

/**
 * A preTransfer function implementation
 * @param to destination address
 * @param nft a selected NFT
 * @param mintWith destination contract address to mint with
 * @returns string | undefined
 */
// const Approve = async (
//   to: string,
//   nft: NftInfo<DfinityNft>,
//   mintWith: string,
// ): Promise<string | undefined> => {
//   const {
//     dfinity,
//     wallet,
//   } = await setup();

//   const estimation = await dfinity.estimateValidateTransferNft(
//     to,
//     nft,
//     mintWith,
//   );

//   const result = await dfinity.preTransfer(
//     //@ts-ignore
//     wallet,
//     nft,
//     estimation,
//   );

//   return result;
// };

// Calling the Approve function
// (async () => {
//   // Destination Address
//   const to: string = Config.dfinity.to!;

//   // Selected NFT
//   const nft = {
//     uri: Config.dfinity.url,
//     native: {
//       canisterId: Config.dfinity.umt,
//       tokenId: Config.dfinity.tokenId,
//     },
//     collectionIdent: Config.dfinity.umt,
//   } as NftInfo<DfinityNft>;

//   // Destination contract address to mint with
//   const mintWith: string = Config.dfinity.mintWith!;

//   const Result = await Approve(to, nft, mintWith);
//   console.log(Result);

//   process.exit(0);
// })().catch((e) => {
//   console.error(e);
//   process.exit(1);
// });
