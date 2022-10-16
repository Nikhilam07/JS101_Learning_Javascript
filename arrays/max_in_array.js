//find max in array
let arr=[5,4,12,45,54];
let notebook=0;
for(let i=0;i<=arr.length-1;i++){
  if(arr[i]>notebook){
    notebook=arr[i];
  }
}
console.log(notebook)