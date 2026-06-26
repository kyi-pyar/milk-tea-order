const login = document.getElementById("loginBtn")
const dialog=document.getElementById("loginDialog")
const close = document.getElementById("closeBtn")

function openLoginDialog(){
    dialog.showModal()
}
function closeLoginDialog(){
    dialog.close()
}
function dialogOutsideClick(event){

    if(dialog===event.target){
        closeLoginDialog()
    }
    //const react=dialog.getBoundingClientRect();
}

login.addEventListener("click",openLoginDialog)
close.addEventListener("click",closeLoginDialog)
dialog.addEventListener("click",dialogOutsideClick)


// kadai05 


//const arr=[1,"hello",2,"Ai",4,"omg"]
//for(let i=0;i<arr.length;i++){
  //  console.log("js with array(" + arr[i]+")")
//}



//for( const num of arr){
//console.log(`js with array ${num},`)
//}


//arr.forEach(num =>{
  //  console.log(`js with array [ ${num} ]`)
// })

// const arr=[{name:"qq",age:21,score:60},1,2,3,4,5,6,7,8,9]
// for (let i=0;i<arr.length;i++){
//     // if(arr[i]%2==1)
//     //     console.log(`odd: ${arr[i]}`)
//     console.log(arr[i].name,arr[i].age)
// }

// for (const num of arr){
//     // if(num%2==1)
//     //     console.log(`odd: ${num}`)
//     console.log(num.name,num.age,num.score)
// }

// arr.forEach(num => {
//     // if(num % 2 ==1)
//     //     console.log(`odd: ${num}`)
// console.log(num.name,num.age,num.score)

// }
// )

// const ele = document.getElementById("addElements")
// const p1=document.createElement("p")
// p1.textContent="hello world"
// const p2=document.createElement("p")
// p2.textContent="this"
// ele.append(p1,p2)
//ele.appendChild(p1,p2)


const arr= [{sub:"java",duration:4},
    {sub:"javascript",duration:5},
    {sub:"mysql",duration:2},
    {sub:"html",duration:1},
    {sub:"css",duration:8},
    {sub:"ip",duration:6},
    {sub:"servlet",duration:7}]
const ele = document.getElementById("addElements")

// for(let i=0;i<arr.length;i++){
//     //console.log(arr[i])   but this is't in tap
//     const p=document.createElement("p")
//     p.textContent=arr[i]
//     if(i%2==1) p.style.backgroundColor='red'
//     ele.append(p)
// }

//the same with under

// arr.forEach(val=> {
//     const p1=document.createElement("p")
//     p1.textContent=val
//     p1.style.color='naviblue'
//     ele.append(p1)
// })

// arr.forEach(val=> {//val=arr[i]
//     const subject=document.createElement("h2")
//     subject.textContent=val.sub
//     subject.style.color='blue'
//     subject.style.backgroundColor='yellow'

//     const dur=document.createElement("div")
//     dur.textContent=`Duration: ${val.duration }month(s)`
//     ele.append(subject,dur)
// }
// )

const hh=document.getElementById("addElementsHTML")
arr.forEach(re =>{
    const div=document.createElement("div")
    div.innerHTML= `hello <h1> ${re.sub} </h1> <span> ${"$".repeat(re.duration)}</span>`
    hh.appendChild(div)
})
