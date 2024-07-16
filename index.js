//Array searching
var arr = [1,2,3,4,5,6,7,8];
var value = 4;
var location = arr.indexOf(value);
console.log(location);

//Sorting and reverse
var sorted = arr.sort();
console.log("Sorted: ", sorted);
var reversed = arr.reverse();
console.log("Reversed: ", reversed);

//Joining
var list = [1,2,3,4,5,6,7,8];
var arr2 = [9,10,11,12];
var merged = list.concat(arr2);
console.log("Merged: ",merged);

//Push and pop in Array
var list1 = [1,2,3,4,5];
var val = list1.push(5);
console.log(list1);
var val1 = list1.pop(3);
console.log(val1);

//Array filtering based on a condition
var list2 = [1,2,3,4,5,6,7,8,9,10];
var div = [];
for(i = 0; i< list2.length;i++){
  if(list2[i]%2 == 0){
    div.push(list2[i]);
  }
}
console.log("Multiples if two : ",div);

//Last index of an element
var list3 = [1,2,3,1,3,4,1];
var last = list3.lastIndexOf(1);
console.log("The last index is: ",last);
