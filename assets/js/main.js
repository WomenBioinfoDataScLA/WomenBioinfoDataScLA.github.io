const ham = document.getElementById('ham-list');
const cross = document.getElementById('cross-icon');
const navOptions = document.getElementById('nav-options');

const aboutSection = document.getElementById('about');
const goalsSection = document.getElementById('goals');
const firsteventSection = document.getElementById('1stwbds');
const projectsSection = document.getElementById('projects');

if ($(window).width() < 800) {
    disableElement(navOptions);
}

function disableElement(element) {
    element.classList.add('disable');
}

function enableElement(element) {
    element.classList.remove('disable');
}

function active(element) {
    element.classList.add('active');
}

function deactive(element) {
    element.classList.remove('active');
}

function cleanBody() {
    disableElement(aboutSection);
    disableElement(goalsSection);
    disableElement(firsteventSection);
    disableElement(projectsSection);
}


cross.addEventListener("click", () => {
    disableElement(cross);
    enableElement(ham);
    disableElement(navOptions);
});


ham.addEventListener("click", () => {
    disableElement(ham);
    enableElement(cross);
    enableElement(navOptions);
});

projectsButton.addEventListener('click', () => {
    enableElement(aboutSection);
    enableElement(goalsSection);
    enableElement(firsteventSection);
    enableElement(projectsSection);
    disableElement(weSection);
    active(homeButton);
    deactive(weButton);
});

spanishButton.addEventListener('click', () => {
    languageCheck("ES");
    renderSpanishNavBar();
    renderSpanishIndexPage();
});

portugueseButton.addEventListener('click', () => {
    languageCheck("PT");
    renderPortugueseNavBar();
    renderPortugueseIndexPage();
});

indexLangSetting();