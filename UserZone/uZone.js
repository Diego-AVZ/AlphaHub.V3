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
      walletBut.style.background = "#076c0071";
      walletBut.style.width = "6.8vw";
      walletBut.style.fontSize = "1vw";
      walletBut.style.marginLeft = "5.5vw";
      walletBut.style.marginTop = "-2vh";
      walletBut.style.boxShadow = "inset 0vw 0vw 0.5vw rgba(27, 173, 17, 0.818)";
      walletBut.style.height = "5vh";
      msg1.style.display = "none";
      cover.style.display = "none";
      mrc.innerHTML = await contract3.methods
        .seeMyCode(connectedAddress)
        .call();
      showEthAddress();
      seeAlphasImFollowing();
      getValidatorPoints();
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
      walletBut.style.background = "#076c0071";
      walletBut.style.width = "6.8vw";
      walletBut.style.fontSize = "1vw";
      walletBut.style.marginLeft = "5vw";
      walletBut.style.marginTop = "-2vh";
      walletBut.style.boxShadow = "inset 0vw 0vw 0.5vw rgba(27, 173, 17, 0.818)";
      walletBut.style.height = "5vh";
      msg1.style.display = "none";
      cover.style.display = "none";
      mrc.innerHTML = await contract3.methods
        .seeMyCode(connectedAddress)
        .call();
      showEthAddress();
      seeAlphasImFollowing();
      getValidatorPoints();

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
    inputs: [],
    name: "changePeriod",
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
    inputs: [
      {
        internalType: "address",
        name: "referrer",
        type: "address",
      },
    ],
    name: "paySimpleAnnualRefDiscount",
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
        internalType: "address",
        name: "referrer",
        type: "address",
      },
    ],
    name: "paySimpleMonthRefDiscount",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "setActualPeriod",
    outputs: [],
    stateMutability: "nonpayable",
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
    inputs: [],
    name: "withdrawFromAlphaBase",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "addAllAlphaScores",
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
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "ethInContractThisPeriod",
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
        internalType: "address",
        name: "alpha",
        type: "address",
      },
    ],
    name: "isActiveAlpha",
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
        internalType: "uint256",
        name: "t",
        type: "uint256",
      },
    ],
    name: "seeActiveAlphaScore",
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
    name: "seeAllActiveAlpha",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
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
      {
        internalType: "uint256",
        name: "i",
        type: "uint256",
      },
    ],
    name: "seeAlphasFollowing",
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
    inputs: [],
    name: "seeDiscPrices",
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
    name: "seeImFollowingListLen",
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
    inputs: [],
    name: "seePrices",
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
        name: "alpha",
        type: "address",
      },
    ],
    name: "seeTotalAlphaScore",
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
        name: "user",
        type: "address",
      },
    ],
    name: "seeTotalValidatorScore",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "totalAlphaScore",
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
    name: "volume",
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
];
const ABI2 = [
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
        name: "asset",
        type: "string",
      },
      {
        internalType: "string",
        name: "_priceEntry",
        type: "string",
      },
      {
        internalType: "string",
        name: "_stopLoss",
        type: "string",
      },
      {
        internalType: "string",
        name: "_takeProfit",
        type: "string",
      },
      {
        internalType: "uint8",
        name: "_direction",
        type: "uint8",
      },
      {
        internalType: "string",
        name: "_msg",
        type: "string",
      },
    ],
    name: "addTraSignal",
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
        name: "asset",
        type: "string",
      },
      {
        internalType: "string",
        name: "priceEntry",
        type: "string",
      },
      {
        internalType: "string",
        name: "stopLoss",
        type: "string",
      },
      {
        internalType: "string",
        name: "takeProfit",
        type: "string",
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
      {
        internalType: "address",
        name: "alpha",
        type: "address",
      },
      {
        internalType: "string",
        name: "_msg",
        type: "string",
      },
      {
        internalType: "int256",
        name: "success",
        type: "int256",
      },
      {
        internalType: "uint8",
        name: "timesVal",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "changePeriod",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getActiveAlphaTra",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getActiveAlphaTraLen",
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
    name: "getAlphaScore1",
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
        internalType: "uint16",
        name: "index",
        type: "uint16",
      },
      {
        internalType: "address",
        name: "alpha",
        type: "address",
      },
    ],
    name: "getTraSignal",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "asset",
            type: "string",
          },
          {
            internalType: "string",
            name: "priceEntry",
            type: "string",
          },
          {
            internalType: "string",
            name: "stopLoss",
            type: "string",
          },
          {
            internalType: "string",
            name: "takeProfit",
            type: "string",
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
          {
            internalType: "address",
            name: "alpha",
            type: "address",
          },
          {
            internalType: "string",
            name: "_msg",
            type: "string",
          },
          {
            internalType: "int256",
            name: "success",
            type: "int256",
          },
          {
            internalType: "uint8",
            name: "timesVal",
            type: "uint8",
          },
        ],
        internalType: "struct B.traSignal",
        name: "",
        type: "tuple",
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
    name: "getTraSignalGlob",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "asset",
            type: "string",
          },
          {
            internalType: "string",
            name: "priceEntry",
            type: "string",
          },
          {
            internalType: "string",
            name: "stopLoss",
            type: "string",
          },
          {
            internalType: "string",
            name: "takeProfit",
            type: "string",
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
          {
            internalType: "address",
            name: "alpha",
            type: "address",
          },
          {
            internalType: "string",
            name: "_msg",
            type: "string",
          },
          {
            internalType: "int256",
            name: "success",
            type: "int256",
          },
          {
            internalType: "uint8",
            name: "timesVal",
            type: "uint8",
          },
        ],
        internalType: "struct B.traSignal",
        name: "",
        type: "tuple",
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
        name: "",
        type: "address",
      },
    ],
    name: "lastPostTra",
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
        name: "alpha",
        type: "address",
      },
    ],
    name: "seeLastPostTra",
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
        name: "user",
        type: "address",
      },
    ],
    name: "seeValidatorScore1",
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
    name: "setActualPeriod",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
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
    name: "traActiveAlphaProvsThisPeriod",
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
    name: "traSignalAlphaLength",
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
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "traSignals",
    outputs: [
      {
        internalType: "string",
        name: "asset",
        type: "string",
      },
      {
        internalType: "string",
        name: "priceEntry",
        type: "string",
      },
      {
        internalType: "string",
        name: "stopLoss",
        type: "string",
      },
      {
        internalType: "string",
        name: "takeProfit",
        type: "string",
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
      {
        internalType: "address",
        name: "alpha",
        type: "address",
      },
      {
        internalType: "string",
        name: "_msg",
        type: "string",
      },
      {
        internalType: "int256",
        name: "success",
        type: "int256",
      },
      {
        internalType: "uint8",
        name: "timesVal",
        type: "uint8",
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
    name: "traSignalsGlob",
    outputs: [
      {
        internalType: "string",
        name: "asset",
        type: "string",
      },
      {
        internalType: "string",
        name: "priceEntry",
        type: "string",
      },
      {
        internalType: "string",
        name: "stopLoss",
        type: "string",
      },
      {
        internalType: "string",
        name: "takeProfit",
        type: "string",
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
      {
        internalType: "address",
        name: "alpha",
        type: "address",
      },
      {
        internalType: "string",
        name: "_msg",
        type: "string",
      },
      {
        internalType: "int256",
        name: "success",
        type: "int256",
      },
      {
        internalType: "uint8",
        name: "timesVal",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_traSignalId",
        type: "uint16",
      },
      {
        internalType: "uint8",
        name: "posNeg",
        type: "uint8",
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
    name: "validatorScore1",
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
];
const ABI3 = [
  {
    inputs: [
      {
        internalType: "string",
        name: "code",
        type: "string",
      },
    ],
    name: "createCode",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "code",
        type: "string",
      },
    ],
    name: "regWithCode",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_points",
        type: "uint32",
      },
    ],
    name: "setPoinsAmount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_points",
        type: "uint32",
      },
    ],
    name: "setPoinsReferrer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "addressCode",
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
        name: "",
        type: "address",
      },
    ],
    name: "AddressPuntuation",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    name: "codeAddress",
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
        internalType: "string",
        name: "code",
        type: "string",
      },
    ],
    name: "codeListReview",
    outputs: [
      {
        internalType: "bool",
        name: "isInList",
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
        name: "",
        type: "address",
      },
    ],
    name: "codeUsed",
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
    inputs: [],
    name: "points",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pointsRef",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
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
    name: "seeIfHasReg",
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
    ],
    name: "seeMyCode",
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
];
var web3Instance = new Web3(web3.currentProvider);

const conAddress = "0xD55D833dC50631fa0E9F97160c68C2bFE6c9950c";
const conAddress2 = "0x205aAd0c64A4a0D9b48784Ef0fa91Ada87D57944";
const conAddress3 = "0x10B0c63Eb35e64e4dFFF50457dBD3a0f06033303";
const contract = new web3Instance.eth.Contract(ABI, conAddress);
const contract2 = new web3Instance.eth.Contract(ABI2, conAddress2);
const contract3 = new web3Instance.eth.Contract(ABI3, conAddress3);

//SEARCH ALPHA

var iNam = document.getElementById("input1"); 
var namBut = document.getElementById("searchBut");
var divAS = document.getElementById("alphaSearch");
var alphaName = document.getElementById("alphaName");
var monPri = document.getElementById("alphaMonPrice");
var annPri = document.getElementById("alphaAnnPrice");
var SearchAlphaAddress;
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
var TraSig = document.getElementById("validate");
var butSign = document.getElementById("butSign");
var validator = document.getElementById("validator");
var numFollowingDiv = document.getElementById("numFollowingDiv");
var userZoneOn;

zoneBut.addEventListener("click", function () {
  plans.style.display = "none";
  beta.style.display = "none";
  alpha.style.display= "none";
  myZone.style.display = "none";
  tools.style.display = "block";
  wt.style.display = "none";
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
  userEarn.style.display = "block";
  alphaSearch.style.display = "none";
  moreInfoSig.style.display = "block";
  userZoneOn = true;
  input1.value = "";
  document.getElementById("address2").style.display = "block";
  validator.style.display = "block";
  numFollowingDiv.style.display = "block";
  seeTraSig2();
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
    userEarn.style.marginLeft = "35.5vw";
    userEarn.style.marginTop = "15vh";
    userEarn.style.width = "2vw";
    userEarn.style.height = "4vh";
    earnLogo.style.display = "block";
    out2.style.display = "none";
    divId2.style.display = "none";

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
    userEarn.style.marginLeft = "5vw";
    userEarn.style.marginTop = "24vh";
  out2.style.display = "none";
});

var alphaPrices;

namBut.addEventListener("click", async () => {
  try {
    var _name = iNam.value;
    var _name2 = _name.toLowerCase();
    SearchAlphaAddress = await contract.methods.searchName(_name2).call();
    if (SearchAlphaAddress == "0x0000000000000000000000000000000000000000") {
      alphaName.innerText = "Not Found";
    } else {
      var name = iNam.value;
      alphaName.innerText = name.toUpperCase();
      alphaPrices = await contract.methods.seeAlphaPrices(SearchAlphaAddress).call();
      monPri.innerText = `${alphaPrices[0]} ETH`;
      annPri.innerText = `${alphaPrices[1]} ETH`;
    }
    iNam.style.marginTop = "2vh";
    namBut.style.marginTop = "2vh";
    divAS.style.display = "block"
    seeAlphasImFollowing();
  } catch (error) {
    console.log("error searching name" + error);
  }
});

monPri.addEventListener("click", async()=>{
  try{
    await contract.methods
      .payAlpha(SearchAlphaAddress, 1)
      .send({ from: connectedAddress, value: alphaPrices[0], });
      seeAlphasImFollowing();
  } catch(error){console.log(error);}
})

annPri.addEventListener("click", async () => {
  try {
    await contract.methods
      .payAlpha(SearchAlphaAddress, 2)
      .send({ from: connectedAddress, value: alphaPrices[1] });
      seeAlphasImFollowing();
  } catch (error) {
    console.log(error);
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

var moreInfoSig = document.getElementById("moreInfoSig");

var sigId = document.getElementById("sigId");
var idSignal;
async function seeTraSig2(alphaAddress) {
  var tradingSigList = document.getElementById("tradingSigList");
  var numSignals = await contract.methods.getNumTraSignals(alphaAddress).call();

  if (numSignals < 50) {
    tradingSigList.innerText = "";
    for (let i = numSignals - 1; i >= 0; i--) {
      var traSignal = await contract.methods
        .seeTraSig2(i, alphaAddress, connectedAddress)
        .call();

      var signalDiv = document.createElement("div");
      signalDiv.classList.add("signalTrad");
      var dataValorList = [
        traSignal[0], //asset
        traSignal[1], //entry
        traSignal[2], //sl
        traSignal[3], //tp1
        traSignal[4], //dir
        traSignal[5], //id
        await contract.methods.seeName(traSignal[7]).call(), //alphaName
      ];
      signalDiv.setAttribute("data-valor", JSON.stringify(dataValorList));
      
      function addClickHandler(div, data) {
        div.addEventListener("click", function () {
          var dataValor = JSON.parse(data);
          idSignal = dataValor[5];
          var tp1 = dataValor[3];
          var asset = dataValor[0];
          var entry = dataValor[1];
          var sl = dataValor[2];
          var alphaName = dataValor[6];
          var potProfit = ((tp1 - entry) / entry)*100;  
          potProfit = Math.abs(potProfit);
          potProfit = potProfit.toFixed(2);
          document.getElementById("mrinfNam").style.display = "block";
          if (entry > tp1) {
            var potLoss = ((entry - sl) / entry) * 100;
            document.getElementById("mrinfNam").innerText = "Short";
            document.getElementById("imgLongmi").style.display = "none";
            document.getElementById("imgShortmi").style.display = "block";
          } else {
              potLoss = ((sl - entry) / entry) * 100; 
              document.getElementById("mrinfNam").innerText = "Long";
              document.getElementById("imgLongmi").style.display = "block";
              document.getElementById("imgShortmi").style.display = "none";
            }
          potLoss = potLoss.toFixed(2);
          sigId.innerText = "id." + idSignal;
          document.getElementById("takeProfitsDiv4").innerText = "$" + tp1;
          document.getElementById("takeProfitsDiv6").innerText = potProfit + "%";
          document.getElementById("stopLossDiv4").innerText = "$" + sl;
          document.getElementById("stopLossDiv6").innerText = potLoss + "%";
          document.getElementById("mrinfAss").innerHTML= asset;
          document.getElementById("entrymit2").innerHTML = entry;
          if (asset == "BTC" || asset == "btc") {
            var btcImg = document.createElement("img");
            btcImg.src = "btc.png";
            btcImg.classList.add("assetImg2");
            moreInfoSig.appendChild(btcImg);
          } else if (asset == "ETH" || asset == "eth") {
            var ethImg = document.createElement("img");
            ethImg.src = "eth.png";
            ethImg.classList.add("assetImg2");
            moreInfoSig.appendChild(ethImg);
          } else {
            var elseImg = document.createElement("img");
            elseImg.src =
              "https://image.spreadshirtmedia.net/image-server/v1/compositions/T56A2PA4115PT17X0Y67D157542882W24948H18711/views/1,width=550,height=550,appearanceId=2,backgroundColor=000000,noPt=true/signo-de-interrogacion-planeado-hae-simbolo-signo-regalo-bolsa-de-tela.jpg";
            elseImg.classList.add("assetImg2");
            moreInfoSig.appendChild(elseImg);
            elseImg.style.borderRadius = "2vw";
          }
          
        });
      }

      addClickHandler(signalDiv, signalDiv.getAttribute("data-valor"));
      
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
        LoS = "Long";
        var longImg = document.createElement("div");
        longImg.classList.add("longImg");
        signalDiv.appendChild(longImg);
      } else {
        LoS = "Short";
        var shortImg = document.createElement("div");
        shortImg.classList.add("shortImg");
        signalDiv.appendChild(shortImg);
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
      if (mi >= 10) {
        var postDate = `${y}/${m}/${d}  ${h}:${mi}`;
      } else {
        var postDate = `${y}/${m}/${d}  ${h}:0${mi}`;
      }
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

      if(traSignal[8] != undefined){
        var msgSig = document.createElement("p");
        msgSig.innerText = `${traSignal[8]}`;
        msgSig.classList.add("msgSig");
        signalDiv.appendChild(msgSig);
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
      signalDiv.setAttribute("data-valor", `${traSignal[5]}`);

      signalDiv.setAttribute("data-valor", `${traSignal[5]}`);

      (function (signal) {
        // ESTA FUNCION PERMITE VALIDAR Y CALIFICAR LAS SEÑALES CON UN CLICK, CLICKANDO. CAMBIA `${traSignal[0]}` por EL ID de la señal o la address del Alpha
        signal.addEventListener("click", function () {
          var idSignal = signal.getAttribute("data-valor");
          sigId.innerText = "id." + idSignal;
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
        LoS = "Long";
        var longImg = document.createElement("div");
        longImg.classList.add("longImg");
        signalDiv.appendChild(longImg);
      } else {
        LoS = "Short";
        var shortImg = document.createElement("div");
        shortImg.classList.add("shortImg");
        signalDiv.appendChild(shortImg);
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
      if(mi >= 10){
        var postDate = `${y}/${m}/${d}  ${h}:${mi}`;
      } else{var postDate = `${y}/${m}/${d}  ${h}:0${mi}`;}
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

async function seeAlphasImFollowing() {
  try{
    var elementsToDelete2 = document.querySelectorAll(".myAlphaName");
    elementsToDelete2.forEach(function (element) {
      element.parentElement.removeChild(element);
    });
    var myAlphasListLen = await contract.methods.seeImFollowingListLen(connectedAddress).call();
    for(var i = myAlphasListLen-1; i >= 0; i--){
      var alphaAddressI = await contract.methods.seeAlphasFollowing(connectedAddress, i).call();
      var alphaNameIObj = await contract.methods.seeName(alphaAddressI).call();
      var alphaNameI = alphaNameIObj.toString(); // Convertir el objeto a cadena
      var alphaP = document.createElement("p");
      alphaP.innerText = alphaNameI;
      alphaP.classList.add("myAlphaName");
      myAlphas.appendChild(alphaP);
      alphaP.setAttribute("data-valor", `${alphaAddressI}`);

      (function (alpha) {
        alpha.addEventListener("click", function () {
          console.log(alpha.getAttribute("data-valor"));
          var alphaClick = alpha.getAttribute("data-valor");
          alphaClick;
          seeTraSig2(alphaClick);
        });
      })(alphaP);
    }

    
  } catch(error){console.log("error" + error)}
}

var valPoints = document.getElementById("valPoints");

async function getValidatorPoints() {
  try{
    var validatorScore = await contract.methods.seeTotalValidatorScore(connectedAddress).call();
    valPoints.innerText = `${validatorScore}`;
  } catch(error){}
}

var userEarn = document.getElementById("userEarn");
var earnLogo = document.getElementById("earnLogo");
var out2 = document.getElementById("out2");
var divId2 = document.getElementById("divId2");

earnLogo.addEventListener("click", function(){
  userEarn.style.marginTop = "15vh";
  userEarn.style.marginLeft = "5vw";
  userEarn.style.width = "28vw";
  userEarn.style.height = "25vh";
  userEarn.style.zIndex = "3";
  input1.style.display = "block";
  namBut.style.display = "block";
  earnLogo.style.display = "none";
  out2.style.display = "block";
  input1.style.display = "none";
  namBut.style.display = "none";
  search.style.marginLeft = "35.5vw";
  search.style.width = "2vw";
  search.style.height = "4vh";
  search.style.zIndex = "2";
  input1.style.display = "none";
  namBut.style.display = "none";
  lupa.style.display = "block";
  alphaSearch.style.display = "none";
  out.style.display = "none";
  input1.value = "";
  divId2.style.display = "block";
});

out2.addEventListener("click", function () {
  userEarn.style.width = "2vw";
  userEarn.style.height = "4vh";
  userEarn.style.marginTop = "25vh";
  userEarn.style.zIndex = "2";
  earnLogo.style.display = "block";
  out2.style.display = "none";
  search.style.marginLeft = "5vw";
  divId2.style.display = "none";

});

var succBut = document.getElementById("succ");
var failBut = document.getElementById("fail");

succBut.addEventListener("click", async () => {
  try {
    console.log("clicked succ");
    await contract2.methods.validate(idSignal, 0).send({from: connectedAddress});
    getValidatorPoints();
  } catch (error) {
    console.log(error);
  }
});

failBut.addEventListener("click", async () => {
  try {
    console.log("clicked fail");
    await contract2.methods
      .validate(idSignal, 0)
      .send({ from: connectedAddress });
      getValidatorPoints();
  } catch (error) {
    console.log(error);
  }
});


var myRefCode = document.getElementById("myReferCode");

myRefCode.addEventListener("mouseover", function () {
  userEarn.style.backgroundColor = "#606060";
});

myRefCode.addEventListener("mouseout", function () {
  userEarn.style.backgroundColor = "#111111";
});

var refCodeUsed = document.getElementById("refCodeIn");
var applyCode = document.getElementById("apply");

var referrerAddress;

applyCode.addEventListener("click", async() => {
  try{
    await contract3.methods.regWithCode(refCodeUsed.value).send({ from: connectedAddress });
    referrerAddress = await contract3.methods.seeIfHasReg(connectedAddress).send({ from: connectedAddress });
    var disPrices = await contract.methods.seeDiscPrices().call();
    document.getElementById("simpleMonPrice").innerHTML = disPrices[0];
    document.getElementById("simpleMonPrice").innerHTML = disPrices[1];

  } catch(error){console.log(error);}
});

var refCreate = document.getElementById("refCodeCreate");
var createBut = document.getElementById("create");
var mrc = document.getElementById("mrc");

createBut.addEventListener("click", async () => {
  try {
    await contract3.methods.createCode(refCreate.value).send({ from: connectedAddress });
    mrc.innerHTML = await contract3.methods.seeMyCode(connectedAddress).call();
  } catch (error) {
    console.log(error);
  }
});

var copyRef = document.getElementById("butCopyRefLink");
var refLink;

copyRef.addEventListener("click", async() => {
  try {
    var myRefCode = await contract3.methods.seeMyCode(connectedAddress).call();
    refLink = "http://127.0.0.1:5501/AlphaHub%20V3/userZone/userZone.html?refCode=" + myRefCode.toString();
    copyToClipboard(refLink);
    alert("Enlace de referencia copiado al portapapeles: " + refLink);

  } catch(error){console.error(error);}
});

function copyToClipboard(text) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
}

document.addEventListener("DOMContentLoaded", function() {
  // Obtén el código de referencia de la URL al cargar la página
  const urlParams = new URLSearchParams(window.location.search);
  const refCodeFromURL = urlParams.get('refCode');
  refCodeUsed.value = refCodeFromURL;
});


