// =========================================
// NEXORA TECH ACADEMY - MAIN JAVASCRIPT
// =========================================

document.addEventListener("DOMContentLoaded", function () {

    // =========================================
    // MOBILE MENU
    // =========================================

    const mobileMenuBtn = document.getElementById("mobileMenuBtn");
    const navMenu = document.querySelector(".nav-menu");

    if (mobileMenuBtn && navMenu) {

        mobileMenuBtn.addEventListener("click", function () {

            navMenu.classList.toggle("active");

        });

    }


    // =========================================
    // CLOSE MOBILE MENU AFTER CLICKING A LINK
    // =========================================

    const navLinks = document.querySelectorAll(".nav-menu a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            if (navMenu) {

                navMenu.classList.remove("active");

            }

        });

    });


    // =========================================
    // ENQUIRY FORM - MONGODB BACKEND
    // =========================================

    const enquiryForm =
        document.getElementById("enquiryForm");

    if (enquiryForm) {

        enquiryForm.addEventListener(
            "submit",
            async function (event) {

                event.preventDefault();


                // =========================================
                // GET FORM FIELDS
                // =========================================

                const nameInput =
                    enquiryForm.querySelector(
                        'input[name="name"]'
                    );

                const phoneInput =
                    enquiryForm.querySelector(
                        'input[name="phone"]'
                    );

                const courseInput =
                    enquiryForm.querySelector(
                        'select[name="course"]'
                    );

                const messageInput =
                    enquiryForm.querySelector(
                        'textarea[name="message"]'
                    );


                // =========================================
                // GET VALUES
                // =========================================

                const name =
                    nameInput
                        ? nameInput.value.trim()
                        : "";

                const phone =
                    phoneInput
                        ? phoneInput.value.trim()
                        : "";

                const course =
                    courseInput
                        ? courseInput.value
                        : "";

                const message =
                    messageInput
                        ? messageInput.value.trim()
                        : "";


                // =========================================
                // VALIDATION
                // =========================================

                if (!name) {

                    alert("Please enter your name.");

                    return;

                }


                if (!phone) {

                    alert("Please enter your phone number.");

                    return;

                }


                if (!course) {

                    alert("Please select a course.");

                    return;

                }


                // =========================================
                // SEND DATA TO BACKEND
                // =========================================

                try {

                    const response =
                        await fetch(
                            "http://localhost:5000/api/enquiries",
                            {
                                method: "POST",

                                headers: {
                                    "Content-Type":
                                        "application/json"
                                },

                                body: JSON.stringify({

                                    name: name,

                                    phone: phone,

                                    course: course,

                                    message: message

                                })

                            }
                        );


                    // =========================================
                    // GET BACKEND RESPONSE
                    // =========================================

                    const data =
                        await response.json();


                    // =========================================
                    // SUCCESS
                    // =========================================

                    if (data.success) {

                        alert(
                            "Enquiry submitted successfully!"
                        );

                        enquiryForm.reset();

                    }


                    // =========================================
                    // ERROR FROM BACKEND
                    // =========================================

                    else {

                        alert(
                            data.message ||
                            "Failed to submit enquiry."
                        );

                    }


                }

                // =========================================
                // CONNECTION ERROR
                // =========================================

                catch (error) {

                    console.error(
                        "Enquiry submission error:",
                        error
                    );

                    alert(
                        "Unable to connect to the server. Please make sure the Nexora backend is running."
                    );

                }

            }
        );

    }


    // =========================================
    // SMOOTH SCROLL
    // =========================================

    const internalLinks =
        document.querySelectorAll(
            'a[href^="#"]'
        );

    internalLinks.forEach(function (link) {

        link.addEventListener(
            "click",
            function (event) {

                const targetId =
                    link.getAttribute("href");


                if (
                    targetId &&
                    targetId !== "#"
                ) {

                    const target =
                        document.querySelector(
                            targetId
                        );


                    if (target) {

                        event.preventDefault();


                        target.scrollIntoView({

                            behavior: "smooth"

                        });

                    }

                }

            }
        );

    });


    // =========================================
    // CURRENT YEAR
    // =========================================

    const yearElements =
        document.querySelectorAll(
            ".current-year"
        );

    yearElements.forEach(function (element) {

        element.textContent =
            new Date().getFullYear();

    });

});