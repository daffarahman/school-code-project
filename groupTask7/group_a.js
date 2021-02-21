// game.js
// github.com/daffarahman

// fungsi untuk mengambil pilihan random komputer
function ambilPilihanKomputer() {
    let comp = Math.random(); // 0.0 - 0.9
    if (comp < 0.36) return "gajah";
    else if (comp >= 0.36 && comp < 0.66) return "semut";
    else return "orang";
}

// Pesan welcome to the game
alert("Welcome to suit game ultimate");

// prompt user untuk mau berapa nyawa
// parseInt untuk mengubah data dari string ke number
let nyawa = parseInt(prompt("Yo, mau berapa nyawa?")) || 0;

// nyawa digunakan yang akan di tampilkan di bagian akhir permainan
const nyawaDigunakan = nyawa;

// variable untuk skor
let skor = 0;
let skorMenang = 2;
let skorSeri = 1;
let skorKalah = 0;

// variable lain
let langkah = 0;

// loop ketika nyawa masih > 0
while(nyawa > 0) {

    // setiap mulai loop, increment langkah
    langkah++;

    // ambil pilihan player dan komputer
    // trim() untuk menghilangkan whitespace
    // toLowerCase() untuk membuat pilihan player menjadi huruf kecil semua (sehingga tidak akan ada masalah ketika membandingkannya nanti)
    let player = String(prompt("Pilih antara gajah/semut/orang")).trim().toLowerCase()
    let computer = ambilPilihanKomputer();

    // tampilkan pesan setelah player mengkonfirmasi pilihan
    alert(`
    Player: ${player}
    Komputer: ${computer}    
    Skor saat ini: ${skor}
    Nyawa tersisa ${nyawa}
    Langkah ke ${langkah}
    `);

    
    // variable untuk cek apabila hasil menang, kalah, atau seri
    let win = false;
    let draw = false;

    // bandingkan pilihan player dan pilihan computer
    if (player == computer) {
        draw = true;
    } else if (player == "gajah" && computer == "orang") {
        win = true;
    } else if (player == "semut" && computer == "gajah") {
        win = true;
    } else if (player == "orang" && computer == "semut") {
        win = true;
    }

    // cek hasilnya seri/draw, menang/win, atau kalah/!win
    if(draw) {
        // kalau seri
        skor += skorSeri;
    } else {
        if(win) {
            // kalau menang
            skor += skorMenang;
        } else {
            // kalau kalah
            skor -= skorKalah;
            nyawa--;

            // tambah penambahan/pengurangan skor
            skorMenang++;
            skorSeri++;
            skorKalah++;
        }
    }
}

// Game selesai/over
// dan tampilkan pesan
alert(`
Game Over!!!
Total Skor: ${skor}
Nyawa yang Digunakan: ${nyawaDigunakan}
`)
