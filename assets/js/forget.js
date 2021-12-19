function submitHandler() {
    event.preventDefault()

    let email = document.getElementById("mail").value;
    let mailId = JSON.parse(localStorage.getItem("Fan_Details"));
    let forget = mailId.length;

    let emailExists = false;

    for (i = 0; i < forget; i++) {
        const mail = mailId[i];
        const current_mail = mail.email;
        if (email == current_mail) {
            emailExists = true;
            break;
        }
    }
    if (emailExists) {
        localStorage.setItem("email_forget", email)
        window.location.href = "./../pages/login.html"
        alert('Your User_mail and Password send to Your email_id successfully');
    }
    else {
        alert("you email not exist kindly sign in")
    }
    return null;
}
