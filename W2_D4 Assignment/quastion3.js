

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
abe.next.push(homer);
homer.next.push(bart, lisa, maggie);



function contains(node, target) {
     
     if (node.value === target) {
          return node;

     } else { 
          let childResult;

          for (let child of node.descendents) {
               childResult = contains(child, target);
               return child;
          }
     }
     return target +" is not in this root"
     
}


console.log( contains(maggie, "Lisa"));
