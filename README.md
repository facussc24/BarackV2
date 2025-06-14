# BarackV2

Esta versión incluye una vista sencilla de AMFE.

## Uso

1. Abre `index.html` (o `amfe.html`) en un navegador.
2. La página leerá los datos almacenados en `localStorage` bajo la clave `amfe`.
   Si no existe ningún valor para esa clave, se cargará automáticamente un juego de datos de ejemplo y se guardará en tu navegador.
3. Se mostrará un spinner mientras se cargan los datos.
4. La tabla resultante es solo de lectura y puede refrescarse con el botón **Refrescar**.
5. Puedes exportar la vista actual a CSV con el botón **Exportar CSV**.

Si quieres definir tus propios registros, puedes sobrescribir los de ejemplo con el siguiente comando en la consola del navegador:
```javascript
localStorage.setItem('amfe', JSON.stringify([
  { ID: 1, Item: 'pieza',  ModoFalla: 'rotura' },
  { ID: 2, Item: 'pieza2', ModoFalla: 'desgaste' }
]));
```
