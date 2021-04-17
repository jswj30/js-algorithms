// 일반적인 트리 구조

function TreeNode(value) {
  this.value = value;
  this.children = [];
}

// let test1 = new TreeNode(1);
// let test2 = new TreeNode(2);
// test1.children.push(test2);

// console.log("test1: ", test1);
// console.log("test1.value: ", test1.value);
// console.log("test1.children: ", test1.children);

// 이진 트리

// function BinaryTreeNode(value) {
//   this.value = value;
//   this.left = null;
//   this.right = null;
// }

// function BinaryTree() {
//   this._root = null;
// }

// 선순위 순회 재귀 방식

// BinaryTree.prototype.traversePreOrder = function () {
//   traversePreOrderHelper(this._root);

//   function traversePreOrderHelper(node) {
//     if (!node) return;
//     console.log(node.value);
//     traversePreOrderHelper(node.left);
//     traversePreOrderHelper(node.right);
//   }
// };

// 선순위 순회 반복문 방식

// BinaryTree.prototype.traversePreOrderIterative = function () {
//   // 빈 스택을 생성한 다음 루트를 스택에 추가한다.
//   let nodeStack = [];
//   nodeStack.push(this._root);

//   // 모든 항목을 하나씩 꺼낸다. 꺼낸 항목에 대해 다음 사항을 수행한다.
//   // a) 항목을 출력한다.
//   // b) 오른쪽 자식을 스택에 추가한다.
//   // c) 왼쪽 자식을 스택에 추가한다.
//   // 오른쪽 자식을 왼쪽 자식보다 먼저 스택에 추가해 왼쪽 자식이 먼저 처리되도록 했다.
//   while (nodeStack.length) {
//     // 스택으로부터 최상위 항목을 꺼낸 다음 출력한다.
//     let node = nodeStack.pop();
//     console.log(node.value);

//     // 꺼낸 노드의 오른쪽 자식과 왼쪽 자식을 스택에 추가한다.
//     if (node.right) nodeStack.push(node.right);
//     if (node.left) nodeStack.push(node.left);
//   }
// };

//----------------------------------------------------------------------------//

function BinaryTreeNode(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function BinaryTree() {
  this._root = null;
}

BinaryTree.prototype.traversePreOrder = function () {
  traversePreOrderHelper(this._root);

  function traversePreOrderHelper(node) {
    if (!node) return;
    console.log(node.value);
    traversePreOrderHelper(node.left);
    traversePreOrderHelper(node.right);
  }
};

BinaryTree.prototype.traversePreOrderIterative = function () {
  // 빈 스택을 생성한 다음 루트를 스택에 추가한다.
  let nodeStack = [];
  nodeStack.push(this._root);

  // 모든 항목을 하나씩 꺼낸다. 꺼낸 항목에 대해 다음 사항을 수행한다.
  // a) 항목을 출력한다.
  // b) 오른쪽 자식을 스택에 추가한다.
  // c) 왼쪽 자식을 스택에 추가한다.
  // 오른쪽 자식을 왼쪽 자식보다 먼저 스택에 추가해 왼쪽 자식이 먼저 처리되도록 했다.
  while (nodeStack.length) {
    // 스택으로부터 최상위 항목을 꺼낸 다음 출력한다.
    let node = nodeStack.pop();
    console.log(node.value);

    // 꺼낸 노드의 오른쪽 자식과 왼쪽 자식을 스택에 추가한다.
    if (node.right) nodeStack.push(node.right);
    if (node.left) nodeStack.push(node.left);
  }
};

let root1 = new BinaryTree();
let leaf1 = new BinaryTreeNode(42);
let leaf2_1 = new BinaryTreeNode(41);
let leaf2_2 = new BinaryTreeNode(50);
leaf1.left = leaf2_1;
leaf1.right = leaf2_2;
let leaf3_1 = new BinaryTreeNode(10);
let leaf3_2 = new BinaryTreeNode(40);
let leaf3_3 = new BinaryTreeNode(45);
let leaf3_4 = new BinaryTreeNode(75);
leaf2_1.left = leaf3_1;
leaf2_1.right = leaf3_2;
leaf2_2.left = leaf3_3;
leaf2_2.right = leaf3_4;
root1._root = leaf1;

console.log(root1);
console.log(root1.traversePreOrder());
console.log(root1.traversePreOrderIterative());
