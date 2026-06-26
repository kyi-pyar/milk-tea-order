const show=document.getElementById("showBtn")
show.onclick=function(){
    console.log("======console.logの場合======")
    const h1 = document.getElementById("title")
    console.log(h1)
    const p = document.getElementById("message")
    console.log(p)
    console.log("======console.dirの場合======")
    console.dir(h1)
    console.dir(p)
    console.log(document.getElementById("title").textContent)
    console.log(document.getElementById("message").textContent)
}
const modal=document.getElementById("modalBtn")
const dialog=document.getElementById("infoDialog")

modal.onclick=function(){
    
    dialog.showModal();
}
const close=document.getElementById("closeBtn")
close.onclick=function(){
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