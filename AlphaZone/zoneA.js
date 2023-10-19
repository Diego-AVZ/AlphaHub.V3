var walletBut = document.getElementById("wallet");
var connectedAddress;
var msg1 = document.getElementById("msg1");
var msg2 = document.getElementById("msg2");
var cover = document.getElementById("cover");

walletBut.addEventListener("click", async()=>{
    if (typeof window.ethereum !== "undefined") {
      try {
        const Accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        console.log("MTMSK Connected");
        connectedAddress = Accounts[0];
        console.log(connectedAddress);
        walletBut.innerText = "Connected";
        walletBut.style.paddingLeft = "3vw";
        walletBut.style.background ="linear-gradient(90deg, rgb(14 116 18), rgb(2, 165, 45), rgba(0, 24, 2, 0.541))";
        msg1.style.display = "none";
        cover.style.display = "none";
        showEthAddress();
        seeIfIsAlpha();
      } catch (error) {
        console.log("ERROR al Conectar MTMSK");
      }
    } else {
      console.log("MTMSK Not Detected");
    }
});

function showEthAddress() {
  var start = connectedAddress.slice(0, 6);
  var end = connectedAddress.slice(-4);

  document.getElementById("address").innerText = `${start}...${end}`;
}


//CONNECT CONTRACT
const conAddress = "0x77F5D9d255053262e2C97A837fb70dC6cEF4F0B2";
const ABI = [ ];

const web3Instance = new Web3(window.ethereum);

const contract = new web3Instance.eth.Contract(ABI, conAddress);

var alphaZone = document.getElementById("aphaZoneDiv");

const seeIfIsAlpha = async () => {
    try {
        var isAlphaBool = await contract.methods.seeAlphaProvsList(connectedAddress).call();
        if(isAlphaBool == true) {
            alphaZone.style.display = "block";
        } else {
            msg2.style.display = "flex";
        }
    } catch(error){console.log(error)}
}

//SIGNALS

var alphaTrad = document.getElementById("alphaTrad");
var alphaOnchain = document.getElementById("alphaOnchain");
var alphaICO = document.getElementById("alphaICO");
var alphaLows = document.getElementById("alphaLows");
var addTradingSignals = document.getElementById("addTradingSignals");
var addOnchainSignals = document.getElementById("addOnchainSignals");
var addLowsSignals = document.getElementById("addLowsSignals");
var addIcoSignals = document.getElementById("addIcoSignals");
var tradingSigList = document.getElementById("tradingSigList");
var onchainSigList = document.getElementById("onchainSigList");
var lowSigList = document.getElementById("LowSigList");
var icoSigList = document.getElementById("icoSigList");

alphaTrad.addEventListener("click", function(){
  alphaTrad.style.height = "7vh";
  addTradingSignals.style.display = "block";
  addOnchainSignals.style.display = "none";
  addLowsSignals.style.display = "none";
  addIcoSignals.style.display = "none";
  alphaOnchain.style.height = "6vh";
  alphaOnchain.style.background =
    "linear-gradient(0deg, rgb(0, 41, 191, 0.3), rgb(46, 81, 255, 0.3), rgb(0, 41, 191, 0.3), rgb(10, 2, 95, 0.3));";
  alphaICO.style.height = "6vh";
  alphaICO.style.background =
    "linear-gradient(0deg, rgb(0, 41, 191, 0.3), rgb(46, 81, 255, 0.3), rgb(0, 41, 191, 0.3), rgb(10, 2, 95, 0.3));";
  alphaLows.style.height = "6vh";
  alphaLows.style.background =
    "linear-gradient(0deg, rgb(0, 41, 191, 0.3), rgb(46, 81, 255, 0.3), rgb(0, 41, 191, 0.3), rgb(10, 2, 95, 0.3));";
    tradingSigList.style.display = "block";
    onchainSigList.style.display = "none";
    lowSigList.style.display = "none";
    icoSigList.style.display = "none";
});

alphaOnchain.addEventListener("click", function () {
  alphaOnchain.style.height = "7vh";
  addTradingSignals.style.display = "none";
  addOnchainSignals.style.display = "block";
  addLowsSignals.style.display = "none";
  addIcoSignals.style.display = "none";
  alphaTrad.style.height = "6vh";
  alphaTrad.style.background =
    "linear-gradient(0deg, rgb(0, 41, 191, 0.3), rgb(46, 81, 255, 0.3), rgb(0, 41, 191, 0.3), rgb(10, 2, 95, 0.3));";
  alphaICO.style.height = "6vh";
  alphaICO.style.background =
    "linear-gradient(0deg, rgb(0, 41, 191, 0.3), rgb(46, 81, 255, 0.3), rgb(0, 41, 191, 0.3), rgb(10, 2, 95, 0.3));";
  alphaLows.style.height = "6vh";
  alphaLows.style.background =
    "linear-gradient(0deg, rgb(0, 41, 191, 0.3), rgb(46, 81, 255, 0.3), rgb(0, 41, 191, 0.3), rgb(10, 2, 95, 0.3));";
    tradingSigList.style.display = "none";
    onchainSigList.style.display = "block";
    lowSigList.style.display = "none";
    icoSigList.style.display = "none";
});

alphaLows.addEventListener("click", function () {
  alphaLows.style.height = "7vh";
  addTradingSignals.style.display = "none";
  addOnchainSignals.style.display = "none";
  addLowsSignals.style.display = "block";
  addIcoSignals.style.display = "none";
  alphaTrad.style.height = "6vh";
  alphaTrad.style.background =
    "linear-gradient(0deg, rgb(0, 41, 191, 0.3), rgb(46, 81, 255, 0.3), rgb(0, 41, 191, 0.3), rgb(10, 2, 95, 0.3));";
  alphaICO.style.height = "6vh";
  alphaICO.style.background =
    "linear-gradient(0deg, rgb(0, 41, 191, 0.3), rgb(46, 81, 255, 0.3), rgb(0, 41, 191, 0.3), rgb(10, 2, 95, 0.3));";
  alphaOnchain.style.height = "6vh";
  alphaOnchain.style.background =
    "linear-gradient(0deg, rgb(0, 41, 191, 0.3), rgb(46, 81, 255, 0.3), rgb(0, 41, 191, 0.3), rgb(10, 2, 95, 0.3));";
    tradingSigList.style.display = "none";
    onchainSigList.style.display = "none";
    lowSigList.style.display = "block";
    icoSigList.style.display = "none";
});

alphaICO.addEventListener("click", function () {
  alphaICO.style.height = "7vh";
  addTradingSignals.style.display = "none";
  addOnchainSignals.style.display = "none";
  addLowsSignals.style.display = "none";
  addIcoSignals.style.display = "block";
  alphaTrad.style.height = "6vh";
  alphaTrad.style.background =
    "linear-gradient(0deg, rgb(0, 41, 191, 0.3), rgb(46, 81, 255, 0.3), rgb(0, 41, 191, 0.3), rgb(10, 2, 95, 0.3));";
  alphaLows.style.height = "6vh";
  alphaLows.style.background =
    "linear-gradient(0deg, rgb(0, 41, 191, 0.3), rgb(46, 81, 255, 0.3), rgb(0, 41, 191, 0.3), rgb(10, 2, 95, 0.3));";
  alphaOnchain.style.height = "6vh";
  alphaOnchain.style.background =
    "linear-gradient(0deg, rgb(0, 41, 191, 0.3), rgb(46, 81, 255, 0.3), rgb(0, 41, 191, 0.3), rgb(10, 2, 95, 0.3));";
    tradingSigList.style.display = "none";
    onchainSigList.style.display = "none";
    lowSigList.style.display = "none";
    icoSigList.style.display = "block";
});

var long = document.getElementById("long");
var short = document.getElementById("short");

long.addEventListener("click", function(){
  long.style.backgroundColor = "#047c00";
  short.style.backgroundColor = "#420e0e";
});

short.addEventListener("click", function () {
  long.style.backgroundColor = "#123611";
  short.style.backgroundColor = "rgb(235 1 1)";
});

var set1 = document.getElementById("set1");
var setName = document.getElementById("setName");
var _name = document.getElementById("name");

set1.addEventListener("click", function(){
  if (setName.style.display === "none" || setName.style.display === "") {
    setName.style.display = "block";
  } else {
    setName.style.display = "none";
  }
});

set1.addEventListener("mouseover", function(){
  _name.style.color = "white";
});

set1.addEventListener("mouseout", function () {
  _name.style.color = "rgba(255, 255, 255, 0.742)";
});


