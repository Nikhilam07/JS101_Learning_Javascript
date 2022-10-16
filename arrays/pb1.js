//Given an array of numbers find the average of all the even numbers.
let array=[1,2,3,4,5];
let n=array.length;
let sum=0;
let i=0;
let count=0;


for ([i];[i]<=[n-1];i++){
  if (array[i]%2==0){
     sum=sum+array[i];
     count++
  }
 
  
}

console.log(sum/count)