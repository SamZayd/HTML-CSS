//const bcrypt= require("bcryptjs")

function signup(){
    console.log("signup working");
    
    const usern=document.getElementById('username').value;
    const pass=document.getElementById('password').value;
    const re_pass=document.getElementById('re-pass').value;
    const email=document.getElementById('email').value;

    
    if (pass===re_pass){
        console.log("Passord matched");
    }
    else
        console.log("password incorrect");

console.log(usern,pass,re_pass,email);
//console.log(crypt_user);
//let salt = bcrypt.genSaltSync(10);

//let crypt_user = {...user, password:crypt_password, email:crypt_email}

}

function login() {
    console.log("login working");
    //let login =bcrypt.compareSync(user.password,crypt_password)
    const username=document.getElementById('in_user').value;
    const password= document.getElementById('in_pass').value;
    console.log(username,password);
    if (username == "SamZayd" && password== "idontknow"){
        console.log("logged in successfully");
    }
}