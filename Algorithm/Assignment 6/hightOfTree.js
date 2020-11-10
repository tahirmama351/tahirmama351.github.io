


function heightOfTree(T) {
     return heightOfTreeHelper(T, T.root())
}
function heightOfTreeHelper(T, p) {
     if (T.isExternal(p)) {
          return 0;
     } else {
          let X = heightOfTreeHelper(T, T.leftChild(p))
          let y = heightOfTreeHelper(T, T.rightChild(p))
     }
     return Math.max(x, y) + 1
}