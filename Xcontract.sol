//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract alphaBaseX1 {
    // for msg list for signals
    // for save signals

    mapping(uint16 => string[]) signalMsgList;

    function addNewMsg(uint16 sigId, string memory newMsg) public {
        signalMsgList[sigId].push(newMsg);
    }

    function seeMsgList(uint16 sigId, uint8 i) public view returns(string memory){
        return(signalMsgList[sigId][i]);
    }

    //_____________________

    mapping(address => uint16) userToHisSavedSigId;
}
