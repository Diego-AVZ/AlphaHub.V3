//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

//______________________________________________
//_________________AlphaHub V3 dApp Contract___
//______________26/09/2023, Author: DiegoAVZ___
//______________________________________________

contract alphaHubV3 {

    struct info {
        string infoMsg;
        uint256 postDate;
        uint8 infoType;
        uint id;
        address alpha;
    }

    uint idCount;

    info[] public infoList; //LIsta global
    info[] infoList2;       //Lista Personal del AlphaProv

    mapping(address => info[]) public alphaInfoFromAddress;

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
        idCount = idCount + 1;
        info memory newInfo = info(_msg, block.timestamp, _type, idCount, msg.sender);
        infoList2.push(newInfo);
        alphaInfoFromAddress[msg.sender] = infoList2;
        infoList.push(newInfo);
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

    address[] public validators;
    mapping(address => bool) isValidator;
    uint validatorRollPrice = 1 ether;
    mapping(address => uint) validatorLevel;

    function beValidator() public payable{
        require(msg.value == validatorRollPrice);
        validators.push(msg.sender);
        isValidator[msg.sender] = true;
        validatorLevel[msg.sender] = 1;
    }

    modifier onlyValidators(){
        require(isValidator[msg.sender]==true, "Not validator yet");
        _;
    }

    function validate(address clickAddress, uint points, uint posNeg) public onlyValidators {
        require(points <= 2);
        require(seeAlphaScore[clickAddress] <= 100);
        uint score = seeAlphaScore[clickAddress];
        if(posNeg == 0){
            score = score + points;
        } else if(posNeg == 1){
            score = score - points;
        }
        seeAlphaScore[clickAddress] = score;
    }

    function getAddressFromId(uint _id) public view returns(address){
        for(uint i = 0; i < infoList.length; i++){
            if(_id == infoList[i].id){
                return(infoList[i].alpha);
            }
        }
        revert("Not Found");
    }

    //Está función será llamada desde js con un click en la info del frontend.
    //al hacer ".createElement" se creará un elemento <div onclick="funcionJS_para_llamar_a_"getAddressFromId()"> 
    //la funcion "getAddressFromId()" devuelve la address y se establece como variable en js para validar con la funcion validate()

    //PAYMENT

    //función de deposito en el contrato para tener acceso


}
