// nomor 1 //

// let y = prompt("masukan nomor ");
// let x = prompt("masukan nomor ");

// if (y >= x) {
//   alert(`angka terbesar adalah: ${y}`);
// } else {
//   alert(`angka terbesar adalah: ${x}`);
// }

// nomor 2 //

// let a = prompt("Masukkan nilai koefisien a:");
// let b = prompt("Masukkan nilai koefisien b:");
// let c = prompt("Masukkan nilai koefisien c:");

// a = parseFloat(a);
// b = parseFloat(b);
// c = parseFloat(c);

// let D = (b * b) - (4 * a * c);

// if (D > 0) {
//   alert("Akar persamaan adalah real dan berbeda (D > 0)");
// } else if (D === 0) {
//   alert("Akar persamaan adalah real dan sama (D = 0)");
// } else {
//   alert("Akar persamaan adalah imaginer (D < 0)");
// }

// nomor 3 //

// let nilaiUTS = prompt("Masukkan nilai UTS:");
// let nilaiUAS = prompt("Masukkan nilai UAS:");
// let nilaiTugas = prompt("Masukkan nilai Tugas:");

// nilaiUTS = parseFloat(nilaiUTS);
// nilaiUAS = parseFloat(nilaiUAS);
// nilaiTugas = parseFloat(nilaiTugas);

// let NA = (nilaiUTS * 0.35) + (nilaiUAS * 0.45) + (nilaiTugas * 0.20);

// let indeksAkhir;

// if (NA >= 80 && NA <= 100) {
//   indeksAkhir = "A";
// } else if (NA >= 70 && NA < 80) {
//   indeksAkhir = "B";
// } else if (NA >= 50 && NA < 70) {
//   indeksAkhir = "C";
// } else if (NA >= 40 && NA < 50) {
//   indeksAkhir = "D";
// } else {
//   indeksAkhir = "E";
// }
// alert("Nilai Akhir (NA): " + NA.toFixed(2));
// alert("Indeks Akhir: " + indeksAkhir);

// nomor 4 //

// let x = prompt("Masukkan nilai x:");
// let y = prompt("Masukkan nilai y:");
// let z = prompt("Masukkan nilai z:");

// x = parseFloat(x);
// y = parseFloat(y);
// z = parseFloat(z);

// let terbesar;

// if (x > y && x > z) {
//   terbesar = x;
// } else if (y > x && y > z) {
//   terbesar = y;
// } else {
//   terbesar = z;
// }

// alert("Bilangan terbesar adalah: " + terbesar);

// nomor 5 //

// let x = prompt("Masukkan nilai x:");
// let y = prompt("Masukkan nilai y:");

// x = parseFloat(x);
// y = parseFloat(y);

// let kuadran;

// if (x > 0 && y > 0) {
//   kuadran = "Kuadran I";
// } else if (x < 0 && y > 0) {
//   kuadran = "Kuadran II";
// } else if (x < 0 && y < 0) {
//   kuadran = "Kuadran III";
// } else if (x > 0 && y < 0) {
//   kuadran = "Kuadran IV";
// } else if (x === 0 && y !== 0) {
//   kuadran = "Garis y";
// } else if (y === 0 && x !== 0) {
//   kuadran = "Garis x";
// } else {
//   kuadran = "Titik Pusat (0,0)";
// }

// alert("Titik berada di: " + kuadran);

// nomor 6

// function hitungHariKeberapa(tanggal, bulan) {
//   let totalHari = 0;

//   if (bulan > 1) { totalHari += 31; // Januari
//   }
//   if (bulan > 2) { totalHari += 28; // Februari
//   }
//   if (bulan > 3) { totalHari += 31; // Maret
//   }
//   if (bulan > 4) { totalHari += 30; // April
//   }
//   if (bulan > 5) { totalHari += 31; // Mei
//   }
//   if (bulan > 6) { totalHari += 30; // Juni
//   }
//   if (bulan > 7) { totalHari += 31; // Juli
//   }
//   if (bulan > 8) { totalHari += 31; // Agustus
//   }
//   if (bulan > 9) { totalHari += 30; // September
//   }
//   if (bulan > 10) { totalHari += 31; // Oktober
//   }
//   if (bulan > 11) { totalHari += 30; // November
//   }
//   if (bulan > 12) { totalHari += 31; // desember
//   }

//   totalHari += tanggal;

//   return totalHari;
// }
// let tanggal = prompt("masukan bulan");
// let bulan = prompt ("masukan bulan");
// let result= CountDay
for (let i = 5; i > 5; i++) { // menampilkan 0, lalu 1, lalu 2
  alert("hai");
}