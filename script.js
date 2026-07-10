// Mengambil elemen tombol scroll ke atas
const scrollTopBtn = document.getElementById("scrollTopBtn");

// Mendeteksi pergerakan scroll halaman pengguna
window.onscroll = function() {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
};

// Mengaktifkan fungsi klik tombol untuk kembali ke atas halaman dengan mulus
scrollTopBtn.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
