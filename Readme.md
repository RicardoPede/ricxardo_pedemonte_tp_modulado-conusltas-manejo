# Ejercicio de modelado, consultas y manejo de archivos

## Crea una aplicación de gestión de libros utilizando Node.js, MongoDB, Mongoose, Express.js 
## y express-fileupload. La aplicación debe permitir a los usuarios realizar las siguientes acciones:

1. Agregar un libro: Los usuarios deben poder agregar un nuevo libro proporcionando
información como título, género, año de publicación y una imagen de portada del libro.
Además, deberán seleccionar el autor del libro desde una lista desplegable de autores
existentes.

2. Agregar un autor: Los usuarios deben poder agregar un nuevo autor proporcionando
información como nombre, apellido y una breve biografía.

3. Ver lista de libros: Los usuarios deben poder ver una lista de todos los libros almacenados
en la base de datos, incluyendo su título, género y el nombre del autor.

4. Subir imágenes de portada: Los usuarios deben poder subir imágenes de portada para
cada libro utilizando express-fileupload. Tener en cuenta que se debe almacenar la ruta
de la imagen que se subió en el servidor.

5. Agrupación de libros por género: Implementa una funcionalidad para agrupar los libros
por género y mostrar cuántos libros hay en cada categoría.

6. Eliminar libros y autores: Los usuarios deben poder eliminar libros y autores de la base de
datos.

### Requisitos:
 Utiliza MongoDB para almacenar los datos de libros y autores en dos colecciones
separadas.

 Utiliza Mongoose como ODM (Object Data Modeling) para definir y gestionar los modelos
de datos de libros y autores.

 Utiliza Express.js para crear las rutas y la lógica de la aplicación.

 Utiliza express-fileupload para gestionar la subida de imágenes de portada de los libros.

 Implementa las operaciones CRUD (Crear, Leer, Actualizar, Eliminar) tanto para libros
como para autores.

 Crea una vista web simple para interactuar con la aplicación. Puedes utilizar HTML, CSS y
JavaScript o solamente probar las funcionalidades con postman.


## Empecemos
# Instalación de nuestras dependencias
Para la instalación de nuestras dependencias ejecutar los siguientes comandos:
```bash
npm init
npm install express mongoose --save
```
