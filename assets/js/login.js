function myLogIn(event) {
    event.preventDefault()

    console.group("myLogIn")
    let pwd1 = document.getElementById("mail").value;
    let pwd2 = document.getElementById("pass").value;
    let storeageInarray = JSON.parse(localStorage.getItem("FAN_DETAILS"));

    let loginId = false;
    for (let i of storeageInarray) {
        const userdetail = i;
        const email = userdetail.email;
        const password = userdetail.password;
        console.table(userdetail)

        if (pwd1 === email && pwd2 === password) {
            loginId = true;
            break;
        }
    }
    if (loginId) {
        localStorage.setItem("USER_LOGIN", pwd1)
        window.location.href = "new releases.html"
    }
    else {
        console.error('password or email not-matched')
        alert("Ivalid Email_Id or Password")
        console.groupEnd("myLogIn")
        return null;
    }
}

