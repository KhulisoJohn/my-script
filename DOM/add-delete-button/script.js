const input = document.createElement("input");

        input.type = "text";
        input.placeholder = "type in your name";

        input.classList.add("inputClass"); //add class to input
        document.body.appendChild(input); // add input child to parent body

        const button = document.createElement("button"); //create a button
        button.innerText = "Add your name"; //add value of the button
        document.body.appendChild(button); //add button to body
        
        
button.addEventListener("click", () => {
   const paragraph = document.createElement("p"); // create p element
   const inputElement = document.querySelector(".inputClass"); //get the value from input and store it to variable

   if(inputElement.value.length > 0){
      paragraph.innerText = inputElement.value
      document.body.appendChild(paragraph);
     inputElement.value = "";
   }

});

const deleteButton = document.createElement("button");
deleteButton.innerHTML = "Delete latest name";
document.body.appendChild(deleteButton);


deleteButton.addEventListener("click", () => {
    const paragraphs = document.querySelectorAll(".inputClass"); 
   
});


  