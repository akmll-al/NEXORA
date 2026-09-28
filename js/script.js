/* =========================================
   NEXORA JAVASCRIPT
   ========================================= */


/* ================= TOP BUTTON ================= */

const topButton = document.getElementById("topButton");


window.addEventListener("scroll", function () {

    if (!topButton) return;

    if (window.scrollY > 300) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";

    }

});


if (topButton) {

    topButton.addEventListener("click", function () {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}


/* ================= ACTIVE NAVBAR ================= */

const currentPage =
    window.location.pathname
        .split("/")
        .pop() || "index.html";


document
    .querySelectorAll(".nav-link")
    .forEach(function (link) {

        const href = link.getAttribute("href");

        if (href === currentPage) {

            link.classList.add("active");

        } else {

            link.classList.remove("active");

        }

    });


/* ================= DARK / LIGHT MODE ================= */

const themeToggle =
    document.getElementById("themeToggle");


const savedTheme =
    localStorage.getItem("nexora-theme");


if (savedTheme === "light") {

    document.body.classList.add("light");

}


function updateThemeIcon() {

    if (!themeToggle) return;

    if (document.body.classList.contains("light")) {

        themeToggle.textContent = "☾";

    } else {

        themeToggle.textContent = "☀";

    }

}


updateThemeIcon();


if (themeToggle) {

    themeToggle.addEventListener("click", function () {

        document.body.classList.toggle("light");


        const isLight =
            document.body.classList.contains("light");


        localStorage.setItem(

            "nexora-theme",

            isLight ? "light" : "dark"

        );


        updateThemeIcon();

    });

}


/* ================= SCROLL REVEAL ================= */

const revealElements =
    document.querySelectorAll(".reveal");


if ("IntersectionObserver" in window) {

    const observer =
        new IntersectionObserver(

            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("show");

                    }

                });

            },

            {
                threshold: 0.1
            }

        );


    revealElements.forEach(function (element) {

        observer.observe(element);

    });

} else {

    revealElements.forEach(function (element) {

        element.classList.add("show");

    });

}
