let differences = 0;

// 1
let r1 = (0 == "");
let r2 = (0 === "");
console.log('0 == "" -> ' + r1 + ' | 0 === "" -> ' + r2);
if (r1 === true && r2 === false) differences++;

// 2
r1 = (0 == "0");
r2 = (0 === "0");
console.log('0 == "0" -> ' + r1 + ' | 0 === "0" -> ' + r2);
if (r1 === true && r2 === false) differences++;

// 3
r1 = (0 == false);
r2 = (0 === false);
console.log('0 == false -> ' + r1 + ' | 0 === false -> ' + r2);
if (r1 === true && r2 === false) differences++;

// 4
r1 = ("" == false);
r2 = ("" === false);
console.log('"" == false -> ' + r1 + ' | "" === false -> ' + r2);
if (r1 === true && r2 === false) differences++;

// 5
r1 = (null == undefined);
r2 = (null === undefined);
console.log('null == undefined -> ' + r1 + ' | null === undefined -> ' + r2);
if (r1 === true && r2 === false) differences++;

// 6
r1 = (null == false);
r2 = (null === false);
console.log('null == false -> ' + r1 + ' | null === false -> ' + r2);
if (r1 === true && r2 === false) differences++;

// 7
r1 = (NaN == NaN);
r2 = (NaN === NaN);
console.log('NaN == NaN -> ' + r1 + ' | NaN === NaN -> ' + r2);
if (r1 === true && r2 === false) differences++;

// 8
r1 = (1 == "1");
r2 = (1 === "1");
console.log('1 == "1" -> ' + r1 + ' | 1 === "1" -> ' + r2);
if (r1 === true && r2 === false) differences++;

// 9
r1 = (" \t\n " == 0);
r2 = (" \t\n " === 0);
console.log('" \\t\\n " == 0 -> ' + r1 + ' | " \\t\\n " === 0 -> ' + r2);
if (r1 === true && r2 === false) differences++;

console.log("---");

console.log(differences + " paire(s) où == et === donnent des résultats différents");