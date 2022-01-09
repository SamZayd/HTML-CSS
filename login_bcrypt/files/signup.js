const bcrypt= require("bcryptjs")
let user={
    username:"SamZayd",
    password:"idontknow",
    repeat_password:"idont know",
    email:"sadafk2304@gmail.com"
}

let salt = bcrypt.genSaltSync(10);
let crypt_password = bcrypt.hashSync(user.password,salt);
let crypt_email = bcrypt.hashSync(user.email,salt);

let crypt_user = {...user, password:crypt_password, email:crypt_email}
console.log(user);
console.log(crypt_user);

let login =bcrypt.compareSync(user.password,crypt_password)

login? console.log("Successfully Logged In"):console.log("Login Failed");
