
//1. Log to the console the names of everyone in the tree

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

console.log('now tree has stars', abe);