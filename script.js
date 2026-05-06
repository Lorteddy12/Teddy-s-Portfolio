

const projects = document.querySelectorAll('.proj');

projects.forEach((proj) => {
    // create overlay
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    proj.appendChild(overlay);

    let text = proj.dataset.title;
    let p = document.createElement("H2");
    p.textContent = text;
    overlay.appendChild(p);

    // hover in
    proj.addEventListener('mouseenter', () => {
        overlay.style.opacity = '0';
    });

    // hover out
    proj.addEventListener('mouseleave', () => {
        overlay.style.opacity = '0.7';
    });
});

projects.forEach((proj, index) => {
    proj.addEventListener("click", () => {
        window.location.href = `page${index + 1}.html`;
    });
});
// This just creates another page, and i already made html pages with numerical order, which was easy.