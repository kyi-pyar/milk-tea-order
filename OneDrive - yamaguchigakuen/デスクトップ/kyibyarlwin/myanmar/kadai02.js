//(example 



// // function message(){
//     msg="hello everyone"
//     console.log(msg)

// }
// message()//function name call/invoke



// function message(name, age=27){
    // msg="hello everyone"
    // console.log(msg + name + " ( " + age + " )")
//}
// message(" ei" , 26)//function name call/invoke
// message( " jin" , 21)
// message(" yang")



// function message(number){

//         console.log((number % 2==0)? "even" : "odd")
// }

// for(let i=1;i<5;i++){
//     message(i)
// }

// function calculateInches(feet,inches){
//     console.log("total inches", feet*12 + inches)
// }

// calculateInches(5,3)


// function calculateInches(feet,inches){
//     return feet*12 + inches
// }

// function  calculateBMI(height,weight){
//     console.log("BMI",703*(weight/(height*height)))

// }

// var inches=calculateInches(5,0)
// calculateBMI(inches,103)


// function hello1(){
//     for(let i=0;i<5;i++){
//         console.log(i,"hello")
//     }
// }
// const hello=hello1()
// //(console.log(hello))

// const variable=10;
// console.log(variable)

// const inline_function=function(num){
//     for(let i=0;i<num;i++){
//         console.log(i,"inline")
//     }
// }
// console.log(inline_function(10))



// const inline_function=function(num){
//     let total=0
//     for(let i=0;i<=num;i++){
//         total +=i        
//     }
//     return total
// }
// console.log(inline_function(10))



//example)

//(exercise

function GetusjArea(name,attribute){
   let area=""; 
    if(attribute==='冒険好き'){
        area="ジュラシック・パーク"
    }
    else if(attribute==="魔法が好き"){
        area="ウィザーディング・ワールド・オブ・ハリー・ポッター"
    }
    else if(attribute==='スリル好き'){
        area="ハリウッド・エリア"
    }
    else if(attribute==="黄色が好き"){
        area="ミニオン・パーク"
    }
    else if(attribute==="上記以外"){
        area="ニューヨーク・エリア"
    }
    
    return`こんにちは、${name}さん。おすすめのエリアは「${area}」です！`

}
console.log(GetusjArea("ysh",'魔法が好き'))
console.log(GetusjArea("jfw",'スリル好き'))
console.log(GetusjArea("eym",'上記以外'))



