function evenOrOdd(number) {
  const status = number % 2 === 0; 
  if (status === true){
    return "Even";
  } else {
    return "Odd";
  }
}

// Otra forma, más sencilla, menos legible

function evenOrOdd(number) {
  return number % 2 === 0 ? 'Even' : 'Odd';
}