Enunciado: 
Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

🧠 

- Recordatorio: las arrays se comienzan a contar por 0, por lo tanto los elementos pares son los impares en la posición de la array. 

- Para hacerlo sin crear una nueva variable, hay métodos como .filter() / solución 2. 
esta solución sería la más clara y profesional.

    .filter() -> recorre el array original y mantiene solo aquellos elementos donde la condicion es true 
    
    En el ejemplo: 
    return arr.filter((_, index) => index % 2 === 0);
    ignoramos el valor del elemento _ 
    usamos index % 2 === 0 para quedarnos con los elementos en índice par

    .filter()

    arr.filter((elemento, índice, arrayOriginal) => {
  // devuelve true para mantener el elemento
})

    elemento -> valor actual del array
    índice -> posición del elemento dentro del array
    arrayOriginal -> el array completo ( no es obligatorio, por si se necesita)

    Cuando:
    arr.filter((_, index) => index % 2 === 0);

    Paso una función como argumento del método .filter()
    Esta función se ejecuta una vez por cada elemento del array
    Filter mantiene sólo los elementos para los que la función devuelve true 

    Función flecha 
    
    "=>" se usa para declarar una función que se ejecutará una vez por cada elemento del array. En este caso, filtra todos los elementos cuyo índice sea par (index % 2 === 0), y devuelve un nuevo array solo con esos."


- otra forma de resolverlo sería utilizando .reduce()
Esta funcionaría mejor si además de filtrarlos tenemos que modificar los elementos al mismo tiempo. 

    recorre el array y acumula los elementos deseados en un nuevo array
    solo se agregan aquellos cuyo índice sea par
    El segundo argumento es el valor inicial del acumulador: un array vacío. 

    .reduce()

    arr.reduce((acumulador, elemento, índice, arrayOriginal) => {
  // retorna el nuevo valor del acumulador en cada paso
}, valorInicial);

    acumulador -> el valor que va guardando lo que construyes
    elemento -> el valor actual que estás procesando
    índice -> posición del elemento
    arrayOriginal -> el array original
    valorInicial -> lo que tiene el acumulador al comenzar ( en este caso un array vacia [ ]  )

💬 
- Creé una variable pero probablemente hay algún método que muestra la arr original con los elementos eliminados sin necesidad de almacenarlos. 