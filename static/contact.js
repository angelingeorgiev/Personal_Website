const form = document.querySelector(".contact_form");
  form.addEventListener("submit", e => {
    e.preventDefault();
    let name = document.querySelector(".name").value;
    let email = document.querySelector(".email").value;
  
    


    document.querySelector(".contact_form").reset();

    sendEmail(name, email);
  })
  function sendEmail(name, email){
    Email.send({
        
      Host: "smtp.elasticemail.com", 
      Username: "sudeepdeep340@gmail.com",
      Password: "3485D1722E686EC823D3E6055AE6DC262A33",
      To: "georgiev.angelin@gmail.com",
      From: "sudeepdeep340@gmail.com",
      Subject: `${name} Just messaged you from the website form`,
      Body: `Name: ${name} <br> Email: ${email} <br>`,
    }).then((success) => {
     
      alert("message sent successfully. Please check the spam folder in your mail.");
    }).catch((error) => {
        
      alert("error sending message");
    })
  }