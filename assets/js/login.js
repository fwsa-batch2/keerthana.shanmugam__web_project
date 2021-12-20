function myLogIn(event) {
    event.preventDefault()
     
    console.group("myLogIn")
    let pwd1 = document.getElementById("mail").value;
    let pwd2 = document.getElementById("pass").value;
    let storeageInarray = JSON.parse(localStorage.getItem("Fan_Details"));

    let loginId = false;
    
    const i = 1
    for (let j = 0; j < storeageInarray.length; j++) {
        const userdetail = storeageInarray[j];
        const email = userdetail.email;
        const password = userdetail.password;
        console.table(userdetail)   

        if (pwd1 === email && pwd2 === password) {
            loginId = true;
            break;
        }
    }
    if (loginId) {
        localStorage.setItem("userlogin", pwd1)
        window.location.href = "new releases.html"
    }
    else {
        console.error('password or email not-matched')
        alert("Ivalid Email_Id or Password")
        console.groupEnd("myLogIn")
        return null;
    }
}

