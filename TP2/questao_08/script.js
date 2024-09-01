function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");

    var button = document.getElementById("btnMode");
    var h1 = document.querySelector("h2");


    if (button.innerText === "Dark mode") {
        button.innerText = "Clean mode";
        button.style.backgroundColor = "#ffffff";
        button.style.color = "#333333";
        h1.style.color = "#ffffff";
    }
    else {
        button.innerText = "Dark mode";
        button.style.backgroundColor = "#333333";
        button.style.color = "#ffffff";
        h1.style.color = "#333333";
    }
}