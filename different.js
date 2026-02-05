//odd numbers

// for(let number = 0; number<20; number++) {

//     if(number %2  ===1);
//     console.log(number);
// }
// for(let number = 0; number<20; number++) {

//     if(number % 2  !==0){
//     console.log(number)}
// }

// for(let number = 1; number <=30; number++) {
//     if(number % 5 ===0) {
//         console.log(number)
//     }
  
// }
for(let number = 1; number <=120; number++) {
    if(number % 3 ===0 && number % 5 ===0) {
        console.log(number)
    }
  
}


//give me the sum of numbers from 1-20 that are divisible by 3.
let sum = 0;
for(let num = 1; num <=20; num++) {
    if(num % 3 ===0) {
        console.log(' num' , num);
        sum = sum + num;
    }
}

console.log("total sum" , sum)

let total = 0;
for(num = 10; num <=50; num++) {
    if(num % 2 ===0) {
        console.log('number' , num);
        total = total + num;
    }
}

console.log('total number of sum' , total)


