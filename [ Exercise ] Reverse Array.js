// Create a function that reverses an array
const StringArray = ["Madrid,", "Sydney", "Athabasca", "Copenhagen", "Leeds"];

function ReverseArray(array) {
  let tempArray = [];
  while (array.length > 0) {
    let removed = array.pop();
    tempArray.push(removed);
  }
  return tempArray;
}

console.log(ReverseArray(StringArray));
