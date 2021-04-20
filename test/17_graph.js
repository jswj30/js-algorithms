// 무지향성 그래프 생성
function UndirectedGraph() {
  this.edges = {};
}

// 정점 추가하기
UndirectedGraph.prototype.addVertex = function (vertex) {
  this.edges[vertex] = {};
};

// 간선에 가중치 저장하기
UndirectedGraph.prototype.addEdge = function (vertex1, vertex2, weight) {
  if (weight == undefined) {
    weight = 0;
  }
  this.edges[vertex1][vertex2] = weight;
  this.edges[vertex2][vertex1] = weight;
};

// 테스트
let graph1 = new UndirectedGraph();
graph1.addVertex(1);
graph1.addVertex(2);
graph1.addEdge(1, 2, 1);
graph1.addVertex(3);
graph1.addVertex(4);
graph1.addVertex(5);
graph1.addEdge(2, 3, 8);
graph1.addEdge(3, 4, 10);
graph1.addEdge(4, 5, 100);
graph1.addEdge(1, 5, 88);
// console.log(graph1);

// 간선 삭제하기
UndirectedGraph.prototype.removeEdge = function (vertex1, vertex2) {
  if (this.edges[vertex1] && this.edges[vertex1][vertex2] != undefined) {
    delete this.edges[vertex1][vertex2];
  }
  if (this.edges[vertex2] && this.edges[vertex2][vertex1] != undefined) {
    delete this.edges[vertex2][vertex1];
  }
};

// 정점 삭제하기(정점과 관련된 간선도 같이 삭제된다.)
UndirectedGraph.prototype.removeVertex = function (vertex) {
  for (let adjacentVertex in this.edges[vertex]) {
    this.removeEdge(adjacentVertex, vertex);
  }
  delete this.edges[vertex];
};

// 테스트
let graph2 = new UndirectedGraph();
graph2.addVertex(1);
graph2.addVertex(2);
graph2.addEdge(1, 2, 1);
graph2.addVertex(3);
graph2.addVertex(4);
graph2.addVertex(5);
graph2.addEdge(2, 3, 8);
graph2.addEdge(3, 4, 10);
graph2.addEdge(4, 5, 100);
graph2.addEdge(1, 5, 88);
graph2.removeVertex(5);
graph2.removeVertex(1);
graph2.removeEdge(2, 3);
// console.log(graph2);

// 지향성 그래프 생성
function DirectedGraph() {
  this.edges = {};
}

// 정점 추가하기
DirectedGraph.prototype.addVertex = function (vertex) {
  this.edges[vertex] = {};
};

// 간선 추가하기
DirectedGraph.prototype.addEdge = function (origVertex, destVertex, weight) {
  if (weight === undefined) {
    weight = 0;
  }
  this.edges[origVertex][destVertex] = weight;
};

// 테스트
// let digraph1 = new DirectedGraph();
// digraph1.addVertex("A");
// digraph1.addVertex("B");
// digraph1.addVertex("C");
// digraph1.addEdge("A", "B", 1);
// digraph1.addEdge("B", "C", 2);
// digraph1.addEdge("C", "A", 3);
// console.log(digraph1);

// 간선 삭제하기
DirectedGraph.prototype.removeEdge = function (origVertex, destVertex) {
  if (
    this.edges[origVertex] &&
    this.edges[origVertex][destVertex] != undefined
  ) {
    delete this.edges[origVertex][destVertex];
  }
};

// 정점 삭제하기
DirectedGraph.prototype.removeVertex = function (vertex) {
  for (let adjacentVertex in this.edges[vertex]) {
    this.removeEdge(adjacentVertex, vertex);
  }
  delete this.edges[vertex];
};

// 테스트
// let digraph1 = new DirectedGraph();
// digraph1.addVertex("A");
// digraph1.addVertex("B");
// digraph1.addVertex("C");
// digraph1.addEdge("A", "B", 1);
// digraph1.addEdge("B", "C", 2);
// digraph1.addEdge("C", "A", 3);
// digraph1.removeEdge("C", "A");
// digraph1.removeVertex("A");
// console.log(digraph1);

// 너비 우선 검색(BFS)
DirectedGraph.prototype.traverseBFS = function (vertex, fn) {
  let queue = [],
    visited = {};

  queue.push(vertex);

  while (queue.length) {
    vertex = queue.shift();
    if (!visited[vertex]) {
      visited[vertex] = true;
      fn(vertex);
      for (let adjacentVertex in this.edges[vertex]) {
        queue.push(adjacentVertex);
      }
    }
  }
};

// 테스트
// let digraph1 = new DirectedGraph();
// digraph1.addVertex("A");
// digraph1.addVertex("B");
// digraph1.addEdge("A", "B", 1);
// digraph1.addVertex("C");
// digraph1.addVertex("E");
// digraph1.addEdge("B", "C", 2);
// digraph1.addEdge("B", "E", 3);
// digraph1.addVertex("D");
// digraph1.addEdge("C", "D", 4);
// digraph1.addVertex("G");
// digraph1.addVertex("F");
// digraph1.addEdge("D", "G", 5);
// digraph1.addEdge("D", "F", 6);
// digraph1.addVertex("H");
// digraph1.addVertex("J");
// digraph1.addEdge("G", "H", 7);
// digraph1.addEdge("F", "J", 8);
// console.log(digraph1);
// digraph1.traverseBFS("B", (vertex) => {
//   console.log(vertex);
// });

// 깊이 우선 검색(DFS)
DirectedGraph.prototype.traverseDFS = function (vertex, fn) {
  let visited = {};
  this._traverseDFS(vertex, visited, fn);
};

DirectedGraph.prototype._traverseDFS = function (vertex, visited, fn) {
  visited[vertex] = true;
  fn(vertex);
  for (let adjacentVertex in this.edges[vertex]) {
    if (!visited[adjacentVertex]) {
      this._traverseDFS(adjacentVertex, visited, fn);
    }
  }
};

// 테스트
// let digraph1 = new DirectedGraph();
// digraph1.addVertex("A");
// digraph1.addVertex("B");
// digraph1.addEdge("A", "B", 1);
// digraph1.addVertex("C");
// digraph1.addVertex("E");
// digraph1.addEdge("B", "C", 2);
// digraph1.addEdge("B", "E", 8);
// digraph1.addVertex("D");
// digraph1.addEdge("C", "D", 3);
// digraph1.addVertex("G");
// digraph1.addVertex("F");
// digraph1.addEdge("D", "G", 4);
// digraph1.addEdge("D", "F", 6);
// digraph1.addVertex("H");
// digraph1.addVertex("J");
// digraph1.addEdge("G", "H", 5);
// digraph1.addEdge("F", "J", 7);
// console.log(digraph1);
// digraph1.traverseDFS("B", (vertex) => {
//   console.log(vertex);
// });

// 다익스트라의 알고리즘: 최단경로
function _isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

function _extractMin(Q, dist) {
  let minimumDistance = Infinity,
    nodeWithMinimumDistance = null;
  for (let node in Q) {
    if (dist[node] <= minimumDistance) {
      minimumDistance = dist[node];
      nodeWithMinimumDistance = node;
    }
  }
  return nodeWithMinimumDistance;
}

DirectedGraph.prototype.Dijkstra = function (source) {
  // 정점 집합 Q를 생성한다.
  let Q = {},
    dist = {};
  for (let vertex in this.edges) {
    // 모르는 거리는 무한으로 설정한다.
    dist[vertex] = Infinity;
    // v를 Q에 추가한다.
    Q[vertex] = this.edges[vertex];
  }
  // 출발점에서 출발점까지의 거리를 0으로 설정한다.
  dist[source] = 0;

  while (!_isEmpty(Q)) {
    let u = _extractMin(Q, dist); // 최소 거리를 얻는다.

    // Q로부터 u를 제거한다.
    delete Q[u];

    // v가 여전히 Q에 있는 한
    // u의 각 이웃 v에 대해 다음을 수행한다.
    for (let neighbor in this.edges[u]) {
      // 현재 거리
      let alt = dist[u] + this.edges[u][neighbor];
      // 더 짧은 경로가 발견됐다.
      if (alt < dist[neighbor]) {
        dist[neighbor] = alt;
      }
    }
  }
  return dist;
};

// 테스트
var digraph1 = new DirectedGraph();
digraph1.addVertex("A");
digraph1.addVertex("B");
digraph1.addVertex("C");
digraph1.addVertex("D");
digraph1.addEdge("A", "B", 1);
digraph1.addEdge("B", "C", 1);
digraph1.addEdge("C", "A", 1);
digraph1.addEdge("A", "D", 1);
console.log(digraph1);
console.log(digraph1.Dijkstra("A"));
