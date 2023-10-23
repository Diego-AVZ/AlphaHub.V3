var walletBut = document.getElementById("wallet");
var connectedAddress;
var msg1 = document.getElementById("msg1");
var msg2 = document.getElementById("msg2");
var cover = document.getElementById("cover");

walletBut.addEventListener("click", async () => {
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
      walletBut.style.background =
        "linear-gradient(90deg, rgb(14 116 18), rgb(2, 165, 45), rgba(0, 24, 2, 0.541))";
      msg1.style.display = "none";
      cover.style.display = "none";
      showEthAddress();
      seeName();
      getAlphaScore();
      getSignalsNum();
      seeTraSig2();
      /*seeIfIsAlpha();*/
    } catch (error) {
      console.log("ERROR al Conectar MTMSK");
    }
  } else {
    console.log("MTMSK Not Detected");
  }
});

async function connect() {
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
      walletBut.style.background =
        "linear-gradient(90deg, rgb(14 116 18), rgb(2, 165, 45), rgba(0, 24, 2, 0.541))";
      msg1.style.display = "none";
      cover.style.display = "none";
      showEthAddress();
      seeName();
      getAlphaScore();
      getSignalsNum();
      seeTraSig2();
      /*seeIfIsAlpha();*/
    } catch (error) {
      console.log("ERROR al Conectar MTMSK");
    }
  } else {
    console.log("MTMSK Not Detected");
  }
}

connect();

function showEthAddress() {
  var start = connectedAddress.slice(0, 6);
  var end = connectedAddress.slice(-4);

  document.getElementById("address").innerText = `${start}...${end}`;
}

//CONNECT CONTRACT
const conAddress = "0xa93a715247E8BFF4b0bDc56a286CcdFed8CB3fEa";

const web3Instance = new Web3(window.ethereum);

var alphaZone = document.getElementById("aphaZoneDiv");

/*const seeIfIsAlpha = async () => {
    try {
        var isAlphaBool = await contract.methods.seeAlphaProvsList(connectedAddress).call(); //CREA ESTA FUNCIÓN
        if(isAlphaBool == true) {
            alphaZone.style.display = "block";
        } else {
            msg2.style.display = "flex";
        }
    } catch(error){console.log(error)}
}*/

var changeNameBut = document.getElementById("changeNameBut");
var nameInput = document.getElementById("changeName");

changeNameBut.addEventListener("click", async () => {
  try {
    var name = nameInput.value.toLowerCase();
    await contract.methods.setName(name).send({ from: connectedAddress });
  } catch (error) {
    console.log(error);
  }
});

async function seeName() {
  var hisName = await contract.methods.seeName(connectedAddress).call();
  document.getElementById("name").innerHTML = `${hisName.toUpperCase()}`;
}

async function getAlphaScore() {
  var hisScore = await contract.methods.getAlphaScore(connectedAddress).call();
  document.getElementById("score").innerHTML = `${hisScore}`;
}

var hisSignals;
async function getSignalsNum() {
  hisSignals = await contract.methods.getNumSignals(connectedAddress).call();
  document.getElementById("numSig").innerHTML = `${hisSignals}`;
}

var valueId;

async function seeTraSig2() {
  var tradingSigList = document.getElementById("tradingSigList");
  var numSignals = await contract.methods.getNumSignals(connectedAddress).call();

  if(numSignals < 50){

      for (let i = numSignals - 1; i >= 0; i--) {
        var traSignal = await contract.methods.seeTraSig2(i, connectedAddress).call();
        
        var signalDiv = document.createElement("div");
        signalDiv.classList.add("signalTrad");
        var assetP = document.createElement("p");
        assetP.innerText = `${traSignal[0]}`;
        assetP.classList.add("assetS");

        if (`${traSignal[0]}` == "BTC" || `${traSignal[0]}` == "btc") {
          var btcImg = document.createElement("img");
          btcImg.src = "btc.png";
          btcImg.classList.add("assetImg");
          signalDiv.appendChild(btcImg);
        } else if (`${traSignal[0]}` == "ETH" || `${traSignal[0]}` == "eth") {
          var ethImg = document.createElement("img");
          ethImg.src = "eth.png";
          ethImg.classList.add("assetImg");
          signalDiv.appendChild(ethImg);
        } else {
          var elseImg = document.createElement("img");
          elseImg.src =
            "https://image.spreadshirtmedia.net/image-server/v1/compositions/T56A2PA4115PT17X0Y67D157542882W24948H18711/views/1,width=550,height=550,appearanceId=2,backgroundColor=000000,noPt=true/signo-de-interrogacion-planeado-hae-simbolo-signo-regalo-bolsa-de-tela.jpg";
          elseImg.classList.add("assetImg");
          signalDiv.appendChild(elseImg);
          elseImg.style.borderRadius ="2vw"
        }

        var entryP = document.createElement("p");
        entryP.innerText = `${traSignal[1]}`;
        entryP.classList.add("entryS");
        var slP = document.createElement("p");
        slP.innerText = `${traSignal[2]}`;
        if (traSignal[4] == 1) {
          slP.classList.add("slSlong");
        } else {
          slP.classList.add("slSshort");
        }
        var tpP = document.createElement("p");
        tpP.innerText = `${traSignal[3]}`;
        if (traSignal[4] == 1) {
          tpP.classList.add("tpSlong");
        } else {
          tpP.classList.add("tpSshort");
        }
        var dirP = document.createElement("p");
        var LoS = "";
        if (traSignal[4] == 1) {
          LoS = "🟢Long";
        } else {
          LoS = "🔴Short";
        }
        dirP.innerText = `${LoS}`;
        dirP.classList.add("dirS");

        signalDiv.appendChild(entryP);
        signalDiv.appendChild(assetP);
        signalDiv.appendChild(slP);
        signalDiv.appendChild(tpP);
        signalDiv.appendChild(dirP);
        tradingSigList.appendChild(signalDiv);
      }
    } else{
        for (let i = numSignals - 1; i >= numSignals-50; i--) { // solo salen las 50 primeras señales de trading
          var traSignal = await contract.methods.seeTraSig2(i, connectedAddress).call();
          
          var signalDiv = document.createElement("div");
          signalDiv.classList.add("signalTrad");
          signalDiv.setAttribute("data-valor", `${traSignal[0]}`);

          (function (signal) {
            // ESTA FUNCION PERMITE VALIDAR Y CALIFICAR LAS SEÑALES CON UN CLICK, CLICKANDO. CAMBIA `${traSignal[0]}` por EL ID de la señal o la address del Alpha
            signal.addEventListener("click", function () {
              console.log(signal.getAttribute("data-valor"));
            });
          })(signalDiv);

          var assetP = document.createElement("p");
          assetP.innerText = `${traSignal[0]}`;
          assetP.classList.add("assetS");

          if (`${traSignal[0]}` == "BTC" || `${traSignal[0]}` == "btc") {
            var btcImg = document.createElement("img");
            btcImg.src = "btc.png";
            btcImg.classList.add("assetImg");
            signalDiv.appendChild(btcImg);
          } else if (`${traSignal[0]}` == "ETH" || `${traSignal[0]}` == "eth") {
            var ethImg = document.createElement("img");
            ethImg.src = "eth.png";
            ethImg.classList.add("assetImg");
            signalDiv.appendChild(ethImg);
          } else {
            var elseImg = document.createElement("img");
            elseImg.src =
              "https://image.spreadshirtmedia.net/image-server/v1/compositions/T56A2PA4115PT17X0Y67D157542882W24948H18711/views/1,width=550,height=550,appearanceId=2,backgroundColor=000000,noPt=true/signo-de-interrogacion-planeado-hae-simbolo-signo-regalo-bolsa-de-tela.jpg";
            elseImg.classList.add("assetImg");
            signalDiv.appendChild(elseImg);
            elseImg.style.borderRadius ="2vw"
          }

          var entryP = document.createElement("p");
          entryP.innerText = `$ ${traSignal[1]}`;
          entryP.classList.add("entryS");
          var slP = document.createElement("p");
          slP.innerText = `$ ${traSignal[2]}`;
          if (traSignal[4] == 1) {
            slP.classList.add("slSlong");
          } else {
            slP.classList.add("slSshort");
          }
          var tpP = document.createElement("p");
          tpP.innerText = `$ ${traSignal[3]}`;
          if (traSignal[4] == 1) {
            tpP.classList.add("tpSlong");
          } else {
            tpP.classList.add("tpSshort");
          }
          var dirP = document.createElement("p");
          var LoS = "";
          if (traSignal[4] == 1) {
            LoS = "🟢Long";
          } else {
            LoS = "🔴Short";
          }
          dirP.innerText = `${LoS}`;
          dirP.classList.add("dirS");

          var date = document.createElement("p");
          date.classList.add("date");
          var postBlock = `${traSignal[6]}`;
          var transDate = new Date(postBlock * 1000);
          var y = transDate.getFullYear();
          var m = transDate.getMonth() +1;
          var d = transDate.getDate();
          var h = transDate.getHours();
          var mi = transDate.getMinutes();
          var postDate = `${y}/${m}/${d}  ${h}:${mi}`;
          date.innerHTML = postDate;

          var dolp1 = document.createElement("p");
          dolp1.classList.add("dolp1");
          dolp1.innerText = "Take Profit";
          var dolp2 = document.createElement("p");
          dolp2.classList.add("dolp2");
          dolp2.innerText = "Entry";
          var dolp3 = document.createElement("p");
          dolp3.classList.add("dolp3");
          dolp3.innerText = "Stop Loss";

          signalDiv.appendChild(dolp1);
          signalDiv.appendChild(dolp2);
          signalDiv.appendChild(dolp3);
          signalDiv.appendChild(entryP);
          signalDiv.appendChild(assetP);
          signalDiv.appendChild(slP);
          signalDiv.appendChild(tpP);
          signalDiv.appendChild(dirP);
          signalDiv.appendChild(date);
          tradingSigList.appendChild(signalDiv);

      }
}
}


//AddSignalTrading

var A1 = document.getElementById("addAsset");
var B1 = document.getElementById("addSl");
var C1 = document.getElementById("addTp");
var D1 = document.getElementById("addMsg");
var E1 = document.getElementById("addEntry");
var addTradBut = document.getElementById("addTradBut");
// long & short


const botToken = "6973037553:AAHE61fhxhbxF2tZgjcmHi1zZot4pGypqxU";
const chatId = "-4046315950"; // El ID del chat 

const telegramApiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

addTradBut.addEventListener("click", async () => {
  
  try {
    
    await contract.methods
      .addTraSignal(A1.value, E1.value, B1.value, C1.value, directionValue)
      .send({
        from: connectedAddress,
        gasPrice: "481878",
      });
      addTradBut.style.opacity = "20%";
      var dir;
    if (directionValue==1){
      dir = "📈 LONG";
    } else {dir = "📉 SHORT";}
      var message = `📊 New Trading Signal - AlphaHub  
                                                                                                              🔷 Asset: ${A1.value}
                                                                                                              ${dir}
                                                                                                               ✴️ Entry: $${E1.value}
                                                                                                              ✅ Take Profit: $${C1.value}
                                                                                                              🔴 Stop Loss $${B1.value}`; 
      

      const messageData = {
        chat_id: chatId,
        text: message,
      };

      fetch(telegramApiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(messageData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Mensaje enviado con éxito:", data);
        })
        .catch((error) => {
          console.error("Error al enviar el mensaje:", error);
        });


    A1.value = "";
    B1.value = "";
    C1.value = "";
    D1.value = "";
    E1.value = "";
    long.style.backgroundColor = "#123611";
    short.style.backgroundColor = "#420e0e";
    getSignalsNum();
    var elementsToDelete = document.querySelectorAll(".signalTrad");

    elementsToDelete.forEach(function (element) {
      element.parentElement.removeChild(element);
    });
    seeTraSig2();
    addTradBut.style.opacity = "100%";
    
  } catch (error) {
    console.log(error);
  }
});

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

alphaTrad.addEventListener("click", function () {
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
var directionValue = 1;

long.addEventListener("click", function () {
  long.style.backgroundColor = "#047c00";
  short.style.backgroundColor = "#420e0e";
  directionValue = 1;
});

short.addEventListener("click", function () {
  long.style.backgroundColor = "#123611";
  short.style.backgroundColor = "rgb(235 1 1)";
  directionValue = 2;
});

var set1 = document.getElementById("set1");
var setName = document.getElementById("setName");
var _name = document.getElementById("name");

set1.addEventListener("click", function () {
  if (setName.style.display === "none" || setName.style.display === "") {
    setName.style.display = "block";
  } else {
    setName.style.display = "none";
  }
});

set1.addEventListener("mouseover", function () {
  _name.style.color = "white";
});

set1.addEventListener("mouseout", function () {
  _name.style.color = "rgba(255, 255, 255, 0.742)";
});

// ABI ABI ABI ABI ABI ABI ABI ABI ABI ABI ABI ABI ABI ABI ABI ABI ABI ABI
const ABI = [
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "accuracyPercentage",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_But",
        type: "string",
      },
      {
        internalType: "string",
        name: "tokenName",
        type: "string",
      },
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "string",
        name: "entry",
        type: "string",
      },
      {
        internalType: "string",
        name: "sl",
        type: "string",
      },
      {
        internalType: "string",
        name: "tp",
        type: "string",
      },
    ],
    name: "addLowCapsSignal",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_msg",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_priceEntry",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_stopLoss",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_takeProfit",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "_direction",
        type: "uint8",
      },
    ],
    name: "addTraSignal",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "beValidator",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "paySimpleAnnual",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "paySimpleMonth",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
    ],
    name: "setName",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "clickAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "points",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "posNeg",
        type: "uint256",
      },
    ],
    name: "validate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "alphaTradInfoFromAddress",
    outputs: [
      {
        internalType: "string",
        name: "_msg",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "priceEntry",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "stopLoss",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "takeProfit",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "direction",
        type: "uint8",
      },
      {
        internalType: "uint16",
        name: "traSignalId",
        type: "uint16",
      },
      {
        internalType: "uint256",
        name: "postDate",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "genNumIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "alpha",
        type: "address",
      },
    ],
    name: "getAlphaScore",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "alpha",
        type: "address",
      },
    ],
    name: "getNumSignals",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getTradGlobLength",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "maxLengthLows",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "maxLengthTrad",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "seeLastPay",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "alpha",
        type: "address",
      },
    ],
    name: "seeName",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "index",
        type: "uint16",
      },
    ],
    name: "seeTraSig",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "i",
        type: "uint16",
      },
      {
        internalType: "address",
        name: "alpha",
        type: "address",
      },
    ],
    name: "seeTraSig2",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "validators",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const contract = new web3Instance.eth.Contract(ABI, conAddress);

var varWidth = "30vw";
var varHeight = 350;

new TradingView.widget({
  width: varWidth,
  height: varHeight,
  symbol: "BINANCE:BTCUSDT",
  interval: "D",
  timezone: "Etc/UTC",
  theme: "dark",
  style: "1",
  locale: "en",
  toolbar_bg: "#f1f3f6",
  enable_publishing: false,
  hide_top_toolbar: false,
  save_image: false,
  container_id: "windowTool1",
});


var tw = document.getElementById("toolsWindowText");
var tw1 = document.getElementById("windowTool1");
var tw2 = document.getElementById("windowTool2");
var tw3 = document.getElementById("windowTool3");
var tw4 = document.getElementById("windowTool4");
var tw5 = document.getElementById("windowTool5");



function cmc() {
  tw.innerText = "";
  tw1.style.display = "none";
  tw2.style.display = "block";
  tw3.style.display = "none";
  tw4.style.display = "none";
  tw5.style.display = "none";

}

function tv() {
  tw.innerText = "";
  tw1.style.display = "block";
  tw2.style.display = "none";
  tw3.style.display = "none";
  tw4.style.display = "none";
  tw5.style.display = "none";

}

function uni() {
  tw.innerText = "";
  tw1.style.display = "none";
  tw2.style.display = "none";
  tw3.style.display = "block";
  tw4.style.display = "none";
  tw5.style.display = "none";

}

function mtry() {
  tw.innerText = "";
  tw1.style.display = "none";
  tw2.style.display = "none";
  tw3.style.display = "none";
  tw4.style.display = "block";
  tw5.style.display = "none";
}



//__________________________________________________________________________________________________________

// TELEGRAM BOT
/*
const botToken = "6973037553:AAHE61fhxhbxF2tZgjcmHi1zZot4pGypqxU";
const chatId = "-4046315950"; // El ID del chat al que deseas enviar el mensaje.

var message;

const telegramApiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`; 

const messageData = {
  chat_id: chatId,
  text: message,
};
function botSendMessage(){
  console.log("entrando en la Funcion de BOT")
  fetch(telegramApiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(messageData),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Mensaje enviado con éxito:", data);
    })
    .catch((error) => {
      console.error("Error al enviar el mensaje:", error);
    });

}
*/
