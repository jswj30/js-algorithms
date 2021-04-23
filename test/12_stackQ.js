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

// 테스트
// let stack1 = new Stack();
// console.log(stack1);
// stack1.push(10);
// console.log(stack1.peek());
// stack1.push(5);
// console.log(stack1.peek());
// console.log(stack1);
// stack1.pop();
// stack1.pop();
// console.log(stack1);

// 접근
function stackAccessNthTopNode(stack, n) {
  let bufferArray = stack.getBuffer();
  if (n <= 0) throw "error";

  let bufferStack = new Stack(bufferArray);

  while (--n !== 0) {
    bufferStack.pop();
  }
  return bufferStack.pop();
}

// 테스트

let stack2 = new Stack();
stack2.push(1);
stack2.push(2);
stack2.push(3);
// console.log(stackAccessNthTopNode(stack2, 2));

// 검색

function stackSearch(stack, element) {
  let bufferArray = stack.getBuffer();

  let bufferStack = new Stack(bufferArray); // 버퍼 스택으로 복사한다.

  while (!bufferStack.isEmpty()) {
    if (bufferStack.pop() == element) {
      return true;
    }
  }
  return false;
}

let stack3 = new Stack();
stack3.push(1);
stack3.push(2);
stack3.push(3);
// console.log(stackSearch(stack3, 2));

// 큐(Queue)
function Queue(array) {
  this.array = [];
  if (array) this.array = array;
}

Queue.prototype.getBuffer = function () {
  return this.array.slice();
};

Queue.prototype.isEmpty = function () {
  return this.array.length === 0;
};

// 테스트
let queue1 = new Queue();
console.log(queue1); // Queue { array: [] }
