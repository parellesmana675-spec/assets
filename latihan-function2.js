function cekAngka(angka) {
    if (angka % 2 === 0) {
        return "Genap";
    } else {
        return "Ganjil";
    }
}

console.log(cekAngka(8));
console.log(cekAngka(7));