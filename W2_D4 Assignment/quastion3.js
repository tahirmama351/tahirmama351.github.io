

function TreeNode(value) {
     this.value = value;
     this.descendents = [];
}
// create nodes with values
const abe = new TreeNode('Abe');
const homer = new TreeNode('Homer');
const bart = new TreeNode('Bart');
const lisa = new TreeNode('Lisa');
const maggie = new TreeNode('Maggie');
// associate root with is descendents
abe.descendents.push(homer);
homer.descendents.push(bart, lisa, maggie);


function contains(node, target) {
     /* base case -- if children is null or empty */
     if (node.descendents === null) {
          if (node.value === target) {
               return node;
          } else {
               return "done";
          }
     } else { //reductive recursion step
          let childResult = null;
          if (node.value === target) {
               return node;
          }
          for (let child  of node.descendents) {
               childResult = contains(child, target);
               // if (childResult === true) {
               //      return child;
               // }
          }
          return child; //did not find the target 
     }
}
console.log(contains(homer, "Lisa"));
