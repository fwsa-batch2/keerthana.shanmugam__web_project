function submitHandler(){
    alert('Your Username and Password send to Your email_id successfully');
    }

 function mypassword(){
     event.preventDefault();

     let pass1 = document.getElementById("password").value;
     let pass2 = document.getElementById("confirm password").value;
    
     if (pass1 == pass2){
         console.log("password matched")
         window.location.replace("login.html")
     }
     else {
         console.log("password does not matched");
         alert("password does not matched");
     }
 }