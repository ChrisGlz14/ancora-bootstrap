
const titleElement = document.querySelector(".title");

function activateTitleShow() {
    titleElement.classList.add("show");
}

window.addEventListener("load", () => {
    activateTitleShow()
});


