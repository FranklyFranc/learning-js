// my proposal: 

function removeEveryOther(arr){
  //your code here
  let oddNumbers = [];
  let pairNumbers  = [];

  for (let i = 0; i < arr.length; i++) {
    if ( i % 2 === 0) {
      oddNumbers.push(arr[i]);
    };
  }
  return oddNumbers;
}

// #2

function removeEveryOther(arr) {
  return arr.filter((_, index) => index % 2 === 0);
}

// #3

function removeEveryOther(arr) {
  return arr.reduce((acc, current, index) => {
    if (index % 2 === 0) acc.push(current);
    return acc;
  }, []);
}
