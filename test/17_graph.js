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
console.log(graph2);
