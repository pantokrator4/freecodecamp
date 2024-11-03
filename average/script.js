let arr1 = [92, 88, 12, 77, 57, 100, 67, 38, 97, 89];
let arr2 = [45, 87, 98, 100, 86, 94, 67, 88, 94, 95];

function getAverage(scores) {
   let sum = 0;
   for (let i=0; i < scores.length; i= i+1){
     sum = sum + scores[i]
    
   }
   console.log(sum/arr1.length)
   
  return sum/arr1.length
}
getAverage(arr1)
getAverage(arr2)