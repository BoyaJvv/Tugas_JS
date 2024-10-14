let hasil;
function tambah(a, b) {
    hasil = a + b;
    alert(`${a} + ${b} = ${hasil}`);
}
function kurang(a, b) {
    hasil = a - b;
    alert(`${a} - ${b} = ${hasil}`);
} 
function kali(a, b) {
    hasil = a * b;
    alert(`${a} * ${b} = ${hasil}`);
}
function bagi(a, b) {
    hasil = a / b;
    alert(`${a})/ ${b} = ${hasil}`);
}



let x = Number (prompt("masukkan angka pertama"));
let operator = (prompt("masukkan operator (+,-,* atau /): "));
let y = Number (prompt("masukkan angka kedua"));

if (operator == '+') {
    tambah(x,y);
} else if (operator == '-') {
    pengurangan(x,y);
} else if (operator == '*') {
    perkalian(x,y);
} else if (operator == '/') {
    pembagian(x,y);
} else {
    alert ("terjadi kesalahan!")
}