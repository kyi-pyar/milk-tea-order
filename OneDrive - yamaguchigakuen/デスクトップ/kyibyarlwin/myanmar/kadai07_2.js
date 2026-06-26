const addProduct = document.getElementById("openItemDialog")
const dialog=document.getElementById("itemDialog")

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

    // const row = document.createElement("tr")
    // const tdId=document.createElement("td")
    // tdId.textContent=itemId.value
    
    // const tdName = document.createElement("td")
    // tdName.textContent = itemName.value

    // const tdDescription = document.createElement("td")
    // tdDescription.textContent = itemDescription.value

    // const tdPrice = document.createElement("td")
    // tdPrice.textContent = itemPrice.value

    // const tdDel = document.createElement("td")
    // const del = document.createElement("button")
    // del.textContent="削除"
    // del.className="remove"
    // tdDel.appendChild(del)

    // del.addEventListener("click",()=>{
    //     row.remove();
    // })

    // row.append(tdId,tdName,tdDescription,tdPrice,tdDel)
    // itemId.value=""
    // itemName.value=""
    // itemDescription.value=""
    // itemPrice.value=""


    const tbody = document.querySelector("tbody")
    const rowTemplate = document.querySelector("#rowtemplate")
    const newRow = rowTemplate.cloneNode(true)
    newRow.querySelector("#id").textContent=itemId.value
    newRow.querySelector("#name").textContent=itemName.value
    newRow.querySelector("#description").textContent=itemDescription.value
    newRow.querySelector("#price").textContent=itemPrice.value
    const delButton = newRow.querySelector(".remove");
    delButton.addEventListener("click",()=>{
        newRow.remove();
    })

    //const tbody = document.querySelector("tbody")
    //tbody.append(row)
    tbody.append(newRow)
    dialog.close();
    itemId.value=""
    itemName.value=""
    itemDescription.value=""
    itemPrice.value=""

})