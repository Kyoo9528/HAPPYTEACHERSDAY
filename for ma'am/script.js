/* =========================
   SCREEN SWITCHING
========================= */

const screens = document.querySelectorAll(".screen");


function showScreen(id) {

    screens.forEach(screen => {
        screen.classList.remove("active");
    });

    const target = document.getElementById(id);

    if (target) {
        target.classList.add("active");
    }

}


/* =========================
   INTRO BUTTON
========================= */

const startBtn = document.getElementById("startBtn");
const bgMusic = document.getElementById("bgMusic");

startBtn.addEventListener("click", () => {

    bgMusic.volume = 0.25;

    bgMusic.play().catch(error => {
        console.log("Music could not start:", error);
    });

    showScreen("envelopeScreen");
});

/* =========================
   ENVELOPE
========================= */

const envelope = document.getElementById("envelope");


envelope.addEventListener("click", () => {

    // Prevent clicking multiple times
    if (envelope.classList.contains("open")) {
        return;
    }


    // Open envelope
    envelope.classList.add("open");


    // Wait for envelope animation
    setTimeout(() => {

        showScreen("letterScreen");

    }, 1400);

});


/* =========================
   SMALL FLOWER EFFECT
========================= */

function createFloatingFlower() {

    const flower = document.createElement("div");

    const flowers = [
        "🌸",
        "🌷",
        "🌺",
        "💗",
        "♡"
    ];

    flower.textContent =
        flowers[
            Math.floor(
                Math.random() * flowers.length
            )
        ];


    flower.style.position = "fixed";

    flower.style.left =
        Math.random() * 100 + "vw";

    flower.style.bottom = "-30px";

    flower.style.fontSize =
        (18 + Math.random() * 15) + "px";

    flower.style.opacity = "0.65";

    flower.style.pointerEvents = "none";

    flower.style.zIndex = "10";


    const duration =
        4 + Math.random() * 3;


    flower.style.transition =
        `transform ${duration}s linear, opacity ${duration}s linear`;


    document.body.appendChild(flower);


    setTimeout(() => {

        flower.style.transform =
            `translateY(-110vh) rotate(180deg)`;

        flower.style.opacity = "0";

    }, 50);


    setTimeout(() => {

        flower.remove();

    }, duration * 1000 + 500);

}


/* =========================
   FLOATING FLOWERS
========================= */

setInterval(() => {

    createFloatingFlower();

}, 1800);
