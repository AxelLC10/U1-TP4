// 1. Crea un array llamado 'productos' con 5 nombres de artículos de tecnología
const productos = ["Televisor", "Computadora", "Auriculares", "Teclado", "Tablet"];

console.log("--- Recorrido con FOR clásico ---");
// 2. Implementa un bucle for clásico que recorra el array
// Pista: usa productos.length para saber el límite
for (let i = 0; i < productos.length; i++) {
    // Imprime: "Producto [indice]: [nombre]"
    console.log("posición " + i + ": " + productos[i]);
}

console.log("\n--- Recorrido con FOR...OF ---");
// 3. Implementa un bucle for...of para recorrer el mismo array
// Pista: for (const item of lista)
for (const producto of productos) {
    // Imprime: "🏷️ [nombre]"
    console.log("🏷️ " + producto);
}