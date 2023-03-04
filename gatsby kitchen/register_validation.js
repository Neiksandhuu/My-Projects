"use strict";

const $ = selector => document.querySelector(selector);
let errorMessages = "";


document.addEventListener("DOMContentLoaded", () => {
    $("#register").addEventListener("click", () => {
        const email = String( $("#email").value );
        const cemail = String( $("#cemail").value );
        const firstname = String( $("#firstname").value);
        const lastname = String( $("#lastname").value);
        const provinceCode = String( $("#provinceCode").value);
        const street = String( $("#street").value);
        const postalcode = String( $("#postalcode").value);
        
        let errorMessages = "";
        let birth =new Date( $("#birth").value);
        let today = new Date();
        today.setHours(0,0,0,0);

        const emailpattern = 
        /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;

        const postalCodePattern = 
        /^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d$/i;

        
        if(email =="")
        {
            errorMessages = " Email Address is must ";
             $("#email").nextElementSibling.innerHTML = errorMessages;
        }	
        else if(!emailPattern.test(email))
        {
            errorMessages = "Insert valid Email Address";
             $("#email").nextElementSibling.innerHTML = errorMessages;
        }
        
        else if(email !="")
        {
            errorMessages = "";
             $("#email").nextElementSibling.innerHTML = errorMessages;
        }
  
        if(cemail != email)
        {
            errorMessages = "Email Address should be Same";
             $("#cemail").nextElementSibling.innerHTML = errorMessages;
        }	
        else if(cemail == email)
        {
            errorMessages = "";
             $("#cemail").nextElementSibling.innerHTML = errorMessages;
        }	
        if(firstname =="")
        {
            errorMessages = "First Name is required";
             $("#firstname").nextElementSibling.innerHTML = errorMessages;
        }
        else if(firstname != "")
        {
        errorMessages = "";
        $("#firstname").nextElementSibling.innerHTML = errorMessages;
        }	
       
        if(lastname =="")
        {
            errorMessages = "Last Name is required";
             $("#lastname").nextElementSibling.innerHTML = errorMessages;
        }	
        else if(lastname !="")
        {
            errorMessages = "";
             $("#lastname").nextElementSibling.innerHTML = errorMessages;
        }
        if(street =="")
        {
            errorMessages = "Street address is required";
             $("#street").nextElementSibling.innerHTML = errorMessages;
        }	
        else if(street !="")
        {
            errorMessages = "";
             $("#street").nextElementSibling.innerHTML = errorMessages;
        }
        if(birth > today)
        {
            errorMessages = "Birth Date must be correct";
            $("#birth").nextElementSibling.innerHTML = errorMessages;
        }
        else if(birth <= today)
        {
            errorMessages = "";
             $("#birth").nextElementSibling.innerHTML = errorMessages;
        }
        
        if(postalcode == "")
        {
            errorMessages = "Province code is required";
            $("#postalCode").nextElementSibling.innerHTML = errorMessages;
        }
        else if(!postalCodePattern.test(postalcode))
        {
            errorMessages = "Insert valid postal code";
             $("#postalCode").nextElementSibling.innerHTML = errorMessages;
        }
        else if(postalcode != "")
        {
            errorMessages = "";
             $("#postalCode").nextElementSibling.innerHTML = errorMessages;
        }
    });
    
});