        function luasSegitiga(alas, tinggi) {
            return 0.5 * alas * tinggi;
        }

        function kelilingLingkaran(jariJari) {
            return 2 * Math.PI * jariJari;
        }

        function cekBilanganPrima(bilangan) {
            if (bilangan <= 1) return false;
            for (let i = 2; i <= Math.sqrt(bilangan); i++) {
                if (bilangan % i === 0) return false;
            }
            return true;
        }

        function tampilkanMenu() {
            let pilihan = prompt("Menu:\n1. Luas Segitiga\n2. Keliling Lingkaran\n3. Bilangan Prima\n\nMasukkan pilihan Anda (1, 2, atau 3):");

            switch (pilihan) {
                case '1': 
                    const alas = parseFloat(prompt("Masukkan nilai alas segitiga:"));
                    const tinggi = parseFloat(prompt("Masukkan nilai tinggi segitiga:"));
                    const luas = luasSegitiga(alas, tinggi);
                    alert(`Luas segitiga dengan alas ${alas} dan tinggi ${tinggi} adalah: ${luas}`);
                    break;

                case '2':
                    const jariJari = parseFloat(prompt("Masukkan nilai jari-jari lingkaran:"));
                    const keliling = kelilingLingkaran(jariJari);
                    alert(`Keliling lingkaran dengan jari-jari ${jariJari} adalah: ${keliling}`);
                    break;

                case '3':
                    const bilangan = parseInt(prompt("Masukkan bilangan bulat:"));
                    const prima = cekBilanganPrima(bilangan);
                    if (prima) {
                        alert(`${bilangan} adalah bilangan prima`);
                    } else {
                        alert(`${bilangan} bukan bilangan prima`);
                    }
                    break;

                default:
                    alert("Pilihan tidak valid, silakan pilih 1, 2, atau 3.");
                    break;
            }
        }

        // Memulai program dengan menampilkan menu
        tampilkanMenu();