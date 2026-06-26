const login_gmail=document.getElementById("login_gmail")
const login_pwd = document.querySelector("#login_pwd")
const login = document.getElementById("login_log")
const login_cancel = document.querySelector("#login_cancel")

login.addEventListener("click", logincheck)
function logincheck(event){
    event.preventDefault();
    //console.log("hello")
    if(login_gmail.value==""){
        const login_gmailMsg = document.getElementById("login_gmailMsg")
        login_gmailMsg.textContent="Have to fill data"
        login_gmailMsg.style.color="red"
        return
    }
    else if(login_pwd.value==""){
        const login_pwdMsg = document.getElementById("login_pwdMsg")
        login_pwdMsg.textContent="Have to fill data"
        login_pwdMsg.style.color="red"
        return
    }
    



    console.log(localStorage.getItem("users"))

    //userlist=localStorage.getItem("users")

    userlist=JSON.parse(localStorage.getItem("users"));

    let check=false;

    for(let i=0;i<userlist.length;i++){
        if(userlist[i].ugmail===login_gmail.value & userlist[i].upwd === login_pwd.value){
            check=true;
            break
        }
        
    }
    // if(check==true)console.log("login sucessful")
    //     else console.log("login fail")

    const login_message = document.getElementById("login_message")
    if (check == true){
         login_message.textContent="login successful"
         login_message.style.color="blue"
    }else {
        login_message.textContent="login failed"
        login_message.style.color="red"
    }
}
