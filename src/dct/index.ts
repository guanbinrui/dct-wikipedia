// MORE:
// https://en.wikipedia.org/wiki/JPEG

const ONE_SQUARE_ROOT_OF_TWO = 1 / Math.sqrt(2);

// type-II DCT
export function dct(nums: number[], size: number = 8) {
  const coefficients: number[] = [];

  for (let v = 0; v < size; v += 1) {
    for (let u = 0; u < size; u += 1) {
      const au = u === 0 ? ONE_SQUARE_ROOT_OF_TWO : 1;
      const av = v === 0 ? ONE_SQUARE_ROOT_OF_TWO : 1;
      let sum = 0;

      for (let y = 0; y < size; y += 1) {
        for (let x = 0; x < size; x += 1) {
          sum +=
            nums[y * size + x] *
            Math.cos(((2 * x + 1) * u * Math.PI) / 16) *
            Math.cos(((2 * y + 1) * v * Math.PI) / 16);
        }
      }
      coefficients.push((sum * au * av) / 4);
    }
  }
  return coefficients;
}

// type-III DCT
export function idct(coefficients: number[], size: number = 8) {
  const nums: number[] = [];

  for (let y = 0; y < size; y += 1) {
    for (let x = 0; x < size; x += 1) {
      let sum = 0;

      for (let v = 0; v < size; v += 1) {
        for (let u = 0; u < size; u += 1) {
          const au = u === 0 ? ONE_SQUARE_ROOT_OF_TWO : 1;
          const av = v === 0 ? ONE_SQUARE_ROOT_OF_TWO : 1;

          sum +=
            au *
            av *
            coefficients[v * size + u] *
            Math.cos(((2 * x + 1) * u * Math.PI) / 16) *
            Math.cos(((2 * y + 1) * v * Math.PI) / 16);
        }
      }

      nums.push(sum / 4);
    }
  }
  return nums;
}
