let arr= ["a","b"];
arr.push(function(){
     console.log(this);
})
arr[2]();
/*we append the function to arr and we called the function arr[2], so it return:
[a, b, {function(anonymous)] }
*/