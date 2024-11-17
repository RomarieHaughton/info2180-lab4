document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("search-butn");
  
    button.addEventListener("click", () => {
      //create a new XMLHttpRequest 
      const xhr = new XMLHttpRequest();
  
      //configure request to GET data from superheroes.php
      xhr.open("GET", "superheroes.php", true);
  
      //handle response
      xhr.onload = () => {
        if (xhr.status === 200) {
          //display response in an alert box
          alert(xhr.responseText);
        } else {
          console.error("Error fetching data");
        }
      };
  
      //sendrequest
      xhr.send();
    });
  });