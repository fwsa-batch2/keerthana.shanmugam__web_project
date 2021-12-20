let userList = [];

function onPageLoad() {
    console.group("onPageLoad")
    let users = JSON.parse(localStorage.getItem("Fan_Details"));
    if (users != null) {
        userList = users;
        console.groupEnd("onPageLoad")
    }
}
onPageLoad();

function mySignIn(event) {
event.preventDefault()

    console.group("mySignIn")
    let name = document.getElementById("firstName").value;
    let password = document.getElementById("password").value;
    let email = document.getElementById("emailId").value;
    let dob = document.getElementById("dateOfBirth").value;
    let gender = document.getElementById("gender").value;
    let country = document.getElementById("countryName").value;

    const armyDetails = {
        "name": name,
        "password": password,
        "email": email,
        "dob": dob,
        "gender": gender,
        "country": country
    }
    console.table(userList)
    const isEmailAlreadyExists = emailValidation(email);


    if (isEmailAlreadyExists) {
        alert('Email Already Exists');
        console.error('Email Already Exists')
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
        console.error("password is not matched")
    }
    console.groupEnd("mySignIn")
}

function emailValidation(current_mail) {
    console.group("emailValidation")
    let thisMailExists = false;
    
    const i = 1
    for (let j = 0; j < userList.length; j++) {
        const user = userList[j];
        const email = user.email;
        console.log(user)
        if (current_mail == email) {
            thisMailExists = true;
            break;
        }
    }
    console.groupEnd("emailValidation")
    return thisMailExists;
}

function checkpassword() {
    console.group("checkpassword")
    let pass1 = document.getElementById("password").value;
    let pass2 = document.getElementById("confirmPassword").value;

    if (pass1 == pass2) {
        console.log("password matched");

        return true;
    }
    else {
        console.error("password does not matched");
        console.groupEnd("checkpassword")
        return false;
    }
}


