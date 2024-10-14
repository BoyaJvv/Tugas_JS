// -Nomor 1 menampilkan bilangan dari satu sampai dengan n

// let n = parseInt(prompt("masukan angka: "));
// let i = 1;
// do {
//   alert(i);
//   i++;
// } while (i <= n);

// -Nomor 2 menambilkan bilangan dari batasAwal sampai dengan batasAkhir 

// let batasAwal = (prompt("masyukan angka pertama: "));
// let batasAkhir = (prompt("masyukan angka terakhir: "));

// if (batasAwal > 0 && batasAkhir > 0 && batasAwal <= batasAkhir) {

//   let i = batasAwal;
//   do {
//     console.log(i);
//     i++;
//   } while (i <= batasAkhir);
// } else {
//   console.log("Invalid input:batasAwal harus lebih kecil atau sama dengan batasAkhir dan keduanya harus berupa angka positif");
// }

// -nomor 3 menampilkan bilangan ganjil dari batasAwal sampai dengan batasAkhir

// let batasAwal = (prompt("masukan angka pertama : "));
// let batasAkhir = (prompt("masukan angka terakhir: "));

// if (batasAwal > 0 && batasAkhir > 0 && batasAwal <= batasAkhir) {
//   for (let i = batasAwal; i <= batasAkhir; i++) {
//     if (i % 2 !== 0) {
//       console.log(i);
//     }
//   }
// } else {
//   console.log("Invalid input: batasAwal harus lebih kecil atau sama dengan batasAkhir dan keduanya harus berupa angka positif");
// }

// -nomor 4 menampilkan bilangann yang habis dibagi 5

// let batasAwal = parseInt(prompt("masukan angka pertama : "));
// let batasAkhir = parseInt(prompt("masukan angka terakhir : "));

// if (batasAwal > 0 && batasAkhir > 0 && batasAwal <= batasAkhir) {
//   for (let i = batasAwal; i <= batasAkhir; i++) {
//     if (i % 5 === 0) {
//       console.log(i);
//     }
//   }
// } else {
//   console.log("Invalid input: batasAwal harus lebih kecil atau sama dengan batasAkhir dan keduanya harus berupa angka positif");
// }

// menengah nomor 1 menampilkan banyak bilangan ganjil

// let batasAwal = parseInt(prompt("masukan angka pertama: "));
// let batasAkhir = parseInt(prompt("masukan angka terakhir: "));

// if (batasAwal > 0 && batasAkhir > 0 && batasAwal <= batasAkhir) {
//   let count = 0;
//   for (let i = batasAwal; i <= batasAkhir; i++) {
//     if (i % 2 !== 0) {
//       count++;
//     }
//   }
//   console.log(`There are ${count} odd numbers between ${batasAwal} and ${batasAkhir}.`);
// } else {
//   console.log("Invalid input: batasAwal harus lebih kecil atau sama dengan batasAkhir dan keduanya harus berupa angka positif");
// }

// menengah nomor 2 menampilkan jumlah deret bilangan ganjil

// let batasAwal = parseInt(prompt("masukan angka pertama: "));
// let batasAkhir = parseInt(prompt("masukan angka terakhir: "));

// if (batasAwal > 0 && batasAkhir > 0 && batasAwal <= batasAkhir) {
//   let sum = 0;
//   for (let i = batasAwal; i <= batasAkhir; i++) {
//     if (i % 2 !== 0) {
//       sum += i;
//     }
//   }
//   console.log(`The sum of odd numbers between ${batasAwal} and ${batasAkhir} is ${sum}.`);
// } else {
//   console.log("Invalid input:batasAwal harus lebih kecil atau sama dengan batasAkhir dan keduanya harus berupa angka positif");
// }

