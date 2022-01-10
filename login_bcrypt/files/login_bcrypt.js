//const bcrypt= require("bcryptjs")

function signup(){
    console.log("signup working");
    
    var usern=document.getElementById("username").value;
    var pass=document.getElementById("password").value;
    var re_pass=document.getElementById("re-pass").value;
    var email=document.getElementById("email").value;
    if (pass=re_pass){
        console.log("Passord matched");
    }
    else
        console.log("password incorrect");  
    
    
    let user={
        username:usern,
        password:pass,
        email_id:email
    }

console.log(user);
//console.log(crypt_user);
//let salt = bcrypt.genSaltSync(10);

//let crypt_user = {...user, password:crypt_password, email:crypt_email}

}

function login() {
    console.log("login working");
    //let login =bcrypt.compareSync(user.password,crypt_password)
    let username=document.getElementById('in_user').innerHTML;
    let password= document.getElementById('in_pass').innerHTML;
    if (username & password == "SamZayd" & "idontknow"){
        console.log("logged in successfully");
    }
}