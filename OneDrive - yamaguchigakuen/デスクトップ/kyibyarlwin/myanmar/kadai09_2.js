const addProduct = document.getElementById("openItemDialog")
const dialog=document.getElementById("itemDialog")

let itemlist;

addProduct.addEventListener("click",(event) =>{
    event.preventDefault();
    dialog.showModal();
})

const closeBtn = document.querySelector(".material-icons")
closeBtn.addEventListener("click",() =>{
    dialog.close();
})

const addItem = document.querySelector("#addItem")
addItem.addEventListener("click",(event)=>{
    event.preventDefault();
    const itemId = document.querySelector("#itemId")
    const itemName = document.querySelector("#itemName")
    const itemDescription = document.querySelector("#itemDescription")
    const itemPrice = document.querySelector("#itemPrice")
    const item = {id:itemId.value,name:itemName.value,description:itemDescription.value,price:itemPrice.value}
    itemlist.push(item)

    localStorage.setItem("items",JSON.stringify(itemlist))
    renderAddItem(item)
    dialog.close();
    
})

document.addEventListener("DOMContentLoaded",(event)=>{
    event.preventDefault()

    itemlist=JSON.parse(localStorage.getItem("items"))
    if(itemlist == null){
        itemlist=[]
    }
    for (let i = 0; i<itemlist.length;i++){ 
        renderAddItem(itemlist[i])
        
    }
})

function renderAddItem(obj){
    const row = document.createElement("tr")
    const tdId=document.createElement("td")
    tdId.textContent=obj.id
        
    const tdName = document.createElement("td")
    tdName.textContent = obj.name

    const tdDescription = document.createElement("td")
    tdDescription.textContent = obj.description

    const tdPrice = document.createElement("td")
    tdPrice.textContent = obj.price

    const tdDel = document.createElement("td")
    const del = document.createElement("button")
    del.textContent="削除"
    del.className="remove"
    tdDel.appendChild(del)

    del.addEventListener("click",()=>{
    row.remove()
    const newItemList=[];
        
        for(let i=0;i<itemlist.length;i++){
            if(obj.id != itemlist[i].id){
                newItemList.push(itemlist[i])
            }
        }
        localStorage.clear();
        localStorage.setItem("items",JSON.stringify(newItemList))
    })

    

    row.append(tdId,tdName,tdDescription,tdPrice,tdDel)
    // itemId.value=""
    // itemName.value=""
    // itemDescription.value=""
    // itemPrice.value=""
    const tbody = document.querySelector("tbody")
    tbody.append(row)
    return row


}