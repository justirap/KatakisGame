var statekX = 0;
var statekY = 150;
var wartosc = 0;
var gora = false;
var dol = false;
var lewo = false;
var prawo = false;
var strzal = false;
var interwal: NodeJS.Timeout;
var dokosmitow = 0;
var dokosmitow2 = 0;
var dometeo = 0;
var dometeo2 = 0;
var dostatkow = 0;
var dostatkow2 = 0;
var dostatkow3 = 0;
var dointer = "true";
var czas = 0;
var czas1 = 0;
var hp = 3;
var punkty = 0;
var ulepszenie = 0;
var dokulek = 0;

class Boss {
    public pozycja: number[];
    public przeskok: number[];
    public warunek: number;
    public hp: number
    constructor(pozycja: number[], przeskok: number[]) {
        this.pozycja = pozycja;
        this.przeskok = przeskok;
        this.warunek = 0;
        this.hp = 30;

    }

    rysuj() {
        if (this.warunek == 0) {
            var img = document.createElement("img");
            img.src = "./img/boss1.png";
            if (context != null) {
                context.drawImage(img, this.pozycja[0], this.pozycja[1], 319, 228);
            }
        } else {
            var img = document.createElement("img");
            img.src = "./img/boss2.png";
            if (context != null) {
                context.drawImage(img, this.pozycja[0], this.pozycja[1], 319, 228);
            }
            setTimeout(() => {
                this.warunek = 0;
            }, 100);
        }
    }

    zmiana() {
        this.warunek = 1;
        this.hp--;
    }

    odswiez() {
        this.rysuj();
        this.pozycja[0] += this.przeskok[0];
        this.pozycja[1] += this.przeskok[1];
    }
}

class Pocisk {
    public pozycja: number[];
    public przeskok: number[];
    public obrazek: string;
    constructor(pozycja: number[], przeskok: number[], obrazek: string) {
        this.pozycja = pozycja;
        this.przeskok = przeskok;
        this.obrazek = obrazek;
    }

    rysuj() {
        var img = document.createElement("img");
        img.src = "./img/" + this.obrazek;
        if (context != null) {
            context.drawImage(img, this.pozycja[0], this.pozycja[1], 15, 6);
        }
    }

    odswiez() {
        this.rysuj();
        this.pozycja[0] += this.przeskok[0];
        this.pozycja[1] += this.przeskok[1];
    }
}

class PociskCzolgu {
    public pozycja: number[];
    public przeskok: number[];
    public obrazek: string;
    constructor(pozycja: number[], przeskok: number[], obrazek: string) {
        this.pozycja = pozycja;
        this.przeskok = przeskok;
        this.obrazek = obrazek;
    }

    rysuj() {
        var img = document.createElement("img");
        img.src = "./img/" + this.obrazek;
        if (context != null) {
            context.drawImage(img, this.pozycja[0], this.pozycja[1], 9, 8);
        }
    }

    odswiez() {
        this.rysuj();
        this.pozycja[0] += this.przeskok[0];
        this.pozycja[1] += this.przeskok[1];
    }
}

class StatekAnimacja {
    public warunek1: string
    public liczba: number

    constructor() {

        this.warunek1 = "1";
        this.liczba = 0;

    }

    rysuj() {
        if (this.warunek1 == "1") {
            var img = document.createElement("img");
            img.src = "./img/bron1.png";
            if (context != null) {
                context.drawImage(img, statekX + 76, statekY + 5, 38, 24);
            }
            this.liczba++;
            if (this.liczba == 15) {
                this.warunek1 = "2";
            }
        }
        else if (this.warunek1 == "2") {
            var img = document.createElement("img");
            img.src = "./img/bron2.png";
            if (context != null) {
                context.drawImage(img, statekX + 76, statekY + 5, 38, 24);
            }
            this.liczba++;
            if (this.liczba == 30) {
                this.warunek1 = "3";
            }
        }
        else if (this.warunek1 == "3") {
            var img = document.createElement("img");
            img.src = "./img/bron3.png";
            if (context != null) {
                context.drawImage(img, statekX + 76, statekY + 5, 38, 24);
            }
            this.liczba++;
            if (this.liczba == 45) {
                this.liczba = 0;
                this.warunek1 = "1";
            }
        }
    }


}

class Tlo {
    public pozycja: number[];
    public warunek: number;
    constructor(pozycja: number[], warunek: number) {
        this.pozycja = pozycja;

        this.warunek = warunek;
    }

    rysuj() {
        if (this.warunek == 1) {
            var img = document.createElement("img");
            img.src = "./img/dotla1.png";
            if (context != null) {
                context.drawImage(img, this.pozycja[0], this.pozycja[1], 83, 78);
            }

        }
        else if (this.warunek == 2) {
            var img = document.createElement("img");
            img.src = "./img/dotla2.png";
            if (context != null) {
                context.drawImage(img, this.pozycja[0], this.pozycja[1], 48, 44);
            }
        }

        else if (this.warunek == 3) {
            var img = document.createElement("img");
            img.src = "./img/dotla3.png";
            if (context != null) {
                context.drawImage(img, this.pozycja[0], this.pozycja[1], 64, 52);
            }
        }

        else if (this.warunek == 4) {
            var img = document.createElement("img");
            img.src = "./img/dotla4.png";
            if (context != null) {
                context.drawImage(img, this.pozycja[0], this.pozycja[1], 44, 30);
            }
        }
    }


    odswiez() {

        this.rysuj();
        this.pozycja[0] -= 1;

    }
}

class Meteoryt {
    public pozycja: number[];
    public przeskok: number[];
    public warunek: number;
    public wybuch1: string;
    constructor(pozycja: number[], przeskok: number[], warunek: number) {
        this.pozycja = pozycja;
        this.przeskok = przeskok;
        this.warunek = warunek;
        this.wybuch1 = "false";
    }

    rysuj() {
        if (this.warunek == 0) {
            var img = document.createElement("img");
            img.src = "./img/meteoryt.png";
            if (context != null) {
                context.drawImage(img, this.pozycja[0], this.pozycja[1], 47, 38);
            }

        }
        else {
            var img = document.createElement("img");
            img.src = "./img/meteoryt2.png";
            if (context != null) {
                context.drawImage(img, this.pozycja[0], this.pozycja[1], 47, 38);
            }
        }
    }

    rysujwybuch() {
        var img = document.createElement("img");
        img.src = "./img/wybuch.png";
        if (context != null) {
            context.drawImage(img, this.pozycja[0], this.pozycja[1], 49, 42);
        }
    }

    wybuch() {
        this.wybuch1 = "true";
    }

    odswiez() {
        if (this.wybuch1 == "true") {
            this.rysujwybuch();
            this.pozycja[0]--;

        } else {
            this.rysuj();
            this.pozycja[0] += this.przeskok[0];
            this.pozycja[1] += this.przeskok[1];
        }

    }
}

class MeteorytMaly {
    public pozycja: number[];
    public przeskok: number[];
    public wybuch1: string;
    constructor(pozycja: number[], przeskok: number[]) {
        this.pozycja = pozycja;
        this.przeskok = przeskok;
        this.wybuch1 = "false";
    }

    rysuj() {
        var img = document.createElement("img");
        img.src = "./img/meteorytmaly.png";
        if (context != null) {
            context.drawImage(img, this.pozycja[0], this.pozycja[1], 39, 30);
        }
    }

    rysujwybuch() {
        var img = document.createElement("img");
        img.src = "./img/wybuch.png";
        if (context != null) {
            context.drawImage(img, this.pozycja[0], this.pozycja[1], 49, 42);
        }
    }

    wybuch() {
        this.wybuch1 = "true";
    }

    odswiez() {
        if (this.wybuch1 == "true") {
            this.rysujwybuch();
            this.pozycja[0]--;

        } else {
            this.rysuj();
            this.pozycja[0] += this.przeskok[0];
            this.pozycja[1] += this.przeskok[1];
        }

    }
}

class Czolg {
    public pozycja: number[];
    public przeskok: number[];
    public wybuch1: string;

    constructor(pozycja: number[], przeskok: number[]) {
        this.pozycja = pozycja;
        this.przeskok = przeskok;
        this.wybuch1 = "false";
    }


    rysuj() {
        var img = document.createElement("img");
        img.src = "./img/czolgL.png";
        if (context != null) {
            context.drawImage(img, this.pozycja[0], this.pozycja[1], 59, 47);
        }
    }


    rysujwybuch() {
        var img = document.createElement("img");
        img.src = "./img/wybuch.png";
        if (context != null) {
            context.drawImage(img, this.pozycja[0], this.pozycja[1], 49, 42);
        }
    }

    wybuch() {
        this.wybuch1 = "true";
    }

    odswiez() {
        if (this.wybuch1 == "true") {
            this.rysujwybuch();
            this.pozycja[0]--;

        } else {
            this.rysuj();
            this.pozycja[0] += this.przeskok[0];
            this.pozycja[1] += this.przeskok[1];
        }

    }
}

class Kosmita {
    public pozycja: number[];
    public przeskok: number[];
    public warunek: string;
    public liczba: number;
    public wybuch1: string;
    public rodzaj: number;
    public kulka: number
    constructor(pozycja: number[], przeskok: number[], rodzaj: number, kulka: number) {
        this.pozycja = pozycja;
        this.przeskok = przeskok;
        this.warunek = "true";
        this.liczba = 0;
        this.wybuch1 = "false";
        this.rodzaj = rodzaj;
        this.kulka = kulka

    }

    rysuj() {
        if (this.rodzaj == 0) {
            if (this.warunek == "true") {
                var img = document.createElement("img");
                img.src = "./img/kosmitaduzy.png";
                if (context != null) {
                    context.drawImage(img, this.pozycja[0], this.pozycja[1], 41, 34);
                }
                this.liczba++;
                if (this.liczba == 30) {
                    this.liczba = 0;
                    this.warunek = "false";
                }
            } else {
                var img = document.createElement("img");
                img.src = "./img/kosmitamaly.png";
                if (context != null) {
                    context.drawImage(img, this.pozycja[0], this.pozycja[1], 28, 23);
                }
                this.liczba++;
                if (this.liczba == 30) {
                    this.liczba = 0;
                    this.warunek = "true";
                }
            }
        }
        else {

            var img = document.createElement("img");
            img.src = "./img/satelita.png";
            if (context != null) {
                context.drawImage(img, this.pozycja[0], this.pozycja[1], 41, 34);
            }


        }
    }

    rysujwybuch() {
        var img = document.createElement("img");
        img.src = "./img/wybuch.png";
        if (context != null) {
            context.drawImage(img, this.pozycja[0], this.pozycja[1], 49, 42);
        }
    }

    wybuch() {
        this.wybuch1 = "true";
    }

    odswiez() {
        if (this.wybuch1 == "true") {
            this.rysujwybuch();
            this.pozycja[0]--;

        } else {
            this.rysuj();
            this.pozycja[0] += this.przeskok[0];
            this.pozycja[1] += this.przeskok[1];
        }

    }
}

class Kulka {
    public kolor: number
    public pozycja: number[];
    public przeskok: number[];
    constructor(pozycja: number[], przeskok: number[], kolor: number) {
        this.kolor = kolor;
        this.pozycja = pozycja;
        this.przeskok = przeskok;
    }
    rysuj() {
        if (this.kolor == 1) {
            var img = document.createElement("img");
            img.src = "./img/zolta.gif";
            if (context != null) {
                context.drawImage(img, this.pozycja[0], this.pozycja[1], 18, 16);
            }
        }
        else {
            var img = document.createElement("img");
            img.src = "./img/czerwona.gif";
            if (context != null) {
                context.drawImage(img, this.pozycja[0], this.pozycja[1], 18, 16);
            }
        }
    }

    odswiez() {
        this.rysuj();
        this.pozycja[0] += this.przeskok[0];
        this.pozycja[1] += this.przeskok[1];
    }

}

class Statek {
    public pozycja: number[];
    public przeskok: number[];
    public warunek1: string;
    public warunek2: string;
    public liczba: number;
    public wybuch1: string;
    public rodzaj: number;
    public odcinek: number;
    public zmienna: number;
    constructor(pozycja: number[], przeskok: number[], rodzaj: number) {
        this.pozycja = pozycja;
        this.przeskok = przeskok;
        this.liczba = 0;
        this.wybuch1 = "false";
        this.rodzaj = rodzaj;
        this.warunek1 = "1"
        this.warunek2 = "1";
        this.odcinek = 0;
        this.zmienna = 0;
    }

    rysuj() {
        if (this.rodzaj == 0) {
            if (this.warunek1 == "1") {
                var img = document.createElement("img");
                img.src = "./img/statek3.png";
                if (context != null) {
                    context.drawImage(img, this.pozycja[0], this.pozycja[1], 50, 20);
                }
                this.liczba++;
                if (this.liczba == 15) {
                    this.warunek1 = "2";
                }
            }
            else if (this.warunek1 == "2") {
                var img = document.createElement("img");
                img.src = "./img/statek4.png";
                if (context != null) {
                    context.drawImage(img, this.pozycja[0], this.pozycja[1], 50, 20);
                }
                this.liczba++;
                if (this.liczba == 30) {
                    this.warunek1 = "3";
                }
            }
            else if (this.warunek1 == "3") {
                var img = document.createElement("img");
                img.src = "./img/statek2.png";
                if (context != null) {
                    context.drawImage(img, this.pozycja[0], this.pozycja[1], 50, 20);
                }
                this.liczba++;
                if (this.liczba == 45) {
                    this.warunek1 = "4";
                }
            }
            else if (this.warunek1 == "4") {
                var img = document.createElement("img");
                img.src = "./img/statek4.png";
                if (context != null) {
                    context.drawImage(img, this.pozycja[0], this.pozycja[1], 50, 20);
                }
                this.liczba++;
                if (this.liczba == 60) {
                    this.warunek1 = "5";
                }
            }
            else if (this.warunek1 == "5") {
                var img = document.createElement("img");
                img.src = "./img/statek3.png";
                if (context != null) {
                    context.drawImage(img, this.pozycja[0], this.pozycja[1], 50, 20);
                }
                this.liczba++;
                if (this.liczba == 75) {
                    this.warunek1 = "6";
                }
            }
            else if (this.warunek1 == "6") {
                var img = document.createElement("img");
                img.src = "./img/statek1.png";
                if (context != null) {
                    context.drawImage(img, this.pozycja[0], this.pozycja[1], 50, 20);
                }
                this.liczba++;
                if (this.liczba == 90) {
                    this.warunek1 = "7";
                }
            }
            else if (this.warunek1 == "7") {
                var img = document.createElement("img");
                img.src = "./img/statek5.png";
                if (context != null) {
                    context.drawImage(img, this.pozycja[0], this.pozycja[1], 50, 20);
                }
                this.liczba++;
                if (this.liczba == 105) {
                    this.warunek1 = "8";
                }
            }
            else if (this.warunek1 == "8") {
                var img = document.createElement("img");
                img.src = "./img/statek1.png";
                if (context != null) {
                    context.drawImage(img, this.pozycja[0], this.pozycja[1], 50, 20);
                }
                this.liczba++;
                if (this.liczba == 120) {
                    this.liczba = 0;
                    this.warunek1 = "1";
                }
            }
        }
        else {

            if (this.warunek2 == "1") {
                var img = document.createElement("img");
                img.src = "./img/kula1.png";
                if (context != null) {
                    context.drawImage(img, this.pozycja[0], this.pozycja[1], 50, 20);
                }
                this.liczba++;
                if (this.liczba == 15) {
                    this.warunek2 = "2";
                }
            }
            else if (this.warunek2 == "2") {
                var img = document.createElement("img");
                img.src = "./img/kula2.png";
                if (context != null) {
                    context.drawImage(img, this.pozycja[0], this.pozycja[1], 50, 20);
                }
                this.liczba++;
                if (this.liczba == 30) {
                    this.warunek2 = "3";
                }
            }
            else if (this.warunek2 == "3") {
                var img = document.createElement("img");
                img.src = "./img/kula3.png";
                if (context != null) {
                    context.drawImage(img, this.pozycja[0], this.pozycja[1], 50, 20);
                }
                this.liczba++;
                if (this.liczba == 45) {
                    this.liczba = 0;
                    this.warunek2 = "1";
                }
            }


        }

    }

    rysujwybuch() {
        var img = document.createElement("img");
        img.src = "./img/wybuch.png";
        if (context != null) {
            context.drawImage(img, this.pozycja[0], this.pozycja[1], 49, 42);
        }
    }

    wybuch() {
        this.wybuch1 = "true";
    }

    odswiez() {
        if (this.wybuch1 == "true") {
            this.rysujwybuch();
            this.pozycja[0]--;

        } else {
            if (this.rodzaj == 1) {
                if (this.odcinek == 160) {
                    this.rysuj();
                    this.pozycja[0] -= this.przeskok[0] + 1;
                    this.pozycja[1] += this.przeskok[1];
                    this.zmienna++;
                    if (this.zmienna == 100) {
                        this.odcinek++;
                    }

                } else {
                    this.odcinek++;
                    this.rysuj();
                    this.pozycja[0] += this.przeskok[0];
                    this.pozycja[1] += this.przeskok[1];

                }

            } else {
                this.rysuj();
                this.pozycja[0] += this.przeskok[0];
                this.pozycja[1] += this.przeskok[1];
            }
        }

    }
}


var pociski: Pocisk[];
var kosmici: Kosmita[];
var statki: Statek[];
var meteoryty: Meteoryt[];
var meteorytymale: MeteorytMaly[];
var kulki: Kulka[];
var czolgi: Czolg[];
var pociskiczolgu: PociskCzolgu[];
var animacjadostatku = new StatekAnimacja();
var bossy: Boss[];
var TLO: Tlo[];


var canvas: HTMLCanvasElement
canvas = document.createElement("canvas")
canvas.width = 600;
canvas.height = 306;
canvas.id = "plansza"

document.getElementById("main")?.appendChild(canvas);

var obrazek = document.createElement("img");
obrazek.src = "./img/wlasciwaplansza.png";
var obrazekstatek = document.createElement("img");
obrazekstatek.src = "./img/statek.png";

var context = canvas.getContext("2d");
//if (context != null) {
//    context.drawImage(obrazek, 0, 0, 8102, 306);
//}

var audio = document.getElementById("a1") as HTMLAudioElement;

var wardotla = 0;
var tlo = document.getElementById("tlo") as HTMLImageElement;
var licznik = 0;
var dotla = ["tlo1.png", "tlo2.png", "tlo3.png", "tlo4.png"]
var aa = window.setInterval(() => {
    tlo.src = "./img/" + dotla[licznik];
    licznik++;
    if (licznik == 4) {
        licznik = 0;
    }



}, 500);

animacjaramki();


window.addEventListener('keydown', function (event) {
    //console.log(event.keyCode)
    if (event.keyCode == 49) {
        if (wardotla == 0) {
            this.clearInterval(aa);
            var tlo1 = document.getElementById("tloo") as HTMLDivElement;
            tlo1.style.visibility = "hidden";
            respawn();

            wardotla++;
        }

    }

    if (event.keyCode == 37) {
        lewo = true;

    }
    if (event.keyCode == 39) {
        prawo = true;

    }

    if (event.keyCode == 38) {
        gora = true;


    }
    if (event.keyCode == 40) {
        dol = true;

    }
    if (event.code == "Space") {
        strzal = true;

    }
}, false);

window.addEventListener('keyup', function (event) {
    // console.log(event.keyCode)

    if (event.keyCode == 32) {
        strzal = false;
    }

    if (event.keyCode == 37) {
        lewo = false;
    }
    if (event.keyCode == 39) {
        prawo = false;
    }

    if (event.keyCode == 38) {
        gora = false;
        obrazekstatek.src = "./img/statek.png";
    }
    if (event.keyCode == 40) {
        dol = false;
        obrazekstatek.src = "./img/statek.png";
    }

}, false);


function respawn(): void {
    dointer = "true";
    pociski = [];
    kosmici = [];
    meteoryty = [];
    meteorytymale = [];
    statki = [];
    kulki = [];
    czolgi = [];
    bossy = [];
    pociskiczolgu = [];
    TLO = [];
    statekX = 0;
    statekY = 150;
    wartosc = 0;
    gora = false;
    dol = false;
    lewo = false;
    prawo = false;
    dokosmitow = 0;
    dokosmitow2 = 0;
    dometeo = 0;
    dometeo2 = 0;
    dostatkow = 0;
    dostatkow2 = 0;
    dostatkow3 = 0;
    ulepszenie = 0;
    Dopunktow();
    audio.src = "./img/02.mp3"
    wartosc = 0;

    pociskiczolgu = [new PociskCzolgu([0, -100], [0, 0], "zolta.gif")];
    pociski = [new Pocisk([0, -100], [0, 0], "pocisk.png")];
    kosmici = [new Kosmita([0, -50], [0, 0], 0, 0)];
    meteoryty = [new Meteoryt([0, -50], [0, 0], 0)];
    meteorytymale = [new MeteorytMaly([0, -50], [0, 0])];
    statki = [new Statek([0, -50], [0, 0], 0)]
    kulki = [new Kulka([0, -50], [0, 0], 0)]
    czolgi = [new Czolg([0, - 150], [0, 0])]
    bossy = [new Boss([0, - 500], [0, 0])]
    TLO = [new Tlo([0, -200], 1)]


    var img1 = document.createElement("img");
    img1.src = "./img/gwiazdkagora.png";

    var img2 = document.createElement("img");
    img2.src = "./img/gwiazdkadol.png";
    var img3 = document.createElement("img");
    img3.src = "./img/gwiazdka.png";
    var zm1 = 0;
    var zm2 = 260;



    if (hp == 2) {

        var img = document.getElementById("dol") as HTMLImageElement;;
        img.src = "./img/ramkadol2.png";

    }

    if (hp == 1) {
        var img = document.getElementById("dol") as HTMLImageElement;;
        img.src = "./img/ramkadol1.png";
    }

    var a = window.setInterval(() => {
        if (context != null) {
            context.clearRect(0, 0, 8102, 306);
            context.drawImage(obrazek, 0, 0, 8102, 306);
            context.drawImage(img1, 0, zm1);
            context.drawImage(img2, 0, zm2);
        }
        zm1++;
        zm2--;
        if (zm1 == 125) {
            clearInterval(a);
            if (context != null) {
                context.clearRect(0, 0, 8102, 306);
                context.drawImage(obrazek, 0, 0, 8102, 306);
                context.drawImage(img3, 0, 125);
                setTimeout(() => {
                    interwal = setInterval(interwalgry, 10);
                }, 300);
            }
        }
    }, 5);



}


function animacjaramki(): void {
    var div = document.getElementById("gora");
    var img = document.createElement("img");
    img.src = "./img/player.png";
    div?.appendChild(img);
    window.setInterval(() => {
        img.style.visibility = "hidden";
        setTimeout(() => {
            img.style.visibility = "visible";
        }, 500);
    }, 1000);
}

function interwalgry(): void {
    sterowanie();

    if (wartosc == -100) {

        var t = setInterval(() => {
            TLO.push(new Tlo([losowanie(600, 700), losowanie(10, 250)], losowanie(1, 4)))

            if (wartosc < -4600) {
                clearInterval(t);
            }
        }, 3000);
    }

    if (wartosc == -4800) {

        var t2 = setInterval(() => {
            TLO.push(new Tlo([600, losowanie(10, 100)], losowanie(1, 4)))

            if (wartosc < -6500) {
                clearInterval(t2);
            }
        }, 4000);
    }

    if (wartosc == -150) {
        var c = setInterval(() => {
            kosmici.push(new Kosmita([losowanie(450, 550), losowanie(0, 250)], [-2, 0], 0, 0))
            dokosmitow++;
            if (dokosmitow == 12 || dointer == "false") {
                clearInterval(c);
            }
        }, 1500);
    }

    if (wartosc == -700) {
        kosmici.push(new Kosmita([600, losowanie(100, 200)], [-2.5, 0], 1, 1))

    }

    if (wartosc == -1500) {
        kosmici.push(new Kosmita([600, losowanie(100, 200)], [-2.5, 0], 1, 2))

    }

    if (wartosc == -4000) {
        kosmici.push(new Kosmita([600, losowanie(100, 200)], [-2.5, 0], 1, 1))

    }
    if (wartosc == -5500) {
        kosmici.push(new Kosmita([600, losowanie(100, 200)], [-2.5, 0], 1, 1))

    }

    if (wartosc == -6200) {
        czolgi.push(new Czolg([600, 210], [-1, 0]))
    }

    if (wartosc == -6700) {
        czolgi.push(new Czolg([600, 210], [-1, 0]))
    }

    if (wartosc == -5500) {
        czolgi.push(new Czolg([600, 210], [-1, 0]))
    }

    if (wartosc == -6680) {
        var c2 = setInterval(() => {
            kosmici.push(new Kosmita([losowanie(470, 520), losowanie(50, 130)], [-1.5, 0], 0, 0))
            dokosmitow2++;
            if (dokosmitow2 == 8 || dointer == "false") {
                clearInterval(c2);
            }
        }, 200);
    }

    if (wartosc == -2200) {
        var m = setInterval(() => {
            console.log(meteoryty);
            meteoryty.push(new Meteoryt([losowanie(450, 550), losowanie(0, 0)], [-2, 1], losowanie(0, 1)))
            meteorytymale.push(new MeteorytMaly([losowanie(450, 550), losowanie(306, 306)], [-2, -0.5]))
            dometeo++
            if (dometeo == 3 || dointer == "false") {
                clearInterval(m);
            }
        }, 1000);
    }

    if (wartosc == -2300) {
        var m2 = setInterval(() => {
            meteoryty.push(new Meteoryt([losowanie(450, 550), losowanie(0, 0)], [-2, 0.5], losowanie(0, 1)))
            meteorytymale.push(new MeteorytMaly([losowanie(500, 550), losowanie(306, 306)], [-2, -1]))
            dometeo2++
            if (dometeo2 == 5 || dointer == "false") {
                clearInterval(m2);
            }
        }, 1700);
    }

    if (wartosc == -3700) {
        var s = setInterval(() => {
            statki.push(new Statek([600, losowanie(20, 260)], [-2.5, 0], 0))
            dostatkow++
            if (dostatkow == 30 || dointer == "false") {
                clearInterval(s);
            }
        }, 450);
    }

    if (wartosc == -5100) {
        var s2 = setInterval(() => {
            statki.push(new Statek([600, losowanie(20, 260)], [-2.5, 0], 1))
            dostatkow2++
            if (dostatkow2 == 10 || dointer == "false") {
                clearInterval(s2);
            }
        }, 1000);
    }

    if (wartosc == -6000) {
        var s3 = setInterval(() => {
            statki.push(new Statek([600, losowanie(20, 260)], [-2.5, 0], 1))
            dostatkow3++
            if (dostatkow3 == 6 || dointer == "false") {
                clearInterval(s3);
            }
        }, 500);
    }




    if (context != null) {
        context.clearRect(0, 0, 8102, 306);
        context.drawImage(obrazek, wartosc, 0, 8102, 306);
        context.drawImage(obrazekstatek, statekX, statekY, 76, 28);


        if (ulepszenie > 0) {
            animacjadostatku.rysuj();
        }


        if (czolgi.length > 1) {
            if (Date.now() - czas1 > 800) {
                czas1 = Date.now();
                pociskiczolgu.push(new PociskCzolgu([czolgi[czolgi.length - 1].pozycja[0], czolgi[czolgi.length - 1].pozycja[1]], [-2, -1], "zolta.gif"));
            }
        }
        //DO TLA
        TLO.forEach((meteoryt, index) => {
            if (meteoryt.pozycja[0] < -60) {
                TLO.splice(index, 1)
            }
            else {
                meteoryt.odswiez();

                if (meteoryt.warunek == 1) {

                    if (statekX + 76 >= meteoryt.pozycja[0] && statekX <= meteoryt.pozycja[0]) {
                        if ((statekY + 10 <= meteoryt.pozycja[1] + 78 && statekY >= meteoryt.pozycja[1]) || (statekY + 20 <= meteoryt.pozycja[1] + 78 && statekY + 10 >= meteoryt.pozycja[1]) || (statekY + 30 <= meteoryt.pozycja[1] + 78 && statekY + 20 >= meteoryt.pozycja[1]) || (statekY + 5 <= meteoryt.pozycja[1] + 78 && statekY - 5 >= meteoryt.pozycja[1]) || (statekY + 35 <= meteoryt.pozycja[1] + 38 && statekY + 28 >= meteoryt.pozycja[1])) {

                            //TUTAJ PRZYKLADOWO DOCHODZI DO KOLIZJI I GINIE STATEK

                            console.log("wybuch statku")
                            hp--; //ZMIENJSZAM HP
                            Dopunktow();
                            dointer = "false";
                            clearInterval(interwal);
                            clearInterval(c);
                            clearInterval(c2);
                            clearInterval(m);//CZYSZCE WSZYSTKIE INTERWALY Z GRY, WRAZ Z TYM OD GRY
                            clearInterval(m2);
                            clearInterval(s);
                            clearInterval(s2);
                            clearInterval(s3);
                            clearInterval(t);
                            clearInterval(t2);

                            wybuch(); // WYWOLUJE FUNKCJE DO ANIMACJI WYBUCHU STATKU

                        }
                    }


                    pociski.forEach((pocisk, i) => {
                        if (pocisk.pozycja[0] + 15 >= meteoryt.pozycja[0] && pocisk.pozycja[0] <= meteoryt.pozycja[0] && pocisk.pozycja[1] + 3 <= meteoryt.pozycja[1] + 78 && pocisk.pozycja[1] + 3 >= meteoryt.pozycja[1]) {

                            pociski.splice(i, 1);

                        }
                    })
                }

                else if (meteoryt.warunek == 2) {

                    if (statekX + 76 >= meteoryt.pozycja[0] && statekX <= meteoryt.pozycja[0]) {
                        if ((statekY + 10 <= meteoryt.pozycja[1] + 44 && statekY >= meteoryt.pozycja[1]) || (statekY + 20 <= meteoryt.pozycja[1] + 44 && statekY + 10 >= meteoryt.pozycja[1]) || (statekY + 30 <= meteoryt.pozycja[1] + 44 && statekY + 20 >= meteoryt.pozycja[1]) || (statekY + 5 <= meteoryt.pozycja[1] + 44 && statekY - 5 >= meteoryt.pozycja[1]) || (statekY + 35 <= meteoryt.pozycja[1] + 44 && statekY + 28 >= meteoryt.pozycja[1])) {

                            //TUTAJ PRZYKLADOWO DOCHODZI DO KOLIZJI I GINIE STATEK

                            console.log("wybuch statku")
                            hp--; //ZMIENJSZAM HP
                            Dopunktow();
                            dointer = "false";
                            clearInterval(interwal);
                            clearInterval(c);
                            clearInterval(c2);
                            clearInterval(m);//CZYSZCE WSZYSTKIE INTERWALY Z GRY, WRAZ Z TYM OD GRY
                            clearInterval(m2);
                            clearInterval(s);
                            clearInterval(s2);
                            clearInterval(s3);
                            clearInterval(t);
                            clearInterval(t2);

                            wybuch(); // WYWOLUJE FUNKCJE DO ANIMACJI WYBUCHU STATKU

                        }
                    }


                    pociski.forEach((pocisk, i) => {

                        if (pocisk.pozycja[0] + 15 >= meteoryt.pozycja[0] && pocisk.pozycja[0] <= meteoryt.pozycja[0] && pocisk.pozycja[1] + 3 <= meteoryt.pozycja[1] + 44 && pocisk.pozycja[1] + 3 >= meteoryt.pozycja[1]) {

                            pociski.splice(i, 1);

                        }
                    })
                }

                else if (meteoryt.warunek == 3) {

                    if (statekX + 76 >= meteoryt.pozycja[0] && statekX <= meteoryt.pozycja[0]) {
                        if ((statekY + 10 <= meteoryt.pozycja[1] + 52 && statekY >= meteoryt.pozycja[1]) || (statekY + 20 <= meteoryt.pozycja[1] + 52 && statekY + 10 >= meteoryt.pozycja[1]) || (statekY + 30 <= meteoryt.pozycja[1] + 52 && statekY + 20 >= meteoryt.pozycja[1]) || (statekY + 5 <= meteoryt.pozycja[1] + 52 && statekY - 5 >= meteoryt.pozycja[1]) || (statekY + 35 <= meteoryt.pozycja[1] + 52 && statekY + 28 >= meteoryt.pozycja[1])) {

                            //TUTAJ PRZYKLADOWO DOCHODZI DO KOLIZJI I GINIE STATEK

                            console.log("wybuch statku")
                            hp--; //ZMIENJSZAM HP
                            Dopunktow();
                            dointer = "false";
                            clearInterval(interwal);
                            clearInterval(c);
                            clearInterval(c2);
                            clearInterval(m);//CZYSZCE WSZYSTKIE INTERWALY Z GRY, WRAZ Z TYM OD GRY
                            clearInterval(m2);
                            clearInterval(s);
                            clearInterval(s2);
                            clearInterval(s3);
                            clearInterval(t);
                            clearInterval(t2);

                            wybuch(); // WYWOLUJE FUNKCJE DO ANIMACJI WYBUCHU STATKU

                        }
                    }


                    pociski.forEach((pocisk, i) => {

                        if (pocisk.pozycja[0] + 15 >= meteoryt.pozycja[0] && pocisk.pozycja[0] <= meteoryt.pozycja[0] && pocisk.pozycja[1] + 3 <= meteoryt.pozycja[1] + 52 && pocisk.pozycja[1] + 3 >= meteoryt.pozycja[1]) {

                            pociski.splice(i, 1);

                        }
                    })
                }

                else if (meteoryt.warunek == 4) {

                    if (statekX + 76 >= meteoryt.pozycja[0] && statekX <= meteoryt.pozycja[0]) {
                        if ((statekY + 10 <= meteoryt.pozycja[1] + 30 && statekY >= meteoryt.pozycja[1]) || (statekY + 20 <= meteoryt.pozycja[1] + 30 && statekY + 10 >= meteoryt.pozycja[1]) || (statekY + 30 <= meteoryt.pozycja[1] + 30 && statekY + 20 >= meteoryt.pozycja[1]) || (statekY + 5 <= meteoryt.pozycja[1] + 30 && statekY - 5 >= meteoryt.pozycja[1]) || (statekY + 35 <= meteoryt.pozycja[1] + 30 && statekY + 28 >= meteoryt.pozycja[1])) {

                            //TUTAJ PRZYKLADOWO DOCHODZI DO KOLIZJI I GINIE STATEK

                            console.log("wybuch statku")
                            hp--; //ZMIENJSZAM HP
                            Dopunktow();
                            dointer = "false";
                            clearInterval(interwal);
                            clearInterval(c);
                            clearInterval(c2);
                            clearInterval(m);//CZYSZCE WSZYSTKIE INTERWALY Z GRY, WRAZ Z TYM OD GRY
                            clearInterval(m2);
                            clearInterval(s);
                            clearInterval(s2);
                            clearInterval(s3);
                            clearInterval(t);
                            clearInterval(t2);

                            wybuch(); // WYWOLUJE FUNKCJE DO ANIMACJI WYBUCHU STATKU

                        }
                    }


                    pociski.forEach((pocisk, i) => {

                        if (pocisk.pozycja[0] + 15 >= meteoryt.pozycja[0] && pocisk.pozycja[0] <= meteoryt.pozycja[0] && pocisk.pozycja[1] + 3 <= meteoryt.pozycja[1] + 30 && pocisk.pozycja[1] + 3 >= meteoryt.pozycja[1]) {

                            pociski.splice(i, 1);

                        }
                    })
                }

            }
        })
        //DO BOSSA
        bossy.forEach((meteoryt, index) => {
            if (meteoryt.pozycja[0] < -50) {
                bossy.splice(index, 1)
                if (context != null) {
                    context.clearRect(0, 0, 8102, 306);
                }
                var napis = document.createElement("h1");
                napis.innerText = "GAME OVER"
                napis.style.color = "white";
                napis.style.position = "absolute";
                napis.style.left = "200px";
                napis.style.top = "100px";

                var main = document.getElementById("main");
                main?.appendChild(napis);

            }
            else {
                meteoryt.odswiez();

                if (statekX + 76 >= meteoryt.pozycja[0] && statekX <= meteoryt.pozycja[0]) {
                    if ((statekY + 10 <= meteoryt.pozycja[1] + 228 && statekY >= meteoryt.pozycja[1]) || (statekY + 20 <= meteoryt.pozycja[1] + 228 && statekY + 10 >= meteoryt.pozycja[1]) || (statekY + 30 <= meteoryt.pozycja[1] + 228 && statekY + 20 >= meteoryt.pozycja[1]) || (statekY + 5 <= meteoryt.pozycja[1] + 228 && statekY - 5 >= meteoryt.pozycja[1]) || (statekY + 35 <= meteoryt.pozycja[1] + 228 && statekY + 28 >= meteoryt.pozycja[1])) {

                        bossy.splice(index, 1);
                        //  punkty += 100;
                        Dopunktow();
                        console.log("wybuch statku")
                        hp--;
                        dointer = "false";
                        clearInterval(interwal);
                        clearInterval(c);
                        clearInterval(c2);
                        clearInterval(m);
                        clearInterval(m2);
                        clearInterval(s);
                        clearInterval(s2);
                        clearInterval(s3);
                        clearInterval(t);
                        clearInterval(t2);
                        wybuch();

                    }
                }

                pociski.forEach((pocisk, i) => {

                    if (pocisk.pozycja[0] + 15 >= meteoryt.pozycja[0] && pocisk.pozycja[1] + 3 <= meteoryt.pozycja[1] + 228 && pocisk.pozycja[1] + 3 >= meteoryt.pozycja[1]) {


                        punkty += 10;
                        Dopunktow();
                        pociski.splice(i, 1);
                        if (meteoryt.hp > 0) {
                            meteoryt.zmiana();
                        } else {
                            wybuchbossa(meteoryt.pozycja[0], meteoryt.pozycja[1]);
                            bossy.splice(index, 1);
                            console.log("WYGRANA");
                        }
                    }
                })
            }
        })
        // DO CZOLGOW
        czolgi.forEach((meteoryt, index) => {
            if (meteoryt.pozycja[0] < -50) {
                czolgi.splice(index, 1)
            }
            else {
                meteoryt.odswiez();


                if (statekX + 76 >= meteoryt.pozycja[0] && statekX <= meteoryt.pozycja[0]) {
                    if ((statekY + 10 <= meteoryt.pozycja[1] + 47 && statekY >= meteoryt.pozycja[1]) || (statekY + 20 <= meteoryt.pozycja[1] + 47 && statekY + 10 >= meteoryt.pozycja[1]) || (statekY + 30 <= meteoryt.pozycja[1] + 47 && statekY + 20 >= meteoryt.pozycja[1]) || (statekY + 5 <= meteoryt.pozycja[1] + 47 && statekY - 5 >= meteoryt.pozycja[1]) || (statekY + 35 <= meteoryt.pozycja[1] + 47 && statekY + 28 >= meteoryt.pozycja[1])) {



                        meteoryt.wybuch();
                        czolgi.splice(index, 1);
                        punkty += 300;
                        Dopunktow();
                        console.log("wybuch statku")
                        hp--;
                        dointer = "false";
                        clearInterval(interwal);
                        clearInterval(c);
                        clearInterval(c2);
                        clearInterval(m);
                        clearInterval(m2);
                        clearInterval(s);
                        clearInterval(s2);
                        clearInterval(s3);
                        clearInterval(t);
                        clearInterval(t2);
                        wybuch();

                    }
                }



                pociski.forEach((pocisk, i) => {

                    if (pocisk.pozycja[0] + 15 >= meteoryt.pozycja[0] && pocisk.pozycja[1] + 3 <= meteoryt.pozycja[1] + 47 && pocisk.pozycja[1] + 3 >= meteoryt.pozycja[1]) {

                        meteoryt.wybuch();
                        punkty += 100;
                        Dopunktow();
                        pociski.splice(i, 1);

                        setTimeout(() => {
                            czolgi.splice(index, 1);

                        }, 50)
                    }
                })
            }
        })

        //DO STATKOW (meteoryt to statek)
        statki.forEach((meteoryt, index) => {
            if (meteoryt.pozycja[0] < -30) {
                statki.splice(index, 1)
            }
            else {
                meteoryt.odswiez();

                if (statekX + 76 >= meteoryt.pozycja[0] && statekX <= meteoryt.pozycja[0]) {
                    if ((statekY + 10 <= meteoryt.pozycja[1] + 20 && statekY >= meteoryt.pozycja[1]) || (statekY + 20 <= meteoryt.pozycja[1] + 20 && statekY + 10 >= meteoryt.pozycja[1]) || (statekY + 30 <= meteoryt.pozycja[1] + 20 && statekY + 20 >= meteoryt.pozycja[1]) || (statekY + 5 <= meteoryt.pozycja[1] + 20 && statekY - 5 >= meteoryt.pozycja[1]) || (statekY + 35 <= meteoryt.pozycja[1] + 20 && statekY + 28 >= meteoryt.pozycja[1])) {
                        meteoryt.wybuch();


                        statki.splice(index, 1);
                        punkty += 100;
                        Dopunktow();
                        console.log("wybuch statku")
                        hp--;
                        dointer = "false";
                        clearInterval(interwal);
                        clearInterval(c);
                        clearInterval(c2);
                        clearInterval(m);
                        clearInterval(m2);
                        clearInterval(s);
                        clearInterval(s2);
                        clearInterval(s3);
                        wybuch();

                    }
                }

                pociski.forEach((pocisk, i) => {

                    if (pocisk.pozycja[0] + 15 >= meteoryt.pozycja[0] && pocisk.pozycja[1] + 3 <= meteoryt.pozycja[1] + 20 && pocisk.pozycja[1] + 3 >= meteoryt.pozycja[1]) {

                        meteoryt.wybuch();
                        punkty += 100;
                        Dopunktow();
                        pociski.splice(i, 1);

                        setTimeout(() => {
                            statki.splice(index, 1);

                        }, 50)
                    }
                })
            }
        })


        //DO METEORYTOW
        meteoryty.forEach((meteoryt, index) => {
            if (meteoryt.pozycja[1] > 306) {
                meteoryty.splice(index, 1)
            }
            else {
                meteoryt.odswiez();

                if (statekX + 76 >= meteoryt.pozycja[0] && statekX <= meteoryt.pozycja[0]) {
                    if ((statekY + 10 <= meteoryt.pozycja[1] + 35 && statekY >= meteoryt.pozycja[1]) || (statekY + 20 <= meteoryt.pozycja[1] + 38 && statekY + 10 >= meteoryt.pozycja[1]) || (statekY + 30 <= meteoryt.pozycja[1] + 38 && statekY + 20 >= meteoryt.pozycja[1]) || (statekY + 5 <= meteoryt.pozycja[1] + 38 && statekY - 5 >= meteoryt.pozycja[1]) || (statekY + 35 <= meteoryt.pozycja[1] + 38 && statekY + 28 >= meteoryt.pozycja[1])) {

                        //TUTAJ PRZYKLADOWO DOCHODZI DO KOLIZJI I GINIE STATEK
                        meteoryt.wybuch(); //WYBUCHA METEORYT Z KTORYM SIE ZDEZYL
                        meteoryty.splice(index, 1);
                        console.log("wybuch statku")
                        hp--; //ZMIENJSZAM HP
                        punkty += 100;
                        Dopunktow();
                        dointer = "false";
                        clearInterval(interwal);
                        clearInterval(c);
                        clearInterval(c2);
                        clearInterval(m);//CZYSZCE WSZYSTKIE INTERWALY Z GRY, WRAZ Z TYM OD GRY
                        clearInterval(m2);
                        clearInterval(s);
                        clearInterval(s2);
                        clearInterval(s3);

                        wybuch(); // WYWOLUJE FUNKCJE DO ANIMACJI WYBUCHU STATKU

                    }
                }

                pociski.forEach((pocisk, i) => {

                    if (pocisk.pozycja[0] + 15 >= meteoryt.pozycja[0] && pocisk.pozycja[1] + 3 <= meteoryt.pozycja[1] + 40 && pocisk.pozycja[1] + 3 >= meteoryt.pozycja[1]) {

                        meteoryt.wybuch();

                        punkty += 100;
                        Dopunktow();
                        pociski.splice(i, 1);

                        setTimeout(() => {
                            meteoryty.splice(index, 1);

                        }, 50)
                    }
                })
            }
        })

        //DO METEORYTOWMALYCH
        meteorytymale.forEach((meteoryt, index) => {
            if (meteoryt.pozycja[1] < 0) {
                meteorytymale.splice(index, 1)
            }
            else {
                meteoryt.odswiez();

                if (statekX + 76 >= meteoryt.pozycja[0] && statekX <= meteoryt.pozycja[0]) {
                    if ((statekY + 10 <= meteoryt.pozycja[1] + 30 && statekY >= meteoryt.pozycja[1]) || (statekY + 20 <= meteoryt.pozycja[1] + 30 && statekY + 10 >= meteoryt.pozycja[1]) || (statekY + 30 <= meteoryt.pozycja[1] + 30 && statekY + 20 >= meteoryt.pozycja[1]) || (statekY + 5 <= meteoryt.pozycja[1] + 30 && statekY - 5 >= meteoryt.pozycja[1]) || (statekY + 35 <= meteoryt.pozycja[1] + 30 && statekY + 28 >= meteoryt.pozycja[1])) {
                        meteoryt.wybuch();

                        meteorytymale.splice(index, 1);
                        punkty += 100;
                        Dopunktow();
                        console.log("wybuch statku")
                        hp--;
                        dointer = "false";
                        clearInterval(interwal);
                        clearInterval(c);
                        clearInterval(c2);
                        clearInterval(m);
                        clearInterval(m2);
                        clearInterval(s);
                        clearInterval(s2);
                        clearInterval(s3);
                        wybuch();

                    }
                }

                pociski.forEach((pocisk, i) => {

                    if (pocisk.pozycja[0] + 15 >= meteoryt.pozycja[0] && pocisk.pozycja[1] + 3 <= meteoryt.pozycja[1] + 30 && pocisk.pozycja[1] + 3 >= meteoryt.pozycja[1]) {

                        meteoryt.wybuch();
                        pociski.splice(i, 1);
                        punkty += 100;
                        Dopunktow();

                        setTimeout(() => {
                            meteorytymale.splice(index, 1);

                        }, 50)
                    }
                })
            }
        })

        // DO KOSMITOW

        kosmici.forEach((kosmita, index) => {
            if (kosmita.pozycja[0] < -30) {
                kosmici.splice(index, 1)
            }
            else {
                kosmita.odswiez();

                if (statekX + 76 >= kosmita.pozycja[0] && statekX <= kosmita.pozycja[0]) {
                    if ((statekY + 10 <= kosmita.pozycja[1] + 35 && statekY >= kosmita.pozycja[1]) || (statekY + 20 <= kosmita.pozycja[1] + 35 && statekY + 10 >= kosmita.pozycja[1]) || (statekY + 30 <= kosmita.pozycja[1] + 35 && statekY + 20 >= kosmita.pozycja[1]) || (statekY + 5 <= kosmita.pozycja[1] + 35 && statekY - 5 >= kosmita.pozycja[1]) || (statekY + 35 <= kosmita.pozycja[1] + 35 && statekY + 28 >= kosmita.pozycja[1])) {
                        kosmita.wybuch();
                        kosmici.splice(index, 1);
                        console.log("wybuch statku")
                        hp--;
                        punkty += 500;
                        Dopunktow();
                        dointer = "false";
                        clearInterval(interwal);
                        clearInterval(c);
                        clearInterval(c2);
                        clearInterval(m);
                        clearInterval(m2);
                        clearInterval(s);
                        clearInterval(s2);
                        clearInterval(s3);

                        wybuch();


                    }
                }

                pociski.forEach((pocisk, i) => {

                    if (pocisk.pozycja[0] + 15 >= kosmita.pozycja[0] && pocisk.pozycja[1] + 3 <= kosmita.pozycja[1] + 35 && pocisk.pozycja[1] + 3 >= kosmita.pozycja[1]) {

                        kosmita.wybuch();
                        pociski.splice(i, 1);
                        punkty += 500;
                        Dopunktow();
                        if (kosmita.rodzaj == 1) {
                            kulki.push(new Kulka([kosmita.pozycja[0], kosmita.pozycja[1]], [-1, 0], kosmita.kulka));
                        }
                        setTimeout(() => {
                            kosmici.splice(index, 1);

                        }, 50)



                    }
                })
            }
        })

        //DO KULEK
        kulki.forEach((kosmita, index) => {
            if (kosmita.pozycja[0] < -30) {
                kulki.splice(index, 1)
            }
            else {
                kosmita.odswiez();

                if (statekX + 76 >= kosmita.pozycja[0] && statekX <= kosmita.pozycja[0]) {
                    if ((statekY + 10 <= kosmita.pozycja[1] + 16 && statekY >= kosmita.pozycja[1]) || (statekY + 20 <= kosmita.pozycja[1] + 16 && statekY + 10 >= kosmita.pozycja[1]) || (statekY + 30 <= kosmita.pozycja[1] + 16 && statekY + 20 >= kosmita.pozycja[1]) || (statekY + 5 <= kosmita.pozycja[1] + 16 && statekY - 5 >= kosmita.pozycja[1]) || (statekY + 35 <= kosmita.pozycja[1] + 16 && statekY + 28 >= kosmita.pozycja[1])) {
                        kulki.splice(index, 1);
                        console.log("Kulka dotknieta");
                        console.log(wartosc);

                        if (kosmita.kolor == 1) {
                            if (wartosc > -3500) {
                                kosmici.forEach((kosmita, index) => {
                                    kosmita.wybuch();
                                    punkty += 500;

                                })
                                setTimeout(() => {
                                    kosmici.splice(0, kosmici.length);

                                }, 50)
                            }
                            else if (wartosc > -5000) {
                                console.log("wybuch 1")
                                statki.forEach((kosmita, index) => {
                                    kosmita.wybuch();
                                    punkty += 100;
                                })
                                setTimeout(() => {
                                    statki.splice(0, statki.length);

                                }, 50)
                            }
                            else if (wartosc > -6000) {
                                console.log("wybuch 2")
                                statki.forEach((kosmita, index) => {
                                    kosmita.wybuch();
                                    punkty += 100;
                                })
                                setTimeout(() => {
                                    statki.splice(0, statki.length);

                                }, 50)
                            }
                            Dopunktow();
                        }
                        else {
                            zmianabroni();
                        }

                    }
                }

            }

        })


        // ODSWIEZANIE POCISKOW
        pociski.forEach((pocisk, index) => {
            if (pocisk.pozycja[0] >= 585 || pocisk.pozycja[1] > 306 || pocisk.pozycja[1] < 0) {
                pociski.splice(index, 1)
            }
            else {
                pocisk.odswiez()
            }

        })

        pociskiczolgu.forEach((pocisk, i) => {
            if (pocisk.pozycja[0] >= 585 || pocisk.pozycja[1] > 306 || pocisk.pozycja[1] < 0) {
                pociskiczolgu.splice(i, 1)
            } else {
                pocisk.odswiez();
            }

            if (pocisk.pozycja[0] <= statekX + 79 && statekX <= pocisk.pozycja[0] && pocisk.pozycja[1] + 7 <= statekY + 30 && pocisk.pozycja[1] + 7 >= statekY) {

                console.log("wybuch statku")
                hp--;
                dointer = "false";
                clearInterval(interwal);
                clearInterval(c);
                clearInterval(c2);
                clearInterval(m);
                clearInterval(m2);
                clearInterval(s);
                clearInterval(s2);
                clearInterval(s3);
                wybuch();

            }
        })


    }

    //BOSS
    if (wartosc == -7500) {
        wartosc--;
        audio.src = "./img/03.mp3"
        bossy.push(new Boss([600, 10], [-0.5, 0]))
    }
    else if (wartosc > -7500) {
        wartosc--;
        //console.log(wartosc);
    }
}

function losowanie(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function wybuch(): void {
    setTimeout(() => {
        if (context != null) {

            context.drawImage(obrazek, wartosc, 0, 8102, 306);
            var img10 = document.createElement("img");
            img10.src = "./img/wybuch.png";
            context.drawImage(img10, statekX, statekY, 49, 42);
            var img101 = document.createElement("img");
            img101.src = "./img/wybuch.png";
            context.drawImage(img101, statekX + 20, statekY + 20, 49, 42);
        }

    }, 100)
    setTimeout(() => {
        if (context != null) {

            context.drawImage(obrazek, wartosc, 0, 8102, 306);
            var img10 = document.createElement("img");
            img10.src = "./img/wybuch.png";
            context.drawImage(img10, statekX + 20, statekY, 49, 42);
            var img101 = document.createElement("img");
            img101.src = "./img/wybuch.png";
            context.drawImage(img101, statekX - 10, statekY + 10, 49, 42);
        }

    }, 300)
    setTimeout(() => {
        if (context != null) {

            context.drawImage(obrazek, wartosc, 0, 8102, 306);
            var img10 = document.createElement("img");
            img10.src = "./img/wybuch.png";
            context.drawImage(img10, statekX, statekY + 10, 49, 42);
            var img101 = document.createElement("img");
            img101.src = "./img/wybuch.png";
            context.drawImage(img101, statekX - 20, statekY - 5, 49, 42);
        }

    }, 500)
    setTimeout(() => {
        if (context != null) {

            context.drawImage(obrazek, wartosc, 0, 8102, 306);
            var img10 = document.createElement("img");
            img10.src = "./img/wybuch.png";
            context.drawImage(img10, statekX - 10, statekY - 10, 49, 42);
            var img101 = document.createElement("img");
            img101.src = "./img/wybuch.png";
            context.drawImage(img101, statekX + 30, statekY + 10, 49, 42);
        }

    }, 700)
    setTimeout(() => {

        if (hp == 0) {
            if (context != null) {
                context.clearRect(0, 0, 8102, 306);
            }
            var napis = document.createElement("h1");
            napis.innerText = "GAME OVER"
            napis.style.color = "white";
            napis.style.position = "absolute";
            napis.style.left = "200px";
            napis.style.top = "100px";

            var main = document.getElementById("main");
            main?.appendChild(napis);
        } else {
            respawn();
        }

    }, 900)
}

function Dopunktow(): void {
    console.log(punkty);

    var img1 = document.createElement("img");
    var img2 = document.createElement("img");
    var img3 = document.createElement("img");
    var img4 = document.createElement("img");
    var img5 = document.createElement("img");
    var img6 = document.createElement("img");
    img1.src = "./img/0.png"
    img2.src = "./img/0.png"
    img3.src = "./img/0.png"
    img4.src = "./img/0.png"
    img5.src = "./img/0.png"
    img6.src = "./img/0.png"
    img1.style.position = "absolute";
    img2.style.position = "absolute";
    img3.style.position = "absolute";
    img4.style.position = "absolute";
    img5.style.position = "absolute";
    img6.style.position = "absolute";
    img1.style.top = "20px";
    img2.style.top = "20px";
    img3.style.top = "20px";
    img4.style.top = "20px";
    img5.style.top = "20px";
    img6.style.top = "20px";
    img1.style.left = "90px";
    img2.style.left = "102px";
    img3.style.left = "114px";
    img4.style.left = "126px";
    img5.style.left = "138px";
    img6.style.left = "150px";

    var tab = [img1, img2, img3, img4, img5, img6]
    var tablica = punkty.toString().split("");
    // console.log(tablica);
    for (var i = 0; i < tablica.length; i++) {
        //  console.log(tablica[tablica.length]);
        if (tablica[tablica.length - i - 1] == "9") {
            tab[5 - i].src = "./img/9.png";
        }
        else if (tablica[tablica.length - i - 1] == "8") {
            tab[5 - i].src = "./img/8.png";
        }
        else if (tablica[tablica.length - i - 1] == "7") {
            tab[5 - i].src = "./img/7.png";
        }
        else if (tablica[tablica.length - i - 1] == "6") {
            tab[5 - i].src = "./img/6.png";
        }
        else if (tablica[tablica.length - i - 1] == "5") {
            tab[5 - i].src = "./img/5.png";
        }
        else if (tablica[tablica.length - i - 1] == "4") {
            tab[5 - i].src = "./img/4.png";
        }
        else if (tablica[tablica.length - i - 1] == "3") {
            tab[5 - i].src = "./img/3.png";
        }
        else if (tablica[tablica.length - i - 1] == "2") {
            tab[5 - i].src = "./img/2.png";
        }
        else if (tablica[tablica.length - i - 1] == "1") {
            tab[5 - i].src = "./img/1.png";
        }
    }
    var div = document.getElementById("ramkagora");
    div?.appendChild(img1);
    div?.appendChild(img2);
    div?.appendChild(img3);
    div?.appendChild(img4);
    div?.appendChild(img5);
    div?.appendChild(img6);

}

function sterowanie(): void {
    if (strzal == true) {

        if (Date.now() - czas > 200) {
            czas = Date.now();
            pociski.push(new Pocisk(
                [statekX + 70, statekY + 15],
                [5, 0], "pocisk.png"
            ));
            if (ulepszenie > 0) {
                pociski.push(new Pocisk(
                    [statekX + 40, statekY + 15],
                    [2, 2], "pocisk1.png"
                ));
                pociski.push(new Pocisk(
                    [statekX + 40, statekY + 15],
                    [2, -2], "pocisk1.png"
                ));
            }
        }

    }

    if (lewo == true) {
        if (statekX > 0) {

            if (gora == true) {
                if (statekY > 0) {
                    statekX -= 2;
                    statekY -= 2;
                }
            }
            else if (dol == true) {
                if (statekY < 276) {
                    statekX -= 2;
                    statekY += 2;
                }
            }
            else {
                statekX -= 2;
            }
        }
    }

    else if (prawo == true) {
        if (statekX < 520) {

            if (gora == true) {
                if (statekY > 0) {
                    statekX += 2;
                    statekY -= 2;
                }
            }
            else if (dol == true) {
                if (statekY < 276) {
                    statekX += 2;
                    statekY += 2;
                }
            }
            else {
                statekX += 2;
            }
        }
    }

    else if (gora == true) {
        if (statekY > 0) {

            obrazekstatek.src = "statekdol.png";
            if (lewo) {
                if (statekX > 0) {
                    statekY -= 2;
                    statekX -= 2;
                }
            }
            else if (prawo) {
                if (statekX < 520) {
                    statekY -= 2;
                    statekX += 2;
                }
            }
            else {
                statekY -= 2;
            }
        }
    }

    else if (dol == true) {
        if (statekY < 276) {

            obrazekstatek.src = "statekgora.png";

            if (lewo) {
                if (statekX > 0) {
                    statekY += 2;
                    statekX -= 2;
                }
            }
            else if (prawo) {
                if (statekX < 520) {
                    statekY += 2;
                    statekX += 2;
                }
            }
            else {
                statekY += 2;
            }
        }
    }

}



function zmianabroni(): void {
    ulepszenie++;
}

function wybuchbossa(x: number, y: number): void {
    setTimeout(() => {
        if (context != null) {

            //   context.drawImage(obrazek, wartosc, 0, 8102, 306);
            var img10 = document.createElement("img");
            img10.src = "./img/wybuch.png";
            context.drawImage(img10, x + 200, y + 50, 49, 42);
            var img101 = document.createElement("img");
            img101.src = "./img/wybuch.png";
            context.drawImage(img101, x + 100, y + 120, 49, 42);
            var img102 = document.createElement("img");
            img102.src = "./img/wybuch.png";
            context.drawImage(img102, x + 60, y + 200, 49, 42);
            var img103 = document.createElement("img");
            img103.src = "./img/wybuch.png";
            context.drawImage(img103, x + 10, y + 10, 49, 42);
        }

    }, 100)
    setTimeout(() => {
        if (context != null) {

            //   context.drawImage(obrazek, wartosc, 0, 8102, 306);
            var img10 = document.createElement("img");
            img10.src = "./img/wybuch.png";
            context.drawImage(img10, x + 150, y + 80, 49, 42);
            var img101 = document.createElement("img");
            img101.src = "./img/wybuch.png";
            context.drawImage(img101, x + 70, y + 140, 49, 42);
            var img102 = document.createElement("img");
            img102.src = "./img/wybuch.png";
            context.drawImage(img102, x + 200, y + 60, 49, 42);
            var img103 = document.createElement("img");
            img103.src = "./img/wybuch.png";
            context.drawImage(img103, x + 70, y + 100, 49, 42);
        }

    }, 400)
    setTimeout(() => {
        if (context != null) {

            //   context.drawImage(obrazek, wartosc, 0, 8102, 306);
            var img10 = document.createElement("img");
            img10.src = "./img/wybuch.png";
            context.drawImage(img10, x + 50, y + 20, 49, 42);
            var img101 = document.createElement("img");
            img101.src = "./img/wybuch.png";
            context.drawImage(img101, x + 220, y + 20, 49, 42);
            var img102 = document.createElement("img");
            img102.src = "./img/wybuch.png";
            context.drawImage(img102, x + 130, y + 90, 49, 42);
            var img103 = document.createElement("img");
            img103.src = "./img/wybuch.png";
            context.drawImage(img103, x + 30, y + 50, 49, 42);
        }

    }, 700)
    setTimeout(() => {
        if (context != null) {

            //   context.drawImage(obrazek, wartosc, 0, 8102, 306);
            var img10 = document.createElement("img");
            img10.src = "./img/wybuch.png";
            context.drawImage(img10, x + 50, y + 150, 49, 42);
            var img101 = document.createElement("img");
            img101.src = "./img/wybuch.png";
            context.drawImage(img101, x + 200, y + 170, 49, 42);
            var img102 = document.createElement("img");
            img102.src = "./img/wybuch.png";
            context.drawImage(img102, x + 270, y + 90, 49, 42);
        }

    }, 1000)
    setTimeout(() => {
        if (context != null) {
            context.drawImage(obrazek, wartosc, 0, 8102, 306);
            var napis = document.createElement("h1");
            napis.innerText = "GOOD GAME"
            napis.style.color = "white";
            napis.style.position = "absolute";
            napis.style.left = "200px";
            napis.style.top = "100px";

            var main = document.getElementById("main");
            main?.appendChild(napis);
        }

    }, 1200)
    clearInterval(interwal);
}