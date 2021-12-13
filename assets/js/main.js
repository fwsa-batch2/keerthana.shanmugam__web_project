//forget page javascript
function submitHandler() {
    alert('Your User_mail and Password send to Your email_id successfully');
}

//sign In page javascript
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
    let pass = document.getElementById("password").value;
    let email = document.getElementById("emailId").value;
    let dob = document.getElementById("dateOfBirth").value;
    let gender = document.getElementById("gender").value;
    let country = document.getElementById("countryName").value;

    const armyDetails = {
        "firstname": name,
        "password": pass,
        "mail": email,
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
    let pass1 = document.getElementById("password").value.trim();
    let pass2 = document.getElementById("confirmPassword").value.trim();

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


//login page javascript
let login = []

function myLogIn() {
    event.preventDefault();

    let pwd1 = document.getElementById("mail").value.trim();
    let pwd2 = document.getElementById("pass").value.trim();
    let login = false;

    let terms = localStorage.getItem("lodin_Details");
    let storeageInarray = JSON.parse(terms);
    let array = storeageInarray;

    for (i = 0; i < array; i++) {
        if (storeageInarray[i].mail == pwd1 && storeageInarray[i].password == pwd2) {
            console.log('password and email matched')
            login = true;
            break;
        }
    }
    if (login) {
        window.location.href = "home.html"

    }
    else {
        alert("Ivalid Email_Id or Password")
    }
}






