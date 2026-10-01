// =========================================
// NEXORA TECH ACADEMY - CHATBOT
// =========================================

document.addEventListener("DOMContentLoaded", function () {

    // =========================================
    // CREATE CHATBOT HTML
    // =========================================

    const chatbotHTML = `
        <div class="nexora-chatbot">

            <button
                class="chatbot-toggle"
                id="chatbotToggle"
                aria-label="Open chatbot">
                💬
            </button>

            <div class="chatbot-window" id="chatbotWindow">

                <div class="chatbot-header">
                    <div>
                        <strong>Nexora Assistant</strong>
                        <span>Online</span>
                    </div>

                    <button
                        class="chatbot-close"
                        id="chatbotClose">
                        ×
                    </button>
                </div>

                <div
                    class="chatbot-messages"
                    id="chatbotMessages">

                    <div class="bot-message">
                        Hello! 👋 Welcome to Nexora Tech Academy.
                        How can I help you?
                    </div>

                </div>

                <div class="chatbot-suggestions">

                    <button data-question="What courses do you offer?">
                        Courses
                    </button>

                    <button data-question="How can I enroll?">
                        Enrollment
                    </button>

                    <button data-question="How can I contact you?">
                        Contact
                    </button>

                </div>

                <div class="chatbot-input-area">

                    <input
                        type="text"
                        id="chatbotInput"
                        placeholder="Type your message..."
                        autocomplete="off">

                    <button
                        id="chatbotSend"
                        aria-label="Send message">
                        ➤
                    </button>

                </div>

            </div>

        </div>
    `;


    // Add chatbot to page

    document.body.insertAdjacentHTML(
        "beforeend",
        chatbotHTML
    );


    // =========================================
    // ELEMENTS
    // =========================================

    const chatbotToggle =
        document.getElementById("chatbotToggle");

    const chatbotWindow =
        document.getElementById("chatbotWindow");

    const chatbotClose =
        document.getElementById("chatbotClose");

    const chatbotInput =
        document.getElementById("chatbotInput");

    const chatbotSend =
        document.getElementById("chatbotSend");

    const chatbotMessages =
        document.getElementById("chatbotMessages");

    const suggestionButtons =
        document.querySelectorAll(
            ".chatbot-suggestions button"
        );


    // =========================================
    // OPEN CHATBOT
    // =========================================

    chatbotToggle.addEventListener(
        "click",
        function () {

            chatbotWindow.classList.add("active");

            chatbotInput.focus();

        }
    );


    // =========================================
    // CLOSE CHATBOT
    // =========================================

    chatbotClose.addEventListener(
        "click",
        function () {

            chatbotWindow.classList.remove("active");

        }
    );


    // =========================================
    // ADD USER MESSAGE
    // =========================================

    function addUserMessage(message) {

        const messageElement =
            document.createElement("div");

        messageElement.className =
            "user-message";

        messageElement.textContent =
            message;

        chatbotMessages.appendChild(
            messageElement
        );

        scrollToBottom();
    }


    // =========================================
    // ADD BOT MESSAGE
    // =========================================

    function addBotMessage(message) {

        const messageElement =
            document.createElement("div");

        messageElement.className =
            "bot-message";

        messageElement.textContent =
            message;

        chatbotMessages.appendChild(
            messageElement
        );

        scrollToBottom();
    }


    // =========================================
    // SCROLL TO BOTTOM
    // =========================================

    function scrollToBottom() {

        chatbotMessages.scrollTop =
            chatbotMessages.scrollHeight;

    }


    // =========================================
    // BOT RESPONSES
    // =========================================

    function getBotResponse(message) {

        const text =
            message.toLowerCase().trim();


        // Greeting

        if (
            text.includes("hello") ||
            text.includes("hi") ||
            text.includes("hey")
        ) {

            return "Hello! 👋 Welcome to Nexora Tech Academy. How can I help you?";

        }


        // Courses

        if (
            text.includes("course") ||
            text.includes("courses") ||
            text.includes("training")
        ) {

            return "We offer technology training programs including Full Stack Development, Python, Java, Data Science and other career-focused courses.";

        }


        // Full Stack

        if (
            text.includes("full stack") ||
            text.includes("fullstack")
        ) {

            return "Our Full Stack Development training focuses on frontend, backend, databases and practical web development.";

        }


        // Python

        if (
            text.includes("python")
        ) {

            return "Our Python training covers Python programming and practical development concepts.";

        }


        // Java

        if (
            text.includes("java")
        ) {

            return "Our Java training focuses on Java programming and application development.";

        }


        // Enrollment

        if (
            text.includes("enroll") ||
            text.includes("enrollment") ||
            text.includes("join") ||
            text.includes("admission")
        ) {

            return "To enroll, submit the enquiry form on our website. Our team can then contact you with the course details.";

        }


        // Contact

        if (
            text.includes("contact") ||
            text.includes("phone") ||
            text.includes("call")
        ) {

            return "Please use the Contact page enquiry form and provide your phone number. Our team can contact you.";

        }


        // Location

        if (
            text.includes("location") ||
            text.includes("address") ||
            text.includes("where")
        ) {

            return "Please contact Nexora Tech Academy through the enquiry form for the latest location and address information.";

        }


        // Fees

        if (
            text.includes("fee") ||
            text.includes("fees") ||
            text.includes("price") ||
            text.includes("cost")
        ) {

            return "Course fees can vary by program. Please submit an enquiry through the website for current fee details.";

        }


        // Timings

        if (
            text.includes("timing") ||
            text.includes("timings") ||
            text.includes("time")
        ) {

            return "Please contact our academy through the enquiry form for the current class timings.";

        }


        // Thank you

        if (
            text.includes("thank") ||
            text.includes("thanks")
        ) {

            return "You're welcome! 😊 Let me know if you have any other questions.";

        }


        // Default response

        return "I'm here to help with Nexora Tech Academy courses, enrollment, contact details and general information. Please ask me a question or use the options above.";

    }


    // =========================================
    // SEND MESSAGE
    // =========================================

    function sendMessage() {

        const message =
            chatbotInput.value.trim();


        if (!message) {

            return;

        }


        // Show user message

        addUserMessage(message);


        // Clear input

        chatbotInput.value = "";


        // Generate response

        setTimeout(function () {

            const response =
                getBotResponse(message);

            addBotMessage(response);

        }, 500);

    }


    // =========================================
    // SEND BUTTON
    // =========================================

    chatbotSend.addEventListener(
        "click",
        sendMessage
    );


    // =========================================
    // ENTER KEY
    // =========================================

    chatbotInput.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Enter") {

                event.preventDefault();

                sendMessage();

            }

        }
    );


    // =========================================
    // SUGGESTION BUTTONS
    // =========================================

    suggestionButtons.forEach(
        function (button) {

            button.addEventListener(
                "click",
                function () {

                    const question =
                        button.getAttribute(
                            "data-question"
                        );

                    chatbotInput.value =
                        question;

                    sendMessage();

                }
            );

        }
    );

});