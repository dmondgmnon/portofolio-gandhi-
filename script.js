/* Mengambil elemen HTML */

const tombol = document.getElementById("btn-ubah-teks");

const teks = document.getElementById("teks-dom");

/* Menambahkan Event Listener */

tombol.addEventListener("click", function () {

```
teks.textContent =
    "Terima kasih sudah mengunjungi website biodata saya!";
```

});
