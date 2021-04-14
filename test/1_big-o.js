// O(1)
function oone(n) {
  console.log(n);
}

// oone(5);

// O(n)

function exampleLinear(n) {
  for (let i = 1; i <= n; i++) {
    console.log("exampleLinear: ", i);
  }
}
// exampleLinear(5);

// O(n^2)

function exampleQuadratic(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
    for (let j = i; j < n; j++) {
      console.log(j);
    }
  }
}
// exampleQuadratic(3);

// O(n^3)

function exampleCubic(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
    for (let j = i; j < n; j++) {
      console.log(j);
      for (let k = j; k < n; k++) {
        console.log(k);
      }
    }
  }
}
// exampleCubic(3);

// O(log n)

function exampleLogarithmic(n) {
  for (let i = 2; i <= n; i = i * 2) {
    console.log(i);
  }
}
// exampleLogarithmic(100);

// 계수 법칙

// function a(n) {
//   let count = 0;
//   for (let i = 0; i < n; i++) {
//     count += 1;
//   }
//   return count;
// }

// function a(n) {
//   let count = 0;
//   for (let i = 0; i < 5 * n; i++) {
//     count += 1;
//   }
//   return count;
// }

// function a(n) {
//   let count = 0;
//   for (let i = 0; i < n; i++) {
//     count += 1;
//   }
//   count += 3;
//   return count;
// }

// console.log(a(5));

// 곱의 법칙

// function a(n) {
//   let count = 0;
//   for (let i = 0; i < n; i++) {
//     count += 1;
//     for (let j = 0; j < 5 * n; j++) {
//       count += 1;
//     }
//   }
//   return count;
// }

// console.log(a(5));

// 다항 법칙

// function a(n) {
//   let count = 0;
//   for (let i = 0; i < n * n; i++) {
//     count += 1;
//   }
//   return count;
// }

// console.log(a(5));

//---------------------------------------

// 연습 문제

// 문제 1
function someFunction(n) {
  for (let i = 0; i < n * 1000; i++) {
    for (let j = 0; j < n * 20; j++) {
      console.log(i + j);
    }
  }
}

// O(n^2)

// 문제 2

function someFunction(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < n; k++) {
        for (let l = 0; l < 10; l++) {
          console.log(i + j + k + l);
        }
      }
    }
  }
}

// O(n^3)

// 문제 3

function someFunction(n) {
  for (let i = 0; i < 1000; i++) {
    console.log("hi");
  }
}

// O(1)

// 문제 4

function someFunction(n) {
  for (let i = 0; i < 10 * n; i++) {
    console.log(n);
  }
}

// O(logn)

// 문제 5

function someFunction(n) {
  for (let i = 1; i < n; i = i * 2) {
    console.log(n);
  }
}

// O(log 2n)

// 문제 6

function someFunction(n) {
  while (true) {
    console.log(n);
  }
}

// 무한?
