let barang = [
    { nama: "Beras", harga: 10000, jumlah: 5 },
    { nama: "Gula", harga: 14000, jumlah: 5 },
    { nama: "Telur", harga: 20000, jumlah: 2 },
    { nama: "Minyak Goreng", harga: 9000, jumlah: 10 },
]

let Beras = barang[0].harga * barang[0].jumlah;
let Gula = barang[1].harga * barang[1].jumlah;
let Telur = barang[2].harga * barang[2].jumlah;
let MinyakGoreng = barang[3].harga * barang[3].jumlah;

let total = Beras + Gula + Telur + MinyakGoreng;

console.log("Total belanjaan Bu Astuti " + total);
