
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

//////////////////////////////////

function treeModifier(treeNode, modFunc) {
     modFunc(treeNode);
     if (treeNode.descendents === null) {
          return undefined;
     } else {  //loop through the array of descendents and recursively call treeModifier
          for (const node of treeNode.descendents) {
               treeModifier(node, modFunc);
          }
     }
}

function starFunction(node) {
     node.value = "***" + node.value + "***";
     return undefined;
}

function caps(node) {
     node.value = node.value.toUpperCase();
     return node.value
}
//console.log(treeModifier(abe, starFunction));
console.log('now tree has stars', abe);