const mergeSort = (input) => merge(split(input));

const split = (input) => {
  if (input.length === 1) { 
    return input;
  }

  if (input.length === 2) {
    if (input[0] === undefined || input[0] === null) {
      return [input[1], input[0]];
    } else if (input[1] === undefined || input[1] === null) {
      return [input[0], input[1]];
    } else if (input[1] > input[0]) {
      return input;
    } else {
      return [input[1], input[0]];
    }
  }

  return merge(
    split(input.slice(0, input.length / 2)),
    split(input.slice(input.length / 2)),
  );
};

const merge = (left, right) => {
  if (!right) { return left; }

  let result = [];
  let idxLeft = 0;
  let idxRight = 0;
  let leftVal;
  let rightVal;

  while (true) {
    leftVal = left[idxLeft];
    rightVal = right[idxRight];

    if (idxLeft === left.length) {
      result = result.concat(right.slice(idxRight));
      break;
    } else if (idxRight === right.length) {
      result = result.concat(left.slice(idxLeft));
      break;
    } else if (leftVal === undefined || leftVal === null) {
      result.push(rightVal);
      idxRight += 1;
    } else if (rightVal === undefined || rightVal === null) {
      result.push(leftVal);
      idxLeft += 1;
    } else if (leftVal > rightVal) {
      result.push(rightVal);
      idxRight += 1;
    } else {
      result.push(leftVal);
      idxLeft += 1;
    }
  }

  return result;
};

module.exports.mergeSort = mergeSort;
