# BarackV2

Esta versión incluye una vista sencilla de AMFE.

## Uso

1. Abre `amfe.html` en un navegador.
2. La página leerá los datos almacenados en `localStorage` bajo la clave `amfe`.
3. Se mostrará un spinner mientras se cargan los datos.
4. La tabla resultante es solo de lectura y puede refrescarse con el botón **Refrescar**.

Los datos deben estar almacenados como un array de objetos JSON. Ejemplo:
```javascript
localStorage.setItem('amfe', JSON.stringify([
  {"ID":1,"Item":"pieza","ModoFalla":"rotura"},
  {"ID":2,"Item":"pieza2","ModoFalla":"desgaste"}
]));
```
