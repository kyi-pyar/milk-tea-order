const addbtn=document.querySelector("[type=submit]")
addbtn.addEventListener("click",addComment)

let commentlist;


// const deleteAllbtn=document.querySelector("#deleteAll")
// deleteAllbtn.addEventListener("click",()=>{
//     const alltr=querySelectorAll("tr")
//     alltr.array.forEach(tr =>  tr.remove());
// })


function addComment(event){
    event.preventDefault()
    
    const comment=document.querySelector("[type=text]")
   
    let obj={cmt:comment.value};
    commentlist.push(obj)
    localStorage.setItem("comments",JSON.stringify(commentlist));

    const tbody = document.querySelector("tbody")

    // To have beautiful code ,make function


    // const row = document.createElement("tr")
    // const col1 = document.createElement("td")
    // col1.textContent = comment.value
    // const col2 = document.createElement("td")
    // const setBtn =  document.createElement("button")
    // setBtn.textContent="削除"

    // setBtn.addEventListener("click",()=> {
    //     row.remove()
    // })
    // comment.value = ""
    // col2.appendChild(setBtn)
    // row.append(col1,col2)
    const row = renderCommentRow(obj)
    comment.value = ""
    tbody.appendChild(row)

}
document.addEventListener("DOMContentLoaded",(event)=>{
    event.preventDefault();
    //console.log(localStorage.getItem("comments"))
    if(localStorage.getItem("comments")){
        commentlist = JSON.parse(localStorage.getItem("comments"))
    }else{
        commentlist=[]
    }
    
    const tbody = document.querySelector("tbody")
    for(let i=0;i<commentlist.length;i++){
        // const row = document.createElement("tr")
        // const col1 = document.createElement("td")
        // col1.textContent = commentlist[i].cmt
        // const col2 = document.createElement("td")
        // const setBtn =  document.createElement("button")
        // setBtn.textContent="削除"

        // setBtn.addEventListener("click",()=> {
        //     row.remove()
        // })
        // col2.appendChild(setBtn)
        // row.append(col1,col2)

        const row = renderCommentRow(commentlist[i])
        tbody.appendChild(row)
    }
    
})

function renderCommentRow(obj){
    const row = document.createElement("tr")
    const col1 = document.createElement("td")
    col1.textContent = obj.cmt
    const col2 = document.createElement("td")
    const setBtn =  document.createElement("button")
    setBtn.textContent="削除"

    setBtn.addEventListener("click",()=> {
        row.remove()
        const newCmtList=[];
        
        for(let i=0;i<commentlist.length;i++){
            if(obj.cmt != commentlist[i].cmt){
                newCmtList.push({cmt:commentlist[i].cmt})
            }
        }
        localStorage.clear();
        localStorage.setItem("comments",JSON.stringify(newCmtList))
    })
    
    col2.appendChild(setBtn)
    row.append(col1,col2)
    return row
}