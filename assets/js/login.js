let login = []

function onPageLoad() {
    let storeageInarray = JSON.parse(localStorage.getItem("Fan_Details"));
    if (storeageInarray) {
        login = storeageInarray;
    }
}

function myLogIn() {
    event.preventDefault();

    let pwd1 = document.getElementById("mail").value;
    let pwd2 = document.getElementById("pass").value;

    for (i = 0; i < login.length; i++) {
        const userdetail = login[i];
        const email = userdetail.email;
        const password = userdetail.password;

        if (pwd1 !== email || pwd2 !== password) {
            console.log('password and email not-matched')
            alert("Ivalid Email_Id or Password")
        }
        else {
            window.location.href = "home.html"
        }
    }
}
onPageLoad()
