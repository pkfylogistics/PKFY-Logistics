/* =====================================
   PKFY LOGISTICS
   MOBILE NAVIGATION
===================================== */


const menuToggle =
    document.getElementById("menuToggle");


const navbar =
    document.getElementById("navbar");


const mobileOverlay =
    document.getElementById("mobileMenuOverlay");


/* =====================================
   OPEN / CLOSE MENU
===================================== */

function toggleMenu() {

    navbar.classList.toggle("active");

    menuToggle.classList.toggle("active");

    mobileOverlay.classList.toggle("active");


    const isOpen =
        navbar.classList.contains("active");


    menuToggle.setAttribute(
        "aria-expanded",
        isOpen
    );

}


/* =====================================
   MENU BUTTON
===================================== */

menuToggle.addEventListener(
    "click",
    toggleMenu
);


/* =====================================
   CLICK OUTSIDE MENU
===================================== */

mobileOverlay.addEventListener(
    "click",
    toggleMenu
);


/* =====================================
   CLOSE MENU WHEN LINK CLICKED
===================================== */

const navLinks =
    document.querySelectorAll(
        ".navbar a"
    );


navLinks.forEach(link => {

    link.addEventListener(
        "click",
        () => {

            navbar.classList.remove(
                "active"
            );

            menuToggle.classList.remove(
                "active"
            );

            mobileOverlay.classList.remove(
                "active"
            );

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        }
    );

});


/* =====================================
   HEADER SHADOW
===================================== */

const header =
    document.getElementById("header");


window.addEventListener(
    "scroll",
    () => {

        if (
            window.scrollY > 30
        ) {

            header.style.boxShadow =
                "0 5px 25px rgba(0,0,0,0.35)";

        } else {

            header.style.boxShadow =
                "none";

        }

    }
);


/* =====================================
   TRACKING UI
===================================== */

const trackButton =
    document.getElementById(
        "trackButton"
    );


const trackingNumber =
    document.getElementById(
        "trackingNumber"
    );


const trackingResult =
    document.getElementById(
        "trackingResult"
    );


trackButton.addEventListener(
    "click",
    () => {

        const number =
            trackingNumber.value.trim();


        trackingResult.style.display =
            "block";


        if (!number) {

            trackingResult.innerHTML =
                "Please enter your tracking number.";

            return;

        }


        trackingResult.innerHTML =

            `Tracking number <strong>${number}</strong>
             received. Live tracking will be
             available when the PKFY Logistics
             tracking system is connected.`;

    }
);


/* =====================================
   CURRENT YEAR
===================================== */

document.getElementById(
    "year"
).textContent =
    new Date().getFullYear();


/* =====================================
   SCROLL REVEAL
===================================== */

const revealElements =
    document.querySelectorAll(

        ".service-card, " +
        ".problem-card, " +
        ".step, " +
        ".price-card, " +
        ".contact-card"

    );


const revealObserver =

    new IntersectionObserver(

        entries => {

            entries.forEach(
                entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.style.opacity =
                            "1";

                        entry.target.style.transform =
                            "translateY(0)";

                        revealObserver.unobserve(
                            entry.target
                        );

                    }

                }
            );

        },

        {

            threshold: 0.15

        }

    );


revealElements.forEach(
    element => {

        element.style.opacity =
            "0";

        element.style.transform =
            "translateY(25px)";

        element.style.transition =
            "opacity 0.6s ease, transform 0.6s ease";

        revealObserver.observe(
            element
        );

    }
);
