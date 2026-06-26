const  save = document.querySelector("[type=submit]")
save.addEventListener("click",(event) =>{
    event.preventDefault();
    //console.log("hello")

    sessionStorage.setItem("user_name",document.getElementById("user_name").value)
    sessionStorage.setItem("author_name",document.getElementById("author_name").value)
    sessionStorage.setItem("product_url",document.getElementById("product_url").value)
    sessionStorage.setItem("video_url",document.getElementById("video_url").value)
    sessionStorage.setItem("product_category",document.getElementById("product_category").value)
    sessionStorage.setItem("description",document.getElementById("description").value)
})

document.addEventListener("DOMContentLoaded",(event)=>{
    event.preventDefault();   
    //console.log("hello after reload")
    document.getElementById("user_name").value=sessionStorage.getItem("user_name")
    document.getElementById("author_name").value=sessionStorage.getItem("author_name")
    document.getElementById("product_url").value=sessionStorage.getItem("product_url")
    document.getElementById("video_url").value=sessionStorage.getItem("video_url")
    document.getElementById("product_category").value=sessionStorage.getItem("product_category")
    document.getElementById("description").value=sessionStorage.getItem("description")

})