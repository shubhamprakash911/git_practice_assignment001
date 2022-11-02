
function checkPrime(number)
{
     let factors=0;
     for(a=0;a<=number;a++)
     {
        if(number%a==0){
         factors++;
        }
     }
  
if(factors==0){
 return true;
}else{
 return false;
}
}

let result=checkPrime(13);
if(result==true){
console.log("Prime Number");
}else{
console.log("Not a Prime Number");
}