
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


function findMiddle(list) {
    let p = list.first();
    let q = list.last();

    if (list.isEmpty()) {
        return "No element in the list."
    } else {
        do {
            p = list.after(p);
            q = list.before(q)
        } while (p != q && list.after(p) != q)
    }
    return q.element()
}
// let objList = new DLinkedList();
// objList.insertFirst(1);
// objList.insertAfter(objList.first(), 2);
// objList.insertLast(5);
// objList.insertBefore(objList.last(), 4);
// objList.insertBefore(objList.before(objList.last()),3)
// objList.print();

// findMiddle(objList)

// console.log(findMiddle(objList))

function sum(list) {
    return sumHelper(list, list.first())
}

function sumHelper(list, p) {
    let sum = p.element()
    while (!list.isLast(p)) {
        p = list.after(p)
        sum = sum + p.element()
    }
    return sum;
}
// Or recursive version

function sumHelper(list, p) {

    let sum = p.element()

    if (list.isLast(p)) {
        return sum
    } else {
       return sum = sum + sumHelper(list, list.after(p))
    }
}
let objList = new DLinkedList();
objList.insertFirst(1);
objList.insertAfter(objList.first(), 2);
objList.insertAfter(objList.after(objList.first()), 3)
objList.insertLast(5);
objList.insertBefore(objList.last(), 4);
objList.insertBefore(objList.before(objList.last()), 3)
objList.print();

sum(objList)

console.log(sum(objList))

