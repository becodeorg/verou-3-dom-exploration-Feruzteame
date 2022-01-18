window.addEventListener('keyup', function firstName(){
    const firstName = document.getElementById("firstname").value
    const container = document.getElementById("display-firstname")
    container.innerHTML  = firstName
})

window.addEventListener('keyup', function lastName(){
    const age = document.getElementById("age").value
    const content = document.getElementById("a-hard-truth")
   if(age >= 18 ){
    content.style.visibility = "visible"
     
   }else{
    content.style.visibility = "hidden"
   }
})


window.addEventListener('keyup', function pwdConfirm(){
    const pwd = document.getElementById("pwd").value
    const pwdLength = pwd.length
    const pwdConfirm = document.getElementById("pwd-confirm").value
   if( pwdLength <= 6 && pwd != pwdConfirm){
     alert("Sorry ! your pwd must be 6 character and make sure pwdConfirm is the same as pwd. ")
   }
})

window.addEventListener('change', function changeBg(){
    const select = document.getElementById("toggle-darkmode")
const optionMode = select.value
console.log(optionMode)
   if(optionMode === "light"){
     document.body.style.background = "white"
     document.body.style.color = "black"
   }else{
    document.body.style.background = "black"
    document.body.style.color = "white"
   }
})

















