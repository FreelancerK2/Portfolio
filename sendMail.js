// Initialize EmailJS with your public user ID
(function () {
    emailjs.init("t0a10FVxBm67NgI4L"); // Replace with your actual public key
})();

/**
 * Send mail using EmailJS when form is submitted
 */
function sendMail(event) {
    event.preventDefault(); // Stop default form submission

    emailjs.sendForm('service_l634nql', 'template_i16zyck', document.getElementById('contact-form'))
        .then(function () {
             alert("✅ Message sent successfully!");
            document.getElementById('contact-form').reset(); // Optional: reset form
        }, function (error) {
            alert("❌ Failed to send message:\n" + JSON.stringify(error));
        });
}

// Attach handler to the form
document.getElementById('contact-form').addEventListener('submit', sendMail);
