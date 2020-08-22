var nama = "Pak Arman";
var harga = 1500000;
var ukuran1 = 20.5;
var ukuran2 = 30;
var ppn = 15/100;

var HargaTanpappn = ukuran1 * ukuran2 * harga;
var Hargappn = HargaTanpappn * ppn;
var hasil = HargaTanpappn + Hargappn;

console.log("Nominal yang harus dibayar yaitu " + hasil);