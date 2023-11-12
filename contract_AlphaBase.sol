//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

//______________________________________________
//_________________AlphaHub V3 dApp Contract___
//______________26/09/2023, Author: DiegoAVZ___
//______________________________________________

contract A {

    mapping(address => string) chatId;
    string[] chatIdsList;

    function setAlphaBaseBot(string memory _chatId) public {
        chatId[msg.sender] = _chatId;
        chatIdsList.push(_chatId);
    } 

    function getChatId(address alpha) public view returns(string memory){
        return(chatId[alpha]);
    }

    function getIndexChatIdList(uint32 i) public view returns(string memory){
        return(chatIdsList[i]);
    }

    /////////////
    B bC = B(b);
    C cC = C(c);
    /////////////
    address public b = 0x0fC5025C764cE34df352757e82f7B5c4Df39A836;
    address public c = 0x0fC5025C764cE34df352757e82f7B5c4Df39A836;
    ////////////
    //AlphaProv

    address[] alphasList;
    mapping(address => uint) alphaJoinDate;
    uint16 alphaCount;
    mapping(address => uint16) public alphaAmountTotalSignals;
    
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

    mapping(address => uint) public totalAlphaScore;

    function seeTotalAlphaScore(address alpha) public view returns(uint){
        return(bC.getAlphaScore(alpha) + cC.getAlphaScore(alpha)); //+ bC.getAlphaScore2(alpha) + ... + ...
    }

    //TRADING

    function seeTraSig(uint16 index) public view returns(string memory, string memory, string memory, string memory, uint8, uint16, uint256) {
        require(index < bC.getTradGlobLength(), "no list element");
        uint lastPayDate = seeLastPay(msg.sender);
        uint actualDate = block.timestamp;
        if(monAnnu[msg.sender] == 1){
            require((actualDate - lastPayDate) <= 30 days );
        } else {require((actualDate - lastPayDate) <= 364 days );}
        B.traSignal memory traSigAlphaGlob = bC.getTraSignalGlob(index);
        return(traSigAlphaGlob.asset, traSigAlphaGlob.priceEntry, traSigAlphaGlob.stopLoss, traSigAlphaGlob.takeProfit, traSigAlphaGlob.direction, traSigAlphaGlob.traSignalId, traSigAlphaGlob.postDate);
        
    }

    function seeTraSig2(uint16 i, address alpha, address reader) public view returns(string memory, string memory, string memory, string memory, uint8, uint16, uint256, address){
        B.traSignal memory traSignalAlpha = bC.getTraSignal(i, alpha);
        require(i < bC.traSignalAlphaLength(alpha));
        if (reader == alpha){
            return(traSignalAlpha.asset, traSignalAlpha.priceEntry, traSignalAlpha.stopLoss, traSignalAlpha.takeProfit, traSignalAlpha.direction, traSignalAlpha.traSignalId, traSignalAlpha.postDate, traSignalAlpha.alpha);
        } else {
            require(canSeeThisAlpha(reader, alpha) == true);
            return(traSignalAlpha.asset, traSignalAlpha.priceEntry, traSignalAlpha.stopLoss, traSignalAlpha.takeProfit, traSignalAlpha.direction, traSignalAlpha.traSignalId, traSignalAlpha.postDate, traSignalAlpha.alpha);
        }
    }
    
    function getNumTraSignals(address alpha) public view returns(uint16){
        return(bC.traSignalAlphaLength(alpha));
    }

    //Onchain

    function seeOncSig(uint16 index) public view returns(string memory, string memory, string memory, string memory, uint8, uint16, uint256) {
        require(index < cC.getOncGlobLength(), "no list element");
        uint lastPayDate = seeLastPay(msg.sender);
        uint actualDate = block.timestamp;
        if(monAnnu[msg.sender] == 1){
            require((actualDate - lastPayDate) <= 30 days );
        } else {require((actualDate - lastPayDate) <= 364 days );}
        C.oncSignal memory oncSigAlphaGlob = cC.getOncSignalGlob(index);
        return(oncSigAlphaGlob.asset, oncSigAlphaGlob.priceEntry, oncSigAlphaGlob.stopLoss, oncSigAlphaGlob.takeProfit, oncSigAlphaGlob.direction, oncSigAlphaGlob.oncSignalId, oncSigAlphaGlob.postDate);
        
    }

    function seeOncSig2(uint16 i, address alpha, address reader) public view returns(string memory, string memory, string memory, string memory, uint8, uint16, uint256, address){
        C.oncSignal memory oncSignalAlpha = cC.getOncSignal(i, alpha);
        require(i < cC.oncSignalAlphaLength(alpha));
        if (reader == alpha){
            return(oncSignalAlpha.asset, oncSignalAlpha.priceEntry, oncSignalAlpha.stopLoss, oncSignalAlpha.takeProfit, oncSignalAlpha.direction, oncSignalAlpha.oncSignalId, oncSignalAlpha.postDate, oncSignalAlpha.alpha);
        } else {
            require(canSeeThisAlpha(reader, alpha) == true);
            return(oncSignalAlpha.asset, oncSignalAlpha.priceEntry, oncSignalAlpha.stopLoss, oncSignalAlpha.takeProfit, oncSignalAlpha.direction, oncSignalAlpha.oncSignalId, oncSignalAlpha.postDate, oncSignalAlpha.alpha);
        }
    }
    
    function getNumOncSignals(address alpha) public view returns(uint16){
        return(bC.traSignalAlphaLength(alpha) + cC.oncSignalAlphaLength(alpha));
    }

    function getNumSignals(address alpha) public view returns(uint){
        return(alphaAmountTotalSignals[alpha]);
    }
    //PAYMENT

    uint fullPlanMon;
    uint fullPlanAnnu;
    mapping(address => bool) canValidate;
    uint public volume;
    mapping(uint => uint) public ethInContractThisPeriod;

    function setFullPrices(uint mon, uint ann) public { //onlyOwner
        fullPlanMon = mon;
        fullPlanAnnu = ann;
    }

    mapping(address => uint) lastPay;
    mapping(address => uint) monAnnu; // 1 -> monthly
                                      // 2 -> Annual

    function payFullMonth() public payable {
        changePeriod();
        if(seeTotalAlphaScore(msg.sender) > 10 || seeTotalValidatorScore(msg.sender) > 10){
            require(msg.value == fullPlanMon/33);
        } else{
            require(msg.value == fullPlanMon);
        }
        lastPay[msg.sender] = block.timestamp;
            monAnnu[msg.sender] = 1; 

            canValidate[msg.sender] = true;
            volume = volume + msg.value;
            ethInContractThisPeriod[actualPeriod] += msg.value;
    }

    uint discountFullMon = fullPlanMon/20;

    function payFullMonthRefDiscount(address referrer) public payable {
        changePeriod();
        require(msg.value == fullPlanMon - discountFullMon);
        lastPay[msg.sender] = block.timestamp;
        monAnnu[msg.sender] = 1; 
        canValidate[msg.sender] = true;

        payable(referrer).transfer(msg.value/33);
        ethInContractThisPeriod[actualPeriod] += msg.value - msg.value/33;

    }

    function payFullAnnual() public payable {
        changePeriod();
        require(msg.value == fullPlanAnnu);
        lastPay[msg.sender] = block.timestamp;
        monAnnu[msg.sender] = 2; 
        canValidate[msg.sender] = true;
    }

    uint discountFullAnn = fullPlanAnnu/20;

    function payFullAnnualRefDiscount(address referrer) public payable {
        changePeriod();
        require(msg.value == fullPlanAnnu - discountFullAnn);
        lastPay[msg.sender] = block.timestamp;
        monAnnu[msg.sender] = 2; 
        canValidate[msg.sender] = true;
        payable(referrer).transfer(msg.value/33);
    }

    function seePrices() public view returns(uint, uint){
        if(seeTotalAlphaScore(msg.sender) > 10){
        return(fullPlanMon-fullPlanMon/33, fullPlanAnnu-fullPlanAnnu/33);
        } else if(seeTotalAlphaScore(msg.sender) > 20){
        return(fullPlanMon-fullPlanMon/20, fullPlanAnnu-fullPlanAnnu/20);
        } if(seeTotalAlphaScore(msg.sender) > 30){
        return(fullPlanMon-fullPlanMon/10, fullPlanAnnu-fullPlanAnnu/10);
        } if(seeTotalAlphaScore(msg.sender) > 40){
        return(fullPlanMon-fullPlanMon/7, fullPlanAnnu-fullPlanAnnu/7);
        } if(seeTotalAlphaScore(msg.sender) > 50){
        return(fullPlanMon-fullPlanMon/5, fullPlanAnnu-fullPlanAnnu/5);
        } /*...
            ... go to payFullMonth()
            ...
        */ else{
        return(fullPlanMon, fullPlanAnnu);
        }
    }

    function seeDiscPrices() public view returns(uint, uint){
        uint discPriceMon = fullPlanMon - discountFullMon;
        uint discPriceAnn = fullPlanMon - discountFullMon;
        return(discPriceMon, discPriceAnn);
    }

    function seeLastPay(address user) public view returns(uint){
        return(lastPay[user]);
    }

    uint32 constant points = 10000;

    function withdrawFromAlphaBase() public{
        
        require(isActiveAlpha(msg.sender));

        uint total = ethInContractThisPeriod[actualPeriod-period];

        uint32 pointsA = points * 50/100;  // ALPHASCORE
        uint32 pointsB = points * 50/100;  // Accuracy
        //uint32 pointsC = points * 0/100;  // Number of Signals En el periodo
        //uint32 pointsD = points * 0/100;  // Number of Followers En el periodo

        uint ethPerPoint = total / points;

        uint myAlphaScore = seeTotalAlphaScore(msg.sender);

        uint myPerAlphaScore = myAlphaScore/addAllAlphaScores();

        uint amountA = pointsA * myPerAlphaScore * ethPerPoint;

        uint myAccu = bC.accuracyPer(msg.sender); //+ cC.accuracyPercentage2(alpha);

        uint myPerAccu = myAccu / addAllAlphaAccuracy(); 

        uint amountB = pointsB * myPerAccu * ethPerPoint;

        uint ethToSend = amountA + amountB; // +C +D
        address alpha = msg.sender;
        payable(alpha).transfer(ethToSend);
    }

    function showEarnedAmount() public view returns(uint){
        uint total = ethInContractThisPeriod[actualPeriod-period];
        uint32 pointsA = points * 50/100;  // ALPHASCORE
        uint32 pointsB = points * 50/100;  // Accuracy
        uint ethPerPoint = total / points;
        uint myAlphaScore = seeTotalAlphaScore(msg.sender);
        uint myPerAlphaScore = myAlphaScore/addAllAlphaScores();
        uint amountA = pointsA * myPerAlphaScore * ethPerPoint;
        uint myAccu = bC.accuracyPer(msg.sender); //+ cC.accuracyPercentage2(alpha);
        uint myPerAccu = myAccu / addAllAlphaAccuracy(); 
        uint amountB = pointsB * myPerAccu * ethPerPoint;      
        uint ethToSend = amountA + amountB;
        return(ethToSend);
    }

    function seeAllActiveAlpha() public view returns(address[] memory){
        
        uint lenTra = bC.getActiveAlphaTraLen(); 
        // uint lenLow = aC.getActiveAlphaLowLen(); 

        address[] memory combined = new address[](0); 
        address[] memory traList = bC.getActiveAlphaTra();
        // address[] memory lowList = cC.getActiveAlphaLow();
        
        for (uint64 i = 0; i < lenTra; i++) {
            combined[i] = traList[i];
        } 

        /*for(uint64 a = 0; a < lowList.length; a++){

            bool isDuplicate = false;

            for(uint64 i = 0; i < combined.length; i++){
                
                if(lowList[a] == combined[i]){
                    isDuplicate = true;
                    break;
                }
            
                if (!isDuplicate) {
                    combined.push(lowList[i]);
                }
            }

        }*/

        return(combined);
    }

    function seeActiveAlphaScore(uint t) public view returns(uint) {
        address[] memory activeAlphaAddresses = seeAllActiveAlpha();
        require(t < activeAlphaAddresses.length);
        return(seeTotalAlphaScore(activeAlphaAddresses[t]));
    }

    function addAllAlphaScores() public view returns(uint){
        address[] memory activeAlphaAddresses = seeAllActiveAlpha();
        uint totalAlphaActiveScore;
        for(uint64 i = 0; i < activeAlphaAddresses.length; i++){
            totalAlphaActiveScore = totalAlphaActiveScore + seeActiveAlphaScore(i);
        }
        return totalAlphaActiveScore;
    }

    function seeActiveAlphaAccu(uint t) public view returns(uint) {
        address[] memory activeAlphaAddresses = seeAllActiveAlpha();
        require(t < activeAlphaAddresses.length);
        uint activeAlphaAccu = bC.accuracyPer(activeAlphaAddresses[t]); //+ cC.accuracyPer(activeAlphaAddresses[t])
        return(activeAlphaAccu);
    }

    function addAllAlphaAccuracy() public view returns(uint){
        address[] memory activeAlphaAddresses = seeAllActiveAlpha();
        uint totalAlphaActiveAccu;
        for(uint64 i = 0; i < activeAlphaAddresses.length; i++){
            totalAlphaActiveAccu = totalAlphaActiveAccu + seeActiveAlphaAccu(i);
        }
        return totalAlphaActiveAccu;
    }

    function isActiveAlpha(address alpha) public view returns(bool){
        if(actualPeriod + period > bC.seeLastPostTra(alpha)) /* || actualPeriod + period > cC.lastPostLows + 10 days*/{
            return(true);
        } else {return(false);}
    }

    //MyAlpha Payment Plans

    struct followerS{
        address follower;
        uint lastAlphaPay;
        uint8 planPaid;
    } 

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

    function seeAlphasFollowing(address user, uint i) public view returns(address){
        require(i < imFollowing[user].length);
        return(imFollowing[user][i]);
    }

    function seeImFollowingListLen(address user) public view returns(uint){
        return(imFollowing[user].length);
    }

    function canSeeThisAlpha(address user, address alpha) public view returns(bool){
        for(uint16 i = 0; i < followers[alpha].length; i++){
            if(user == followers[alpha][i].follower){
                if(followers[alpha][i].planPaid == 1){
                    if(block.timestamp < followers[alpha][i].lastAlphaPay + 30 days){
                        return(true);
                    } else {return(false);}
                } else {
                    if(block.timestamp < followers[alpha][i].lastAlphaPay + 364 days){
                        return(true);
                    } else {return(false);}
                }
            } 
        }
        return(false);
    } 

    function seeTotalValidatorScore(address user) public view returns(uint){
        return(bC.seeValidatorScore1(user)); //+ bC.seeValidatorScore2(user) + ... + ...
    }

    function setActualPeriod(uint timestamp) public { //onlyOwner
        actualPeriod = timestamp;
        periodNum++;
    }

    uint period = 30 days;
    uint actualPeriod;
    uint32 periodNum;

    function changePeriod() public {
        uint actualDay = block.timestamp;
        if(actualPeriod + period > actualDay) { //Dentro del period
            actualPeriod = actualPeriod;
        } else { //actualDay fuera del periodo actual
            actualPeriod = actualPeriod + period;
        }
    }

}


//___________________________________________________________________________________
//_______________________Trading Contract____________________________________
//___________________________________________________________________________________


contract B {

    function setActualPeriod(uint timestamp) public { //onlyOwner
        actualPeriod = timestamp;
        periodNum++;
    }

    uint period = 30 days;
    uint actualPeriod;
    uint32 periodNum;

    function changePeriod() public {
        uint actualDay = block.timestamp;
        if(actualPeriod + period > actualDay) { //Dentro del period
            actualPeriod = actualPeriod;
        } else { //actualDay fuera del periodo actual
            actualPeriod = actualPeriod + period;
        }
    }

    struct traSignal {
        string asset;
        string priceEntry;
        string stopLoss;
        string takeProfit; 
        uint8 direction;
        uint16 traSignalId;
        uint256 postDate;
        address alpha;
        string _msg;
        int success; // if(<0) = fail
        uint8 timesVal; //número de veces que se ha valorado
    }

    uint16 public maxLengthTrad = 100;
    uint16 traSignalNum;
    traSignal [] public traSignals;
    traSignal [] public traSignalsGlob;
    mapping(address => traSignal[]) public alphaTradInfoFromAddress;
    mapping(address => uint16) AmountTradSignals;
    mapping(address => uint) public lastPostTra;
    mapping(uint => address[]) public traActiveAlphaProvsThisPeriod;

    function addTraSignal(string memory asset, string memory _priceEntry, string memory _stopLoss, string memory _takeProfit, uint8 _direction, string memory _msg) public {
        changePeriod();
        if(traSignalsGlob.length == maxLengthTrad){
            for (uint32 i = 0; i <= traSignalsGlob.length - 1; i++) {
                traSignalsGlob[i] = traSignalsGlob[i + 1];
            }
            traSignalsGlob.pop();
        }
        traSignalNum++;
        uint16 _traSignalId  =  traSignalNum;
        traSignal memory newTraSignal = traSignal(asset, _priceEntry, _stopLoss, _takeProfit, _direction, _traSignalId, block.timestamp, msg.sender, _msg, 0, 0);
        traSignals.push(newTraSignal); //NOT NECESARY
        traSignalsGlob.push(newTraSignal);
        alphaTradInfoFromAddress[msg.sender].push(newTraSignal);
        AmountTradSignals[msg.sender]++;
        lastPostTra[msg.sender] = block.timestamp;
        traActiveAlphaProvsThisPeriod[actualPeriod].push(msg.sender);
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

    function seeLastPostTra(address alpha) public view returns(uint){
        return(lastPostTra[alpha]);
    }

    function getActiveAlphaTra() public view returns(address[] memory){
        return(traActiveAlphaProvsThisPeriod[actualPeriod]);
    }

    function getActiveAlphaTraLen() public view returns(uint){
        return(traActiveAlphaProvsThisPeriod[actualPeriod].length);
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

    mapping(address => uint) addrPosNum;        // Aciertos
    mapping(address => uint) addrTotValNum;     // Total de señales valoradas
                                                // para obtener % de accierto

    struct valid{
        address user;
        uint8 val; //voto a la señal
    }

    valid[] validList;

    mapping(uint16 => valid[]) tradSigIdToValid;

    mapping(address => uint16) public validatorScore1;

    function validate(uint16 _traSignalId, uint8 posNeg) public {

        uint i =  findTraSignalIndex(_traSignalId);
        traSignal storage traGlob = traSignalsGlob[i];
        valid memory val2 = valid(msg.sender, posNeg);
        require(traGlob.timesVal < 6 );
        if(traGlob.timesVal < 5){
            tradSigIdToValid[_traSignalId].push(val2);
            if(posNeg == 0 /*good Signal*/){
                traGlob.success++;
                traGlob.timesVal++;
            }
            else{
                traGlob.success--;
                traGlob.timesVal++;
            }
        } else if(traGlob.timesVal == 5) {
            tradSigIdToValid[_traSignalId].push(val2);
            if(posNeg == 0){
                traGlob.success++;
                traGlob.timesVal++;
            }
            else{
                traGlob.success--;
                traGlob.timesVal++;
            }
            //
            if(traGlob.success < 0){
               addrTotValNum[traGlob.alpha]++;
               seeAlphaTraScore[traGlob.alpha]--;
               for (uint8 a; a < tradSigIdToValid[_traSignalId].length; a++){
                    valid storage val3 = tradSigIdToValid[_traSignalId][a];
                    if(val3.val == 0){
                        validatorScore1[val3.user]--;
                    } else {validatorScore1[val3.user]++;}
                }
            } else {
                addrTotValNum[traGlob.alpha]++;
                addrPosNum[traGlob.alpha]++;
                seeAlphaTraScore[traGlob.alpha]++;
                for (uint8 a; a < tradSigIdToValid[_traSignalId].length; a++){
                    valid storage val3 = tradSigIdToValid[_traSignalId][a];
                    if(val3.val == 1){
                        validatorScore1[val3.user]--;
                    } else {validatorScore1[val3.user]++;}
                }
            }

        }
    }

    function findTraSignalIndex(uint16 traSignalId) internal view returns (uint) {
        for (uint i = 0; i < traSignalsGlob.length; i++) {
            if (traSignalsGlob[i].traSignalId == traSignalId) {
                return i;
            }
        }
        return traSignals.length; 
    }

    function seeValidatorScore1(address user) public view returns(uint16) {
        return(validatorScore1[user]);
    }

    mapping(address => uint) public accuracyPer;
    
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
    
}

//___________________________________________________________________________________
//_______________________Onchain Contract____________________________________
//___________________________________________________________________________________


contract C {

    function setActualPeriod(uint timestamp) public { //onlyOwner
        actualPeriod = timestamp;
        periodNum++;
    }

    uint period = 30 days;
    uint actualPeriod;
    uint32 periodNum;

    function changePeriod() public {
        uint actualDay = block.timestamp;
        if(actualPeriod + period > actualDay) { //Dentro del period
            actualPeriod = actualPeriod;
        } else { //actualDay fuera del periodo actual
            actualPeriod = actualPeriod + period;
        }
    }

    struct oncSignal {
        string asset;
        address tokenAddr;
        string priceEntry;
        string stopLoss;
        string takeProfit; 
        uint8 direction;
        uint16 oncSignalId;
        uint256 postDate;
        address alpha;
        string _msg;
        int success; // if(<0) = fail
        uint8 timesVal; //número de veces que se ha valorado
    }

    uint16 public maxLengthOnc = 100;
    uint16 oncSignalNum;
    oncSignal [] public oncSignals;
    oncSignal [] public oncSignalsGlob;
    mapping(address => oncSignal[]) public alphaOncInfoFromAddress;
    mapping(address => uint16) AmountOncSignals;
    mapping(address => uint) public lastPostOnc;
    mapping(uint => address[]) public traActiveAlphaProvsThisPeriod;

    function addOncSignal(string memory asset, address tokenAddr, string memory _priceEntry, string memory _stopLoss, string memory _takeProfit, uint8 _direction, string memory _msg) public {
        changePeriod();
        if(oncSignalsGlob.length == maxLengthOnc){
            for (uint32 i = 0; i <= oncSignalsGlob.length - 1; i++) {
                oncSignalsGlob[i] = oncSignalsGlob[i + 1];
            }
            oncSignalsGlob.pop();
        }
        oncSignalNum++;
        uint16 _oncSignalId  =  oncSignalNum;
        oncSignal memory newOncSignal = oncSignal(asset, tokenAddr, _priceEntry, _stopLoss, _takeProfit, _direction, _oncSignalId, block.timestamp, msg.sender, _msg, 0, 0);
        oncSignals.push(newOncSignal); //NOT NECESARY
        oncSignalsGlob.push(newOncSignal);
        alphaOncInfoFromAddress[msg.sender].push(newOncSignal);
        AmountOncSignals[msg.sender]++;
        lastPostOnc[msg.sender] = block.timestamp;
        traActiveAlphaProvsThisPeriod[actualPeriod].push(msg.sender);
        uint perAccuracy =  accuracyPercentage(msg.sender);
        uint _score = seeAlphaOncScore[msg.sender];
        uint altIndex = 50 + uint256(keccak256(abi.encodePacked(block.timestamp, msg.sender))) % 50;
        uint altIndex2 = 75 + uint256(keccak256(abi.encodePacked(block.timestamp, msg.sender))) % 25;
        uint altIndex3 = 75 + uint256(keccak256(abi.encodePacked(block.timestamp, msg.sender))) % 25;
        uint altIndex4 = 75 + uint256(keccak256(abi.encodePacked(block.timestamp, msg.sender))) % 25;
        uint altIndex5 = 75 + uint256(keccak256(abi.encodePacked(block.timestamp, msg.sender))) % 25;

        if(_score > 10 && perAccuracy > 50){oncSignalsGlob[altIndex] = newOncSignal;} 
        else if(_score > 25 && perAccuracy > 50){oncSignalsGlob[altIndex] = newOncSignal; oncSignalsGlob[altIndex2] = newOncSignal; }
        else if(_score > 50 && perAccuracy > 50){
            oncSignalsGlob[altIndex] = newOncSignal; 
            oncSignalsGlob[altIndex2] = newOncSignal; 
            oncSignalsGlob[altIndex3] = newOncSignal;
            oncSignalsGlob[altIndex4] = newOncSignal;
            }
        else if(_score > 75 && perAccuracy > 50){
            oncSignalsGlob[altIndex] = newOncSignal; 
            oncSignalsGlob[altIndex2] = newOncSignal; 
            oncSignalsGlob[altIndex3] = newOncSignal;
            oncSignalsGlob[altIndex4] = newOncSignal;
            oncSignalsGlob[altIndex5] = newOncSignal;
            }
    }

    function seeLastPostOnc(address alpha) public view returns(uint){
        return(lastPostOnc[alpha]);
    }

    function getActiveAlphaOnc() public view returns(address[] memory){
        return(traActiveAlphaProvsThisPeriod[actualPeriod]);
    }

    function getActiveAlphaOncLen() public view returns(uint){
        return(traActiveAlphaProvsThisPeriod[actualPeriod].length);
    }


    function getOncSignalGlob(uint16 index) public view returns (oncSignal memory) {
        require(index < oncSignalsGlob.length, "Index out of bounds");
        return oncSignalsGlob[index];
    }

    function getOncSignal(uint16 index, address alpha) public view returns (oncSignal memory) {
        return alphaOncInfoFromAddress[alpha][index];
    }
    

    mapping(address => uint) seeAlphaOncScore;

    function getAlphaScore(address alpha) public view returns(uint){
        return(seeAlphaOncScore[alpha]);
    }

    mapping(address => uint) addrPosNum;        // Aciertos
    mapping(address => uint) addrTotValNum;     // Total de señales valoradas
                                                // para obtener % de accierto

    struct valid{
        address user;
        uint8 val; //voto a la señal
    }

    valid[] validList;

    mapping(uint16 => valid[]) oncSigIdToValid;

    mapping(address => uint16) public validatorScore2;

    function validate(uint16 _oncSignalId, uint8 posNeg) public {

        uint i =  findOncSignalIndex(_oncSignalId);
        oncSignal storage oncGlob = oncSignalsGlob[i];
        valid memory val2 = valid(msg.sender, posNeg);
        require(oncGlob.timesVal < 6 );
        if(oncGlob.timesVal < 5){
            oncSigIdToValid[_oncSignalId].push(val2);
            if(posNeg == 0 /*good Signal*/){
                oncGlob.success++;
                oncGlob.timesVal++;
            }
            else{
                oncGlob.success--;
                oncGlob.timesVal++;
            }
        } else if(oncGlob.timesVal == 5) {
            oncSigIdToValid[_oncSignalId].push(val2);
            if(posNeg == 0){
                oncGlob.success++;
                oncGlob.timesVal++;
            }
            else{
                oncGlob.success--;
                oncGlob.timesVal++;
            }
            //
            if(oncGlob.success < 0){
               addrTotValNum[oncGlob.alpha]++;
               seeAlphaOncScore[oncGlob.alpha]--;
               for (uint8 a; a < oncSigIdToValid[_oncSignalId].length; a++){
                    valid storage val3 = oncSigIdToValid[_oncSignalId][a];
                    if(val3.val == 0){
                        validatorScore2[val3.user]--;
                    } else {validatorScore2[val3.user]++;}
                }
            } else {
                addrTotValNum[oncGlob.alpha]++;
                addrPosNum[oncGlob.alpha]++;
                seeAlphaOncScore[oncGlob.alpha]++;
                for (uint8 a; a < oncSigIdToValid[_oncSignalId].length; a++){
                    valid storage val3 = oncSigIdToValid[_oncSignalId][a];
                    if(val3.val == 1){
                        validatorScore2[val3.user]--;
                    } else {validatorScore2[val3.user]++;}
                }
            }

        }
    }

    function findOncSignalIndex(uint16 oncSignalId) internal view returns (uint) {
        for (uint i = 0; i < oncSignalsGlob.length; i++) {
            if (oncSignalsGlob[i].oncSignalId == oncSignalId) {
                return i;
            }
        }
        return oncSignals.length; 
    }

    function seeValidatorScore2(address user) public view returns(uint16) {
        return(validatorScore2[user]);
    }

    mapping(address => uint) public accuracyPer;
    
    function accuracyPercentage(address addr) public returns(uint){
       if(addrTotValNum[addr] > 0){
            accuracyPer[addr] = (addrPosNum[addr]*100) / addrTotValNum[addr];
            uint per = accuracyPer[addr];
            return(per);
       } else {return(0);}
    }
   
   function getOncGlobLength() public view returns(uint16){
        return(uint16(oncSignalsGlob.length));
    }

    function oncSignalAlphaLength(address alpha) public view returns(uint16){
        return(uint16(alphaOncInfoFromAddress[alpha].length));
    }
    
}
