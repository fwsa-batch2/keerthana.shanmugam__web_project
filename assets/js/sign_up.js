let userList = [];

function onPageLoad() {
    console.group("onPageLoad")
    const users = JSON.parse(localStorage.getItem("FAN_DETAILS"));
    if (users != null) {
        userList = users;
        console.groupEnd("onPageLoad")
    }
}
onPageLoad();

function mySignUp(event) {
    event.preventDefault()

    //calling id from input fields from the form
    console.group("mySignup")
    const name = document.getElementById("firstName").value;
    const password = document.getElementById("password").value;
    const email = document.getElementById("emailId").value;
    const dob = document.getElementById("dateOfBirth").value;
    const gender = document.getElementById("gender").value;
    const country = document.getElementById("countryName").value;

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
        localStorage.setItem("FAN_DETAILS", details);
        window.location.href = "login.html"
    }
    else {
        alert("password is not matched");
        console.error("password is not matched")
    }
    console.groupEnd("mySignup")
}

//check the email already exist
function emailValidation(current_mail) {
    console.group("emailValidation")
    let thisMailExists = false;

    for (let i of userList) {
        const user = i;
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

//checking the password and confirm password are same
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


