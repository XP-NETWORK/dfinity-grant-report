// import { Config, setup } from "./index";
// import { config } from "dotenv";

// config();

// const Mint = async (uri: string) => {
//   const { dfinity, wallet } = await setup();

//   const mintingResult = await dfinity.mintNft(
//     //@ts-ignore
//     wallet,
//     {
//       canisterId: Config.dfinity.umt,
//       uri,
//     },
//   );

//   return mintingResult.response;
// };

// (async () => {
//   const Result = await Mint(Config.dfinity.url!);
//   console.log(Result);
//   process.exit(0);
// })().catch((e) => {
//   console.error(e);
//   process.exit(1);
// });
