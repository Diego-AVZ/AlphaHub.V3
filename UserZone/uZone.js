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

namBut.addEventListener("click", async()=>{
    try{
        var _name = iNam.value;
        var _name2 = _name.toLowerCase();
        alphaAddress = await contract.methods.searchName(_name2).call();
        if (alphaAddress == "0x0000000000000000000000000000000000000000") {
          alphaName.innerText = "Not Found";
        } else {
          var name = iNam.value;

          alphaName.innerText = name.toUpperCase();
          var prices = await contract.methods
            .seeAlphaPrices(alphaAddress)
            .call();
          monPri.innerText = `${prices[0]} ETH`;
          annPri.innerText = `${prices[1]} ETH`;
        }
        iNam.style.marginTop = "2vh";
        namBut.style.marginTop = "2vh";
        divAS.style.display = "block";
    } catch(error){console.log("error searching name" + error)}
})
