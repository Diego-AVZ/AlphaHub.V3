//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

//______________________________________________
//_________________AlphaHub V3 dApp Contract___
//______________26/09/2023, Author: DiegoAVZ___
//______________________________________________

contract A {

    mapping(address => string) chatId;

    function setAlphaHubBot(string memory _chatId) public {
        chatId[msg.sender] = _chatId;
    } 

    function getChatId(address alpha) public view returns(string memory){
        return(chatId[alpha]);
    }

    address public b = 0x99669c81BE93c45FB74E4e1e00513c1BA532Bf21;

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
        nameToAddress[_name] = msg.sender;
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

    mapping(address => uint) seeAlphaScore;

    function getAlphaScore(address alpha) public view returns(uint){
        return(seeAlphaScore[alpha]);
    }


    /////////////
    B bC = B(b);
    function seeTraSig(uint16 index) public view returns(string memory, string memory, string memory, string memory, uint8, uint16, uint256) {
        require(index < bC.getTradGlobLength(), "no list element");
        require(hasPay);
        uint lastPayDate = seeLastPay(msg.sender);
        uint actualDate = block.timestamp;
        if(monAnnu[msg.sender] == 1){
            require((actualDate - lastPayDate) <= 30 days );
        } else {require((actualDate - lastPayDate) <= 364 days );}
        B.traSignal memory traSigAlphaGlob = bC.getTraSignalGlob(index);
        return(traSigAlphaGlob.asset, traSigAlphaGlob.priceEntry, traSigAlphaGlob.stopLoss, traSigAlphaGlob.takeProfit, traSigAlphaGlob.direction, traSigAlphaGlob.traSignalId, traSigAlphaGlob.postDate);
        
    }

    // Function to see alphaProv trading list
    function seeTraSig2(uint16 i, address alpha, address reader) public view returns(string memory, string memory, string memory, string memory, uint8, uint16, uint256, address){
        B.traSignal memory traSignalAlpha = bC.getTraSignal(i, alpha);
        require(i < bC.traSignalAlphaLength(alpha));
        if (reader == alpha){
            return(traSignalAlpha.asset, traSignalAlpha.priceEntry, traSignalAlpha.stopLoss, traSignalAlpha.takeProfit, traSignalAlpha.direction, traSignalAlpha.traSignalId, traSignalAlpha.postDate, traSignalAlpha.alpha);
        } else {
            require(canSeeThisAlpha(reader, alpha));
            return(traSignalAlpha.asset, traSignalAlpha.priceEntry, traSignalAlpha.stopLoss, traSignalAlpha.takeProfit, traSignalAlpha.direction, traSignalAlpha.traSignalId, traSignalAlpha.postDate, traSignalAlpha.alpha);
        }
    }
    
    function getNumTraSignals(address alpha) public view returns(uint16){
        return(bC.traSignalAlphaLength(alpha));
    }

    function countAllAlphaSignals(address alpha) public {
        alphaAmountTotalSignals[alpha] = getNumTraSignals(alpha);
    }

    function getNumSignals(address alpha) public view returns(uint){
        return(alphaAmountTotalSignals[alpha]);
    }


    function genNumIndex(address user) public view returns(uint){
        return(uint(keccak256(abi.encodePacked(seeLastPay(user), user)))% bC.getTradGlobLength());
    }

    //genera un número con la dirección del usuario y la ultima vez que pagó


//_________________________
    function deposit() public payable{

    }
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

    uint simplePlanMon;
    uint simplePlanAnnu;
    bool canValidate; // Solo si es usuario y ha pagado puede validar

    function setSimplePrices(uint mon, uint ann) public {
        simplePlanMon = mon * 1 ether;
        simplePlanAnnu = ann * 1 ether;
    }

    mapping(address => uint) lastPay;
    mapping(address => uint) monAnnu; // 1 -> monthly
                                      // 2 -> Annual

    bool hasPay;

    function paySimpleMonth() public payable {
        require(msg.value == simplePlanMon);
        lastPay[msg.sender] = block.timestamp;
        monAnnu[msg.sender] = 1; 
        hasPay = true;
        canValidate = true;
    }

    uint discountSimpleMon = simplePlanMon/20;

    function paySimpleMonthRefDiscount(address referrer) public payable {
        require(msg.value == simplePlanMon - discountSimpleMon);
        lastPay[msg.sender] = block.timestamp;
        monAnnu[msg.sender] = 1; 
        hasPay = true;
        canValidate = true;
        referrer.transfer(msg.value/33);
    }

    function paySimpleAnnual() public payable {
        require(msg.value == simplePlanAnnu);
        lastPay[msg.sender] = block.timestamp;
        monAnnu[msg.sender] = 2; 
        hasPay = true;
        canValidate = true;
    }

    uint discountSimpleAnn = simplePlanAnn/20;

    function paySimpleAnnualRefDiscount(address referrer) public payable {
        require(msg.value == simplePlanAnnu - discountSimpleAnn);
        lastPay[msg.sender] = block.timestamp;
        monAnnu[msg.sender] = 2; 
        hasPay = true;
        canValidate = true;
        referrer.transfer(msg.value/33);
    }

    function seePrices() public returns(uint, uint){
        return(simplePlanMon, simplePlanAnnu);
    }

    function seeDiscPrices() public returns(uint, uint){
        uint discPriceMon = simplePlanMon - discountSimpleMon;
        uint discPriceAnn = simplePlanMon - discountSimpleMon;
        return(discPriceMon, discPriceAnn);
    }

    function seeLastPay(address user) public view returns(uint){
        return(lastPay[user]);
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

    function seeAlphaPrices(address alpha)public view returns(uint, uint){
        return(alphaMonthlyPrice[alpha], alphaAnnualPrice[alpha]);
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

}


//___________________________________________________________________________________
//_______________________Trading Contract____________________________________
//___________________________________________________________________________________


contract B {
/*
    address public aAdd;
    A public a;

    constructor(address add) {
        aAdd = add;
        a = A(add);
    }
*/
     struct traSignal {
        string asset;
        string priceEntry;
        string stopLoss;
        string takeProfit; 
        uint8 direction;
        uint16 traSignalId;
        uint256 postDate;
        address alpha;
    }

    uint16 public maxLengthTrad = 100;
    uint16 traSignalNum;
    traSignal [] traSignals;
    traSignal [] public traSignalsGlob;
    mapping(address => traSignal[]) public alphaTradInfoFromAddress;
    mapping(address => uint16) AmountTradSignals;

    function addTraSignal(string memory asset, string memory _priceEntry, string memory _stopLoss, string memory _takeProfit, uint8 _direction) public {
        if(traSignalsGlob.length == maxLengthTrad){
            for (uint32 i = 0; i <= traSignalsGlob.length - 1; i++) {
                traSignalsGlob[i] = traSignalsGlob[i + 1];
            }
            traSignalsGlob.pop();
        }
        traSignalNum++;
        uint16 _traSignalId  =  traSignalNum;
        traSignal memory newTraSignal = traSignal(asset, _priceEntry, _stopLoss, _takeProfit, _direction, _traSignalId, block.timestamp, msg.sender);
        traSignals.push(newTraSignal);
        traSignalsGlob.push(newTraSignal);
        alphaTradInfoFromAddress[msg.sender].push(newTraSignal);
        AmountTradSignals[msg.sender]++;
        
        uint perAccuracy =  accuracyPercentage(msg.sender);
        uint _score = seeAlphaTraScore[msg.sender];
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

    function getTraSignalGlob(uint16 index) public view returns (traSignal memory) {
        require(index < traSignalsGlob.length, "Index out of bounds");
        return traSignalsGlob[index];
    }

    function getTraSignal(uint16 index, address alpha) public view returns (traSignal memory) {
        return alphaTradInfoFromAddress[alpha][index];
    }
    

    mapping(address => uint) seeAlphaTraScore;

    function getAlphaScore(address alpha) public view returns(uint){
        return(seeAlphaTraScore[alpha]);
    }

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
        require(seeAlphaTraScore[clickAddress] <= 100);
        uint score = seeAlphaTraScore[clickAddress];
        if(posNeg == 0){
            score = score + points;
            addrPosNum[clickAddress]++;
            addrTotValNum[clickAddress]++;
        } else if(posNeg == 1){
            score = score - points;
            addrTotValNum[clickAddress]++;
        }
        seeAlphaTraScore[clickAddress] = score;
    }

    mapping(address => uint) accuracyPer;
    
    function accuracyPercentage(address addr) public returns(uint){
       if(addrTotValNum[addr] > 0){
       accuracyPer[addr] = (addrPosNum[addr]*100) / addrTotValNum[addr];
       uint per = accuracyPer[addr];
       return(per);
       } else {return(0);}
    }
   
   function getTradGlobLength() public view returns(uint16){
        return(uint16(traSignalsGlob.length));
    }

    function traSignalAlphaLength(address alpha) public view returns(uint16){
        return(uint16(alphaTradInfoFromAddress[alpha].length));
    }

    function deposit() public payable{}
    
}
