document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.querySelector(".search-box input");
    const imageBoxes = document.querySelectorAll(".image-box");

    searchInput.addEventListener("input", function () {
        const searchTerm = searchInput.value.toLowerCase();

        imageBoxes.forEach(function (box) {
            const imageName = box.getAttribute("data-name").toLowerCase();
            const shouldShow = imageName.includes(searchTerm);

            if (shouldShow) {
                box.style.display = "block";
            } else {
                box.style.display = "none";
            }
        });
    });
});
