const TABLE = [1, 2, 3];
const TABLE2 = [4, 5, 6];

console.log(...TABLE);

const TABLE3 = [...TABLE, ...TABLE2];
console.log(TABLE3);

function add(...arg) {
  let result = 0;

  arg.forEach((number) => (result += number));

  return result;
}

console.log(add(1, 2, 3, 4, 5, 6, 4, 9, 8));
