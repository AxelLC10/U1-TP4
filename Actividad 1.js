// 1. Crea un array de al menos 4 productos de tecnología
let inventario = ["Televisor", "Computadora", "Auriculares", "Teclado"]; 

// 2. Accede al primer y al tercer elemento usando sus índices
// Muéstralos en la consola con console.log

console.log(inventario[0]);
console.log(inventario[2]);

// 3. ¡Actualización! El primer producto ahora es un "Monitor 32\" Curvo"
// Modifícalo usando su índice (recordando que empezamos en 0)

inventario[0] = "Monitor 32\" Curvo";

// 4. El último producto (índice 3) se agotó y lo reemplazamos por "Micrófono Condensador"
// Modifica el elemento en la posición 3

inventario.pop(); // Elimina el último elemento
inventario.push("Micrófono Condensador"); // Agrega el nuevo elemento a lo ultimo

inventario[3] = "Micrófono Condensador"; // nose como queres que lo haga, yo lo hice asi

// 5. Muestra el array completo al final para verificar los cambios
console.log("Inventario actualizado:", inventario);