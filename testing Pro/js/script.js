"use strict";

const $ = selector =>document.querySelector(selector);

const imageNo=[];
let imagecount=0;
let time = null;
let image=null;




const front_Image =$("#frontImage");


const Slider=function(){
    imagecount=(imagecount+1)%imageNo.length;

    image=imageNo[imagecount];

    frontImage.src=image.src;
    
};


document.addEventListener("DOMContentLoaded",()=>{

    const links =$("#imageLi").querySelectorAll("a");

    for (let link of links){
        image = new Image();

        image.src=link.href;

        imageNo[imageNo.length]=image;
    }


    $("#startbtn").addEventListener('click',()=>{
        Slider();
        time=setInterval(Slider,2000);
        $("#startbtn").disabled=true;
        $("#pausebtn").disabled = false;
    })
    
    
    $("#pausebtn").addEventListener('click',()=>{
      
        clearInterval(time);
        $("#startbtn").disabled=false;
        $("#pausebtn").disabled = true;
    })

    
    Register();
    Reset();
        
    var toastElementList = [].slice.call(document.querySelectorAll(".toast"));
	var toastList = toastElementList.map(function(element){
  		return new bootstrap.Toast(element, {
        	autohide: false
        });
	});


})








function Register(){
    let Email_pattern=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    let postalCode_pattern="^(?!.*[DFIOQU])[A-VXY][0-9][A-Z] ?[0-9][A-Z][0-9]$";
    let current=new Date();
     
    
    let Fname=$("#Fname");
    let Lname=$("#Lname");
    let DOB=$("#DOB");
    let Datte=new Date(DOB.value);
    let email=$("#emailV");
    let Cemail=$("#Cemail");
    let Ccode=$("#Ccode");
    let Street=$("#Street");
    let Pcode=$("#Pcode");
    
    
    let errFname=$("#errFname");
    let errLname=$("#errLname");
    let errDOB=$("#errDOB");
    let errStreet=$("#errStreet");
    let erremail=$("#erremailV");
    let errCemail=$("#errCemail");
    let errCcode=$("#errCcode");
    let errPcode=$("#errPcode");
    

    if(Fname.value==""){
        Fname.style.border="2px solid red";
        Fname.style.boxShadow="0.5px 0.5px 4px red";
        errFname.innerHTML="Enter First name"
    }else{
        errFname.innerHTML="";
        Fname.style.border="2px solid black";
        Fname.style.boxShadow="none";
    }

    if(Lname.value==""){
        Lname.style.border="2px solid red";
        Lname.style.boxShadow="0.5px 0.5px 4px red";
        errLname.innerHTML="Enter Last name"
    }else{
        errLname.innerHTML="";
        Lname.style.border="2px solid black";
        Lname.style.boxShadow="none";
    }

    if(Pcode.value==""){
        Pcode.style.border="2px solid red";
        Pcode.style.boxShadow="0.5px 0.5px 4px red";
        errPcode.innerHTML="Enter Street";
    }else{
        errPcode.innerHTML="";
        Pcode.style.border="2px solid black";
        Pcode.style.boxShadow="none";
    }

    if(Street.value==""){
        Street.style.border="2px solid red";
        Street.style.boxShadow="0.5px 0.5px 4px red";
        errStreet.innerHTML="Select Province Code";
    }else{
        errStreet.innerHTML="";
        Street.style.border="2px solid black";
        Street.style.boxShadow="none";
    }
    if(email.value==""){
        email.style.border="2px solid red";
        email.style.boxShadow="0.5px 0.5px 4px red";
        erremail.innerHTML="Enter email";
    }else{
        if(email.value.match(Email_pattern)){
            erremail.innerHTML="";
            email.style.border="2px solid black";
            email.style.boxShadow="none";
        }else{
            email.style.border="2px solid red";
            email.style.boxShadow="0.5px 0.5px 4px red";
            erremail.innerHTML="Wrong Format";
        }
    }

    if(Cemail.value==""){
        errCemail.innerHTML="Enter email";
        Cemail.style.border="2px solid red";
        Cemail.style.boxShadow="0.5px 0.5px 4px red";
    }else{
        if(email.value==Cemail.value){
            errCemail.innerHTML="";
            Cemail.style.border="2px solid black";
            Cemail.style.boxShadow="none";
        }else{
            Cemail.style.border="2px solid red";
            Cemail.style.boxShadow="0.5px 0.5px 4px red";
            errCemail.innerHTML="email does'nt match";
        }

    
    }
    if(Ccode.value==""){
        errCcode.innerHTML="Enter Postal Code";
        Ccode.style.border="2px solid red";
        Ccode.style.boxShadow="0.5px 0.5px 4px red";

    }else{
        if(Ccode.value.match(postalCode_pattern)){
            errCcode.innerHTML="";
            Ccode.style.border="2px solid black";
            Ccode.style.boxShadow="none";
        }else{
            Ccode.style.border="2px solid red";
            Ccode.style.boxShadow="0.5px 0.5px 4px red";
            errCcode.innerHTML="Enter valid postal code";
        }
    }

    if(DOB.value==""){
        errDOB.innerHTML="Select the date";
        DOB.style.border="2px solid red";
        DOB.style.boxShadow="0.5px 0.5px 4px red";
    }else{

       
        if( Datte<current){
            errDOB.innerHTML="";
            DOB.style.border="2px solid black";
            DOB.style.boxShadow="none"; 
        }else{
            DOB.style.border="2px solid red";
            DOB.style.boxShadow="0.5px 0.5px 4px red";
            errDOB.innerHTML="Select correct date";
        }
    }


    
}

function Reset(){

    let Fname=$("#Fname");
    let Lname=$("#Lname");
    let DOB=$("#DOB");
    let Datte=new Date(DOB.value);
    let email=$("#emailV");
    let Cemail=$("#Cemail");
    let Ccode=$("#Ccode");
    let Street=$("#Street");
    let Pcode=$("#Pcode");

    
    Fname.value="";
    Lname.value="";
    Street.value="";
    email.value="";
    Cemail.value="";
    Ccode.value="";
    DOB.value="";
    Pcode.value="";
}



