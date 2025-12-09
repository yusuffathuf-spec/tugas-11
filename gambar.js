function showImage() {
    const select = document.getElementById("imageSelect");
    const img = document.getElementById("preview");

    const file = select.value;

    if (file === "") {
        img.style.display = "none";
        return;
    }

    img.src = "img/" + file;
    img.style.display = "block";

    alert("Ini gambar " + file);
}