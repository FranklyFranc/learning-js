function evenOrOdd(number) {
  const status = number % 2 === 0; 
  if (status === true){
    return "Even";
  } else {
    return "Odd";
  }
}