const login = document.getElementById("loginBtn")
const dialog=document.getElementById("loginDialog")
const close = document.getElementById("closeBtn")

login.onclick = function(){
    dialog.showModal();
}

close.onclick = function(){
    dialog.close();
}
dialog.onclick=function(event){
    const react=dialog.getBoundingClientRect();
    console.log("dialog",react.top,react.bottom,react.left,react.right,react.width,react.height)
    console.log("mouse",event.x,event.y)
    if(event.x<react.left | event.x>react.right | event.y>react.top | event.y<react.bottom ){
        dialog.close();
    }
}


















//const modal=document.getElementById("modalBtn")