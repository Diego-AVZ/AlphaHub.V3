//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract academy {

    mapping (address => address[]) myCoursesEn;
    mapping (address => address[]) misCursosEsp;

    function createCourse(string memory name, string memory imgLink, uint8 _type, uint8 lang) public {
        myCourse newCourse = new myCourse(name, imgLink, _type);
        if(lang == 0) /*English*/ {
            myCoursesEn[msg.sender].push(address(newCourse));
        } else /*Español "if(lang == 1)*/{
            misCursosEsp[msg.sender].push(address(newCourse));
        }
    }

    address courseAddress;

    function setAddress(address myCourseAddr) public{
        courseAddress = myCourseAddr;
    }

    myCourse mc = myCourse(courseAddress);

    function seeCourses() public {
    }
}

contract myCourse {
    
    string courseName;
    string courseImgLink;
    uint8 courseType;

    constructor (string memory name, string memory imgLink, uint8 _type){
        courseName = name;
        courseImgLink = imgLink;
        courseType = _type;
    }

    struct contendS {
        uint8 _type;
        string contend;
        uint8 style;
    }

    // _type: 0 = h1; 1 = h2; 2 = text;  3 = img; 4 = video; 5 = link; ...
    // style: 0 = normal; 1 = bold; 2 = underline; 3 = red; 4 = blue; 5 = green; ...

    contendS[] contendsList; // Course Contend

    function addContend(uint8 x, string memory c, uint8 s) public {
        contendS memory newContend = contendS(x, c, s);
        contendsList.push(newContend);
    }

    function getContend(uint8 i) public view returns(contendS memory) {
        return(contendsList[i]);
    }

}
