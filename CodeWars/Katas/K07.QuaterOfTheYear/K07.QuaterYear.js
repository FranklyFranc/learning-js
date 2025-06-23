/* 
Primera propuesta ( NF)

const quarterOf = (month) => {
  // Your code here
  if ( 1 <= month <= 3) {
    return 1;
  } else if ( 4 <= month <= 6) {
    return 2;
  } else if ( 7 <= month <= 9) {
    return 3;
  } else if ( 10 <= month <= 12) {
    return 4;
    } else {
      return 'Insert a number between 1 and 12.'
    }
}
    */

const quarterOf = (month) => {
  // Your code here
  return Math.ceil(month / 3);
}
