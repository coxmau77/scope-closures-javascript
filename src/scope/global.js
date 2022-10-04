//Global scope
var user_name = "BITMAU";

console.info(user_name);

function showUserName() {
    console.info(user_name);
}

//Llamada a la función
showUserName();

function showPassword() {
    password = "admin123"; //Global
    console.info(password);
}

//Llamada a la función
showPassword();
console.info(password)