function greeting() {
    let userName = "MAU";
    console.log(userName);

    if (userName === "MAU") {
        console.info(`Hello ${userName}`);
    }
}

greeting();

console.info(userName); //ReferenceError: userName is not defined