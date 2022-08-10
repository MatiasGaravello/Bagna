# Instrucciones para utilizar la app BAGNA

Primero abra la aplicación Visual Studio Code y ejecute la siguiente instrucción:

### `git clone https://github.com/MatiasGaravello/bagna.git`

Esto descargará una serie de archivos en el directorio en el que usted se encuentre. 
Luego deberá descargar la aplicación Node.js desde https://nodejs.org/es/. Una vez instalado Node ejecute la siguiente instrucción:

### `npm install` 

Esto cargará todos los módulos necesarios para poder ejecutar la aplicación.

Para iniciar la aplicación ejecute el comando

### `npm start`

Se abrirá una pestaña en su navegador y podrá visualizar dicha app.

## Rutas 

"localhost/" muestra el componente el componente ItemListContainer con todos los productos.

"localhost/category/categoryId" muestra el componente ItemListContainer con los productos que pertenecen a la categoria indicada por el parámetro categoryId.

"localhost/detail/productId" muestra el componente ItemDetailContainer con la información del producto que contenga el id especificado por el parámetro productId

