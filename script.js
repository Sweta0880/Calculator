// const button=document.getElementsByClassName("button")
// console.log(button)
const buttonStore=document.getElementsByClassName("button")
const inputname=document.getElementById("input")
console.log(inputname)
console.log(buttonStore)
function clickonbutton(){
    inputname.value=buttonStore.innerHTML
    return inputname.value
    
}


    


