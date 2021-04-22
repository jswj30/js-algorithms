// 스택(stack)
function Stack(array) {
  this.array = [];
  if (array) this.array = array;
}

Stack.prototype.getBuffer = function () {
  return this.array.slice();
};

Stack.prototype.isEmpty = function () {
  return this.array.length == 0;
};

// 마지막 항목 들여다보기
Stack.prototype.peek = function () {
  return this.array[this.array.length - 1];
};

// 삽입
Stack.prototype.push = function (value) {
  this.array.push(value);
};

// 삭제
Stack.prototype.pop = function () {
  return this.array.pop();
};

// 접근

// 테스트
let stack1 = new Stack();
console.log(stack1);
stack1.push(10);
console.log(stack1.peek());
stack1.push(5);
console.log(stack1.peek());
console.log(stack1);
stack1.pop();
stack1.pop();
console.log(stack1);
