let nfts = []; // An Array
function mintNFTs (name,info,link) { //to mint the multple nfts
    const nft = {
        name,
        info,
        link,
    };
    nfts.push(nft);
}

function listNFTs () { //print the metadata of nfts
    for(let j=0; j<nfts.length;j++){
        console.log(`Name: ${nfts[j].name}`);
        console.log(`Info:,${nfts[j].info}`);
        console.log(`Link:,${nfts[j].link}`);
    }
}

function getTotalSupply() { // print the total number of NFTs we have minted to the console
    console.log("Number of NFT's minted are : ",nfts.length);
}
// Calling the funtions
mintNFTs("Dodgecat","A digital cat currency","https://meow.com/DodgeCat");
mintNFTs("BitDog", "A digital dog currency","https://bow.com/BitDog");
mintNFTs("EtheFox","A digital fox currency","https://raspybark.com/EtheFox");
listNFTs();
getTotalSupply();
