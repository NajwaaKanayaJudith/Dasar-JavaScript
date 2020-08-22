class Lingkaran {
    constructor(r) {
        this.jarijari = r
    }

    Luas = () => {
        return 3.14 * Math.pow(this.jarijari,2)
    }

    Keliling = () => {
        return 2 * 3.14 * this.jarijari
    }
}

class Tabung extends Lingkaran{
    constructor(r,t){
        super(r)
        this.tinggi = t
    }

    Volume = () =>{
        return 3.14 * Math.pow(this.jarijari,2) * this.tinggi
    }

    LuasPermukaan = () =>{
        return 2 * 3.14 * this.jarijari * (this.jarijari + this.tinggi)
    }

    LuasSelimut = () =>{
        return 2 * 3.14 * this.jarijari * this.tinggi
    }
}

class Kerucut extends Lingkaran{
    s = null
    constructor(r,t){
        super(r)
        this.tinggi = t
        this.s = Math.sqrt(Math.pow(r,2) + Math.pow(t,2))
    }

    Volume = () => {
        return(3.14 * Math.pow(this.jarijari,2) * this.tinggi) / 3
    }

    LuasPermukaan = () =>{
        return 3.14 * this.jarijari * (this.s + this.jarijari)
    }

    LuasSelimut = () => {
        return 3.14 * this.jarijari * this.s
    }
}

class Bola extends Lingkaran {
    constructor(r) {
        super(r)
    }

    Volume = () => {
        return (3.14 * Math.pow(this.jarijari,3) * 4) /3
    }

    LuasPermukaan = () => {
        return 4 * 3.14 * Math.pow(this.jarijari,2)
    }
}

let A = new Tabung (7.5, 50)
console.log("Volume Tabung = " + A.Volume())
console.log("Luas Permukaan Tabung = " + A.LuasPermukaan())
console.log("Luas Selimut Tabung = " + A.LuasSelimut())

let B = new Kerucut (10, 40)
console.log("Volume Kerucut = " + B.Volume())
console.log("Luas Permukaan Kerucut = " + B.LuasPermukaan())
console.log("Luas Selimut Kerucut = " + B.LuasSelimut())

let C = new Bola (15)
console.log("Volume Bola = " + C.Volume())
console.log("Luas Permukaan Bola = " + C.LuasPermukaan())
console.log("Luas Selimut Bola = " + C.LuasSelimut())