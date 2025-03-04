console.log("-----Homework Section-----") ; 
console.log(0 == "0")
console.log(0 === "0")
console.log(0 == 0)
console.log(0 === 0)
//Calculate BMI
let h = 1.7 ;
let w = 67 ;
let BMI = Math.floor(w / h ** 2) ;
console.log("BMI: ", BMI) ;
//Calculate Simple interest
let principal = 200;
let rate = 0.05;
let time = 1;
let interest = principal * rate * time ;
console.log("Simple interest: " , interest) ;
//Convert USD to local currency
let usd = 200 ;
let exrate = 25.559 ;
let VND = usd * exrate ;
console.log("USD to VND = " , VND)
//Calculate time
let totalSeconds = 8600 ;
const hour = 3600 ;
const minute = 60 ;
let hours = Math.floor(totalSeconds / hour);
let minutes = Math.floor((totalSeconds % hour) / minute);
let seconds = totalSeconds % minute;
console.log(hours + "h", minutes + "mins", seconds + "secs") ;