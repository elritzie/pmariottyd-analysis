document.addEventListener("DOMContentLoaded", function () {
    const companions = document.querySelectorAll(".companion");
    const tooltip = document.getElementById("tooltip");

    companions.forEach(companion => {
        companion.addEventListener("mouseenter", (event) => {
            tooltip.textContent = companion.getAttribute("data-description");
            tooltip.style.display = "block";
            tooltip.style.left = `${event.pageX + 10}px`;
            tooltip.style.top = `${event.pageY + 10}px`;
        });

        companion.addEventListener("mousemove", (event) => {
            tooltip.style.left = `${event.pageX + 10}px`;
            tooltip.style.top = `${event.pageY + 10}px`;
        });

        companion.addEventListener("mouseleave", () => {
            tooltip.style.display = "none";
        });
    });
});
