function submitHandler() {
    event.preventDefault();

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


// another method


// let forget = []

// function onPageLoad(){
//     let mailId = JSON.parse(localStorage.getItem("Fan_Details"));
//     if(mailId != null){
//         forget = mailId
//     }
// }
// onPageLoad()

// function submitHandler() {
//     event.preventDefault();

//     let email = document.getElementById("mail").value;

//     let emailDetails = {
//         "user_email": email
//     }
//     const thisEmailAlreadyExists = emailValidation(email)

//     if (thisEmailAlreadyExists) {
//         forget.push(emailDetails);
//         localStorage.setItem("email_forget",email)
//         window.location.href = "./../pages/login.html"
//         alert('Your User_mail and Password send to Your email_id successfully');
//     }
//     else {
//         alert("you email not exist kindly sign in")
//     }
// }
// function emailValidation(current_mail) {

//     let emailExists = false;
//     for (i = 0; i < forget.length; i++) {
//         let user = forget[i];
//         let email = user.email;

//         if(current_mail == email){
//              emailExists = true;
//              break;  
//         }
//     }
//     return emailExists;
// }

