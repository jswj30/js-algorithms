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
console.log(graph1);
