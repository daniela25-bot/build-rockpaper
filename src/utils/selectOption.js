const gameButtons = document.querySelectorAll("button[data-choice]");

gameButtons.forEach((button) => {
    button.addEventListener("click", () => {
    const choice = button.getAttribute("data-choice");
    } );
});