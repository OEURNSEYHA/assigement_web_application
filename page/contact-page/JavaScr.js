function sendEmail() {
    emailjs.send("service_76oed9k", "template_avmqjon", {
        to_email: 'messimissronaldo@gmail.com', // Recipient's email address
        from_name: document.getElementById("fname").value, // Get the sender's name from the input field
        message: document.getElementById("message").value // Get the message from the input field
    })
    .then(function(response) {
        console.log("Email sent:", response);
        alert("Email sent successfully");
    }, function(error) {
        console.error("Email not sent:", error);
        alert("Email sending failed");
    });
}
sendEmail();    
