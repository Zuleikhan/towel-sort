
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (arguments.length === 0) return [];
  let newArr = [];

  matrix.map((item, index) => {
    if (index % 2 === 0) {
      newArr.push(...item);
    } else {
      newArr.push(...item.reverse());
    }
  });
  return newArr;
}
