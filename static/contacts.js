const username = document.getElementsByName("name");
const email = document.getElementsByName("email");
const message = document.getElementsByName("message");
const submit = document.getElementsByClassName("contact__form")[0];

submit.addEventListener("submit", (e)=>{
    e.preventDefault();
    console.log("Clicked")

    let ebody = `
    <b>Name: </b>${username.value}
    <br>
    <b>Email: </b>${email.value}
    <br>
    <b>Message: </b>${message.value}
    `
    //Email Code
    Email.send({
        SecureToken : "5464c2b6-4981-4093-8ef9-c6de10d06ff2",
        To : 'georgiev.angelin@gmail.com',
        From : "georgiev.angelin@gmail.com",
        Subject : "Email sent from: " + email.value,
        Body : ebody
    }).then(
      message => alert(message)
    );
})

