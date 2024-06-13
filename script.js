document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById("menuButton");
    const closeButton = document.getElementById("closeButton");
    const menu = document.getElementById("menu");
    const seeMoreButtons = document.querySelectorAll(".see-more");

    menuButton.addEventListener("click", function () {
        menu.classList.add("active");
    });

    closeButton.addEventListener("click", function () {
        menu.classList.remove("active");
    });

    seeMoreButtons.forEach(button => {
        button.addEventListener("click", function () {
            const toggleContent = this.parentElement.nextElementSibling;
            toggleContent.classList.toggle("active");

            if (toggleContent.classList.contains("active")) {
                this.textContent = "See Less";
            } else {
                this.textContent = "See More";
            }
        });
    });
});
