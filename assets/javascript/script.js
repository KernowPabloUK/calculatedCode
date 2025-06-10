document.addEventListener("DOMContentLoaded", function () {
    const darkModeON = "fa-moon";
    const lightModeON = "fa-sun";
    let darkModeToggle = document.querySelector("#dark-mode-toggle");
    let cssVariables = document.querySelector(':root');

    function handleDarkModeToggleClick() {
        for (const child of darkModeToggle.children) {
            if (child.classList.contains(darkModeON)) {
                child.classList.remove(darkModeON);
                child.classList.add(lightModeON);
                cssVariables.style.setProperty('--primary-font-color', '#00000');
                cssVariables.style.setProperty('--primary-background-color', 'rgb(255, 255, 255, 1)');


            } else if (child.classList.contains(lightModeON)) {
                child.classList.remove(lightModeON);
                child.classList.add(darkModeON);
                cssVariables.style.setProperty('--primary-font-color', 'rgb(255, 255, 255, 0.96)');
                cssVariables.style.setProperty('--primary-background-color', '#000000');
            }
        }
    }
    if (darkModeToggle) {
        darkModeToggle.addEventListener("click", handleDarkModeToggleClick);
    }
});
