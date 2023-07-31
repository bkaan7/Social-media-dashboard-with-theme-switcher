function darkTheme(){
    const boxes = document.querySelectorAll(".flex");
    const smallBoxes = document.querySelectorAll(".th-box");
    const lightText = document.querySelectorAll(".baslik, .followers, .sec-number, .th-header")
    const headerBack = document.querySelector(".background")
    const body = document.body;

    headerBack.classList.toggle("background-dark")
    body.classList.toggle("body-background-dark")

    boxes.forEach(box => {
        box.classList.toggle("ligth-text");
        box.classList.toggle("dark-bg-box");
    });
    smallBoxes.forEach(box => {
        box.classList.toggle("dark-bg-box");
        box.classList.toggle("ligth-text");
    });
    lightText.forEach(text => {
        text.classList.toggle("ligth-text");
    });

};