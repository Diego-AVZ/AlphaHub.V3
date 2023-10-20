//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

//______________________________________________
//_________________AlphaHub V3 dApp Contract___
//______________26/09/2023, Author: DiegoAVZ___
//______________________________________________

contract alphaHubV3 {

    //AlphaProv
    mapping (address => string) name;
    function setName(string memory _name) public {
        name[msg.sender] = _name;
    }

    function seeName(address alpha) public view returns(string memory){
       return(name[alpha]);
    }

    mapping(address => uint) seeAlphaScore;

    function getAlphaScore(address alpha) public view returns(uint){
        return(seeAlphaScore[alpha]);
    }

    //TRADING

    struct traSignal {
        string _msg;
        uint256 priceEntry; // STRINGSSSSS
        uint256 stopLoss;
        uint256 takeProfit; 
        uint8 direction;
        uint16 traSignalId;
        uint256 postDate;
        //FALTA ASSET TO TRADE
    }

    uint16 public maxLengthTrad = 100;
    uint16 traSignalNum;
    traSignal [] traSignals;
    traSignal [] traSignalsGlob;
    mapping(address => traSignal[]) public alphaTradInfoFromAddress;

    function addTraSignal(string memory _msg, uint256 _priceEntry, uint256 _stopLoss, uint256 _takeProfit, uint8 _direction) public {
        if(traSignalsGlob.length == maxLengthTrad){
            for (uint32 i = 0; i <= traSignalsGlob.length - 1; i++) {
                traSignalsGlob[i] = traSignalsGlob[i + 1];
            }
            traSignalsGlob.pop();
        }
        traSignalNum++;
        uint16 _traSignalId  =  traSignalNum;
        traSignal memory newTraSignal = traSignal(_msg, _priceEntry, _stopLoss, _takeProfit, _direction, _traSignalId, block.timestamp);
        traSignals.push(newTraSignal);
        traSignalsGlob.push(newTraSignal);
        alphaTradInfoFromAddress[msg.sender].push(newTraSignal);

        uint perAccuracy =  accuracyPercentage(msg.sender);
        uint _score = seeAlphaScore[msg.sender];
        uint altIndex = 50 + uint256(keccak256(abi.encodePacked(block.timestamp, msg.sender))) % 50;
        uint altIndex2 = 75 + uint256(keccak256(abi.encodePacked(block.timestamp, msg.sender))) % 25;
        uint altIndex3 = 75 + uint256(keccak256(abi.encodePacked(block.timestamp, msg.sender))) % 25;
        uint altIndex4 = 75 + uint256(keccak256(abi.encodePacked(block.timestamp, msg.sender))) % 25;
        uint altIndex5 = 75 + uint256(keccak256(abi.encodePacked(block.timestamp, msg.sender))) % 25;

        if(_score > 10 && perAccuracy > 50){traSignalsGlob[altIndex] = newTraSignal;} 
        else if(_score > 25 && perAccuracy > 50){traSignalsGlob[altIndex] = newTraSignal; traSignalsGlob[altIndex2] = newTraSignal; }
        else if(_score > 50 && perAccuracy > 50){
            traSignalsGlob[altIndex] = newTraSignal; 
            traSignalsGlob[altIndex2] = newTraSignal; 
            traSignalsGlob[altIndex3] = newTraSignal;
            traSignalsGlob[altIndex4] = newTraSignal;
            }
        else if(_score > 75 && perAccuracy > 50){
            traSignalsGlob[altIndex] = newTraSignal; 
            traSignalsGlob[altIndex2] = newTraSignal; 
            traSignalsGlob[altIndex3] = newTraSignal;
            traSignalsGlob[altIndex4] = newTraSignal;
            traSignalsGlob[altIndex5] = newTraSignal;
            }
    }


    //Function to see the global Trading List
    function seeTraSig(uint16 index) public view returns(string memory, uint256, uint256, uint256, uint8, uint16, uint256) {
        require(index < traSignalsGlob.length, "no list element");
        require(hasPay);
        uint lastPayDate = seeLastPay(msg.sender);
        uint actualDate = block.timestamp;
        if(monAnnu[msg.sender] == 1){
            require((actualDate - lastPayDate) <= 30 days );
        } else {require((actualDate - lastPayDate) <= 364 days );}
        traSignal memory traSigAlphaGlob = traSignalsGlob[index];
        return(traSigAlphaGlob._msg, traSigAlphaGlob.priceEntry, traSigAlphaGlob.stopLoss, traSigAlphaGlob.takeProfit, traSigAlphaGlob.direction, traSigAlphaGlob.traSignalId, traSigAlphaGlob.postDate);
        
    }

    // Function to see alphaProv trading list
    function seeTraSig2(uint16 i, address alpha) public view returns(string memory, uint256, uint256, uint256, uint8, uint16, uint256){
        traSignal[] memory traSignalAlpha = alphaTradInfoFromAddress[alpha];
        require(i <= traSignalAlpha.length);
        traSignal memory indexTraSig = traSignalAlpha[i];
        return(indexTraSig._msg, indexTraSig.priceEntry, indexTraSig.stopLoss, indexTraSig.takeProfit, indexTraSig.direction, indexTraSig.traSignalId, indexTraSig.postDate);
    }

    function getNumSignals(address alpha) public view returns(uint){
        return(alphaTradInfoFromAddress[alpha].length);
    }



    //___________________________
    // LOW CAPS - ONCHAIN 

    struct lowCaps {
        string _msg;
        string tokenName;
        address tokenAddress;
        string priceEntry;
        string stopLoss;
        string potTakeProfit; 
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
        string memory entry,
        string memory sl,
        string memory tp
        ) public {
            
            if (lowCapSigGlob.length == maxLengthLows){
                for(uint16 i = 0; i < lowCapSigGlob.length; i++ ){
                    lowCapSigGlob[i] = lowCapSigGlob[i + 1];
                }
                lowCapSigGlob.pop();
            }

            lowCapsNum++;
            uint16 id = lowCapsNum;
            uint date = block.timestamp;
            lowCaps memory newLowCaps = lowCaps(_msg, tokenName, token, entry, sl, tp, id, date);
            lowCapSig.push(newLowCaps);
            lowCapSigGlob.push(newLowCaps);
            alphaLowCapsSig[msg.sender].push(newLowCaps);

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

    function getTradGlobLength() public view returns(uint){
        return(traSignalsGlob.length);
    }

    function genNumIndex(address user) public view returns(uint){
        return(uint(keccak256(abi.encodePacked(seeLastPay(user), user)))% traSignalsGlob.length);
    }

    //genera un número con la dirección del usuario y la ultima vez que pagó

    //___________________________

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

    /*
    function getAddressFromId(uint _id) public view returns(address){
        for(uint i = 0; i < infoListGlob.length; i++){
            if(_id == infoListGlob[i].id){
                return(infoListGlob[i].alpha);
            }
        }
        revert("Not Found");
    }
    */

    //Está función será llamada desde js con un click en la info del frontend.
    //al hacer ".createElement" se creará un elemento <div onclick="funcionJS_para_llamar_a_"getAddressFromId()"> 
    //la funcion "getAddressFromId()" devuelve la address y se establece como variable en js para validar con la funcion validate()

    mapping(address => uint) accuracyPer;
    
    function accuracyPercentage(address addr) public returns(uint){
       if(addrTotValNum[addr] > 0){
       accuracyPer[addr] = (addrPosNum[addr]*100) / addrTotValNum[addr];
       uint per = accuracyPer[addr];
       return(per);
       } else {return(0);}
    }

    //PAYMENT

    uint simplePlanMon = 1 ether;
    uint simplePlanAnnu = 10 ether;

    mapping(address => uint) lastPay;
    mapping(address => uint) monAnnu; // 1 -> monthly
                                      // 2 -> Annual

    bool hasPay;

    function paySimpleMonth() public payable {
        require(msg.value == simplePlanMon);
        lastPay[msg.sender] = block.timestamp;
        monAnnu[msg.sender] = 1; 
        hasPay = true;
    }

    function paySimpleAnnual() public payable {
        require(msg.value == simplePlanAnnu);
        lastPay[msg.sender] = block.timestamp;
        monAnnu[msg.sender] = 2; 
        hasPay = true;
    }

    function seeLastPay(address user) public view returns(uint){
        return(lastPay[user]);
    }


}
