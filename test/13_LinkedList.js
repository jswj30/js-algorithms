// 단일 연결 리스트
function SinglyLinkedListNode(data) {
  this.data = data;
  this.next = null;
}

// 단일 연결 리스트의 기본이 되는 코드
function SinglyLinkedList() {
  this.head = null;
  this.size = 0;
}
SinglyLinkedList.prototype.isEmpty = function () {
  return this.size === 0;
};

// 삽입
SinglyLinkedList.prototype.insert = function (value) {
  if (this.head === null) {
    // 첫 번째 노드의 null 확인
    this.head = new SinglyLinkedListNode(value);
  } else {
    let temp = this.head;
    this.head = new SinglyLinkedListNode(value);
    this.head.next = temp;
  }
  this.size++;
};

// 테스트
let sll1 = new SinglyLinkedList();
sll1.insert(1);
sll1.insert(12);
sll1.insert(20);
console.log(sll1);
// SinglyLinkedList {
//   head: SinglyLinkedListNode {
//     data: 20,
//     next: SinglyLinkedListNode { data: 12, next: [SinglyLinkedListNode] }
//   },
//   size: 3
// }
