let num=12345 
// only scoped 
var char="abc"
// functional scoped
const num1="1123ada"

console.log(num)
console.log(char)
console.log(num1)

// alert("error")

let bool=true
console.log(typeof bool)

const arr=[12,"asd",true]
console.log(arr)

console.log(arr[1])

const obj={name:"aby",age:21,add:["mangalore","bangalore"]}
console.log(obj)

obj.age
console.log(obj['age'])



const temp=35

if(temp>45){
    console.log("its too hot")
}
else if(temp<45){
    console.log("is too cold")
}
else{
    console.log("moderate temp")
}

let day=7

switch(day){
    case 1:console.log("its monday")
    break
    case 2:console.log("its tuesday")
    break
    case 3:console.log("its wednesday")
    break
    default:console.log("invalid")
    break
}

let num2=10
while(num2>=1){
    console.log(num2)
    num2=num2-1
}

let num3=1
do{
    console.log(num3)
    num3++

}
while(num3<=10)

for(let j=0;j<=10;j++){
    console.log(j)
}

function sum(a,b){
    let add=a+b
    console.log(add)
    return add

}

const result =sum(10,20)
console.log(result)

