//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

//______________________________________________
//_________________AlphaHub V3 dApp Contract___
//______________26/09/2023, Author: DiegoAVZ___
//______________________________________________

contract A {

    function createContracts() public{
        new B(address(this));
    }

    //AlphaProv

    address[] alphasList;
    mapping(address => uint) alphaJoinDate;
    uint16 alphaCount;
    mapping(address => uint16) public alphaAmountTotalSignals;

    function add1ToTotalSig(address alpha) public {
        alphaAmountTotalSignals[alpha]++;
    }
    
    function becomeAlpha() public {
        alphasList.push(msg.sender);
        alphaJoinDate[msg.sender] = block.timestamp;
        alphaCount++;
    }

    mapping (address => string) name;
    mapping (string => address) nameToAddress;
    string[] nameList;

    function setName(string memory _name) public {
        require(checkNameList(_name) == false);
        name[msg.sender] = _name;
        nameList.push(_name);
    }

    function checkNameList(string memory _name) public view returns(bool){
        for(uint32 i=0; i < nameList.length; i++){
            if(keccak256(abi.encodePacked(_name)) == keccak256(abi.encodePacked(nameList[i]))){
                return(true);
            } 
        }
        return(false);
    }

    function seeName(address alpha) public view returns(string memory){
       return(name[alpha]);
    }

    function searchName(string memory _name) public view returns(address){
        return(nameToAddress[_name]);
    } 

    mapping(address => uint) public seeAlphaScore;

    function getAlphaScore(address alpha) public view returns(uint){
        return(seeAlphaScore[alpha]);
    }


    //___________________________
    // LOW CAPS - ONCHAIN 
/*
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
            alphaAmountTotalSignals[msg.sender]++;

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

*/
    //___________________________


    //___________________________

    mapping(address => bool) isValidator;

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
    bool canValidate; // Solo si es usuario y ha pagado puede validar

    mapping(address => uint) lastPay;
    mapping(address => uint8) monAnnu; // 1 -> monthly
                                      // 2 -> Annual

    mapping(address => bool) public hasPaid;

    function paySimpleMonth() public payable {
        require(msg.value == simplePlanMon);
        lastPay[msg.sender] = block.timestamp;
        monAnnu[msg.sender] = 1; 
        hasPaid[msg.sender] = true;
        canValidate = true;
    }

    function paySimpleAnnual() public payable {
        require(msg.value == simplePlanAnnu);
        lastPay[msg.sender] = block.timestamp;
        monAnnu[msg.sender] = 2; 
        hasPaid[msg.sender] = true;
        canValidate = true;
    }

    function seeLastPay(address user) public view returns(uint){
        return(lastPay[user]);
    }

    function seeIfHasPaid(address user) public view returns(bool){
        return(hasPaid[user]);
    }

    function seeMonAnn(address user) public view returns(uint8){
        return(monAnnu[user]);
    }

    //MyAlpha Payment Plans

    struct followerS{
        address follower;
        uint lastAlphaPay;
        uint8 planPaid;
    } 

    followerS[] followerList;
    mapping(address => followerS[]) followers;
    mapping(address => uint) alphaAnnualPrice;
    mapping(address => uint) alphaMonthlyPrice; 
    mapping(address => address[]) imFollowing;

    address AlphaHub = 0x8DE959Dc78ed8948851af6a5453c01fD8AEDA8E0;

    function payAlpha(address alpha, uint8 plan) public payable{
        if(plan == 1){
            require(msg.value == alphaMonthlyPrice[alpha]);
        } else {
            require(msg.value == alphaAnnualPrice[alpha]); 
        }
        followerS memory newFollower = followerS(msg.sender, block.timestamp, plan);
        followers[alpha].push(newFollower);
            //Plan: // 1 -> monthly
                    // 2 -> Annual
        uint fee = msg.value/20;
        payable(alpha).transfer(msg.value-fee);
        payable(AlphaHub).transfer(fee);
        imFollowing[msg.sender].push(alpha);
        isValidator[msg.sender] = true;
    }

    function setPriceAlphaPlans(uint plan, uint price) public {
        if(plan == 1){
            //monthly
            alphaMonthlyPrice[msg.sender] = price;
        } else {
            //Annual
            alphaAnnualPrice[msg.sender] = price;
        }
    }

    function canSeeThisAlpha(address user, address alpha) public view returns(bool){
        for(uint16 i = 0; i < followers[alpha].length; i++){
            if(user == followers[alpha][i].follower){
                if(followers[alpha][i].planPaid == 1){
                    if(block.timestamp > followers[alpha][i].lastAlphaPay + 30 days){
                        return(true);
                    } else {return(false);}
                } else {
                    if(block.timestamp > followers[alpha][i].lastAlphaPay + 364 days){
                        return(true);
                    } else {return(false);}
                }
            } 
        }
        return(false);
    } 

//NEW FUNCs
    
}

