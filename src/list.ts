import { Config, setup } from "./index";
import { config } from "dotenv";
config();

const List = async () => {
  const {
    dfinity,
    wallet
  } = await setup();

  const owner = wallet.getPrincipal().toString();
  console.log("Address:", owner);
  

  const result = await dfinity.nftList(
    owner,
    Config.dfinity.umt
  );

  return result;
};

(async () => {
  const Result = await List();
  console.log("Found NFTs:", Result);
  process.exit(0);
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
