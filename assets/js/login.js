function myLogIn(event) {
    event.preventDefault()

    console.group("myLogIn")
    const emailOfTHeUsers = document.getElementById("mail").value;
    const PasswordOfTheUsers = document.getElementById("pass").value;
    const storeageInarray = JSON.parse(localStorage.getItem("FAN_DETAILS"));

    let loginId = false;
    for (let i of storeageInarray) {
        let userdetail = i;
        let email = userdetail.email;
        let password = userdetail.password;
        console.table(userdetail)

        if (emailOfTHeUsers === email && PasswordOfTheUsers === password) {
            loginId = true;
            break;
        }
    }
    if (loginId) {
        localStorage.setItem("USER_LOGIN", emailOfTHeUsers)
        window.location.href = "newreleases.html"
    }
    else {
        console.error('password or email not-matched')
        alert("Ivalid Email_Id or Password")
        console.groupEnd("myLogIn")
        return null;
    }
}

