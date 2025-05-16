var summation = function (num) {
    return (num * (num + 1)) / 2;
  }
  
  // Mi primera solución: 

  var summation = function (num) {
    // Code here
    let suma = 0; 
    
    for ( let i = 0; i <= num; i++) {
      suma += i;
    }
    return suma;
  }
  