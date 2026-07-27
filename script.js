/* ==================================================
   MOBILE NAVIGATION
================================================== */

function toggleMenu() {

    const navMenu =
        document.getElementById("navMenu");

    navMenu.classList.toggle("active");

}



/* ==================================================
   CLOSE MOBILE MENU AFTER CLICK
================================================== */

document
    .querySelectorAll("#navMenu a")
    .forEach(function(link) {

        link.addEventListener(
            "click",
            function() {

                document
                    .getElementById("navMenu")
                    .classList
                    .remove("active");

            }
        );

    });



/* ==================================================
   CLOSE MENU WHEN CLICKING OUTSIDE
================================================== */

document.addEventListener(
    "click",
    function(event) {

        const navMenu =
            document.getElementById("navMenu");

        const menuButton =
            document.querySelector(".menu-button");


        if (
            navMenu.classList.contains("active") &&
            !navMenu.contains(event.target) &&
            !menuButton.contains(event.target)
        ) {

            navMenu.classList.remove("active");

        }

    }
);
