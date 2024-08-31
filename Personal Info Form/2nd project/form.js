const signupbutton = document.querySelector(".signup-button"); 
const signinbutton = document.querySelector(".signin-button"); 
const wrapped1 = document.querySelector(".wrapped-signin");
const wrapped2 = document.querySelector(".wrapped-signup"); 
const thanksmessage = document.querySelector(".thanksmessage"); 

const thankyou = document.querySelector(".thankyou"); 
const buttons = document.querySelectorAll("button"); 
const hide = document.querySelector(".hide"); 


let input = document.querySelectorAll(".input"); 



signupbutton.addEventListener('click',() => {
    wrapped1.classList.toggle('active'); 
    wrapped2.classList.toggle('active'); 
})

signinbutton.addEventListener('click', () =>{ 
    wrapped1.classList.toggle('active'); 
    wrapped2.classList.toggle('active'); 
}) 

buttons.addEventListener('click' , () => { 

}) 



