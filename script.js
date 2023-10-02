document.addEventListener("DOMContentLoaded", function () {
    const contentArea = document.getElementById("content");
    const aboutLink = document.getElementById("logo");
    const aboutLink2 = document.getElementById("about");
    const projectLink = document.getElementById("projects");
    const researchLink = document.getElementById("research");

    function loadContent(htmlFile) {
        fetch(htmlFile)
            .then(response => response.text())
            .then(data => {
                contentArea.innerHTML = data;
            })
            .catch(error => {
                console.error("Error loading content: ", error);
            });
    }

    function change(n) {
        let panels = document.querySelectorAll('div a');
        panels.forEach(p => p.classList.remove('active'));
        panels[n - 1].classList.add('active');
    }

    aboutLink.addEventListener("click", function () {
        loadContent("src/pages/about.html");
        change(2)
    });

    aboutLink2.addEventListener("click", function () {
        loadContent("src/pages/about.html");
        change(2)
    });

    projectLink.addEventListener("click", function () {
        loadContent("src/pages/project.html");
        change(3)
    });

    researchLink.addEventListener("click", function () {
        loadContent("src/pages/research.html");
        change(4)
    });

    loadContent("src/pages/about.html");
    change(2)
});
