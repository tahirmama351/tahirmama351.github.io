

function TreeNode(value) {
     this.value = value;
     this.next = null;
}
// create nodes with values
const abe = new TreeNode('Abe');
const homer = new TreeNode('Homer');
const bart = new TreeNode('Bart');
const lisa = new TreeNode('Lisa');
const maggie = new TreeNode('Maggie');
// associate root with is descendents
list = abe
abe.next = homer;
homer.next = bart;
bart.next = lisa;
lisa.next = maggie;
maggie.next = null;

function contains(list, target) {

     if (list.value === target) {
          return list
     } else {
          if (list.next === null) {
               return`${target} is not in this tree.`;
          } else {
               return contains(list.next, target)
          }
     }
}
console.log(contains(maggie, "Lisa"));
