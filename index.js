const lookupTable = {
  // M̅: 1000000,
  // I̅M̅: 900000,
  // D̅: 500000,
  // I̅D̅: 400000,
  // C̅: 100000,
  // I̅C̅: 90000,
  // L̅: 50000,
  // I̅L̅: 40000,
  // X̅: 10000,
  // I̅X̅: 9000,
  // V̅: 5000,
  // I̅V̅: 4000,
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};
let accumulator = "";
let numAccumulator = 0;
const form = document.querySelector("form");
const input = form[0];
const result = document.querySelector(".result");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let str = Number(input.value);
  if (isNaN(str)) {
    str = input.value;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === "I" && str[i + 1] === "V") {
        numAccumulator += 4;
        i++;
      } else if (str[i] === "I" && str[i + 1] === "X") {
        numAccumulator += 9;
        i++;
      } else if (str[i] === "X" && str[i + 1] === "L") {
        numAccumulator += 40;
        i++;
      } else if (str[i] === "X" && str[i + 1] === "C") {
        numAccumulator += 90;
        i++;
      } else if (str[i] === "C" && str[i + 1] === "D") {
        numAccumulator += 400;
        i++;
      } else if (str[i] === "C" && str[i + 1] === "M") {
        numAccumulator += 900;
        i++;
      } else {
        numAccumulator += lookupTable[str[i]];
      }
    }
    result.textContent = numAccumulator;
  } else {
    if (str > 3999) {
      alert("Limit exceeded");
      input.value = "";
      return;
    }
    for (let key in lookupTable) {
      const numberValue = lookupTable[key];
      while (numberValue <= str) {
        str -= numberValue;
        accumulator += key;
      }
    }
    result.textContent = accumulator;
  }
  accumulator = "";
  numAccumulator = 0;
  input.value = "";
});
