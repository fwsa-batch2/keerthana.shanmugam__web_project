function myLogIn() {
    event.preventDefault();

    let pwd1 = document.getElementById("mail").value;
    let pwd2 = document.getElementById("pass").value;
    let storeageInarray = JSON.parse(localStorage.getItem("Fan_Details"));
    let login = storeageInarray.length;

    let loginId = false;

    for (i = 0; i < login; i++) {
        const userdetail = storeageInarray[i];
        const email = userdetail.email;
        const password = userdetail.password;

        if (pwd1 === email && pwd2 === password) {
            loginId = true;
            break;
        }
    }
    if (loginId) {
        localStorage.setItem("userlogin", pwd1)
        window.location.href = "home.html"
    }
    else {
        console.log('password and email not-matched')
        alert("Ivalid Email_Id or Password")
        return null;
    }
}

