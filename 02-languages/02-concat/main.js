//1. CONCAT

const concat = (a, b) => [...a, ...b];
console.log(concat([1, 2, 3], [4, 5, 6]));

const betterConcat = (...props) => [props.join()];
console.log(betterConcat([1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12], ['a', 'b', 'c']));