function isVow(a){
// Mi propuesta inicial: 

  /*let newString = "";
  let result = "";
  
  for ( let i = 0; i < a.length; i++) {
    let character = String.fromCharCode(a[i]);
    if (character === "a" || character === "e"|| character === "i" || character === "o" || character === "u" || character === "A" || character === "E"|| character === "I" || character === "O" || character === "U" ) {
      newString += `${character}, `;
    } else {
    newString += `${a[i]}, `;
    }
  } 
  return newString;*/

// corrección: 
 for (let i = 0; i < a.length; i++) {
    let char = String.fromCharCode(a[i]);
    if ('aeiou'.includes(char)) {
      a[i] = char;
    }
  }
  return a;
}