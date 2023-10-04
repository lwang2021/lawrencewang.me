document.addEventListener("DOMContentLoaded", function () {
    const contentArea = document.getElementById("content");
    const aboutLink = document.getElementById("logo");
    const aboutLink2 = document.getElementById("about");
    const projectLink = document.getElementById("projects");
    const researchLink = document.getElementById("research");

    const messages = ["Hi, my name is", "你好，我叫", "Bonjour, je m'appelle"];
    let messageIndex = 0;
    let isErasing = false;

    function typeMessage() {
        const messageElement = document.getElementById("opening");
        const message = messages[messageIndex];
        
        if (!isErasing && messageElement.textContent === message) {
            console.log(message);
            isErasing = true;
            setTimeout(typeMessage, 1000);
        } else if (isErasing && messageElement.textContent === "") {
            isErasing = false;
            messageIndex = (messageIndex + 1) % messages.length;
            setTimeout(typeMessage, 500);
        } else {
            const text = messageElement.textContent;
            messageElement.textContent = isErasing ? text.slice(0, -1) : message.slice(0, text.length + 1);
            console.log(message)
            setTimeout(typeMessage, 100);
        }
    }

    function loadContent(htmlFile) {
        fetch(htmlFile)
            .then(response => response.text())
            .then(data => {
                contentArea.innerHTML = data;
                typeMessage();
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
        change(2);
    });

    aboutLink2.addEventListener("click", function () {
        loadContent("src/pages/about.html");
        change(2);
    });

    projectLink.addEventListener("click", function () {
        loadContent("src/pages/project.html");
        change(3);
    });

    researchLink.addEventListener("click", function () {
        loadContent("src/pages/research.html");
        change(4)
    });

    loadContent("src/pages/about.html");
    change(2);
});
