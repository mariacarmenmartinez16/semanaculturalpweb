document.addEventListener('DOMContentLoaded', iniciar);//cuando el documento haya cargardo completamente, al menos su estructura principal, textos, botones, divs..., entonces ejecuta iniciar

function iniciar() {
        fetch("productos.json") //busca el archivo json, que contiene datos estructurados
        .then(response => {
            return response.json();//fech trae los datos pero en formato string y hay que pasarlos a objetos response.json() sirve para convertir esos datos en un objeto JavaScript que ya puedes usar.
        })
        .then(datos=> { //este segundo .then recibe los datos ya listos, aquí le decimos que cuando tengas los datos llámame a la función cargar() y dale esos datos para que los muestre en la página
            cargar(datos);
        })
        .catch(error => console.log(error));//sirve para evitar que el programa se rompa si ocurre un error. Por ejemplo si el archivo productos.json no existe, muestra el error enla consola, nada más
    }

function cargar(datos) { 

    const productosArray = datos || []; //si datos existe, úsalo si datos no existe, usa un array vacio[], esto evita que el programa falle si hay problemas con los datos.

    const listadoproductos = document.querySelector('.listado-productos');// busca un elemento en el html que tenga la clase listado-productos
    if (listadoproductos) {
        listadoproductos.innerHTML = ''; //esto borra todo dentro del contenedor. es útil si quieres recargar la información sin duplicarla
    }
    console.log(productosArray);
    console.log( datos);
       
       productosArray.forEach(producto => {//esto toma cada producto del archivo JSON y lo mete en la variable producto. si tienes 10 productos, esta parte se ejecuta 10 veces

        //genera el html dinámicamente todo este bloque se agrega dentro de la página. Crea el html para mostrar los productos//
			listadoproductos.innerHTML+=`    
			<div class="producto">//crea un div para cada producto
			  <img src="img/${producto.imagen}">//muestra la imagen que está en la carpeta /img
			  <div class="texto-producto">
				<h3>${producto.nombre}</h3>//muestra el nombre, la descripción y el precio
				<p>${producto.descrip}</p>
				<p class="precio">${producto.precio}</p>
				<a class="btn" href="#">Agregar al Carrito</a> //añade un botón agregar al carrito
			</div>
			</div>`
           
        });
    }
