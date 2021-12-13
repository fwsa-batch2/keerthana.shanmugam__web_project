let userList = [];

function onPageLoad() {
    let users = JSON.parse(localStorage.getItem("Fan_Details"));
    if (users != null) {
        userList = users;
    }
}
onPageLoad();

function mySignIn() {

    event.preventDefault();

    let name = document.getElementById("firstName").value;
    let password = document.getElementById("password").value;
    let email = document.getElementById("emailId").value;
    let dob = document.getElementById("dateOfBirth").value;
    let gender = document.getElementById("gender").value;
    let country = document.getElementById("countryName").value;

    const armyDetails = {
        "firstname": name,
        "password": password,
        "email": email,
        "dob": dob,
        "gender": gender,
        "country": country
    }

    const isEmailAlreadyExists = emailValidation(email);


    if (isEmailAlreadyExists) {
        alert('Email Already Exists');
        return;
    }

    let mismatch = checkpassword()

    if (mismatch) {
        userList.push(armyDetails);
        let details = JSON.stringify(userList);
        localStorage.setItem("Fan_Details", details);
        window.location.href = "login.html"
    }
    else {
        alert("password is not matched");

    }
}

function emailValidation(current_mail) {

    let thisMailExists = false;
    // let userList = JSON.parse(localStorage.getItem("Fan_Details"));

    for (i = 0; i < userList.length; i++) {
        const user = userList[i];
        const email = user.mail;

        if (current_mail == email) {
            thisMailExists = true;
            break;
        }
    }

    return thisMailExists;
}

function checkpassword() {
    let pass1 = document.getElementById("password").value;
    let pass2 = document.getElementById("confirmPassword").value;

    if (pass1 == pass2) {
        console.log("password matched");

        return true;
    }
    else {
        console.log("password does not matched");
        //  alert("password does not matched");
        return false;
    }
}


