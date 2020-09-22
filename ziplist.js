function zipList(a, b) {
  const result = [];
  for (let i = 0; i < a.length; i++) {
    result.push(a[i]);
    result.push(b[i]);
  }
  return result;
}

const a = ['a', 'b', 'c'];
const b = [1, 2, 3];

console.log(zipList(a, b));

function zipListTheSimpleWay(x, y) {
  return _.flatten(_.zip(x, y));
}

console.log(zipListTheSimpleWay(b, a));
