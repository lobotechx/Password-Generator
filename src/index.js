let pwGen1 = document.getElementById("pw-gen1");
let pwGen2 = document.getElementById("pw-gen2");
let pwGen3 = document.getElementById("pw-gen3");
let pwGen4 = document.getElementById("pw-gen4");
let pwBtn = document.getElementById("pw-btn");

let randomPW = [
  "A",
  "Q",
  "W",
  "E",
  "R",
  "T",
  "Y",
  "U",
  "I",
  "O",
  "P",
  "S",
  "D",
  "F",
  "G",
  "H",
  "J",
  "K",
  "L",
  "Z",
  "X",
  "C",
  "V",
  "B",
  "N",
  "M",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "a",
  "q",
  "w",
  "e",
  "r",
  "t",
  "y",
  "u",
  "i",
  "o",
  "p",
  "s",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "z",
  "x",
  "c",
  "v",
  "b",
  "n",
  "m",
];
// function rolls() {
//   for (let i = 0; i < Math.floor(Math.random() * randomPW.length); i++) {}
//   return randomPW[i];
// }
// rolls();

function generateCode() {
  let size16 = [];
  for (let i = 0; i < 16; i++) {
    size16.push(randomPW[Math.floor(Math.random() * randomPW.length)]);
  }
  return size16.join("");
}
console.log(generateCode());

function password() {
  pwGen1.textContent = generateCode();
  pwGen2.textContent = generateCode();
  pwGen3.textContent = generateCode();
  pwGen4.textContent = generateCode();
}

// console.log(password());

pwBtn.addEventListener("click", password);

// pwGen.textContent = pwBtn.addEventListener("click", generateCode());
