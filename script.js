// =============================================
// STEMSPARK WEBSITE JAVASCRIPT
// =============================================


// ---------------------------------------------
// ELEMENTS
// ---------------------------------------------

const header =
    document.querySelector(".site-header");

const navToggle =
    document.querySelector(".nav-toggle");

const navLinks =
    document.querySelector(".nav-links");



// =============================================
// HEADER SCROLL EFFECT
// =============================================

window.addEventListener("scroll", function () {

    if (window.scrollY > 10) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});



// =============================================
// MOBILE MENU
// =============================================

navToggle.addEventListener("click", function () {

    const menuIsOpen =
        navLinks.classList.toggle("open");


    navToggle.setAttribute(
        "aria-expanded",
        menuIsOpen
    );

});



// Close the mobile navigation menu
// when the user selects a link.

document
    .querySelectorAll(".nav-links a")
    .forEach(function (link) {

        link.addEventListener(
            "click",
            function () {

                navLinks.classList.remove(
                    "open"
                );

                navToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }
        );

    });



// =============================================
// SCROLL REVEAL ANIMATION
// =============================================

const revealObserver =
    new IntersectionObserver(

        function (entries) {

            entries.forEach(
                function (entry) {

                    if (entry.isIntersecting) {

                        entry.target
                            .classList
                            .add("visible");


                        revealObserver.unobserve(
                            entry.target
                        );

                    }

                }
            );

        },

        {

            threshold: 0.12

        }

    );



// Observe every element with
// the class "reveal".

document
    .querySelectorAll(".reveal")
    .forEach(

        function (element) {

            revealObserver.observe(
                element
            );

        }

    );



// =============================================
// AUTOMATIC FOOTER YEAR
// =============================================

const yearElement =
    document.getElementById("year");


if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}



// =============================================
// CLOSE MOBILE MENU IF WINDOW GETS LARGER
// =============================================

window.addEventListener(
    "resize",
    function () {

        if (window.innerWidth > 780) {

            navLinks.classList.remove(
                "open"
            );

            navToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        }

    }
);



// =============================================
// IMAGE ERROR HANDLING
// =============================================

// If an image filename is accidentally wrong,
// this prevents the broken-image icon from
// looking too distracting.

document
    .querySelectorAll("img")
    .forEach(

        function (image) {

            image.addEventListener(
                "error",
                function () {

                    console.warn(
                        "STEMSpark image could not be loaded:",
                        image.src
                    );

                }
            );

        }

    );