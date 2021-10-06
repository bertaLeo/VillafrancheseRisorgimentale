//change theme toggle

(function() {
    let onpageLoad = localStorage.getItem("theme") || "";
    let element = document.body;
    element.classList.add(onpageLoad);
    document.getElementsByTagName("body").textContent = localStorage.getItem("theme") || "light";
})();
  
function themeToggle() {
    let element = document.body;
    element.classList.toggle("dark");

    let theme = localStorage.getItem("theme");
    if (theme && theme === "dark") {
        localStorage.setItem("theme", "");
    } else {
        localStorage.setItem("theme", "dark");
    }

    document.getElementsByTagName("body").textContent = localStorage.getItem("theme");
}
document.getElementById("theme_toggle").addEventListener("click", themeToggle);