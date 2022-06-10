let e = 0;
let upg = 0;
let upg2 = 0;
let upg3 = 0;
let upg4 = 0;
let upg5 = 0;
let upg6 = 0;
let clickval = 0;
let clickval1 = 0;
let clickval3 = 0;
let clickval4 = 0;
let clickval6 = 0;
const speed = 1010;
let cost = 10;
let cost2 = 100;
let cost3 = 1000;
let cost4 = 75;
let cost5 = 5000;
let cost6 = 10000;

let buttonvalue = 1;
const hide = document.getElementById("hiddentest");
const cst2 = document.getElementById("cost2");
const up = document.getElementById("ultra");
const hide2 = document.getElementById("hide2");
const cst3 = document.getElementById("cost3");
const omgc = document.getElementById("omega");
const cst4 = document.getElementById("cost4");
const up4 = document.getElementById("buttonupgrade");
const hide3 = document.getElementById("hide3");
const hype = document.getElementById("hype");
const cst5 = document.getElementById("cost5");
/* ------------------------------------------------ */
const hide4 = document.getElementById("hide4");
const nukc = document.getElementById("nukee");
const cst6 = document.getElementById("cost6");
let upgbuy2 = false;
let check = false;
let check1 = false;
let check3 = false;
let check4 = false;
let check6 = false;
let upgbuy3 = false;
let upgbuy4 = false;
let upgbuy6 = false;
let upgbuy = false;
const hiddenoof = false;
const mtl = "you dont have enough clicks for this item: ";
// if (e >= 10) {
// if (hide.style.visibility === 'visible') {
//   hide.style.visibility = 'hidden';
//  }
// }

/* setInterval(checks, 1);

function checks() {
    //checks for e >= than hidden reqiurnments
} */

function codeinput() {
  avariable = prompt("Password?");
  if (avariable === "Dart") {
    inpt2 = prompt("how many clicks?");
    e += parseInt(inpt2);
    updac();
  }
}

hide2.style.visibility = "hidden";
hide3.style.visibility = "hidden";
hide4.style.visibility = "hidden";

function click() {
  e = e + clickval1;
  updac();
}
function click1() {
  e = e + clickval;
  updac();
}
function click3() {
  e = e + clickval3;
  updac();
}
function click4() {
  e += clickval4;
  updac();
}
function click6() {
  e += clickval6;
  updac();
}
hide.style.visibility = "hidden";

function myfunction() {
  e = e + buttonvalue;
  document.getElementById("var").innerHTML = "clicks: " + e;
  if (e >= 100) {
    hide.style.visibility = "visible";
  }
  if (e >= 1000) {
    hide2.style.visibility = "visible";
  }

  if (e >= 5000) {
    hide3.style.visibility = "visible";
  }

  if (e >= 10000) {
    hide4.style.visibility = "visible";
  }
}

function updac() {
  document.getElementById("var").innerHTML = "clicks: " + e;
}

function buyupgrade() {
  if (e >= cost) {
    upg = upg + 1;
    e = e - cost;
    cost = cost + 5;
    upgbuy = true;
    clickval = clickval + 1;
    document.getElementById("upgrade").innerHTML = " auto clickers: " + upg;
    document.getElementById("cost").innerHTML = "cost: " + cost;
    updac();

    if (check1 === false) {
      if (upgbuy === true) {
        setInterval(click1, 2000);
        check1 = true;
      }
    }
  } else {
    alert(mtl + '"auto clicker"!');
  }
}

function buyupgrade1() {
  if (e >= cost2) {
    upg2 = upg2 + 1;
    e = e - cost2;
    cost2 = cost2 + 50;
    clickval1 = clickval1 + 1;
    upgbuy2 = true;
    cst2.innerHTML = "cost: " + cost2;
    up.innerHTML = "ultra clickers: " + upg2;
    updac();
    if (check === false) {
      if (upgbuy2 === true) {
        setInterval(click, 1000);
        check = true;
      }
    }
  } else {
    alert(mtl + '"ultra clicker"!');
  }
}

function buyupgrade3() {
  if (e >= cost3) {
    upg3 = upg3 + 1;
    e = e - cost3;
    cost3 = cost3 + 500;
    clickval3 = clickval3 + 1;
    upgbuy3 = true;
    cst3.innerHTML = "cost: " + cost3;
    omgc.innerHTML = "omega clickers: " + upg3;
    updac();
    if (check3 === false) {
      if (upgbuy3 === true) {
        setInterval(click3, 100);
        check3 = true;
      }
    }
  } else {
    alert(mtl + '"omega clicker"!');
  }
}

function upgradeclick() {
  if (e >= cost4) {
    e = e - cost4;
    upg4 = upg4 + 1;
    buttonvalue = buttonvalue + 1;
    cost4 = cost4 + 25;
    updac();
    up4.innerHTML = "button upgrades: " + upg4;
    cst4.innerHTML = "cost: " + cost4;
  } else {
    alert(mtl + '"button upgrade"!');
  }
}

function buyupgrade4() {
  if (e >= cost5) {
    e -= cost5;
    upg5 += 1;
    cost5 += 1000;
    upgbuy4 = true;
    clickval4 += 1;
    hype.innerText = "hyper clickers: " + upg5;
    cst5.innerText = "cost: " + cost5;
    updac();
    if (check4 === false) {
      if (upgbuy4 === true) {
        setInterval(click4, 10);
        check4 = true;
      }
    }
  } else {
    alert(mtl + '"hyper clicker"!');
  }
}

function buynuk() {
  if (e >= cost6) {
    e -= cost6;
    upg6 += 1;
    cost6 += 5000;
    upgbuy6 = true;
    clickval6 += 2;
    nukc.innerText = "nuclear clickers: " + upg6;
    cst6.innerText = "cost: " + cost6;
    updac();
    if (check6 === false) {
      if (upgbuy6 === true) {
        setInterval(click6, 0.1);
        check6 = true;
      }
    }
  } else {
    alert(mtl + '"nuclear clicker"!');
  }
}
