const form = document.querySelector("#regForm");
form.addEventListener("submit", (e) =>{
    e.preventDefault();
   const firstName = document.getElementById("firstName");
   const lastNane = document.getElementById("lastName").value;
   const email = document.getElementById("email").value;

   //console.log(firstName, lastNane, email);

   if(firstName.value.length == 0 || firstName.value.length > 15){
    validationMessege.innerText = "invalid first name, please try again";
   }
});



//key checking

