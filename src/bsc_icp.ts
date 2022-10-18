import {
    ChainFactoryConfigs,
    ChainFactory,
    AppConfigs,
    Chain,
} from "xp.network";
import { config } from 'dotenv'; config();
import { Wallet } from "ethers";
import {exit, env} from "process";

export const Config = {
    sk: env.SK! ? env.SK! : "",
}

export const setup = async () => {

    // For Mainnet replace TestNet with MainNet below in both lines
    const factory = ChainFactory(
        AppConfigs.TestNet(), 
        await ChainFactoryConfigs.TestNet()
    );

    const bsc = await factory.inner(Chain.BSC);

    const signer = new Wallet(
        Config.sk,
        bsc.getProvider()
    );

    return {
        factory,
        bsc,
        signer
    }

}

(async () => {

    const {
        factory,
        bsc,
        signer
    } = await setup();

    const owner = (await signer.getAddress()).toString();
    const icp = await factory.inner(Chain.DFINITY);

    const NFTs = await factory.nftList(
        bsc,
        owner
    );

    const selected = NFTs[0];

    console.log("NFTs:", NFTs.length, selected);

    // const approve = await bsc.approveForMinter(
    //     selected,
    //     signer
    // );
    // console.log("Approved:", approve);

    const transfer = await factory.transferNft(
        bsc,
        icp,
        selected,
        signer,
        "tc446-lek6d-tkkcf-dqjfl-bax66-5wfwr-mgnyf-6u3dr-4ibue-zky4o-6qe"
    )
    console.log("Transfer:", transfer);
    
    

    exit(0)
})
// ().catch(e => {
//     console.error(e);
//     exit(1)
// })