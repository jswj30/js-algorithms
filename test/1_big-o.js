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

function a(n) {
  let count = 0;
  for (let i = 0; i < n; i++) {
    count += 1;
  }
  count += 3;
  return count;
}

console.log(a(5));
