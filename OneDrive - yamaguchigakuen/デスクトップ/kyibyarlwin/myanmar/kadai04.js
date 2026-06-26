function showfeedback(event){
    console.log("hello world")
const name = document.getElementById("userName")
const cmt = document.getElementById("userComment")
const result = document.getElementById("result")

result.textContent = name.value + " " + cmt.value
event.preventDefault()

name.value=" "
cmt.value=" "
}

const form =document.getElementById("feedbackForm")
form.addEventListener("submit", showfeedback)