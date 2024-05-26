/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's

let nfts = []; // An Array

// this function will take in some values as parameters, create anṇ
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFTs (name,info,link) {
    const nft = {
        name,
        info,
        link,
    };
    nfts.push(nft);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for(let j=0; j<nfts.length;j++){
        console.log(`Name: ${nfts[j].name}`);
        console.log(`Info:,${nfts[j].info}`);
        console.log(`Link:,${nfts[j].link}`);
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("Number of NFT's minted are : ",nfts.length);
}

// call your functions below this line

mintNFTs("Dodgecat","A digital cat currency","https://meow.com/DodgeCat");
mintNFTs("BitDog", "A digital dog currency","https://bow.com/BitDog");
mintNFTs("EtheFox","A digital fox currency","https://raspybark.com/EtheFox");
listNFTs();
getTotalSupply();
