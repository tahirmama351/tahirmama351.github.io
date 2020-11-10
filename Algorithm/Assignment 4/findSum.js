
function sum(list){
     return sumHelper(list, list.first())
}
function sumHelper(list, p) {
     let p = list.first();
     let sum = p.element(p)     
  
     if (list.isLast(p)) {
     return sum
     } else {
         sum = sum + sumHelper(list, list.after(p))
     }
     
 }
 let objList = new DLinkedList();
 objList.insertFirst(1);
 objList.insertAfter(objList.first(), 2);
 objList.insertLast(5);
 objList.insertBefore(objList.last(), 4);
 objList.insertBefore(objList.before(objList.last()),3)
 objList.print();
 
 sum(objList)
 
 console.log(sum(objList))