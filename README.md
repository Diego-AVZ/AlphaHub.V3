# AlphaHub V3

AlphaHub V3 is the third version of AlphaHub, a SocialFi dApp that establishes a decentralized relationship and economy among users, AlphaProvs, and validators.

## Users
Users pay for access to the platform, enabling them to access valuable information.

## AlphaProvs
AlphaProvs, short for "Alpha Info Providers," are highly qualified users who provide valuable insider information for leveraging opportunities in the crypto sector.

## Validators
Validators are qualified users responsible for verifying and rating the information shared by AlphaProvs. Through an algorithm, AlphaProvs build a decentralized digital reputation that aids in their platform advancement. A better reputation results in more frequent appearances in the information signal list, increased visibility of their orders, and higher rewards.

## Solidity Backend
We use Solidity as the backend language for this decentralized application. The Solidity smart contract manages data related to shared information, the AlphaProv algorithm, and the economic aspects of the platform.

---

## How it Works?

`struct info` is the data structure for the info provided by the AlphaProv:

```solidity
struct info {
        string infoMsg;    //info text
        uint256 postDate;  // Timestamp
        uint8 infoType;    //onchain signal, DeFi signal, trading signal...
        uint id;           //identifier of the info
        address alpha;     //Address of the owner of this info
    }
```

Then we found two arrays: 

·`infoListGlob` -> To register the posted info structures of all the AlphaProv.

·`infoList` -> To register the posted info structures of an AlphaProv. One `infoList` for each AlphaProv.

 




