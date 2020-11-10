"use strict";
/* eslint-disable */
"use strict";
/* eslint-disable */


class NPos {
     constructor(elem, prev, next) {
          // inserts this new node between prev and next
          this._elem = elem;
          this._prev = prev;
          this._next = next;
          if (prev != null) {
               prev._next = this;
          }
          if (next != null) {
               next._prev = this;
          }
     }
     element() {
          return this._elem;
     }
}
class DLinkedList {
     constructor() {
          this._header = new NPos(null, null, null);
          this._trailer = new NPos(null, this._header, null);
          this._header._next = this._trailer;
          this._size = 0;
     }
     isFirst(p) {
          return (this._header == p._prev);
     }
     isLast(p) {
          return (this._trailer == p._next);
     }
     size() {
          return this._size;
     }
     isEmpty() {
          return this._size == 0;
     }
     first() {
          if (this.isEmpty()) {
               throw new Error("Invalid first() on an empty List");
          } else {
               return this._header._next;
          }
     }
     last() {
          if (this.isEmpty()) {
               throw new Error("Invalid last() on an empty List");
          } else {
               return this._trailer._prev;
          }
     }
     after(p) {
          if (p._next == this._trailer) {
               throw new Error("Invalid after(p)--off the end");
          }
          return p._next;
     }
     before(p) {
          if (p._prev == this._header) {
               throw new Error("Invalid before(p)--off the front");
          }
          return p._prev;
     }
     replaceElement(p, elem) {
          let oldElem = p._elem;
          p._elem = _elem;
          return oldElem;
     }
     swapElements(p, q) {
          let temp = p._elem;
          p._elem = q._elem;
          q._elem = temp;
     }
     insertAfter(p, elem) {
          let newNode = new NPos(elem, p, p._next);
          this._size++;
          return newNode;
     }
     insertBefore(p, elem) {
          let newNode = new NPos(elem, p._prev, p);
          this._size++;
          return newNode;
     }
     insertFirst(elem) {
          let newNode = new NPos(elem, this._header, this._header._next);
          this._size++;
          return newNode;
     }
     insertLast(elem) {
          let newNode = new NPos(elem, this._trailer._prev, this._trailer);
          this._size++;
          return newNode;
     }
     remove(p) {
          p._prev._next = p._next;
          p._next._prev = p._prev;
          p._prev = null;  // should no longer reference a Position in the List
          p._next = null;
          this._size--;
     }
     print() {
          let res = "[";
          let iter = this.interator();
          while (iter.hasNext()) {
               res = res + iter.nextObject();
               if (iter.hasNext()) {
                    res = res + ", ";
               }
          }
          console.log(res + "]\n");
     }
     interator() {
          return new ListIterator(this);
     }
}
class ListIterator {
     constructor(seq) {
          this._seq = seq;
          this.reset();
     }
     hasNext() {
          return this._nextPos != null;
     }
     nextObject() {
          if (this._nextPos._prev == null) { // bug 2
               throw new Error("Invalid Position in Iterator: the Position has been deleted");
          }
          let nextElem = this._nextPos.element();
          if (this._seq.isLast(this._nextPos)) {
               this._nextPos = null;
          } else {
               this._nextPos = this._seq.after(this._nextPos);
          }
          return nextElem;
     }
     reset() {
          if (this._seq.isEmpty()) {
               this._nextPos = null;
          } else {
               this._nextPos = this._seq.first();
          }
     }
}

class Queue {
     constructor() {
          this._que = new DLinkedList();
     }
     isEmpty() {
          return this._que.isEmpty();
     }
     enqueue(element) {
          this._que.insertLast(element);
     }
     dequeue() {
          return this._que.remove(this._que.first());
     }
     front() {
          return this._que.first().element();
     }
     size() {
          return this._que.size();
     }
     print() {
          this._que.print();
     }
}
let objQueue = new Queue();
objQueue.enqueue(1);// the running time is O(1)
objQueue.enqueue(2); // the running time is O(1)
objQueue.enqueue(3); // the running time is O(1)
objQueue.enqueue(4); // the running time is O(1)
objQueue.enqueue(5); // the running time is O(1)
objQueue.print();
objQueue.dequeue(); // the running time is O(1)
objQueue.dequeue(); // the running time is O(1)
objQueue.print();
