function submitForm() {
    // Formdaki değerleri al
    var name = document.getElementById("nameInput").value;
    var surname = document.getElementById("surnameInput").value;
    var email = document.getElementById("emailInput").value;
    var phone = document.getElementById("phoneInput").value;
    var message = document.getElementById("messageInput").value;

     // Zorunlu alanları kontrol et
     if (!nameInput.checkValidity() || !surnameInput.checkValidity() || !emailInput.checkValidity() || !phoneInput.checkValidity() || !messageInput.checkValidity()) {
        alert('Please fill in all required fields.');
        return;
    }

    // Bildirim göster
    alert("Your comment has been received. Thank you!");
}

