# React + Vite

Desarrollo de Gestion de Alumnos:

Puntos y orden en desarrollo:

Cada punto llevara un commit individual

1-Importar en el index las librerias de Bootstrap y RemixIcons. Borrar contenido de App.jsx y poner un 'HolaMundo'.jsx. Añadir Librerias de Lodash, Formik. Borrar archivos css y svg de serie del proyecto.

2- Crear componente con el boton, el modal y el formulario para añadir alumno con las caracteristicas solicitadas por el tutor del ejercicio.
3- Crear tabla y mostrar el contenido de los alumnos. Poner una columna para mostrar iconos de opciones de edicion y eliminación de alumno.
4- Crear componente para editar alumno.
5- Crear funcionalidad para eliminar alumno.
6- Introducir la funcionalidad de orden de alumnado



Contenido bruto del ejercicio: 
Hay que hacer un ejercicio más complejo que los vistos hasta ahora.


Aviso de antemano de que sería normal si algunas de las partes no sepas cómo hacerlas. La idea es avanzar en tántas como te sean posibles, intentando cumplir el objetivo lo más cercano al 100%, y luego presentarlo y ver qué faltaba para conseguirlo, o ver los de otros compañeros.


El ejercicio es el siguiente:

Crear un listado de alumnos, que debe tener los siguientes campos. Algunos deberán cumplir unos requisitos específicos, pero todos obligatorios:

- Nombre
- Apellidos
- Edad (solo mayores de 18 años)
- Curso elegido [de una lista previamente dada]
- Fecha de inscripción [en formato dd/mm/aaaa]
- Nota media alumno [número con 2 decimales]
- Porcentaje de curso completado [se debe mostrar con una barra de progreso que incluya el porcentaje]
- Botónes para eliminar el alumno de la lista o para editar sus datos

Además de la lista, es necesario un formulario para añadir alumnos a la lista. Al formulario se accederá con un botón de Nuevo alumno que mostrará una ventana flotante (modal), que al crear al alumno o cancelar se quitará.

También se podrá pulsar el botón de editar a cada alumno, lo que nos volverá a mostrar una ventana flotante para actualizar los datos.

El listado de alumnos se almacenará en la LocalStorage.


Como extra ya tocapelotas, los alumnos se ordenarán por apellido por defecto, y habrá un dropdown que permitirá cambiar el orden, para que se pueda ordenar por curso elegido, o por porcentaje completado, o por nota media además de por apellido. Y dentro de esto, se podrá elegir si se quiere dicho orden ascendente o descendente.


Importante para conseguir todo esto utilizar bootstrap, y recomendado también el uso de lodash para no reinventar la rueda.





  


