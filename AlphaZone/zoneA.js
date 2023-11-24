const web3Instance = new Web3(window.ethereum);
const conAddress = "0x6994eD4f085b000eC4e0cA4F58cFCb11f075e13a";
const conAddress2 = "0xc533936679A325622c42b9eF721a3E59Cf6B300c";
const conAddress3 = "0x10B0c63Eb35e64e4dFFF50457dBD3a0f06033303";
// ABI ABI ABI ABI ABI ABI ABI ABI ABI ABI ABI ABI ABI ABI ABI ABI ABI ABI
const ABI = [
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
    name: "payFullAnnual",
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
    name: "payFullAnnualRefDiscount",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "payFullMonth",
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
    name: "payFullMonthRefDiscount",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
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
    name: "setAlphaBaseBot",
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
    name: "setFullPrices",
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
    inputs: [],
    name: "withdrawFromAlphaBase",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "actualPeriod",
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
    name: "addAllAlphaAccuracy",
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
    inputs: [],
    name: "c",
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
    inputs: [],
    name: "getBlockTime",
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
        internalType: "uint32",
        name: "i",
        type: "uint32",
      },
    ],
    name: "getIndexChatIdList",
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
    inputs: [],
    name: "periodNum",
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
    name: "seeActiveAlphaAccu",
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
        name: "combined",
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
    name: "seeAlphaFollowersLen",
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
        name: "alpha",
        type: "address",
      },
    ],
    name: "seeIfHasWithd",
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
    inputs: [
      {
        internalType: "address",
        name: "alpha",
        type: "address",
      },
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "seeNextTimePayThisAlpha",
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
        internalType: "int256",
        name: "",
        type: "int256",
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
      {
        internalType: "address",
        name: "",
        type: "address",
      },
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
    name: "showEarnedAmount",
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
  {
    inputs: [
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
    name: "withdrawThisPeriod",
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
];

const contract = new web3Instance.eth.Contract(ABI, conAddress);

const ABI2 = [
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "accuracyPer",
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
    inputs: [],
    name: "actualPeriod",
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
    ],
    name: "addrPosNum",
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
    name: "addrTotValNum",
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
    inputs: [
      {
        internalType: "uint16",
        name: "traSignalId",
        type: "uint16",
      },
    ],
    name: "findTraSignalIndex",
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
    name: "getAccu",
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
        internalType: "uint256",
        name: "i",
        type: "uint256",
      },
    ],
    name: "getActiveAlphaTra",
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
    inputs: [],
    name: "getBlockTime",
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
    inputs: [],
    name: "periodNum",
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
        name: "",
        type: "address",
      },
    ],
    name: "seeAlphaTraScore",
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
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
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
    inputs: [],
    name: "traSignalNum",
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
        name: "",
        type: "uint16",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "tradSigIdToValid",
    outputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "uint8",
        name: "val",
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
        name: "",
        type: "uint16",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "userValid",
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
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const contract2 = new web3Instance.eth.Contract(ABI2, conAddress2);

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
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "timesUsedReferralCode",
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
];

const contract3 = new web3Instance.eth.Contract(ABI3, conAddress3);

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
      walletBut.style.paddingLeft = "1vw";
      walletBut.style.background = "#076c0071";
      walletBut.style.width = "6.8vw";
      walletBut.style.fontSize = "1vw";
      walletBut.style.marginLeft = "5.5vw";
      walletBut.style.marginTop = "-2vh";
      walletBut.style.boxShadow =
        "inset 0vw 0vw 0.5vw rgba(27, 173, 17, 0.818)";
      walletBut.style.height = "5vh";
      msg1.style.display = "none";
      cover.style.display = "none";
      cover2.style.display = "none";
      showEthAddress();
      seeName();
      getAlphaScore();
      seeTraSig2();
      seeAlphaSignals();
      getChatIdjs();
      mrc.innerHTML = await contract3.methods
        .seeMyCode(connectedAddress)
        .call();
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
      walletBut.style.paddingLeft = "1vw";
      walletBut.style.background = "#076c0071";
      walletBut.style.width = "6.8vw";
      walletBut.style.fontSize = "1vw";
      walletBut.style.marginLeft = "5.5vw";
      walletBut.style.marginTop = "-2vh";
      walletBut.style.boxShadow =
        "inset 0vw 0vw 0.5vw rgba(27, 173, 17, 0.818)";
      walletBut.style.height = "5vh";
      msg1.style.display = "none";
      cover.style.display = "none";
      cover2.style.display = "none";
      showEthAddress();
      seeName();
      getAlphaScore();
      seeTraSig2();
     seeAlphaSignals();
      getChatIdjs();
      mrc.innerHTML = await contract3.methods
        .seeMyCode(connectedAddress)
        .call();
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
    document.getElementById("setName").style.display = "none";
    seeName();
  } catch (error) {
    console.log(error);
  }
});

async function seeName() {
  var hisName = await contract.methods.seeName(connectedAddress).call();
  document.getElementById("name").innerHTML = `${hisName.toUpperCase()}`;
}

async function getAlphaScore() {
  var hisScore = await contract.methods
    .seeTotalAlphaScore(connectedAddress)
    .call();
  document.getElementById("score1").innerHTML = `${hisScore}`;
}

var valueId;

async function seeTraSig2() {
  var tradingSigList = document.getElementById("tradingSigList");
  var numSignals = await contract2.methods
    .traSignalAlphaLength(connectedAddress)
    .call();
  
  if (numSignals < 50 && numSignals > 0) {
    tradingSigList.innerText = "";
    for (let i = numSignals - 1; i >= 0; i--) {
      var traSignal = await contract.methods
        .seeTraSig2(i, connectedAddress, connectedAddress)
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
        traSignal[8], //msg
        traSignal[9], //success
        traSignal[10], //timesVal
      ];
      signalDiv.setAttribute("data-valor", JSON.stringify(dataValorList));

      function addClickHandler(div, data) {
        div.addEventListener("click", function () {
          
          bot.style.display = "none";
          econ.style.display = "none";
          sigInfo.style.display = "block";
          var dataValor = JSON.parse(data);
          idSignal = dataValor[5];
          var tp1 = dataValor[3];
          var asset = dataValor[0];
          var entry = dataValor[1];
          var sl = dataValor[2];
          var alphaName = dataValor[6];
          var potProfit = ((tp1 - entry) / entry) * 100;
          var msg = dataValor[7];
          var success = dataValor[8];
          var timesVal = dataValor[9];
          document.getElementById("tval").innerText = timesVal;
          console.log("times Validated: " + dataValor[9]);
          //document.getElementById("succ1").innerText = success;
          potProfit = Math.abs(potProfit);
          potProfit = potProfit.toFixed(2);
          document.getElementById("mrinfNam").style.display = "block";
          var percentageThreshold = 1;

          if (entry * (1 + percentageThreshold / 100) > tp1) {
            // The trade is considered "Short"
            var potLoss = ((entry - sl) / entry) * 100;
            document.getElementById("mrinfNam").innerText = "Short";
            document.getElementById("imgLongmi").style.display = "none";
            document.getElementById("imgShortmi").style.display = "block";
          } else {
            // The trade is considered "Long"
            potLoss = ((sl - entry) / entry) * 100;
            document.getElementById("mrinfNam").innerText = "Long";
            document.getElementById("imgLongmi").style.display = "block";
            document.getElementById("imgShortmi").style.display = "none";
          }

          potLoss = potLoss.toFixed(2);
          document.getElementById("takeProfitsDiv4").innerText = "$" + tp1;
          document.getElementById("takeProfitsDiv6").innerText =
            potProfit + "%";
          document.getElementById("stopLossDiv4").innerText = "$" + sl;
          document.getElementById("stopLossDiv6").innerText = potLoss + "%";
          document.getElementById("mrinfAss").innerHTML = asset;
          document.getElementById("entrymit2").innerHTML = "$" + entry;
          document.getElementById("alphaMsg").innerText = msg;
          var existingImages = moreInfoSig.getElementsByClassName("assetImg2");
          while (existingImages.length > 0) {
            existingImages[0].parentNode.removeChild(existingImages[0]);
          }
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
        .seeTraSig2(i, connectedAddress, connectedAddress)
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
        traSignal[8], //msg
      ];
      signalDiv.setAttribute("data-valor", JSON.stringify(dataValorList));

      function addClickHandler(div, data) {
        div.addEventListener("click", function () {
          bot.style.display = "none";
          econ.style.display = "none";
          sigInfo.style.display = "block";
          var dataValor = JSON.parse(data);
          idSignal = dataValor[5];
          var tp1 = dataValor[3];
          var asset = dataValor[0];
          var entry = dataValor[1];
          var sl = dataValor[2];
          var alphaName = dataValor[6];
          var potProfit = ((tp1 - entry) / entry) * 100;
          var msg = dataValor[7];
          potProfit = Math.abs(potProfit);
          potProfit = potProfit.toFixed(2);
          document.getElementById("mrinfNam").style.display = "block";
          var percentageThreshold = 1;
          if (entry * (1 + percentageThreshold / 100) > tp1) {
            // The trade is considered "Short"
            var potLoss = ((entry - sl) / entry) * 100;
            document.getElementById("mrinfNam").innerText = "Short";
            document.getElementById("imgLongmi").style.display = "none";
            document.getElementById("imgShortmi").style.display = "block";
          } else {
            // The trade is considered "Long"
            potLoss = ((sl - entry) / entry) * 100;
            document.getElementById("mrinfNam").innerText = "Long";
            document.getElementById("imgLongmi").style.display = "block";
            document.getElementById("imgShortmi").style.display = "none";
          }
          potLoss = potLoss.toFixed(2);
          document.getElementById("takeProfitsDiv4").innerText = "$" + tp1;
          document.getElementById("takeProfitsDiv6").innerText =
            potProfit + "%";
          document.getElementById("stopLossDiv4").innerText = "$" + sl;
          document.getElementById("stopLossDiv6").innerText = potLoss + "%";
          document.getElementById("mrinfAss").innerHTML = asset;
          document.getElementById("entrymit2").innerHTML = "$" + entry;
          document.getElementById("alphaMsg").innerText = msg;
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
      if (mi >= 10) {
        var postDate = `${y}/${m}/${d}  ${h}:${mi}`;
      } else {
        var postDate = `${y}/${m}/${d}  ${h}:0${mi}`;
      }
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

var acIdBut = document.getElementById("addChat");
var acId = document.getElementById("addChatId");

var chatId;

acIdBut.addEventListener("click", async () => {
  try {
    await contract.methods
      .setAlphaBaseBot(acId.value)
      .send({ from: connectedAddress });
    chatId = await contract.methods.getChatId(connectedAddress).call();
  } catch (error) {
    console.error(error);
  }
});

async function getChatIdjs() {
  try {
    chatId = await contract.methods.getChatId(connectedAddress).call();
  } catch (error) {
    console.error(error);
  }
}

const botToken = "6973037553:AAHE61fhxhbxF2tZgjcmHi1zZot4pGypqxU";
var chatId;

const telegramApiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

//CODIFICADOR:
var A; //Encrypted Asset
var B; //Encrypted Entry
var C; //Encrypted SL
var D; //Encrypted TP

addTradBut.addEventListener("click", async () => {
  try {
    if (D1.value === "" || D1.value === undefined) {
      D1.value = "No message for this Signal...";
    }
    await contract2.methods
      .addTraSignal(
        A1.value,
        E1.value,
        B1.value,
        C1.value,
        directionValue,
        D1.value
      )
      .send({ from: connectedAddress /*gasPrice: "481878",*/ });
    var dir;
    if (directionValue == 1) {
      dir = "📈 LONG";
    } else {
      dir = "📉 SHORT";
    }
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

    if (chatId != undefined) {
      console.log("sending to Telegram. . . ");
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

    A1.value = "";
    B1.value = "";
    C1.value = "";
    D1.value = "";
    E1.value = "";
    long.style.backgroundColor = "#123611";
    short.style.backgroundColor = "#420e0e"
    var elementsToDelete = document.querySelectorAll(".signalTrad");

    elementsToDelete.forEach(function (element) {
      element.parentElement.removeChild(element);
    });
    seeTraSig2();
    seeAlphaSignals();
  } catch (error) {
    console.log(error);
  }
});

// Codificador trading

//var input = A1.value;
/*
function xyz(input) {
  var abc = "ab1$cdef2-ghi.3j0kl4m9no,5pqr6stu7vwx8yz";
  var x = "";

  for (var i = 0; i < input.length; i++) {
    
    var a = input[i].toLowerCase();
    
    if (abc.includes(a)) {
      var index = abc.indexOf(a);
      if (index < abc.length - 1 && index > 0) {
        x += abc[index + 1] + abc[index - 1] ;
    
      } else {
        x += abc[0];
      }
    } else {
      x += input[i];
    }
  }

  return x;
}

var A1 = "y";
var A2 = xyz(A1);

// Decodificador

function decodeXyz(input2) {
  var abc = "ab1$cdef2-ghi.3j0kl4m9no,5pqr6stu7vwx8yz";
  var x = "";

  for (var i = 0; i < input2.length; i++) {
    var a = input2[i].toLowerCase();

    if (abc.includes(a)) {
      var index = abc.indexOf(a);
      if (index > 0) {
        x += abc[index - 1];
      } else {
        x += abc[abc.length - 1];
      }
    } else {
      x += input2[i];
    }
  }

  return x;
}

var A3 = "";
var A4 = decodeXyz(A3);
*/
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
  alphaTrad.style.height = "6vh";
  addTradingSignals.style.display = "block";
  addOnchainSignals.style.display = "none";
  addLowsSignals.style.display = "none";
  addIcoSignals.style.display = "none";
  alphaOnchain.style.height = "5vh";
  alphaICO.style.height = "5vh";
  alphaLows.style.height = "5vh";
  alphaTrad.style.marginTop = "-8vh";
  alphaOnchain.style.marginTop = "-7vh";
  alphaICO.style.marginTop = "-7vh";
  alphaLows.style.marginTop = "-7vh";
  tradingSigList.style.display = "block";
  onchainSigList.style.display = "none";
  lowSigList.style.display = "none";
  icoSigList.style.display = "none";
});

alphaOnchain.addEventListener("click", function () {
  alphaOnchain.style.height = "6vh";
  addTradingSignals.style.display = "none";
  addOnchainSignals.style.display = "block";
  addLowsSignals.style.display = "none";
  addIcoSignals.style.display = "none";
  alphaTrad.style.height = "5vh";
  alphaICO.style.height = "5vh";
  alphaLows.style.height = "5vh";
  alphaTrad.style.marginTop = "-7vh";
  alphaOnchain.style.marginTop = "-8vh";
  alphaICO.style.marginTop = "-7vh";
  alphaLows.style.marginTop = "-7vh";
  tradingSigList.style.display = "none";
  onchainSigList.style.display = "block";
  lowSigList.style.display = "none";
  icoSigList.style.display = "none";
});

alphaLows.addEventListener("click", function () {
  alphaLows.style.height = "6vh";
  addTradingSignals.style.display = "none";
  addOnchainSignals.style.display = "none";
  addLowsSignals.style.display = "block";
  addIcoSignals.style.display = "none";
  alphaTrad.style.height = "5vh";
  alphaOnchain.style.height = "5vh";
  alphaICO.style.height = "5vh";
  alphaTrad.style.marginTop = "-7vh";
  alphaOnchain.style.marginTop = "-7vh";
  alphaICO.style.marginTop = "-7vh";
  alphaLows.style.marginTop = "-8vh";
  tradingSigList.style.display = "none";
  onchainSigList.style.display = "none";
  lowSigList.style.display = "block";
  icoSigList.style.display = "none";
});

alphaICO.addEventListener("click", function () {
  alphaICO.style.height = "6vh";
  addTradingSignals.style.display = "none";
  addOnchainSignals.style.display = "none";
  addLowsSignals.style.display = "none";
  addIcoSignals.style.display = "block";
  alphaTrad.style.height = "5vh";
  alphaOnchain.style.height = "5vh";
  alphaLows.style.height = "5vh";
  alphaTrad.style.marginTop = "-7vh";
  alphaOnchain.style.marginTop = "-7vh";
  alphaICO.style.marginTop = "-8vh";
  alphaLows.style.marginTop = "-7vh";
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

//ECONOMICS y SETBOT

var set2 = document.getElementById("set2");
var t7 = document.getElementById("t7");
var x1 = document.getElementById("newSigImg");
var x2 = document.getElementById("newSig");
var x3 = document.getElementById("earnLogo2");


set2.addEventListener("mouseover", function(){
  set1.style.borderRadius = "1vw";  
  set1.style.opacity = "100%";  
  set1.style.marginLeft = "3vw";  
  set1.style.boxShadow = "0vw 0vw 0.3vw rgb(255,255,255)"; 
})

set2.addEventListener("mouseout", function () {
  set1.style.borderStyle = "none"; 
  set1.style.marginTop = "5.2vh";
  set1.style.marginLeft = "0.5vw"; 
  set1.style.boxShadow = "0vw 0vw 0vw rgb(255,255,255)"; 
});

t7.addEventListener("mouseover", function () {
  econBut.style.borderStyle = "solid";
  econBut.style.borderRadius = "1vw";
  econBut.style.borderColor = "white"; 
  econBut.style.boxShadow = "0vw 0vw 0.6vw rgb(255,255,255)";  
  
});

t7.addEventListener("mouseout", function () {
  econBut.style.borderStyle = "none";
  econBut.style.boxShadow = "0vw 0vw 0vw rgb(255,255,255)"; 
});

x3.addEventListener("mouseover", function () {
  refBut.style.borderStyle = "solid";
  refBut.style.borderRadius = "1vw";
  refBut.style.borderColor = "white";
  refBut.style.boxShadow = "0vw 0vw 0.6vw rgb(255,255,255)";
});

x3.addEventListener("mouseout", function () {
  refBut.style.borderStyle = "none";
  refBut.style.boxShadow = "0vw 0vw 0vw rgb(255,255,255)";
});

x1.addEventListener("mouseover", function () {
  x2.style.boxShadow = "0vw 0vw 0.6vw rgb(255,255,255)";
});

x1.addEventListener("mouseout", function () {
  x2.style.borderStyle = "none";
  x2.style.boxShadow = "0vw 0vw 0vw rgb(255,255,255)";
});

var econBut = document.getElementById("econ");
var botBut = document.getElementById("bot");
var bot = document.getElementById("botW");
var econ = document.getElementById("econW");
var sigInfo = document.getElementById("moreInfoSig");
var infoBut = document.getElementById("infoBut");
var refer = document.getElementById("userEarn");
var refBut = document.getElementById("ref");

econBut.addEventListener("click", function () {
  bot.style.display = "none";
  econ.style.display = "block";
  sigInfo.style.display = "none";
  refer.style.display = "none";
});

ref.addEventListener("click", function () {
  bot.style.display = "none";
  econ.style.display = "none";
  sigInfo.style.display = "none";
  refer.style.display = "block";
});

infoBut.addEventListener("click", function () {
  bot.style.display = "none";
  econ.style.display = "none";
  sigInfo.style.display = "block";
  refer.style.display = "none";
});

botBut.addEventListener("click", function () {
  bot.style.display = "block";
  econ.style.display = "none";
  sigInfo.style.display = "none";
  refer.style.display = "none";
});

var setPriceBut = document.getElementById("setPrice");
var monPrice = document.getElementById("monPrice");
var anPrice = document.getElementById("anPrice");

setPriceBut.addEventListener("click", async () => {
  try {
    if (monPrice.value.includes(",") || anPrice.value.includes(",")) {
      alert("Please, do not use commas ',' in ETH prices");
      return;
    }
    if (monPrice.value != undefined && anPrice.value != undefined) {
      var monPriceInWei = Math.round(parseFloat(monPrice.value) * 1e18);
      var anPriceInWei = Math.round(parseFloat(anPrice.value) * 1e18);

      await contract.methods
        .setPriceAlphaPlans(1, monPriceInWei.toString())
        .send({ from: connectedAddress });
      await contract.methods
        .setPriceAlphaPlans(2, anPriceInWei.toString())
        .send({ from: connectedAddress });
    }
  } catch (error) {
    console.error(error);
  }
});

var refCreate = document.getElementById("refCodeCreate");
var createBut = document.getElementById("create");
var mrc = document.getElementById("mrc");

createBut.addEventListener("click", async () => {
  try {
    await contract3.methods
      .createCode(refCreate.value)
      .send({ from: connectedAddress });
    mrc.innerHTML = await contract3.methods.seeMyCode(connectedAddress).call();
  } catch (error) {
    console.log(error);
  }
});

var copyRef = document.getElementById("butCopyRefLink");
var refLink;

copyRef.addEventListener("click", async () => {
  try {
    var myRefCode = await contract3.methods.seeMyCode(connectedAddress).call();
    refLink =
      "https://alphabase-test.github.io/AlphaScoutZone/AlphaScout.html?refCode=" +
      myRefCode.toString();
    copyToClipboard(refLink);
    alert("Enlace de referencia copiado al portapapeles: " + refLink);
  } catch (error) {
    console.error(error);
  }
});

function copyToClipboard(text) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
}


async function seeAlphaSignals() {
  try {
    document.getElementById("numSig1").innerText = await contract2.methods.traSignalAlphaLength(connectedAddress).call(); //+++++++
    document.getElementById("folNum").innerText = await contract.methods.seeAlphaFollowersLen(connectedAddress).call(); //+++++++
  } catch (error) {
    console.error(error);
  }
}

econBut.addEventListener("click", async () => {
  try {
    document.getElementById("earn").innerText = await contract.methods.showEarnedAmount().call({from: connectedAddress});
  } catch(error){console.error(error);}
});

document.getElementById("withd").addEventListener("click", async () => {
  try {
    await contract.methods.withdrawFromAlphaBase().send({from: connectedAddress});
  } catch(error){console.error(error);}
});

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
