// =========================
// CONTAGEM REGRESSIVA
// =========================

const eventDate = new Date("2026-07-02T19:30:00");

const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

function updateCountdown() {

    const now = new Date();

    const difference = eventDate - now;

    if (difference <= 0) {

        daysElement.textContent = "00";
        hoursElement.textContent = "00";
        minutesElement.textContent = "00";
        secondsElement.textContent = "00";

        return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (difference % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (difference % (1000 * 60)) /
        1000
    );

    daysElement.textContent = String(days).padStart(2, "0");
    hoursElement.textContent = String(hours).padStart(2, "0");
    minutesElement.textContent = String(minutes).padStart(2, "0");
    secondsElement.textContent = String(seconds).padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);


// =========================
// WHATSAPP
// =========================

const whatsappBtn = document.getElementById("whatsappBtn");

if (whatsappBtn) {

    whatsappBtn.addEventListener("click", () => {

        const message =
            "Confirmo minha presença no seu aniversário de 18 anos.";

        const url =
            `https://wa.me/5521999746448?text=${encodeURIComponent(message)}`;

        window.open(url, "_blank");
    });

}


// =========================
// GOOGLE MAPS
// =========================

const mapsBtn = document.getElementById("mapsBtn");

if (mapsBtn) {

    mapsBtn.addEventListener("click", () => {

        const mapsUrl =
            "https://www.google.com/maps/search/?api=1&query=Seven+Grill+Itaipu+Niteroi";

        window.open(mapsUrl, "_blank");
    });

}


// =========================
// CALENDÁRIO (.ICS)
// =========================

const calendarBtn = document.getElementById("calendarBtn");

if (calendarBtn) {

    calendarBtn.addEventListener("click", createCalendarFile);

}

function createCalendarFile() {

    const startDate = "20260702T193000";
    const endDate = "20260702T220000";

    const calendarContent =
`BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
SUMMARY:18TÃO DO JOTA
DESCRIPTION:Aniversário de 18 anos do João Luiz (Jota)
LOCATION:Seven Grill Itaipu - Niterói
DTSTART:${startDate}
DTEND:${endDate}
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob(
        [calendarContent],
        { type: "text/calendar;charset=utf-8" }
    );

    const link = document.createElement("a");

    link.href = URL.createObjectURL(blob);

    link.download = "18tao-do-jota.ics";

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

}


// =========================
// REVEAL ON SCROLL
// =========================

const revealElements =
    document.querySelectorAll(".reveal");

const revealObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("active");

                }

            });

        },

        {
            threshold: 0.15
        }

    );

revealElements.forEach(element => {

    revealObserver.observe(element);

});


// =========================
// PARTÍCULAS
// =========================

const particlesContainer =
    document.getElementById("particles");

function createParticle() {

    const particle =
        document.createElement("span");

    const size =
        Math.random() * 4 + 1;

    particle.style.position = "absolute";
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;

    particle.style.borderRadius = "50%";

    particle.style.background =
        "rgba(0,183,255,0.9)";

    particle.style.boxShadow =
        "0 0 10px rgba(0,183,255,0.8)";

    particle.style.left =
        Math.random() * window.innerWidth + "px";

    particle.style.top =
        window.innerHeight + "px";

    particle.style.opacity =
        Math.random();

    particle.style.pointerEvents = "none";

    particlesContainer.appendChild(particle);

    const duration =
        Math.random() * 6000 + 5000;

    particle.animate(

        [
            {
                transform: "translateY(0)",
                opacity: 1
            },

            {
                transform:
                    `translateY(-${window.innerHeight + 200}px)`,
                opacity: 0
            }
        ],

        {
            duration,
            easing: "linear"
        }

    );

    setTimeout(() => {

        particle.remove();

    }, duration);

}

setInterval(createParticle, 250);


// =========================
// HEADER PARALLAX
// =========================

const hero =
    document.querySelector(".hero");

window.addEventListener("scroll", () => {

    const offset =
        window.pageYOffset;

    hero.style.backgroundPositionY =
        offset * 0.4 + "px";

});


// =========================
// EFEITO NOS CARDS
// =========================

const cards =
    document.querySelectorAll(
        ".card, .location-card, .confirmation-card, .calendar-card, .important-card"
    );

cards.forEach(card => {

    card.addEventListener("mousemove", e => {

        const rect =
            card.getBoundingClientRect();

        const x =
            e.clientX - rect.left;

        const y =
            e.clientY - rect.top;

        const rotateY =
            ((x / rect.width) - 0.5) * 10;

        const rotateX =
            ((y / rect.height) - 0.5) * -10;

        card.style.transform =
            `perspective(1000px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-5px)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "perspective(1000px) rotateX(0) rotateY(0)";

    });

});


// =========================
// MENSAGEM DE BOAS-VINDAS
// =========================

window.addEventListener("load", () => {

    setTimeout(() => {

        console.log(
            "%c🚗 Bem-vindo ao 18TÃO DO JOTA!",
            "color:#00b7ff;font-size:18px;font-weight:bold;"
        );

    }, 500);

});
