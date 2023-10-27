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
/*
var web3Instance = new Web3(web3.currentProvider);
var ABI;
var conAddress;
const contract = new web3Instance.eth.Contract(ABI, conAddress);
 */
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
       //alphaAddress = await contract.methods.searchName(iNam.value).call();
       iNam.style.marginTop = "2vh";
       namBut.style.marginTop = "2vh";
       divAS.style.display = "block";
       var name = iNam.value;
       alphaName.innerText = name.toUpperCase();
      // var prices = await contract.methods.seeAlphaPrices(alphaAddress).call();
       //monPri.innerText = `${prices[0]} ETH`;
       //annPri.innerText = `${prices[1]} ETH`;

    } catch(error){console.log("error searching name")}
})
