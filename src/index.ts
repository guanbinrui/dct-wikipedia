import nums from './dct/nums.json';
import matrix from './dct/quantization_matrix.json';
import { dct, idct } from './dct';

const coeffiences = dct(nums);
const quantizedCoeffiences = coeffiences.map((co, i) =>
  Math.round(co / matrix[i])
);
const decodedCoeffiences = quantizedCoeffiences.map((co, i) => co * matrix[i]);
const decodedNums = idct(decodedCoeffiences).map(num => num + 128);

console.log(coeffiences);
console.log(quantizedCoeffiences);
console.log(decodedCoeffiences);
console.log(decodedNums);
