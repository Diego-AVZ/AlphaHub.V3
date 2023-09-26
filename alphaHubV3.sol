//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract alphaHubV3 {

    struct info {
        string infoMsg;
        uint256 postDate;
        uint8 infoType;
    }

    info[] infoList;

    mapping(address => info[]) alphaInfoFromAddress;

    uint public alphaScore;

    mapping(address => uint) seeAlphaScore;
    uint16 public maxLength = 100;

    function provideInfo(string memory _msg, uint8 _type) public {
        if(infoList.length > maxLength) {
            for (uint256 i = 0; i < infoList.length - 1; i++) {
                infoList[i] = infoList[i + 1];
            }
            infoList.pop();
        }
        info memory newInfo = info(_msg, block.timestamp, _type);
        infoList.push(newInfo);
        alphaInfoFromAddress[msg.sender] = infoList;
        uint _score = seeAlphaScore[msg.sender];
        uint altIndex = 50 + uint256(keccak256(abi.encodePacked(block.timestamp, msg.sender))) % 50;
        uint altIndex2 = 75 + uint256(keccak256(abi.encodePacked(block.timestamp, msg.sender))) % 25;
        uint altIndex3 = 75 + uint256(keccak256(abi.encodePacked(block.timestamp, msg.sender))) % 25;
        uint altIndex4 = 75 + uint256(keccak256(abi.encodePacked(block.timestamp, msg.sender))) % 25;
        uint altIndex5 = 75 + uint256(keccak256(abi.encodePacked(block.timestamp, msg.sender))) % 25;
        if(_score > 10){infoList[altIndex] = newInfo;} 
        else if(_score > 25){infoList[altIndex] = newInfo; infoList[altIndex2] = newInfo; }
        else if(_score > 50){
            infoList[altIndex] = newInfo; 
            infoList[altIndex2] = newInfo; 
            infoList[altIndex3] = newInfo;
            infoList[altIndex4] = newInfo;
            }
        else if(_score > 75){
            infoList[altIndex] = newInfo; 
            infoList[altIndex2] = newInfo; 
            infoList[altIndex3] = newInfo;
            infoList[altIndex4] = newInfo;
            infoList[altIndex5] = newInfo;
            }
    }

    function seeAlphaMsgs(uint8 index) public view returns(string memory, uint256, uint8) {
        require(index < infoList.length, "no list element");
        info memory alphaInfo = infoList[index];
        return(alphaInfo.infoMsg, alphaInfo.postDate, alphaInfo.infoType);
        //add times called require
    }

    function getLength() public view returns(uint){
        return(infoList.length);
    }

}
