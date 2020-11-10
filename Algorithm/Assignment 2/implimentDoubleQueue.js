class DoubleQueue {
    constructor() {
        this._queIn=new Stack();
        this._queOut=new Stack();
    }
    enqueue(e){
        this._queIn.push(e);
    }
    dequeue(){
        while(this._queIn.size()!=0){
            this._queOut.push(this._queIn.pop());
        }
        return this._queOut.pop();        
    }   
    front(){
        return this._queOut.top()
    }
    print(){
        this._queIn.print();
    }
}

let objQue= new DoubleQueue();
objQue.enqueue(1);
objQue.enqueue(2);
objQue.enqueue(3);
objQue.enqueue(4);
objQue.enqueue(5);
objQue.print();

objQue.dequeue();
objQue.print();