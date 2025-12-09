function cekLogin() {
    const user = document.getElementById("username").value.trim();
    const pass = document.getElementById("password").value.trim();

    const validUser = "fathurrohman";
    const validPass = "atuy123";

    if (user === validUser && pass === validPass) {
        alert("Login berhasil!");
        document.body.innerHTML = `
            <h1 style="text-align:center; margin-top:60px; font-family:Poppins; color:white;">
             KELASSSSSSSSSSSSS BROW
            </h1>
        `;
    } else {
        alert("Login gagal! Username atau password salah.");
    }
}