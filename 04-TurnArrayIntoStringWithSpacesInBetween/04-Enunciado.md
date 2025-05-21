Sentence Smash
Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!


Exemple:
['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'

🧠 Lo que aprendí

- Método: .join()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join

The join() method of Array instances creates and returns a new string by concatenating all of the elements in this array, separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.

Syntax:

join()
join(separator)

Parameters

separator (Optional)
A string to separate each pair of adjacent elements of the array. If omitted, the array elements are separated with a comma (",").

Return value
A string with all array elements joined. If array.length is 0, the empty string is returned.


💬 
- Analizar el problema planteado, reducirlo a acciones (pasos), antes de continuar, si veo que es muy elaborado, directamente buscar métodos que no conoza porque puede haber uno que lo solucione todo. 