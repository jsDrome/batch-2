function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  if (a > b) return a - b;
  return b -a;
}

export {
  add,
  subtract,
};