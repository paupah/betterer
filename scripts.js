document.addEventListener("DOMContentLoaded", function () {
    const textContainer = document.querySelector(".copy-columns");
    const button = document.querySelector(".toggle-button");
    const mainContent = document.querySelector(".expand-content");

    button.addEventListener("click", function () {
        if (textContainer.classList.contains("expanded")) {
        // If it's expanded, collapse it
            textContainer.classList.remove("expanded");
            mainContent.style.maxHeight = "200px"; // Adjust to your initial max height
            button.textContent = "Click to View More";
        } else {
            // If it's collapsed, expand it
            textContainer.classList.add("expanded");
            mainContent.style.maxHeight = "none"; // Remove the max height
            button.textContent = "Click to Collapse";
        }
    });
});