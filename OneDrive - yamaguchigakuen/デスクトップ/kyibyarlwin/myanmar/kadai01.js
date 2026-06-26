//(Note 
// var num=5.2;
// console.log(Number,typeof(num))
// var str="hello";
// console.log(str,typeof(str))
// var num=true;
// console.log(num,typeof(num))

// let num=5.2;
// console.log(Number,typeof(num))
// let str="hello";
// console.log(str,typeof(str))
// let num=true;(false)
// num=true;(true)
// console.log(num,typeof(num))


// let name="aye aye"
// //let msg="hello " +  name + " how are you?"
// let msg=`hello  ${ name }   how are you?`
// console.log(msg)


// let num1=10
// let num2=20
// console.log((num1<num2)?"Less than" : "Greater than")


// let num1=1
// let num2='1'
// console.log((num1==num2)?"Equal" : "Not Equal")

// let num1=1
// let num2='1'
// console.log((num1===num2)?"Equal" : "Not Equal")


// let num=10
// console.log((num)?"truthy" : "faulty")


// let num
// console.log((num)?"truthy" : "faulty")

// let num="abc"/2
// console.log(typeof("abc"/2),"abc"/2)
// console.log( ("abc"/2)? "Truthy" : "Faulty" )
//Note)

//(lesson

console.log("=====ECCビルディング フロアマップ=====")
let layer='階'
for(let i=1;i<=10;i++){
    let step=`[${i}${layer}]`
    let divisor=2;

    let AED="AED設置階"
    let prime=false


    if(i>=2){
        for( divisor=2;divisor<=i;divisor++){
            if(i%divisor === 0) break;
        }
        if(i===divisor)prime=true
        else prime=false

    }
    if(i===1){console.log(`${step}:総合カウンター`)}
    else if(i===5|i===6){console.log((prime)?`${step}${AED}`:`${step}`)}
    else if(i%2===0 & i!==6){
        console.log((prime)?`${step}会議室A ${AED}`:`${step}会議室A`)
    }
    else if(i%3===0 & i!==6){
        console.log((prime)?`${step}会議室B ${AED}`:`${step}会議室B`)
    }
}


