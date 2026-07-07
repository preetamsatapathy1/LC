
var MinStack = function() {
    this.stack = [];
};

/** 
 * @param {number} value
 * @return {void}
 */
MinStack.prototype.push = function(value) {
    const prevMin = this.stack[this.stack.length - 1]?.min ?? Infinity;
    const currMin = prevMin < value ? prevMin : value
    this.stack.push({value, min:currMin});
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    const data = this.stack.pop();
    return data.value;
    
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1].value;
    
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.stack[this.stack.length - 1].min
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(value)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */