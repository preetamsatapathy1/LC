
var MyLinkedList = function() {
    this.head = null;
    this.size = 0;
};

var Node = function(val){
    this.val = val;
    this.next = null;
}

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    if(index >= this.size || index < 0 || typeof index !== 'number') return -1;

    let count = 0, node = this.head;
    while(count != index){
        node = node.next;
        count+=1;
    }
    return node.val;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    const newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
    this.size = this.size+1;
    
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    let node = this.head;
    while(node?.next){
        node = node.next
    }

    const newNode = new Node(val);
    if(node){
        node.next = newNode;
    } else{
        this.head = newNode
    }
    
    this.size = this.size+1;
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if (index > this.size) return;
    let count = 0 , node=null;
    while(count < index) {
        node = node ? node.next : this.head;
        count+=1;
    }
    let newNode = new Node(val);
    if(!node){
        //insert at head
        newNode.next = this.head;
        this.head = newNode;
    } else {
        //inser after the node
        let temp = node.next;
        node.next = newNode;
        newNode.next = temp;
        temp = null;
    }
    this.size = this.size + 1;

};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if (index >= this.size || index < 0) return;
    let count = 0, node = null;
    while(count < index){
        node = node ?  node.next : this.head;
        count +=1
    }
    if (!node) {
        this.head = this.head.next;
    } else {
        let toDelete = node.next;
        node.next = toDelete.next;
    }

    this.size = this.size - 1;
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */