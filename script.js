aboutButton.addEventListener("click", () => Scroll("AboutMe"));
skillsButton.addEventListener("click", () => Scroll("Skills"));
projectsButton.addEventListener("click", () => Scroll("Projects"));

function Scroll(sectionId) {
    let section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
}