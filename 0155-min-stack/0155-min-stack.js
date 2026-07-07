
var MinStack = function() {
    this.stack = [];
    this.minVal = [];
    
};

/** 
 * @param {number} value
 * @return {void}
 */
MinStack.prototype.push = function(value) {
    this.stack.push(value);
    const m = Math.min(this.minVal[this.minVal.length - 1] ?? Infinity, value);
    this.minVal.push(m);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.minVal.pop();
    return this.stack.pop()
    
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1]
    
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minVal[this.minVal.length - 1]
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(value)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */