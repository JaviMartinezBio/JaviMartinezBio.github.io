window.onload = function() {
    emailjs.init('H-iCfp7r8XMUtL5XB');
};



function SendMail(event) {
    event.preventDefault();
    var params = {
        "from_name": document.getElementById("name").value,
        "from_email": document.getElementById("email").value,
        "message": document.getElementById("message").value,
        "subject": document.getElementById("subject").value
    }
    emailjs.send('service_7a9r7pe', 'template_tpllcpg', params)
        .then(function(response) {
            document.getElementById("form__button").style.backgroundColor = "#4CAF50";
            document.getElementById("myForm").reset();
        }, function(error) {
            document.getElementById("form__button").style.backgroundColor = "#f44336";
        });
}