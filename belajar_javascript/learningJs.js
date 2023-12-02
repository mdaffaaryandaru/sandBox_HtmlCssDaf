

function belajarArray() {
  let namaGanteng = ["Muhammad", "Daffa", "Aryandaru"];
  //manambahkan array itu ganteng banget ke dalam array
  namaGanteng.push("Itu", "Ganteng", "Banget");
  //menambahkan array dia sangat ke dalam index 0 di dalam array
  namaGanteng.unshift("Dia", "Sangat");
  console.log(namaGanteng);
  //menghapus array di dalam index terakhir di dalam array
  namaGanteng.pop();
  console.log(namaGanteng);
  //menghapus array di dalam index pertama di dalam array
  namaGanteng.shift();
  console.log(namaGanteng);

  //UNTUK METHOD METHOD YANG LAIN LIAT DI MDN WEBDOCS
}

function belajarObjet() {
  //list dari object. object merupakan kumpulan dari beberapa data yang memiliki nama (key) dan nilai (value)
  //variable biodata disebut dengan object name
  let biodata = {
    nama: "Muhammad Daffa Aryandaru",
    umur: 17,
    alamat: "Jl. Arya Wangsakara, Tigaraksa, Banten",
    hobi: ["Coding", "Membaca", "Nonton"],
    sekolah: {
      nama: "SMK Negeri 4 Kota Tangerang",
      jurusan: "Rekayasa Perangkat Lunak",
    },
  };
  const callObjectInsideObject = biodata.sekolah.nama; // cara memanggil object di dalam object
  const callArrayInsideObject = biodata.hobi[0]; // cara memanggil array di dalam object
  console.log(callArrayInsideObject);
  console.log(callObjectInsideObject);

  let biodata2 = [
    {
      nama: "Muhammad Daffa Aryandaru",
      umur: 17,
      alamat: "Jl. Arya Wangsakara, Tigaraksa, Banten",
      hobi: ["Coding", "Membaca", "Nonton"],
      sekolah: {
        nama: "SMK Negeri 4 Kota Tangerang",
        jurusan: "Rekayasa Perangkat Lunak",
      },
    },
    {
      nama: "Muhammad Daffa Ganteng",
      umur: 17,
      alamat: "Jl. Arya Wangsakara, Tigaraksa, Banten",
      hobi: ["Coding", "Membaca", "Nonton"],
      sekolah: {
        nama: "SMK Negeri 4 Kota Tangerang",
        jurusan: "Rekayasa Perangkat Lunak",
      },
    },
  ];
  const callArrayOfObject = biodata2[1].nama;
  console.log(callArrayOfObject);
  //memanggil semua nama di dalam array object
  const loopArrayForGetAllName = biodata2.forEach(function (o) {
    console.log(o.nama);
  });
}

function belajarLooping() {
  //ini adalah contoh dasar looping yang dimana jika variable i kurang dari sama dengan 20 maka akan terus di looping sampai variable i lebih dari 20
  //jika variable i < (lebih kecil)-nya tidak menggunakan sama dengan (=) maka looping akan berhenti di angka 19
  for (let i = 0; i <= 20; i++) {
    console.log("saya adalah perulangan" + i);
  }
  //contoh looping untuk mengeluarkan angka genap
  for (let i = 0; i <= 20; i += 2) {
    console.log("saya adalah angka genap " + i);
  }

  //contoh looping untuk mengeluarkan angka ganjil
  for (let i = 1; i <= 20; i += 2) {
    console.log("saya adalah angka ganjil " + i);
  }

  //contoh looping perhitungan mundur
  for (let i = 20; i >= 0; i--) {
    console.log("saya adalah perulangan mundur " + i);
  }

  //contoh looping array
  let music = ["rock", "jazz", "pop", "hiphop", "dangdut"]; // array akan terhitung dari 0
  for (let i = 0; i < music.length; i++) {
    //i akan mengambil index ke 0 dari array music dan akan terus di looping sampai 4x karena 5 tidak < dari 5
    //music.length bukan lah tidak di hitung dari 0 tapi di hitung dari 1
    console.log(i, music[i]);
    //akan mengeluarkan output i sebanyak 5 dan mengeluarkan output music sebanyak 5
  }

  let string = "string"; // variable string biasa
  for (let i = 1; i <= 5; i++) {
    // ketika 1 (i) <= 5 maka akan terus di looping dan menghasilkan angka 1 - 5
    console.log(` Hallo ${i} : `); // ini adalah string literal yang dimana kita bisa memasukkan variable ke dalam string
    for (let j = 0; j <= string.length; j++) {
      // ketika 0 (j) < 6 maka akan terus di looping dan menghasilkan string sebanyak 6 huruf karena string.length = 6
      //string.length akan membaca panjang dari string tersebut (6)
      console.log(`${string}`); // string literal untuk memanggil variable string
      //akan mengeluarkan output string sebanyak 5x karena 5 < 6 dan 6 tidak < 6
      //jika menambahkan [j] pada log maka akan akan mengambil karakter dari string tersebut
      //karena [j] berbentuk array maka akan terhitung dari 0
      //jika ingin mengambil karakter dari string tersebut maka harus menambahkan [j] pada log dan ingat j akan terhitung dari 0 karena akan di hitung sebagai array
    }
  }

  let i = "daffa ganteng banget";
  for (let j = 0; j <= 10; j++) {
    console.log(j);
    for (let k = 0; k <= i.length; k++) {
      console.log(i);
    }
    //k akan di looping sebanyak i.length yang di mulai dari 0
    //apakah 0 (k) <= 5 ? ya
    //apakah 1 (k) <= 5 ? ya
    //apakah 2 (k) <= 5 ? ya
    //apakah 3 (k) <= 5 ? ya
    //apakah 4 (k) <= 5 ? ya
    //apakah 5 (k) <= 5 ? ya
    //maka akan ada 5 output i
    //jika di mulai dari 1 maka akan ada 4 output i
    //apakah 1 (k) <= 5 ? ya
    //apakah 2 (k) <= 5 ? ya
    //apakah 3 (k) <= 5 ? ya
    //apakah 4 (k) <= 5 ? ya
    //apakah 5 (k) <= 5 ? ya
  }

  const belajarLoopingArray = [
    // array parent
    [1, 2, 3, 4], // array child
    [1, 2, 3, 4], // array child
    [1, 2, 3, 4], // array child
  ];
  //looping untuk mengambil data dari array yang ada di dalam array
  // belajarLoopingArray.length = 3 yaitu adalah total array di dalam array parent belajarLoopingArray
  for (let i = 0; i < belajarLoopingArray.length; i++) {
    // variable untuk mengambil data yang ada di dalam array parent
    const data = belajarLoopingArray[i];
    //output untuk menghitung array parent karena i < belajarLoopingArray.length
    console.log(`array ke  ${i} :`);
    // data.length = 4 yaitu adalah total array di dalam array child
    for (let j = 0; j < data.length; j++) {
      //output untuk  menampilkan data yang ada di dalam array child
      console.log(data[j]);
    }
  }

  const nama = [
    ["Muhammad", "Daffa", "Aryandaru"],
    ["Muhammad", "Daffa", "Aryandaru"],
    ["Muhammad", "Daffa", "Aryandaru"],
  ];
  const question = [
    "yang paling ganteng",
    "yang paling tampan",
    "yang paling baik",
  ];

  for (let i = 0; i < question.length; i++) {
    const data = question[i];
    const data2 = nama[i];
    console.log(`siapa ${data}`);
    for (let j = 0; j < data2.length; j++) {
      console.log(data2[j]);
    }
  }

  let a = 0;
  while (a <= 10) {
    console.log(a);
    a++;
  }

  const username = "Muhammad Daffa Aryandaru";
  let promptUsername = prompt("masukkan username anda");
  while (promptUsername !== username) {
    promptUsername = prompt("masukkan username anda");
  }
  alert("anda berhasil login");
}

return belajarLooping();
