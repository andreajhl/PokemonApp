
# PokeApp

 Esta es mi primera aplicacion Full Stack, esta realizada consumiento datos de la API 'pokeapi' para llenar la base de datos, en ella pcontras con 40 pokemons como base pero podes buscar mas, crear pokemons propios, adicionar a favoritos y contas con distintos tipos de filtrado
<br>
<br>

### CLONAR REPOSITORIO
<hr>

* #### $ git clone https://github.com/andreajhl/PokemonApp.git
<br>
<br>

### PROBAR
<hr>

### Después de clonar este repositorio.

* Ingresar a la carpeta del proyecto desde tu editor de codigo favorito.
* Abre la consola del proyecto
* En la terminal del proyecto ejecute la línea de comando, 'npm install'
* Al culminar la instalacion ejecute 'npm start' para arrancar el proyecto.
<br>
<br>

### TECNOLOGIAS USADAS
<hr>

* #### HTML5
* #### SASS
* #### Javascript
* #### ReactJS
* #### Redux
* #### ExpressJS
* #### NodeJs
* #### Sequelize
* #### PostgreSQL



<br>
<br>

### PANTALLAS DEL PROYECTO Y USOS
<hr>

* ### Home
<br>

 Al iniciar la app, encontraras una pagina de bienvenida, al dar click en la pokebola vas a ingresar al home, alli encontraras la barra de navegacion que posee cuatro items, tenes una barra lateral, la cual tiene opciones de ordenado, un input de busqueda y un paginado, realizado desde el front, que te muestra 12 pokemons por pagina
<br> 




<img src="client/src/gif/Inico.gif" width="800" height="400" />
<br>



* ### Creacion de Pokemons
<br>

 A traves de un formulario controlado, vas a poder crear tu propio pokemon, este se guardara en la base de datos asi siempre que ingreses a la pag se mantedran los cambios,  
<br>

<img src="client/src/gif/create.gif" width="800" height="400" />
<br>
<br>

* ### Busqueda y Ordenamiento
<br>

En la barra lateral vas a encontrar los botones para ordenar de manera ascendente o descendente ya sea por fuerza o alfabeticamente, tambien podes filtrar y ver solo tus creaciones o todos los pokemon
<br>
Constas con un input de busqueda, la aplicacion trae de base 40 pokemons, sin embargo, la base de datos cuenta con mas de 200 pokemons los cuales podes buscar por sus nombres y se adiccionaran a tu home, si buscas algun pokemon que ya esta en el home, no se repetiran las tarjetas solo se cambiara de posicion
<br>

<img src="client/src/gif/search.gif"  width="800" height="400">
<img src="client/src/gif/ordenados.gif"  width="800" height="400">
<br>
<br>

* ### Tipos
<br>

En esta sección vas a encontrar un listado de los 20 tipos o generos de pokemons con los que cuenta la base de datos y podes buscar desde alli a los pokemons de cada clase
<br>

<img src="client/src/gif/tipos.gif"  width="800" height="400">
<br>
<br>

* ### Detalles
<br>

Si gustas ver mas detalles de algun pokemon, basta con dar click sobre la tarjeta y te redirige a una nueva oantalla con datos extras como peso, puntos de vida, entre otros del pokemon seleccionado
<br>

<img src="client/src/gif/details.gif"  width="800" height="400">
<br>
<br>

* ### Favoritos
<br>

Por ultimo tenes la seccion de favoritos, en ella podes guardar todos los pokemons que gustes al darle click al corazon que tiene cada tarjeta, si posteriormente quieres borrarlos basta con darles a la 'x'
<br>

<img src="client/src/gif/addFav.gif"  width="800" height="400">