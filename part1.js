
//#region Question 1

// let str ="123";
// let num =Number(str);
// console.log(num+7);
//#endregion

//#region Question 2

// let x = 0;
// if(!x){
//     console.log("Invalid");
// }
//#endregion

//#region Question 3

// for (let i=1; i<=10; i++){
//     if(i%2==0){
//         continue;
//     }
//     console.log(i);

// }
//#endregion

//#region Question 4
// let arr =[1,2,3,4,5]
// let evenNum = arr.filter(function(value , index, arr){
//     return value%2==0;
// }
// );

// console.log(evenNum);
//#endregion

//#region Question 5

// let arr1=[1,2,3]
// let arr2=[4,5,6]

// let mergeArr=[...arr1,...arr2]

// console.log(mergeArr);


//#endregion


//#region Question 6
// let day=2;

// switch (day) {
//     case 1:
//         console.log("Sunday");
        
//     break;

//     case 2:
//         console.log("Monday");
        
//     break;

//     case 3:
//         console.log("Tuseday");
        
//     break;

//     case 4:
//         console.log("Wednsday");
        
//     break;

//     case 5:
//         console.log("Thursday");
        
//     break;

//     case 6:
//         console.log("Friday");
        
//     break;

//     case 7:
//         console.log("Saturday");
        
//     break;

// }

//#endregion


//#region Question 7

// let array=["a", "ab", "abc"]

// let length = array.map(function(value , index, arr){
//     return value.length;
// }
// );

// console.log(length);
//#endregion

//#region Question 8

// function checkNumber(num){
//     if(num%3==0 && num%5==0){
//     console.log("Divisible By Both");
   
// }
//     else{
//         console.log("Not Divisible By Both");
    
//     }
// }

// checkNumber(15)

//#endregion


//#region Question 9

// const square = (num)=>{
//     return num*num;
// }

// console.log(square(5));

//#endregion


//#region Question 10
// const person = {
//     name: 'John',
//     age: 25
// }

// const{name,age}=person;

// function personobj (person){
//     return name +" is " + age + " years old"
// }

// console.log(personobj(person));

//#endregion


//#region Question 11




// let nums =[1,2,3,4,5]

// function Sum(...nums){
//     let total =0;
//     for (i=0;i<nums.length;i++) {
//         total+=nums[i];
        
//     }
//     return total;
// }

// console.log(Sum(...nums));

//#endregion



//#region Question 12
// function getPromise() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Success");
//         }, 3000);
//     });
// }

// getPromise().then((message) => {
//     console.log(message);
// }); 
//#endregion


//#region Question 13
// function largestNumber(arr) {
//     let largest = arr[0];

//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > largest) {
//             largest = arr[i];
//         }
//     }

//     return largest;
// }

// console.log(largestNumber([1, 3, 7, 2, 4]));
//#endregion


//#region Question 14

// let person ={
//     name :"John",
//     age:30
// }

// let getKey = (person)=>{
//     return Object.keys(person);

// }

// console.log(getKey(person));

//#endregion

//#region Question 15
// let splitWords=(str)=>{
//     return str.split(" ");
// }

// console.log(splitWords("The quick brown fox"));

//#endregion
