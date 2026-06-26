const reviews =[
    {stars:5,text:"文字列",name:"文字列"},
    {stars:4,text:"文字列1",name:"文字列1"},
    {stars:5,text:"文字列2",name:"文字列2"}

]
function renderReview(){
    const voiceFor=document.getElementById("voiceFor")
    for (let i=0;i<reviews.length;i++){
        const div= createReviewElement(reviews[i])
        voiceFor.appendChild(div)
    }
    const voiceForOf=document.getElementById("voiceForOf")
    for(const review of reviews){
        const div=createReviewElement(review)
        voiceForOf.appendChild(div)
    }
    const forEachContainer=document.getElementById("voiceForEach")
        reviews.forEach(reviews =>{
            const div=createReviewElement(reviews)
            forEachContainer.append(div)
        })
}
function createReviewElement(review){
    const h4=document.createElement("h4")
    h4.textContent=`${"☆".repeat(review.stars)}`
    h4.style.color='naviblue'
    const p=document.createElement("p")
    p.textContent=review.text
    p.style.color='green'
    const p1=document.createElement("p")
    p1.textContent=`(${review.name})`
    p1.className="name"
    p1.style.color="orange"
    p1.style.textAlign="right"

    const div=document.createElement("div")
    div.style.border="solid"
    div.style.marginTop="5em"
    div.style.paddingLeft="3em"
    div.append(h4,p,p1)
    return div
}

function insertData(event){
    event.preventDefault();
    const userName=document.getElementById("userName")
    const starRating=document.getElementById("starRating")
    const userComment=document.getElementById("userComment")
    reviews.unshift({stars:parseInt(starRating.value),text: userComment.value,name: userName.value})
    console.log(reviews)
    renderReview()

}
const reviewForm=document.getElementById("reviewForm")
reviewForm.addEventListener("submit",insertData)