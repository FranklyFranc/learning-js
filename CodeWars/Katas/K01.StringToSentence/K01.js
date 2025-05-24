// Mi propuesta: 

function sayHello( name, city, state ) {
  let fullName = name.join(" ");  
  return `Hello, ${fullName}! Welcome to ${city}, ${state}!`;
}


// Best Practice: 

function sayHello( name, city, state ) {
return `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`
}