/* function setMenuType(){ */


    let steakMenu = document.querySelector('.steak');
    let chickenMenu = document.querySelector('.chicken');
    let vegMenu = document.querySelector('.vegetarian');
   
    let meat = prompt("Would you prefer a Chicken, Steak, or Vegetarian entree?");

        if (meat.toLowerCase() === "steak") {
        /* Add code here to make the steak menu appear */
        steakMenu.style.display =  'block';
    }
        else if (meat.toLowerCase() === "chicken") {
        /* Add code here to make the chicken menu appear */
        chickenMenu.style.display =  'block';
    }
        else if(meat.toLowerCase() === "vegetarian") {
        /* Add code here to make the vegetarian menu appear */
        vegMenu.style.display =  'block';
    }
        else {
        /* Add code here to make an error show */
        alert("Please refresh your browser and input a valid response.");
    }
    
