var textarea=document.querySelector("#textarea")
var translate = document.querySelector("#btn-translate")
var output = document.querySelector("#output")



translate.addEventListener("click", function Eventhandler(){
    output.innerText = textarea.value
})