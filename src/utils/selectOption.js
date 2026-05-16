const gameButtons = document.querySelectorAll("button[data-choice]");
const screenPick =  document.querySelector("section[data-screen=pick]")
const screenResult = document.querySelector("section[data-screen=result]")

gameButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const imgBtn = button.querySelector("img")
        const imgSrc = imgBtn.getAttribute("src")
        const ownPick = document.querySelector("img[data-slot-icon=own]")
        const ownSlot = document.querySelector("div[data-slot=you]")

        const btnClasses = button.getAttribute("class")
        const btnTokenClass = btnClasses.split(" ")[1]
        
        const slotClasses = ownSlot.getAttribute("class")
        const slotClassesArr = slotClasses.split(" ")

        slotClassesArr[1] = btnTokenClass
        
        screenPick.setAttribute("hidden", true)
        screenResult.removeAttribute("hidden")
        ownPick.setAttribute("src", imgSrc)
        ownSlot.setAttribute("class", slotClassesArr.join(" "))
    });
});
