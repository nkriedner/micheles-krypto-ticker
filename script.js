
// Making the Api request for ADA

const req_ada = new XMLHttpRequest();

req_ada.onload = function() {
  console.log("ALL DONE WITH REQUEST!!!");
  console.log(this.response);
  const data = JSON.parse(this.response);
  ada1 = data.ticker.price;
  adaDisplay3000.textContent = Math.floor((ada1 * 3000) * 100) / 100;
}

req_ada.onerror = function() {
  console.log("ERROR!!!");
  console.log(this);
}

req_ada.open("GET", "https://api.cryptonator.com/api/ticker/ada-eur");
req_ada.send();


// Making the Api request for ETH

const req_eth = new XMLHttpRequest();

req_eth.onload = function() {
  console.log("ALL DONE WITH REQUEST!!!");
  console.log(this.response);
  const data = JSON.parse(this.response);
  eth1 = data.ticker.price;
  ethDisplay1_2.textContent = Math.floor((eth1 * 1.2) * 100) / 100;
}

req_eth.onerror = function() {
  console.log("ERROR!!!");
  console.log(this);
}

req_eth.open("GET", "https://api.cryptonator.com/api/ticker/eth-eur");
req_eth.send();


// Making the Api request for BTC

const req_btc = new XMLHttpRequest();

req_btc.onload = function() {
  console.log("ALL DONE WITH REQUEST!!!");
  console.log(this.response);
  const data = JSON.parse(this.response);
  btc1 = data.ticker.price;
  console.log(btc1);
  btcDisplay0_01.textContent = Math.floor((btc1 * 0.01) * 100) / 100;
}

req_btc.onerror = function() {
  console.log("ERROR!!!");
  console.log(this);
}

req_btc.open("GET", "https://api.cryptonator.com/api/ticker/btc-eur");
req_btc.send();


// Making the Api request for DOT

const req_dot = new XMLHttpRequest();

req_dot.onload = function() {
  console.log("ALL DONE WITH REQUEST!!!");
  console.log(this.response);
  const data = JSON.parse(this.response);
  dot1 = data.ticker.price;
  console.log(dot1);
  dotDisplay14.textContent = Math.floor((dot1 * 14) * 100) / 100;
}

req_dot.onerror = function() {
  console.log("ERROR!!!");
  console.log(this);
}

req_dot.open("GET", "https://api.cryptonator.com/api/ticker/dot-eur");
req_dot.send();


// Printing the result to the page

const adaDisplay3000 = document.getElementById("ada3000");
const ethDisplay1_2 = document.getElementById("eth1-2");
const btcDisplay0_01 = document.getElementById("btc0-01");
const dotDisplay14 = document.getElementById("dot14");
