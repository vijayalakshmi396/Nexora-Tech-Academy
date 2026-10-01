// =========================================
// NEXORA TECH ACADEMY - COURSES JAVASCRIPT
// =========================================

document.addEventListener("DOMContentLoaded", function () {

    // Course buttons
    const courseButtons =
        document.querySelectorAll(".course-select-btn");


    courseButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const course =
                button.getAttribute("data-course");

            if (!course) {
                return;
            }


            // Store selected course
            localStorage.setItem(
                "selectedCourse",
                course
            );


            // Go to contact page
            window.location.href =
                "contact.html";

        });

    });


    // Display selected course on contact page
    const selectedCourseElement =
        document.getElementById(
            "selectedCourse"
        );


    if (selectedCourseElement) {

        const selectedCourse =
            localStorage.getItem(
                "selectedCourse"
            );


        if (selectedCourse) {

            selectedCourseElement.value =
                selectedCourse;

        }

    }

});