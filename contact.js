function sendMail() {
    event.preventDefault();
    
    var params = {
        from_name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        message: document.getElementById("message").value,
    };

    const serviceID = "service_omwwk4r";
    const templateID = "template_tw97fg3";

    emailjs.send(serviceID, templateID, params)
        .then(
            res => {
                document.getElementById("name").value = "";
                document.getElementById("email").value = "";
                document.getElementById("phone").value = "";
                document.getElementById("message").value = "";
                console.log(res);
                alert("Message sent successfully");
            })

        .catch((err) => console.log(err));
}
