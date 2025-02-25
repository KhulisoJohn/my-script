const paragraph = document.getElementById("headerParagraph");
const body = document.getElementById("body");
const button = document.getElementById("button");

let isLightMode = true; // This will track the state

paragraph.innerHTML = "This is light mode";

button.addEventListener("click", () => {
    if (isLightMode) {
        body.style.backgroundColor = "black";
        paragraph.style.color = "white"
        paragraph.innerHTML = "This is dark mode";
    } else {
        body.style.backgroundColor = "white";
            paragraph.style.color = "black";
        paragraph.innerHTML = "This is light mode";
    }
    isLightMode = !isLightMode; // Toggle the state
});

