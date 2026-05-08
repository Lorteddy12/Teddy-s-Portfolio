

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
// This just creates another page, and i already made html pages with numerical order, which was easy.
projects.forEach((proj, index) => {
    proj.addEventListener("click", () => {
        window.location.href = `page${index + 1}.html`;
    });
});

function goBack() {
    window.history.back();
}
function initBarcodeListener() {
    let typedText = "";
    
    document.addEventListener("keydown", (event) => {
        //  Ignore keys(Shift, Alt, etc)
        if (event.key.length > 1) return;
        typedText += event.key.toLowerCase();
        if (typedText.length > 20) {
            typedText = typedText.slice(-7); // We only need the last 7 chars for "barcode"
        }
        if (typedText.includes("comicsans")) {
            console.log("Magic word detected!");
            // Use a class for better reliability
            document.body.style.fontFamily = "'sans comic sans', cursive";
            typedText = ""; 
        }
    });
}

initBarcodeListener();