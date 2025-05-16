# Ejercicio 01 - Suma del 1 al N

### Enunciado:
Escribe una función que sume todos los números del 1 hasta el número `n` (incluido).  
Ejemplo: `summation(4)` → `10` (1 + 2 + 3 + 4)

---

### 💡 Solución

```js
var summation = function (num) {
  return (num * (num + 1)) / 2;
}

🧠 Lo que aprendí

- Uso de bucles vs fórmula matemática de Gauss

💬 
- En el primer intento puse que i debía ser menor que la longitud de num, lo eliminé y fue cuando funcionó, no debía referirme al número de elementos, porque no era una serie de elementos, si no al valor del elemento en sí.
