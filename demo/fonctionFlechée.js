function add(number1, number2) {
  return number1 + number2;
}

// Le "return" est implicite
const add2 = (number1, number2) => number1 + number2;

// Quand je met des '{}' après la flèche, le return n'est plus implicite
// J'ai donc besoin de l'écrire
const add3 = (number1, number2) => {
  return number1 + number2;
};

console.log(add(1, 2));
console.log(add2(1, 2));
