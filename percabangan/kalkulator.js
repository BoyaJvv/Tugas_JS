function calculator(){
let angka1 =parseFloat(prompt("masukkan angka pertama"));
let operator = (prompt("masukkan operator (+,-,* atau /): "));
let angka2 = parseFloat (prompt("masukkan angka kedua"));

let result;

if (operator == "+") {
    result = angka1 + angka2;
} else if (operator == "-") {
    result = angka1 - angka2;
} else if (operator == "*") {
    result = angka1 * angka2;
} else if (operator == "/") {
   if (angka2== 0){
    alert("eror tidak bisa membagi dengan 0!");
    return;
   }
   result =angka1/angka2;
} else {
    alert ("terjadi kesalahan!");
    return;
}
alert("hasil =" + result);
}
calculator()