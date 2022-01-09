//const bcrypt= require("bcryptjs")
function signup(){
    console.log("signup working");
    
    let usern=document.getElementById('username').innerHTML;
    let pass=document.getElementById('password').innerHTML;
    let re_pass=document.getElementById('re-password').innerHTML;
    let email=document.getElementById('email').innerHTML;
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

    login? console.log("Successfully Logged In"):console.log("Login Failed");    
}
login()