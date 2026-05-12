

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
function normalListener() {
    let typedText = "";
    
    document.addEventListener("keydown", (event) => {
        //  Ignore keys(Shift, Alt, etc)
        if (event.key.length > 1) return;
        typedText += event.key.toLowerCase();
        if (typedText.length > 20) {
            typedText = typedText.slice(-7); // We only need the last 7 chars for "barcode"
        }
        if (typedText.includes("normal")) {
            console.log("Magic word detected!");
            // Use a class for better reliability
            document.body.style.fontFamily = "'Times New Roman', cursive";
            typedText = ""; 
        }
    });
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
        if (typedText.includes("barcode")) {
            console.log("Magic word detected!");
            // Use a class for better reliability
            document.body.style.fontFamily = "'Libre Barcode 39', cursive";
            typedText = ""; 
        }
    });
}


function TimelineListener() {
    const hov1 = document.getElementById("hov1");
    const timeline1 = document.getElementById("timeline-content1");
    hov1.addEventListener('mouseenter', () => {
        timeline1.style.opacity = '1';
    });
    ;
    // take2
        const hov2 = document.getElementById("hov2");
    const timeline2 = document.getElementById("timeline-content2");
    hov2.addEventListener('mouseenter', () => {
        timeline2.style.opacity = '1';
    });
    // take3
    const hov3 = document.getElementById("hov3");
    const timeline3 = document.getElementById("timeline-content3");
    hov3.addEventListener('mouseenter', () => {
        timeline3.style.opacity = '1';
    });
    
    // take4
    const hov4 = document.getElementById("hov4");
    const timeline4 = document.getElementById("timeline-content4");
    hov4.addEventListener('mouseenter', () => {
        timeline4.style.opacity = '1';
    });

    
     // take5
    const hov5 = document.getElementById("hov5");
    const timeline5 = document.getElementById("timeline-content5");
    hov5.addEventListener('mouseenter', () => {
        timeline5.style.opacity = '1';
    });

        // take6
        const hov6 = document.getElementById("hov6");
    const timeline6 = document.getElementById("timeline-content6");
    hov6.addEventListener('mouseenter', () => {
        timeline6.style.opacity = '1';
    });

}
TimelineListener();

initBarcodeListener();
normalListener();