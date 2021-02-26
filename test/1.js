// O(n)
function exampleLinear(n) {
  for (var i = 0; i < n; i++) {
    console.log(i);
  }
}

// O(n제곱)
function exampleQuadratic(n) {
  for (var i = 0; i < n; i++) {
    console.log(i);
    for (var j = i; j < n; j++) {
      console.log(j);
    }
  }
}

// O(n세제곱)
function exampleCubic(n) {
  for (var i = 0; i < n; i++) {
    console.log(i);
    for (var j = i; j < n; j++) {
      console.log(j);
      for (var k = j; k < n; k++) {
        console.log(k);
      }
    }
  }
}

exampleCubic(3);
