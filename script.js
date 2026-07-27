/* =====================================
   PKFY LOGISTICS JAVASCRIPT
===================================== */


/* =====================================
   MOBILE MENU
===================================== */

const menuToggle = document.getElementById("menuToggle");

const navbar = document.getElementById("navbar");


menuToggle.addEventListener("click", () => {

    navbar.classList.toggle("active");

});


/* CLOSE MOBILE MENU
   WHEN A NAVIGATION LINK IS CLICKED
*/

const navLinks = document.querySelectorAll(".navbar a");


navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");

    });

});


/* =====================================
   HEADER SHADOW ON SCROLL
===================================== */

const header = document.getElementById("header");


window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow =
            "0 5px 25px rgba(0,0,0,0.3)";

    } else {

        header.style.boxShadow = "none";

    }

});


/* =====================================
   TRACKING UI
===================================== */

const trackButton =
    document.getElementById("trackButton");

const trackingNumber =
    document.getElementById("trackingNumber");

const trackingResult =
    document.getElementById("trackingResult");


trackButton.addEventListener("click", () => {

    const number =
        trackingNumber.value.trim();


    if (number === "") {

        trackingResult.style.display = "block";

        trackingResult.innerHTML =
            "Please enter your tracking number.";

        return;

    }


    trackingResult.style.display = "block";


    trackingResult.innerHTML =

        `Tracking number <strong>${number}</strong> received.
        Your live tracking system will be connected
        once the PKFY Logistics backend is integrated.`;

});


/* =====================================
   CURRENT YEAR
===================================== */

document.getElementById("year").textContent =
    new Date().getFullYear();


/* =====================================
   SMOOTH SCROLL
===================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (event) {

        const target =
            document.querySelector(
                this.getAttribute("href")
            );


        if (target) {

            event.preventDefault();


            target.scrollIntoView({

                behavior: "smooth",

                block: "start"

            });

        }

    });

});


/* =====================================
   SIMPLE SCROLL REVEAL
===================================== */

const revealElements = document.querySelectorAll(

    ".service-card, " +
    ".problem-card, " +
    ".step, " +
    ".price-card, " +
    ".contact-card"

);


const revealObserver =

    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },

        {

            threshold: 0.15

        }

    );


revealElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(25px)";

    element.style.transition =
        "opacity 0.6s ease, transform 0.6s ease";

    revealObserver.observe(element);

});
