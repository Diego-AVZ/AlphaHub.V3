//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract referralProgramAlphaBase {

    address owner;

    constructor () {
        owner = msg.sender;
    }

    modifier onlyOwner () {
        require(msg.sender == owner, "not owner");
        _;
    }

    mapping(address => string) public addressCode;
    mapping(string => address) public codeAddress;
    mapping(address => uint32) public AddressPuntuation;
    uint32 public pointsRef;
    uint32 public points;
    string[] codeList;
    mapping(address => bool) hasReg;
    mapping(address => string) public codeUsed;
    
    mapping(address => uint32) timesUsedReferralCode;

    function setPoinsAmount(uint32 _points) public onlyOwner{
        points = _points;
    }

    function setPoinsReferrer(uint32 _points) public onlyOwner{
        pointsRef = _points;
    }

    function createCode(string memory code) public {
        require(codeListReview(code) == false, "This code exist, please choose another code");
        addressCode[msg.sender] = code;
        codeAddress[code] = msg.sender;
        AddressPuntuation[msg.sender] += points;
        codeList.push(code);
    }

    function codeListReview(string memory code) public view returns(bool isInList) {
        uint32 i;
        for(i = 0; i < codeList.length; i++){
            if (keccak256(abi.encodePacked(code)) == keccak256(abi.encodePacked(codeList[i]))) {
                return(true);
            } 
        }
        return(false);
    } 

    function regWithCode(string memory code) public {
        require(hasReg[msg.sender] == false);
        require(codeListReview(code) == true);
        address referrer = codeAddress[code];
        AddressPuntuation[referrer] += pointsRef;
        AddressPuntuation[msg.sender] += points; 
        hasReg[msg.sender] = true;
        timesUsedReferralCode[referrer] += 1;
        codeUsed[msg.sender] = code;
    }

    function seeIfHasReg(address user) public view returns(address){
        return (codeAddress[codeUsed[user]]);
    }  // JS tiene una función la address llama a seeIfHasReg(addressConnected) y le devuelve la address del referrer al que eviar el % de ETH pagado por USER

    function seeMyCode(address user) public view returns(string memory){
        return addressCode[user];
    }
} 
