var walletBut = document.getElementById("wallet");
var connectedAddress;
var msg1 = document.getElementById("msg1");
var msg2 = document.getElementById("msg2");
var cover = document.getElementById("cover");
var cover2 = document.getElementById("cover2");

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
    } catch (error) {
      console.log("ERROR al Conectar MTMSK"+ error);
    }
  } else {
    console.log("MTMSK Not Detected 2" + error);
  }
}

connect();

function showEthAddress() {
  var start = connectedAddress.slice(0, 6);
  var end = connectedAddress.slice(-4);

  document.getElementById("address").innerText = `${start}...${end}`;
  document.getElementById("address2").innerText = `${start}...${end}`;
}

//CONTRACT:

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
        internalType: "address",
        name: "alpha",
        type: "address",
      },
    ],
    name: "add1ToTotalSig",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "becomeAlpha",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "countAllAlphaSignals",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "deposit",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "alpha",
        type: "address",
      },
      {
        internalType: "uint8",
        name: "plan",
        type: "uint8",
      },
    ],
    name: "payAlpha",
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
        name: "_chatId",
        type: "string",
      },
    ],
    name: "setAlphaHubBot",
    outputs: [],
    stateMutability: "nonpayable",
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
        internalType: "uint256",
        name: "plan",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
    ],
    name: "setPriceAlphaPlans",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "mon",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "ann",
        type: "uint256",
      },
    ],
    name: "setSimplePrices",
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
    ],
    name: "alphaAmountTotalSignals",
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
    name: "b",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "address",
        name: "alpha",
        type: "address",
      },
    ],
    name: "canSeeThisAlpha",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
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
    name: "checkNameList",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
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
    name: "getChatId",
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
    inputs: [
      {
        internalType: "address",
        name: "alpha",
        type: "address",
      },
    ],
    name: "getNumTraSignals",
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
        internalType: "string",
        name: "_name",
        type: "string",
      },
    ],
    name: "searchName",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "alpha",
        type: "address",
      },
    ],
    name: "seeAlphaPrices",
    outputs: [
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
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
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
      {
        internalType: "address",
        name: "reader",
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
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
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

var web3Instance = new Web3(web3.currentProvider);

const conAddress = "0xF9b637Aff040A5b7b95161792D6Dc565C49DBCAB";
const contract = new web3Instance.eth.Contract(ABI, conAddress);

//SEARCH ALPHA

var iNam = document.getElementById("input1"); 
var namBut = document.getElementById("searchBut");
var divAS = document.getElementById("alphaSearch");
var alphaName = document.getElementById("alphaName");
var monPri = document.getElementById("alphaMonPrice");
var annPri = document.getElementById("alphaAnnPrice");
var alphaAddress;
var zoneBut = document.getElementById("zoneBut");
var plans = document.getElementById("plans");
var beta = document.getElementById("beta");
var alpha = document.getElementById("alpha");
var myZone = document.getElementById("myZone");
var search = document.getElementById("search");
var input1 = document.getElementById("input1");
var lupa = document.getElementById("lupa");
var tools = document.getElementById("tools");
var alphaSignals = document.getElementById("alphaSignals");
var myAlphas = document.getElementById("myAlphas");
var out = document.getElementById("out");
var wt = document.getElementById("toolsWindow");
var tw = document.getElementById("toolsWindowText");
var tw1 = document.getElementById("windowTool1");
var tw2 = document.getElementById("windowTool2");
var tw3 = document.getElementById("windowTool3");
var tw4 = document.getElementById("windowTool4");
var tw0 = document.getElementById("toolsWindow");
var validate = document.getElementById("validate");
var butSign = document.getElementById("butSign");
var userZoneOn;


zoneBut.addEventListener("click", function () {
  plans.style.display = "none";
  beta.style.display = "none";
  alpha.style.display= "none";
  myZone.style.display = "none";
  tools.style.display = "block";
  wt.style.display = "block";
  myAlphas.style.display = "block";
  validate.style.display = "block";
  butSign.style.display = "block";
  alphaSignals.style.display = "block";
  search.style.marginTop = "15vh";
  search.style.marginLeft = "5vw";
  search.style.width = "2vw";
  search.style.height = "4vh";
  input1.style.display = "none";
  namBut.style.display = "none";
  lupa.style.display = "block";
  alphaSearch.style.display = "none";
  userZoneOn = true;
  input1.value = "";
  document.getElementById("address2").style.display = "block";
});

lupa.addEventListener("click", function(){
  if (userZoneOn == true){
    search.style.marginTop = "15vh";
    search.style.marginLeft = "5vw";
    search.style.width = "28vw";
    search.style.height = "25vh";
    search.style.zIndex = "3";
    input1.style.display = "block";
    namBut.style.display = "block";
    lupa.style.display = "none";
    out.style.display = "block";

  }
});

out.addEventListener("click", function () {
    search.style.width = "2vw";
    search.style.height = "4vh";
    search.style.zIndex = "2";
    input1.style.display = "none";
    namBut.style.display = "none";
    lupa.style.display = "block";
    alphaSearch.style.display = "none";
    out.style.display = "none";
  input1.value = "";

});

namBut.addEventListener("click", async () => {
  try {
    var _name = iNam.value;
    var _name2 = _name.toLowerCase();
    alphaAddress = await contract.methods.searchName(_name2).call();
    if (alphaAddress == "0x0000000000000000000000000000000000000000") {
      alphaName.innerText = "Not Found";
    } else {
      var name = iNam.value;

      alphaName.innerText = name.toUpperCase();
      var prices = await contract.methods.seeAlphaPrices(alphaAddress).call();
      monPri.innerText = `${prices[0]} ETH`;
      annPri.innerText = `${prices[1]} ETH`;
    }
    iNam.style.marginTop = "2vh";
    namBut.style.marginTop = "2vh";
    divAS.style.display = "block"
  } catch (error) {
    console.log("error searching name" + error);
  }
});


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

function cmc() {
  tw.innerText = "";
  tw1.style.display = "none";
  tw2.style.display = "block";
  tw3.style.display = "none";
  tw4.style.display = "none";
  tw0.style.display = "block";
}

function tv() {
  tw.innerText = "";
  tw1.style.display = "block";
  tw2.style.display = "none";
  tw3.style.display = "none";
  tw4.style.display = "none";
  tw0.style.display = "block";
}

function uni() {
  tw.innerText = "";
  tw1.style.display = "none";
  tw2.style.display = "none";
  tw3.style.display = "block";
  tw4.style.display = "none";
  tw0.style.display = "block";
}

function mtry() {
  tw.innerText = "";
  tw1.style.display = "none";
  tw2.style.display = "none";
  tw3.style.display = "none";
  tw4.style.display = "block";
  tw0.style.display = "block";
}

async function seeTraSig2() {
  var tradingSigList = document.getElementById("tradingSigList");
  var numSignals = await contract.methods
    .getNumTraSignals(connectedAddress)
    .call();

  if (numSignals < 50) {
    tradingSigList.innerText = "";
    for (let i = numSignals - 1; i >= 0; i--) {
      var traSignal = await contract.methods
        .seeTraSig2(i, connectedAddress, connectedAddress)
        .call();

      var signalDiv = document.createElement("div");
      signalDiv.classList.add("signalTrad");

      signalDiv.setAttribute("data-valor", `${traSignal[2]}`);

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
        elseImg.style.borderRadius = "2vw";
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
      var m = transDate.getMonth() + 1;
      var d = transDate.getDate();
      var h = transDate.getHours();
      var mi = transDate.getMinutes();
      var postDate = `${y}/${m}/${d}  ${h}:${mi}`;
      date.innerHTML = postDate;

      if (traSignal[4] == 1) {
        var dolp1 = document.createElement("p");
        dolp1.classList.add("dolp1");
        dolp1.innerText = "Take Profit";
        var dolp2 = document.createElement("p");
        dolp2.classList.add("dolp2");
        dolp2.innerText = "Entry";
        var dolp3 = document.createElement("p");
        dolp3.classList.add("dolp3");
        dolp3.innerText = "Stop Loss";
      } else {
        var dolp1 = document.createElement("p");
        dolp1.classList.add("dolp3");
        dolp1.innerText = "Take Profit";
        var dolp2 = document.createElement("p");
        dolp2.classList.add("dolp2");
        dolp2.innerText = "Entry";
        var dolp3 = document.createElement("p");
        dolp3.classList.add("dolp1");
        dolp3.innerText = "Stop Loss";
      }

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
  } else {
    for (let i = numSignals - 1; i >= numSignals - 50; i--) {
      // solo salen las 50 primeras señales de trading
      var traSignal = await contract.methods
        .seeTraSig2(i, connectedAddress)
        .call();

      var signalDiv = document.createElement("div");
      signalDiv.classList.add("signalTrad");
      signalDiv.setAttribute("data-valor", `${traSignal[7]}`);

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
        elseImg.style.borderRadius = "2vw";
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
      var m = transDate.getMonth() + 1;
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
