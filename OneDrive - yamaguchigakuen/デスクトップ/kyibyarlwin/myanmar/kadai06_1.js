const addbtn=document.querySelector("[type=submit]")
addbtn.addEventListener("click",addComment)

const deleteAllbtn=document.querySelector("#deleteAll")
deleteAllbtn.addEventListener("click",()=>{
    const alltr=querySelectorAll("tr")
    alltr.array.forEach(tr =>  tr.remove());
})


function addComment(event){
    event.preventDefault()
    const comment=document.querySelector("[type=text]")
    const tbody = document.querySelector("tbody")

    //console.log("hello world",comment.value)

    const row = document.createElement("tr")
    const col1 = document.createElement("td")
    col1.textContent = comment.value
    const col2 = document.createElement("td")
    const setBtn =  document.createElement("button")
    setBtn.textContent="削除"

    setBtn.addEventListener("click",()=> {
        row.remove()
    })
    comment.value = ""
    col2.appendChild(setBtn)
    row.append(col1,col2)
    tbody.appendChild(row)


}

//console.log("hello")