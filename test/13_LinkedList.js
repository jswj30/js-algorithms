// 단일 연결 리스트 노드
function SinglyLinkedListNode(data) {
  this.data = data;
  this.next = null;
}

// 단일 연결 리스트 기본 코드
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
// console.log(sll1);
// SinglyLinkedList {
//   head: SinglyLinkedListNode {
//     data: 20,
//     next: SinglyLinkedListNode { data: 12, next: [SinglyLinkedListNode] }
//   },
//   size: 3
// }

// 삭제
SinglyLinkedList.prototype.remove = function (value) {
  let currentHead = this.head;
  if (currentHead.data === value) {
    // 삭제하려는 값이 헤드이므로 바로 삭제한다. 그리고 기존 헤드의 next가 새 헤드가 된다.
    this.head = currentHead.next;
    this.size--;
  } else {
    let prev = currentHead;
    while (currentHead.next) {
      if (currentHead.data == value) {
        // 해당 노드를 건너뛰어 삭제한다.
        prev.next = currentHead.next;
        prev = currentHead;
        currentHead = currentHead.next;
        break;
      }
      prev = currentHead;
      currentHead = currentHead.next;
    }
    // 삭제하고자 하는 노드가 끝까지 없으면 tail에 있을 것이므로 tail을 끊어준다.
    if (currentHead.data === value) {
      prev.next = null;
    }
    this.size--;
  }
};

let sll2 = new SinglyLinkedList();
sll2.insert(1);
sll2.insert(12);
sll2.insert(20);
sll2.remove(12);
sll2.remove(20);
// console.log(sll2);
// SinglyLinkedList {
//   head: SinglyLinkedListNode { data: 1, next: null },
//   size: 1
// }

// 헤드 항목 삭제
SinglyLinkedList.prototype.deleteAtHead = function () {
  let toReturn = null;

  if (this.head !== null) {
    toReturn = this.head.data;
    this.head = this.head.next;
    this.size--;
  }
  return toReturn;
};

// 테스트
let sll3 = new SinglyLinkedList();
sll3.insert(1);
sll3.insert(12);
sll3.insert(20);
sll3.deleteAtHead();
// console.log(sll3);
// SinglyLinkedList {
//   head: SinglyLinkedListNode {
//     data: 12,
//     next: SinglyLinkedListNode { data: 1, next: null }
//   },
//   size: 2
// }

// 검색
SinglyLinkedList.prototype.find = function (value) {
  let currentHead = this.head;
  while (currentHead.next) {
    if (currentHead.data == value) {
      return true;
    }
    currentHead = currentHead.next;
  }
  return false;
};

// 테스트
let sll4 = new SinglyLinkedList();
sll4.insert(1);
sll4.insert(12);
sll4.insert(20);
// console.log(sll4.find(12));

// 이중 연결 리스트 노드
function DoublyLinkedListNode(data) {
  this.data = data;
  this.next = null;
  this.prev = null;
}

// 단일 연결 리스트의 기본 코드
function DoublyLinkedList() {
  this.head = null;
  this.tail = null;
  this.size = 0;
}

DoublyLinkedList.prototype.isEmpty = function () {
  return this.size === 0;
};

// 헤드에 항목 삽입하기
DoublyLinkedList.prototype.insertAtHead = function (value) {
  if (this.head === null) {
    this.head = new DoublyLinkedListNode(value);
    this.tail = this.head;
  } else {
    let temp = new DoublyLinkedListNode(value);
    temp.next = this.head;
    this.head.prev = temp;
    this.head = temp;
  }
  this.size++;
};

// 테스트
let dll1 = new DoublyLinkedList();
dll1.insertAtHead(10);
dll1.insertAtHead(12);
dll1.insertAtHead(20);
// console.log(dll1);
// DoublyLinkedList {
//   head: <ref *1> DoublyLinkedListNode {
//     data: 20,
//     next: DoublyLinkedListNode {
//       data: 12,
//       next: [DoublyLinkedListNode],
//       prev: [Circular *1]
//     },
//     prev: null
//   },
//   tail: <ref *2> DoublyLinkedListNode {
//     data: 10,
//     next: null,
//     prev: DoublyLinkedListNode {
//       data: 12,
//       next: [Circular *2],
//       prev: [DoublyLinkedListNode]
//     }
//   },
//   size: 3
// }

// 테일에 항목 삽입하기
DoublyLinkedList.prototype.insertAtTail = function (value) {
  if (this.tail === null) {
    // 첫 번째 노드의 null 여부 확인
    this.tail = new DoublyLinkedListNode(value);
    this.head = this.tail;
  } else {
    let temp = new DoublyLinkedListNode(value);
    temp.prev = this.tail;
    this.tail.next = temp;
    this.tail = temp;
  }
  this.size++;
};

// 테스트
let dll2 = new DoublyLinkedList();
dll2.insertAtTail(10);
dll2.insertAtTail(12);
dll2.insertAtTail(20);
dll2.insertAtTail(30);
// console.log(dll2);
// DoublyLinkedList {
//   head: <ref *1> DoublyLinkedListNode {
//     data: 10,
//     next: DoublyLinkedListNode {
//       data: 12,
//       next: [DoublyLinkedListNode],
//       prev: [Circular *1]
//     },
//     prev: null
//   },
//   tail: <ref *2> DoublyLinkedListNode {
//     data: 30,
//     next: null,
//     prev: DoublyLinkedListNode {
//       data: 20,
//       next: [Circular *2],
//       prev: [DoublyLinkedListNode]
//     }
//   },
//   size: 4
// }

// 헤드에 항목 삭제하기
DoublyLinkedList.prototype.deleteAtHead = function () {
  let toReturn = null;
  if (this.head !== null) {
    toReturn = this.head.data;
    if (this.tail === this.head) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }
  }
  this.size--;
  return toReturn;
};

// 테일에 항목 삭제하기
DoublyLinkedList.prototype.deleteAtTail = function () {
  let toReturn = null;

  if (this.tail !== null) {
    toReturn = this.tail.data;
    if (this.tail === this.head) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
  }
  this.size--;
  return toReturn;
};

// 테스트
let dll3 = new DoublyLinkedList();
dll3.insertAtHead(10);
dll3.insertAtHead(12);
dll3.insertAtHead(20);
dll3.insertAtTail(30);
dll3.deleteAtTail();
// console.log(dll3);
// DoublyLinkedList {
//   head: <ref *1> DoublyLinkedListNode {
//     data: 20,
//     next: DoublyLinkedListNode {
//       data: 12,
//       next: [DoublyLinkedListNode],
//       prev: [Circular *1]
//     },
//     prev: null
//   },
//   tail: <ref *2> DoublyLinkedListNode {
//     data: 10,
//     next: null,
//     prev: DoublyLinkedListNode {
//       data: 12,
//       next: [Circular *2],
//       prev: [DoublyLinkedListNode]
//     }
//   },
//   size: 3
// }

// 헤드부터 검색
DoublyLinkedList.prototype.findStartingHead = function (value) {
  let currentHead = this.head;
  while (currentHead.next) {
    if (currentHead.data == value) {
      return true;
    }
    currentHead = currentHead.next;
  }
  return false;
};

// 테스트
let dll4 = new DoublyLinkedList();
dll4.insertAtHead(10);
dll4.insertAtHead(12);
dll4.insertAtHead(20);
dll4.insertAtTail(30);
// console.log(dll4.findStartingHead(10)); // true
// console.log(dll4.findStartingHead(100)); // false

// 테일부터 검색
DoublyLinkedList.prototype.findStartingTail = function (value) {
  let currentTail = this.tail;
  while (currentTail.prev) {
    if (currentTail.data === value) {
      return true;
    }
    currentTail = currentTail.prev;
  }
  return false;
};

// 테스트
let dll5 = new DoublyLinkedList();
dll5.insertAtHead(10);
dll5.insertAtHead(12);
dll5.insertAtHead(20);
dll5.insertAtTail(30);
// console.log(dll5.findStartingTail(10)); // true
// console.log(dll5.findStartingTail(100)); // false
