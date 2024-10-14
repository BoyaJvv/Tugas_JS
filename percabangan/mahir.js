// nomor 1 menghitung lama bekerja

// function hitungLamaBekerja(jamMasuk, jamKeluar) {
//   let lamaBekerja;
  
//   if (jamKeluar >= jamMasuk) {
//       lamaBekerja = jamKeluar - jamMasuk;
//   } else {

//     lamaBekerja = (12 - jamMasuk) + jamKeluar;
//   }
  
//   return lamaBekerja;
// }

// let jamMasuk = parseInt(prompt("Masukkan jam masuk (1-12):"));
// let jamKeluar = parseInt(prompt("Masukkan jam keluar (1-12):"));

// let lamaBekerja = hitungLamaBekerja(jamMasuk, jamKeluar);

// alert("Lama bekerja: " + lamaBekerja + " jam");

// nomor 2 menghitung biaya parkir

// function hitungBiayaParkir() {
//     let jamMasuk = parseInt(prompt("Masukkan jam masuk (0-23): "));
//     let jamKeluar = parseInt(prompt("Masukkan jam keluar (0-23): "));

//     let lamaParkir;

//     // Jika jam keluar lebih kecil dari jam masuk, artinya parkir melintasi tengah malam
//     if (jamKeluar >= jamMasuk) {
//         lamaParkir = jamKeluar - jamMasuk;
//     } else {
//         lamaParkir = (24 - jamMasuk) + jamKeluar;
//     }

//     let tarif;

//     if (lamaParkir <= 2) {
//         tarif = 1500;
//     } else {
//         tarif = 1500 + (lamaParkir - 2) * 1000;
//     }

//     alert(`Lama parkir: ${lamaParkir} jam\nBiaya parkir: Rp ${tarif}`);
// }

// hitungBiayaParkir();

//nomor 5 menghitung mobil yang diperlukan untuk acara wisata

// function hitungMobilDiperlukan() {
//     let jumlahPeserta = parseInt(prompt("Masukkan jumlah peserta: "));
//     const kapasitasMobil = 7;

//     let jumlahMobil = Math.ceil(jumlahPeserta / kapasitasMobil);

//     alert(`Jumlah mobil yang diperlukan: ${jumlahMobil}`);
// }

// hitungMobilDiperlukan();