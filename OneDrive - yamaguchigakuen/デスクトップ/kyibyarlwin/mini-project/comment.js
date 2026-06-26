const register=document.querySelector("#Register")
const cancel=document.getElementById("cancel")
const username=document.querySelector("#name")
const gmail=document.getElementById("gmail")
const password=document.querySelector("#password")
const confirm=document.getElementById("confirm")
const userlist=[];

function UserRegister(event){
    event.preventDefault();
    if(username.value==="" | gmail.value==="" | password.value===""| confirm.value===""){
        alert("have to fill all data")
        return
    }

    if(password.value!=confirm.value){
        alert("is not same")
        return
    }

    userlist.push({uname:username.value,ugmail:gmail.value,upwd:password.value})
    localStorage.setItem("users", JSON.stringify(userlist))
    console.log(userlist)
}

register.addEventListener("click",UserRegister)

