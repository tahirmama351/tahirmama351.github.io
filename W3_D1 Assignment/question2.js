
/**when will the scheduled function run?

After the loop.
Before the loop.
In the beginning of the loop.
What is alert going to show?
 * 
 */



let i = 0;

setTimeout(() => alert(i), 100); // 100000000
// it run after i incremented 100000000 time. that means after the loop ends


for(let j = 0; j < 100000000; j++) {
  i++;
}