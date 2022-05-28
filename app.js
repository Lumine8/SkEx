let password = document.querySelector("#password");
var submitbtn = document.querySelector("#submit")
let errormsg = document.querySelector("#errormsg")

submitbtn.addEventListener("click",function addEventListener(){
    if (password.value === "password"){
        location = "/mainpage.html"
        
    }
    else{
        errormsg.innerHTML="Please Enter The Right Password"
    }
})