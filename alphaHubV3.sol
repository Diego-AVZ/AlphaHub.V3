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

    info[] public infoListGlob; //Lista global
    info[] infoList;       //Lista Personal del AlphaProv

    mapping(address => info[]) public alphaInfoFromAddress;

    mapping(address => uint) seeAlphaScore;
    uint16 public maxLength = 100;

    function provideInfo(string memory _msg, uint8 _type) public { // to global List (all sectors)
        if(infoListGlob.length == maxLength) {
            for (uint256 i = 0; i < infoListGlob.length - 1; i++) {
                infoListGlob[i] = infoListGlob[i + 1];
            }
            infoListGlob.pop();
        }
        idCount = idCount + 1;
        info memory newInfo = info(_msg, block.timestamp, _type, idCount, msg.sender);
        infoList.push(newInfo);
        alphaInfoFromAddress[msg.sender] = infoList;
        infoListGlob.push(newInfo);
        uint perAccuracy =  accuracyPercentage(msg.sender);
        uint _score = seeAlphaScore[msg.sender];
        uint altIndex = 50 + uint256(keccak256(abi.encodePacked(block.timestamp, msg.sender))) % 50;
        uint altIndex2 = 75 + uint256(keccak256(abi.encodePacked(block.timestamp, msg.sender))) % 25;
        uint altIndex3 = 75 + uint256(keccak256(abi.encodePacked(block.timestamp, msg.sender))) % 25;
        uint altIndex4 = 75 + uint256(keccak256(abi.encodePacked(block.timestamp, msg.sender))) % 25;
        uint altIndex5 = 75 + uint256(keccak256(abi.encodePacked(block.timestamp, msg.sender))) % 25;
        if(_score > 10 && perAccuracy > 50){infoListGlob[altIndex] = newInfo;} 
        else if(_score > 25 && perAccuracy > 50){infoListGlob[altIndex] = newInfo; infoListGlob[altIndex2] = newInfo; }
        else if(_score > 50 && perAccuracy > 50){
            infoListGlob[altIndex] = newInfo; 
            infoListGlob[altIndex2] = newInfo; 
            infoListGlob[altIndex3] = newInfo;
            infoListGlob[altIndex4] = newInfo;
            }
        else if(_score > 75 && perAccuracy > 50){
            infoListGlob[altIndex] = newInfo; 
            infoListGlob[altIndex2] = newInfo; 
            infoListGlob[altIndex3] = newInfo;
            infoListGlob[altIndex4] = newInfo;
            infoListGlob[altIndex5] = newInfo;
            }
    }

    //TRADING

    struct traSignal {
        string _msg;
        uint256 priceEntry;
        uint256 stopLoss;
        uint256 takeProfit; 
        uint8 direction;
        uint16 traSignalId;
        uint256 postDate;
    }

    uint16 public maxLengthTrad = 100;
    uint16 traSignalNum;
    traSignal [] traSignals;
    traSignal [] traSignalsGlob;
    mapping(address => traSignal[]) public alphaTradInfoFromAddress;

    function addTraSignal(string memory _msg, uint256 _priceEntry, uint256 _stopLoss, uint256 _takeProfit, uint8 _direction, uint16 _traSignalId, uint256 _date) public {
        if(traSignalsGlob.length == maxLengthTrad){
            for (uint32 i = 0; i <= traSignalsGlob.length - 1; i++) {
                traSignalsGlob[i] = traSignalsGlob[i + 1];
            }
            traSignalsGlob.pop();
        }
        _date = block.timestamp;
        traSignalNum++;
        _traSignalId  =  traSignalNum;
        traSignal memory newtraSignal = traSignal(_msg, _priceEntry, _stopLoss, _takeProfit, _direction, _traSignalId, _date);
        traSignals.push(newtraSignal);
        traSignalsGlob.push(newtraSignal);
        alphaTradInfoFromAddress[msg.sender] = traSignals;

        uint perAccuracy =  accuracyPercentage(msg.sender);
        uint _score = seeAlphaScore[msg.sender];
        uint altIndex = 50 + uint256(keccak256(abi.encodePacked(block.timestamp, msg.sender))) % 50;
        uint altIndex2 = 75 + uint256(keccak256(abi.encodePacked(block.timestamp, msg.sender))) % 25;
        uint altIndex3 = 75 + uint256(keccak256(abi.encodePacked(block.timestamp, msg.sender))) % 25;
        uint altIndex4 = 75 + uint256(keccak256(abi.encodePacked(block.timestamp, msg.sender))) % 25;
        uint altIndex5 = 75 + uint256(keccak256(abi.encodePacked(block.timestamp, msg.sender))) % 25;

        if(_score > 10 && perAccuracy > 50){traSignalsGlob[altIndex] = newtraSignal;} 
        else if(_score > 25 && perAccuracy > 50){traSignalsGlob[altIndex] = newtraSignal; traSignalsGlob[altIndex2] = newtraSignal; }
        else if(_score > 50 && perAccuracy > 50){
            traSignalsGlob[altIndex] = newtraSignal; 
            traSignalsGlob[altIndex2] = newtraSignal; 
            traSignalsGlob[altIndex3] = newtraSignal;
            traSignalsGlob[altIndex4] = newtraSignal;
            }
        else if(_score > 75 && perAccuracy > 50){
            traSignalsGlob[altIndex] = newtraSignal; 
            traSignalsGlob[altIndex2] = newtraSignal; 
            traSignalsGlob[altIndex3] = newtraSignal;
            traSignalsGlob[altIndex4] = newtraSignal;
            traSignalsGlob[altIndex5] = newtraSignal;
            }
    }

    function seeTraSig(uint8 index) public view returns(string memory, uint256, uint256, uint256, uint8, uint16, uint256) {
        require(index < traSignalsGlob.length, "no list element");
        traSignal memory traSigAlpha = traSignalsGlob[index];
        return(traSigAlpha._msg, traSigAlpha.priceEntry, traSigAlpha.stopLoss, traSigAlpha.takeProfit, traSigAlpha.direction, traSigAlpha.traSignalId, traSigAlpha.postDate);
        
    }

    //___________________________
    // LOW CAPS - ONCHAIN 

    struct lowCaps {
        string _msg;
        string tokenName;
        address tokenAddress;
        uint256 priceEntry;
        uint256 stopLoss;
        uint256 potTakeProfit; 
        uint16 traSignalId;
        uint256 postDate;
    }

    uint16 lowCapsNum;
    lowCaps[] lowCapSig;
    lowCaps[] lowCapSigGlob;
    mapping(address => lowCaps[]) alphaLowCapsSig;
    uint16 public maxLengthLows  = 100;

    function addLowCapsSignal(
        string memory _msg,
        string memory tokenName,
        address token,
        uint256 entry,
        uint256 sl,
        uint256 tp,
        uint16 id,
        uint256 date
        ) public {
            
            if (lowCapSigGlob.length == maxLengthLows){
                for(uint16 i = 0; i <= lowCapSigGlob.length; i++ ){
                    lowCapSigGlob[i] = lowCapSigGlob[i + 1];
                }
                lowCapSigGlob.pop();
            }

            lowCapsNum++;
            id = lowCapsNum;
            lowCaps memory newLowCaps = lowCaps(_msg, tokenName, token, entry, sl, tp, id, date);
            lowCapSig.push(newLowCaps);
            lowCapSigGlob.push(newLowCaps);
            alphaLowCapsSig[msg.sender] = lowCapSig;

            uint perAccuracy =  accuracyPercentage(msg.sender);
            uint _score = seeAlphaScore[msg.sender];
            uint altIndex = 50 + uint256(keccak256(abi.encodePacked(block.timestamp, msg.sender))) % 50;
            uint altIndex2 = 75 + uint256(keccak256(abi.encodePacked(block.timestamp, msg.sender))) % 25;
            uint altIndex3 = 75 + uint256(keccak256(abi.encodePacked(block.timestamp, msg.sender))) % 25;
            uint altIndex4 = 75 + uint256(keccak256(abi.encodePacked(block.timestamp, msg.sender))) % 25;
            uint altIndex5 = 75 + uint256(keccak256(abi.encodePacked(block.timestamp, msg.sender))) % 25;

            if(_score > 10 && perAccuracy > 50){lowCapSigGlob[altIndex] = newLowCaps;} 
            else if(_score > 25 && perAccuracy > 50){lowCapSigGlob[altIndex] = newLowCaps; lowCapSigGlob[altIndex2] = newLowCaps; }
            else if(_score > 50 && perAccuracy > 50){
                lowCapSigGlob[altIndex] = newLowCaps; 
                lowCapSigGlob[altIndex2] = newLowCaps; 
                lowCapSigGlob[altIndex3] = newLowCaps;
                lowCapSigGlob[altIndex4] = newLowCaps;
                }
            else if(_score > 75 && perAccuracy > 50){
                lowCapSigGlob[altIndex] = newLowCaps; 
                lowCapSigGlob[altIndex2] = newLowCaps; 
                lowCapSigGlob[altIndex3] = newLowCaps;
                lowCapSigGlob[altIndex4] = newLowCaps;
                lowCapSigGlob[altIndex5] = newLowCaps;
                }

        }


    //___________________________

    function getLength() public view returns(uint){
        return(infoListGlob.length);
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
        require(isValidator[msg.sender] == true, "Not validator yet");
        _;
    }

    mapping(address => uint) addrPosNum;        // Aciertos
    mapping(address => uint) addrTotValNum;     // Total de señales valoradas
                                                // para obtener % de accierto

    function validate(address clickAddress, uint points, uint posNeg) public onlyValidators {
        require(points <= 2);
        require(seeAlphaScore[clickAddress] <= 100);
        uint score = seeAlphaScore[clickAddress];
        if(posNeg == 0){
            score = score + points;
            addrPosNum[clickAddress]++;
            addrTotValNum[clickAddress]++;
        } else if(posNeg == 1){
            score = score - points;
            addrTotValNum[clickAddress]++;
        }
        seeAlphaScore[clickAddress] = score;
    }

    function getAddressFromId(uint _id) public view returns(address){
        for(uint i = 0; i < infoListGlob.length; i++){
            if(_id == infoListGlob[i].id){
                return(infoListGlob[i].alpha);
            }
        }
        revert("Not Found");
    }

    //Está función será llamada desde js con un click en la info del frontend.
    //al hacer ".createElement" se creará un elemento <div onclick="funcionJS_para_llamar_a_"getAddressFromId()"> 
    //la funcion "getAddressFromId()" devuelve la address y se establece como variable en js para validar con la funcion validate()

    mapping(address => uint) accuracyPer;
    
    function accuracyPercentage(address addr) public returns(uint){
       require(addrTotValNum[addr] > 0);
       accuracyPer[addr] = (addrPosNum[addr]*100) / addrTotValNum[addr];
       uint per = accuracyPer[addr];
       return(per);
    }

    //PAYMENT

    //función de deposito en el contrato para tener acceso


}
