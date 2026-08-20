const diliButton = document.getElementById("diliButton");

diliButton.addEventListener("mouseover", function () {

    const x = Math.random() * 80;
    const y = Math.random() * 80;

    diliButton.style.position = "fixed";
    diliButton.style.left = x + "%";
    diliButton.style.top = y + "%";

});

const sigeButton = document.getElementById("sigeButton");

sigeButton.addEventListener("click", function () {
    document.body.innerHTML = 
        "<h1>Masunuring bading yarnch</h1><P>Call me na before I change my mind.</p>";
});