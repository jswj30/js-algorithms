// 일반적인 트리 구조

function TreeNode(value) {
  this.value = value;
  this.children = [];
}

let test1 = new TreeNode(1);
let test2 = new TreeNode(2);
test1.children.push(test2);

console.log("test1: ", test1);
console.log("test1.value: ", test1.value);
console.log("test1.children: ", test1.children);
