// function sayHello(){
//     let you=prompt("What,s your Name?");
//     console.log("Hello", you + "!");
// }
// sayHello();
//prompt ke liye live server ke through chalana hoga



//**********************************************************************************************
// let varContainingFunction= function(){
//     let varInsideFunction= "I'm in a function.";
//     console.log("hi there!", varInsideFunction);
// }
// varContainingFunction();



//**********************************************************************************************
// function tester(para1,para2){
//     return para1 + " "+ para2;
// }
// const arg1="argument 1";
// const arg2="argument 2";
// console.log(tester(arg1,arg2));



//**********************************************************************************************
// let add= function(num1=50,num2=50){
//     console.log(num1+num2);
// }
// add(22);
// num1=parseInt(prompt("Enter first number:"))
// num2=parseInt(prompt("Enter second number:"))
// add(num1,num2);//default arguments are not working in prompt
// add(24,44,55,22)//will leave the extra arguments



//**********************************************************************************************
//Arrow functions are great for sending functions around as the parameters and for shorter notations
// x=> console.log(x); We have to store it in a variable for calling
// let arrowfunc=(x,y="World!")=> {
//     console.log(x + " "+ y);
// }
// arrowfunc("hello!");



//**********************************************************************************************
// const arr=["182","183","184"];
// arr.forEach(e=>console.log(e));



//**********************************************************************************************
//Spread(....) (in function calling)
// let spread =[4,5,6,7];
// // let mess=[1,2,3,spread,8,9,10];//nested array
// let mess=[1,2,3,...spread,8,9,10];
// console.log(mess);

// function add(x,y){
//     console.log(x+y);
// }
// let arr =[5,9]
// add(...arr)


// Rest operator(...) (inside function parameter) (when we don,t know the number of parameters)
// function somef(x,z,...y){//will create an array after taking x and z
//     console.log(x,z,y);
// }
// somef(1,2,3,4,4,45);