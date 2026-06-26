const rating =[
    {star:5,comment:"comment1",age:"30",gender:"male"},
    {star:4,comment:"comment2",age:"20",gender:"female"},
    {star:5,comment:"comment3",age:"40",gender:"housewife"}

]

const forContainer=document.getElementById("voiceFor")
// for(let i=0;i<rating.length;i++){
//      const h4=document.createElement("h4")
//      h4.textContent=`${"☆".repeat(rating[i].star)}`
//      h4.style.color="waterblue"
//      const p =document.createElement('p')
//      p.textContent=rating[i].comment
//      const p1=document.createElement("p")
//      p1.textContent=`(${rating[i].age}age.${rating[i].gender})`
//       p1.className="name"

//       const div=document.createElement("div")
//       div.style.border="solid"
//       div.style.marginTop="3em"
//       div.style.paddingLeft="1em"
//       div.append(h4,p,p1)
//      //forContainer.append(h4,p,p1)
//      forContainer.appendChild(div)
// }

// another method is under

for(let i=0;i<rating.length;i++){
     const div=createRatingElement(rating[i])
     forContainer.appendChild(div)
}

const forOfContainer=document.getElementById("voiceForOf")
// for(const rate of rating){
//     const h4=document.createElement("h4")
//      h4.textContent=`${"☆".repeat(rate.star)}`
//      h4.style.color="waterblue"
//      const p =document.createElement('p')
//      p.textContent=rate.comment
//      const p1=document.createElement("p")
//      p1.textContent=`(${rate.age}age.${rate.gender})`
//       p1.className="name"

//       const div=document.createElement("div")
//       div.style.border="solid"
//       div.style.marginTop="8em"
//       div.style.paddingLeft="5em"
//       div.append(h4,p,p1)
//      //forOfContainer.append(h4,p,p1)
//      forOfContainer.appendChild(div)

// }

// another method is under

for(const rate of rating){
     const div=createRatingElement(rate)
     forOfContainer.appendChild(div)

}


// const forEachContainer=document.getElementById("voiceForEach")
// rating.forEach(rate =>{
//     const h4=document.createElement("h4")
//     h4.textContent=`${"☆".repeat(rate.star)}`
//     h4.style.color='naviblue'
//     const p=document.createElement("p")
//     p.textContent=rate.comment
//     p.style.color='green'
//     const p1=document.createElement("p")
//     p1.textContent=`(${rate.age}age.${rate.gender})`
//     p1.className="name"
//     p1.style.color="orange"

//     const div=document.createElement("div")
//       div.style.border="solid"
//       div.style.marginTop="5em"
//       div.style.paddingLeft="3em"
//       div.append(h4,p,p1)
//     forEachContainer.append(div)
// })

// another method is under

const forEachContainer=document.getElementById("voiceForEach")
rating.forEach(rate =>{
   const div=createRatingElement(rate)
    forEachContainer.append(div)
})

function createRatingElement(rate){
    const h4=document.createElement("h4")
    h4.textContent=`${"☆".repeat(rate.star)}`
    h4.style.color='naviblue'
    const p=document.createElement("p")
    p.textContent=rate.comment
    p.style.color='green'
    const p1=document.createElement("p")
    p1.textContent=`(${rate.age}age.${rate.gender})`
    p1.className="name"
    p1.style.color="orange"

    const div=document.createElement("div")
      div.style.border="solid"
      div.style.marginTop="5em"
      div.style.paddingLeft="3em"
      div.append(h4,p,p1)
      return div


}