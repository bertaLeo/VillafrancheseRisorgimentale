document.addEventListener("DOMContentLoaded", function(event) {
    const menubtn = document.getElementById("menu_button");
    const menu_icon = document.getElementById("menu_icon");
    const menu_dropdown = document.getElementById("menu_dropdown");

    //menu button and menu wrap
    menubtn.addEventListener("click", () => {
        menu_dropdown.classList.toggle("hidden");
        menu_icon.classList.toggle("transform");
        menu_icon.classList.toggle("rotate-90");
    });
});