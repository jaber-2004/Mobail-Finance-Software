// Login Screen Start
let fastErrorMsg = document.getElementById("fastErrorMsg");
let phNumber = document.getElementById("phNumber");
let pinNumber = document.getElementById("pinNumber");
let loginBtn = document.getElementById("loginBtn");
let fastHidden = document.getElementById("fastHidden");
let secondHidden = document.getElementById("secondHidden");

function toggleLoginBtn() {
  if (phNumber.value == "" && pinNumber.value == "") {
    loginBtn.setAttribute("hidden", true);
  } else {
    loginBtn.removeAttribute("hidden");
  }
}

phNumber.addEventListener("input", toggleLoginBtn);
pinNumber.addEventListener("input", toggleLoginBtn);

loginBtn.addEventListener("click", () => {
  if (phNumber.value == "0000" && pinNumber.value == "0000") {
    fastErrorMsg.setAttribute("hidden", true);
    secondHidden.removeAttribute("hidden");
    fastHidden.setAttribute("hidden", true);
  } else {
    fastErrorMsg.removeAttribute("hidden");
    secondHidden.setAttribute("hidden", true);
    fastHidden.removeAttribute("hidden");
    setTimeout(() => {
      fastErrorMsg.setAttribute("hidden", true);
    }, 1500);
  }
  phNumber.value = "";
  pinNumber.value = "";
});

// login Screen End

// Logout Btn Start
let logoutBtn = document.getElementById("logoutBtn");

logoutBtn.addEventListener("click", () => {
  fastHidden.removeAttribute("hidden");
  secondHidden.setAttribute("hidden", true);
});
// Logout Btn End

// Add Money Start
let addMoneyBtn = document.getElementById("addMoneyBtn");
let addMoneyScreen = document.getElementById("addMoneyScreen");

addMoneyBtn.addEventListener("click", () => {
  addMoneyScreen.removeAttribute("hidden");
  cashOutScreen.setAttribute("hidden", true);
  transferMoneyScreen.setAttribute("hidden", true);
  getBonusScreen.setAttribute("hidden", true);
  payBillScreen.setAttribute("hidden", true);
  transctionsScreen.setAttribute("hidden", true);
});

let totalMoney = document.getElementById("totalMoney");
let addAmount = document.getElementById("addAmount");
let addMoneyPin = document.getElementById("addMoneyPin");
let addMoneyAddBtn = document.getElementById("addMoneyAddBtn");
let addMoneyError = document.getElementById("addMoneyError");

addMoneyAddBtn.addEventListener("click", () => {
  if (addMoneyPin.value == "0000") {
    let tM = parseInt(totalMoney.innerHTML);
    let adddPin = parseInt(addAmount.value);
    let total = tM + adddPin;
    totalMoney.innerHTML = total;
  } else {
    addMoneyError.removeAttribute("hidden");
    setTimeout(() => {
      addMoneyError.setAttribute("hidden", true);
    }, 1500);
  }
  addMoneyPin.value = "";
  addAmount.value = "";
});

// Add Money End

// CashOut Start
let cashOutScreen = document.getElementById("cashOutScreen");
let cashOutBtn = document.getElementById("cashOutBtn");

cashOutBtn.addEventListener("click", () => {
  cashOutScreen.removeAttribute("hidden");
  addMoneyScreen.setAttribute("hidden", true);
  transferMoneyScreen.setAttribute("hidden", true);
  getBonusScreen.setAttribute("hidden", true);
  payBillScreen.setAttribute("hidden", true);
  transctionsScreen.setAttribute("hidden", true);
});

let cashOutInput = document.getElementById("cashOutInput");
let cashOutPin = document.getElementById("cashOutPin");
let cashOutBtnMoney = document.getElementById("cashOutBtnMoney");
let cashOutError = document.getElementById("cashOutError");

cashOutBtnMoney.addEventListener("click", () => {
  if (cashOutPin.value == "0000") {
    let tM = parseInt(totalMoney.innerHTML);
    let adddPin = parseInt(cashOutInput.value);
    let total = tM - adddPin;
    totalMoney.innerHTML = total;
  } else {
    cashOutError.removeAttribute("hidden");
    setTimeout(() => {
      cashOutError.setAttribute("hidden", true);
    }, 1500);
  }
  cashOutPin.value = "";
  cashOutInput.value = "";
});

// CashOut End

// TransferMoney Start
let transferMoneyScreen = document.getElementById("transferMoneyScreen");
let transferMoneyBtn = document.getElementById("transferMoneyBtn");

transferMoneyBtn.addEventListener("click", () => {
  transferMoneyScreen.removeAttribute("hidden");
  addMoneyScreen.setAttribute("hidden", true);
  cashOutScreen.setAttribute("hidden", true);
  getBonusScreen.setAttribute("hidden", true);
  payBillScreen.setAttribute("hidden", true);
  transctionsScreen.setAttribute("hidden", true);
});

let transferMoneyInput = document.getElementById("transferMoneyInput");
let transferPin = document.getElementById("transferPin");
let transfetBtnMoney = document.getElementById("transfetBtnMoney");
let transferError = document.getElementById("transferError");

transfetBtnMoney.addEventListener("click", () => {
  if (transferPin.value == "0000") {
    let tM = parseInt(totalMoney.innerHTML);
    let adddPin = parseInt(transferMoneyInput.value);
    let total = tM - adddPin;
    totalMoney.innerHTML = total;
  } else {
    transferError.removeAttribute("hidden");
    setTimeout(() => {
      transferError.setAttribute("hidden", true);
    }, 1500);
  }
  transferPin.value = "";
  transferMoneyInput.value = "";
});
// TransferMoney End

// Get Bonus Start
let getBonusScreen = document.getElementById("getBonusScreen");
let getBonusBtn = document.getElementById("getBonusBtn");

getBonusBtn.addEventListener("click", () => {
  getBonusScreen.removeAttribute("hidden");
  addMoneyScreen.setAttribute("hidden", true);
  cashOutScreen.setAttribute("hidden", true);
  transferMoneyScreen.setAttribute("hidden", true);
  payBillScreen.setAttribute("hidden", true);
  transctionsScreen.setAttribute("hidden", true);
});

let getBonusBtnMoney = document.getElementById("getBonusBtnMoney");
let getBonusError = document.getElementById("getBonusError");

getBonusBtnMoney.addEventListener("click", () => {
  getBonusError.removeAttribute("hidden");
  setTimeout(() => {
    getBonusError.setAttribute("hidden", true);
  }, 1500);
});

// Get Bonus End

// Pay Bill Start
let payBillScreen = document.getElementById("payBillScreen");
let payBillBtn = document.getElementById("payBillBtn");

payBillBtn.addEventListener("click", () => {
  payBillScreen.removeAttribute("hidden");
  addMoneyScreen.setAttribute("hidden", true);
  cashOutScreen.setAttribute("hidden", true);
  transferMoneyScreen.setAttribute("hidden", true);
  getBonusScreen.setAttribute("hidden", true);
  transctionsScreen.setAttribute("hidden", true);
});

let payBillInput = document.getElementById("payBillInput");
let payBillPin = document.getElementById("payBillPin");
let payBillBtnMoney = document.getElementById("payBillBtnMoney");
let payBillError = document.getElementById("payBillError");

payBillBtnMoney.addEventListener("click", () => {
  if (payBillPin.value == "0000") {
    let tM = parseInt(totalMoney.innerHTML);
    let addPin = parseInt(payBillInput.value);
    let total = tM - addPin;
    totalMoney.innerHTML = total;
  } else {
    payBillError.removeAttribute("hidden");
    setTimeout(() => {
      payBillError.setAttribute("hidden", true);
    }, 1500);
  }
  payBillPin.value = "";
  payBillInput.value = "";
});

// Pay Bill End

// Transctions Start
let transctionsScreen = document.getElementById("transctionsScreen");
let transactionsBtn = document.getElementById("transactionsBtn");

transactionsBtn.addEventListener("click", () => {
  transctionsScreen.removeAttribute("hidden");
  addMoneyScreen.setAttribute("hidden", true);
  cashOutScreen.setAttribute("hidden", true);
  transferMoneyScreen.setAttribute("hidden", true);
  getBonusScreen.setAttribute("hidden", true);
  payBillScreen.setAttribute("hidden", true);
});
// Transctions End
