//********String Data Type************* 

// let myName = "Thet Htoo Zaw"


// let myHeight = `5'6"` // if double quote include in the string use (``) backtip


// let myEdu = "HND (software enginnering)"

// let aboutMe = "hello I'm "+myName+`I am ${myHeight}`
// let aboutEdu = "hello I'm "+myName+`I am ${myEdu}`


// console.log(aboutMe)
// console.log(aboutEdu)

//**********Boolean Data Type************

// falsy value  m
// 1. 0
// 2. empty string ""
// 3. null 
// 4. underfined  (variabl mhr )
// 5. NaN (Not a Number) string nk string (-) tk akhr ("a" - "b")
// 6. false

// *********Operator************

// assignment operator

//power 
// console.log(2**4)

// let a =3;

// a -=1 // a = a-1;
// a +=1 // a = a+1;
// a *=2 // a = a*2;
// a /=2 // a = a/2;
// console.log(a)

// Operator precedence 

// assignment opertator perform  left to right
//comparison operator (output ka boolean true nk false pl pyn pay)
//logical operator

//function 

function Myname(name){
    console.log('My Name is'+name );
}
Myname("hello");

//defult parameter
function add(a,b){
    
    return a + b;
}
let result = add(1,3);
console.log("This is the sum of num 1 + 3 : ", result);

//calculating age

// let currentyear = 2023;
// function Myage(age){
//     return  currentyear - age; 
// }
// let age = prompt("Enter your Year of Birth : ");
// let ans = Myage(parseInt(age));
// console.log("Now you are turning : ",ans)

//Rest Parameter 
function num(a,b,...c){
    console.log(a);
    console.log(b);
    console.log(c);

}
num(1,2,3,4,5,6,6)

//funtion expression  
let a = function expression(){
    console.log('this is function expression')
}

// function statement

function statement(){
    console.log('this is function statement')
}

//arrow function without parameter  

let sayHi = () => 'hello';
console.log(sayHi())

//callback function 
function callBack(a,b){
    let result = b(a) * 2;
    console.log(result);
}
callBack(5,function(a){
    return a + 6;
})
//arrow function with parameter

let calculate = num => num+2;

console.log(calculate(2))

//array 

let mixture = new Array('dog',20,1.1,true) // array object constructor  
console.log(mixture.length)

let newArray = ['hello',2,2.2,false] // array literature 
newArray[4]=20 //insert new array
newArray[0]="hi"//overwrite
console.log(newArray[2]); // data ty ko htote pya 
console.log(newArray)

let fruits = ['apple','orange']
fruits[2]="mango"
console.log(fruits[fruits.length-1])

// Nested Array

let nested = [
    [1,2,3],
    ["a","b","c"]
]
console.log(nested[0][2])

//spread operator (...)
//Array 2 ku ko phay cha lk tr

let data1 = [1,2,3,]
let data2 = [4,5,6]

let finalData = [...data1,...data2]
console.log(finalData)

function spreadOperator(a,b){
    console.log(a+b);
}
let number = [1,2];
spreadOperator(...number);

//destructuring  

let [name,age,role] = ["MgMg",20,"Developer"]
console.log(name,age,role);

function destructuring([a,b]){
    console.log(a*b);
}

destructuring([4,8])

//Array Methods

let students = ['mgmg','zaw','Oo']

students.push('Koko');//to add data
students.pop()//to delete the last data
students.shift()//remove the first data
students.unshift('Thethtoo')//add data in the start of the array
let index = students.indexOf('Oo');//like a array.length
let string=students.join('');//print the array into together 
students.splice(0,2);

console.log(students)
console.log(index)
console.log(string)

//Array Map (array htl ka item ty ko modified lote boh )

let marks= [1,2,3,4,5]

marks=marks.map((mark)=>{ //overwrite to the main variable
    return 100 + mark;
});

console.log(marks);


let names = ['MgMg','ZawZaw','HtooHtoo']
// names = names.map(
//     (name)=>{
//     return "Ko " + name;
// }
// )

//refectoring code
names = names.map(name=>"ko" + name)
console.log(names)

//Array Filter 
//reasone lo add tl bl ka ny swl htoke ma ll so tr

let totalNum = [1,2,3,4,5,6,7,8,9,10]

// let arrayFilter = totalNum.filter((num)=>{
//     return num%2===0; //logic
// })

//refectoring_code
let arrayFilter = totalNum.filter(num=>num%2===0)
console.log(arrayFilter)

//Array Reduce 
//array htl ka data ty ko sum lote chin tk akhr 

// let arrayReduce = totalNum.reduce((prev,current)=>{
//     return prev + current ;
// })

//refectoring code
let arrayReduce = totalNum.reduce((prev,current)=>prev+current)
console.log(arrayReduce)

//refactoring_concept

//OBJECT 
let str = new String ('hello');
//let str = 'hello'
let strtwo = 'HELLO'

str = str.toUpperCase();
strtwo = strtwo.toLowerCase();
let newArr = str.split('')

console.log(typeof str);
console.log(strtwo)
console.log(newArr)

//create object  properties
//property lies in object 

let major = {
    name: 'Data Science',
    score: 30
}
major.duration=12; //overwrite
//dot notation 
console.log(major)
console.log(major.score)

//bracket notation (that is use in dynamic data)
let subjectName = 'name';
console.log(major[subjectName]);


//object method 
//WARNING arrow funcion is not allow in the method of object

let school = {
    student:"ko zaw",
    class:10,
    study(){
        console.log ('he is studying')
    }, // refectoring_concept
    absent:function (){
        console.log("he isn't absent the school")
    }
}

console.log(school)

//THIS  
//using this keyword in method's object
//if u don't understand go and watch video again but I'm fully understand while I code this in (12:05) AM
let uni = {
    name : "IMU",
    fees : 100,
    teach(){
        console.log(this.name+' teach lots of best course')
       
    }
}
console.log(uni)
uni.teach();

//object spread , destructing and property short hand are also same with array. if you don't remember google it

let person = [
    {name:"KoZaw",age:52,work:"CEO"},
    {name:"MgMg",age:32,work:"Developer"},
    {name:"MayMay",age:20,work:"student"},
]

let addRole = person.map(name=>"role"+name.work)
console.log(addRole)
// console.log(person)

// let searchKey = prompt ('search person')

// let search=person.filter(people=>people.name.includes(searchKey))
// console.log(search)

//JSON is string (JavaScript object notation)

//change JSON into JS
let jsonCode = '{"name":"KoZaw","age":52,"work":"CEO"}'
let obj = JSON.parse(jsonCode)
console.log(obj.name)

//change JS into JSON
let js = {
    name:"KoZaw",
    age:52,
    work:"CEO"
}
console.log(JSON.stringify(js))

//if else 
// let lunch = prompt("Have you eat your lunch? (y/n)?")

// if (lunch==="y")
//     console.log('ပီးရော ဒါဆို အားနေလို့မေးတာ')
// else if (lunch==="n")
//     console.log('သွားစားလေ')
// else 
//     console.log('လီးတွေရေးနေတာလား')

//example 1 

let prices = [1000,3000,2000,1000,8000,1000,9000]

prices = prices.map(price=>{
        if(price===1000)
            price -=300
        return price;
})
console.log('DISCOUNT PRICES ARE :',prices)

//example 2
let customers = [
    {name:"mgmg",age:20},
    {name:"ayeaye",age:23,gender:"f"},
    {name:"koaung",age:33,gender:"m"},
    {name:"misan",age:21,gender:"f"},
    {name:"miko",age:29,gender:"f"},
    {name:"kozaw",age:12,gender:"m"},
]

customers= customers.map(people=>{
        if(people.gender){
            if(people.gender==='f')
                people.gender="female"
            if(people.gender==='m')
                people.gender="male"
        }
        else 
            people.gender="unknown"
    return people;
})
console.log("List of customer using if statements",customers);

//if else expression (ternry operator)

// let website = prompt('နင့်$သက်ကို မလိမ်ပဲထည့်စမ်း')
// let permission = website > 18 ? "အသစ်လေးတွေရှိတယ် ကိုကြီး" : "လီလားသောက်သက်မပြည့်သေးပဲလီးလုပ်တာလား"

// console.log(permission)

//switch case 
let users = [
    {name:"mgmg",age:20},
    {name:"ayeaye",age:23,gender:"f"},
    {name:"koaung",age:33,gender:"m"},
    {name:"misan",age:21,gender:"f"},
    {name:"miko",age:29,gender:"f"},
    {name:"kozaw",age:12,gender:"m"},
]

 users= users.map((customer)=>{
    switch(customer.gender){
        case 'm':
            customer.gender="male"
            break;
        case 'f':
            customer.gender="female"
            break;
        default :
            customer.gender="others" 
            break;  
    }
    return customer;
})
console.log("list of customers using switch statement :",users)


//while loop (condition ko ayin sit sy pe mha alote lote tl)
let x = 0
let client = ['koko','aungaung','zawzaw','kyawkyaw']

while (x<client.length){
    console.log(client[x]);
    x++;
}

//do while loop (alote ko ayin lote pe mha condition ko sit tl..ae tot 1 khr tot anal sone alote lote tl )

do {
    console.log('client'+[x]);
    x++
}while(x<5)

//for loop 

for (let x=0;x<client.length;x++){
    console.log(client[x])

}
//for of loop  (array ko loop pat yin thone tl)
let things = ['table','spoon','tea']
for(tool of things){
    console.log(tool)
}
//for in loop
let computer = {
    name : 'Lenovo', 
    cpu : 12,
}
for(key in computer){
    console.log(`${key}  is ${computer[key]}`)
}
//scoping 
//local,global scope
//nested scope

//OOP
//blue print == class 
class Calculator { //blue print
    PI = 3.14 
    area(r){
        return this.PI*r**2
    }
    volume(r,h){
        return this.area(r)*h
    }
}
let calculator = new Calculator
console.log(calculator.volume(2,4))

//constructor 

class Car{
    brand = '';
    wheels= 4;
    
    constructor(brand,wheels){
        this.brand=brand;
        this.wheels=wheels;
     }  
    drive(){
        console.log(this.brand+" is the most famous car in the world")
    }
    getWheel(){
        console.log(this.brand+" is"+this.wheels+" wheels drive car")
    }
}

let Name= new Car('toyota',10)
Name.drive()
Name.getWheel()

//access modifer (private)
class info {
    Name = "Thet Htoo Zaw"
    #psw = "123" // private access modifier 
    getThzPsw(){
        console.log("User THZ password is "+this.#psw)
    }
}

let user = new info
user.getThzPsw()

//access modifier (inheritance)

class Animal{
    constructor(name){
        this.Name=name;
    }
    run(){
        console.log(`${this.Name}  is running.`)
    }
}
class action extends Animal {
    bark(){
        console.log(`${this.Name} can bark like woof woof`)
    }
}

let animal = new Animal
animal.Name = "dog"
animal.run()
let Dog = new action("Aung Nak")
Dog.bark()

//Asyn (Promise)

function asyn(){
    return new Promise ((resolve,reject)=>{
        let result = 0 
        for (i=0;i<100000000;i++){
             result +=i;
        }
        if (result){
            resolve(result)
        }
        else{
            reject('I have got some error')
        }
    })
}
console.log('work')
asyn()
.then((result)=>{
    console.log(result)
    console.log("other task after async")
})
.catch((error)=>{
    console.log(error)
})
console.log('more work')

//fetch  (1st way)
fetch('https://jsonplaceholder.typicode.com/todos/')

.then((response)=>{ //this than method work for the fetch data 
    response.json().then((data)=>{ // this is use to response the fetched json data
        console.log(data)
    })
.catch((err)=>{ // this error is for the above data 
    console.log(err)
})
})

.catch((error)=>{//this error is for fetching error 
    console.log(error)
})

//fetch (easy way)
fetch('https://jsonplaceholder.typicode.com/todos/')
.then((response)=>{
   return response.json() //first this will fetch data and return so the below method can use this method
})
.then((data)=>{ //this got the above data because of the return
    console.log(data)
})
.catch((error)=>{ //this catch error method is for both of them
    console.log(error)
})


//fetch (await function)

async function fetchTodos(){
    try{
        let response = await fetch('https://jsonplaceholder.typicode.com/todos/') //this is fetching step
        console.log('I am the work between fatching data by using await function')
        let data = await response.json()//this is accepting respone and get json data from fatch data
        console.log(data)
    }
    catch(error){
        console.log(error)
    }
}
fetchTodos()
