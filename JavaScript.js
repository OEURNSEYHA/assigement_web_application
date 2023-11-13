
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


function initMap() {
    // Location coordinates (latitude and longitude)
    const location = { lat: 11.568453, lng: 104.891244 }; // https://www.latlong.net/ (Website find lat &lng)

    // Map options
    const mapOptions = {
        zoom: 14,
        center: location
    };

    // Create a new map
    const map = new google.maps.Map(document.getElementById("map"), mapOptions);

    // Add a marker
    const marker = new google.maps.Marker({
        position: location,
        map: map,
        title: "Marker Title"
    });
}   
initMap();

