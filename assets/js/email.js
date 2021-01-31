function sendMail(contactForm) {
    emailjs.send("service_hgfgk8a", "discover-malta", {
        "from_name": contactForm.firstname.value,
        "lastname": contactForm.lastname.value,
        "from_email": contactForm.email.value,
        "phone": contactForm.phone.value,
        "from": contactForm.from.value,
        "to": contactForm.to.value,
        "message": contactForm.message.value
    })
    .then(
        function(response) {
            alert("Your email has been sent, we will be in touch as soon as possible");
            window.location.reload(true);
        },
        function(error) {
            alert("Your email was not sent, please try again");
            window.location.reload(true);
        }
    );
    return false;  // To block from loading a new page
}