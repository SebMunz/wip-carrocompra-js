/*
[x]Crea una clase Producto con los atributos ‘nombre’ y ‘precio’.
[x]Crea la clase Carrito que tenga como atributo un arreglo para almacenar los productos seleccionados.
[x]Crea una función que permita agregar productos al carrito.
[x]Crea una función que permita calcular el total de la compra.
[x]Crea una función que permita finalizar la compra.
[x]Crea una función que permita mostrar los detalles de la compra.
[x]Valida que los datos que se ingresen correspondan con los productos vendidos y, de lo contrario, vuelve a solicitar al usuario que ingrese la información hasta que sea correcta.
[x]Permite que el usuario siga agregando productos al carrito hasta que decida no continuar agregando más.
[x]Verifica que código esté bien estructurado, siga buenas prácticas y sea fácil de entender.
*/

class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

class Carrito {
    constructor(){
        this.productos = [];
    }

    //Push para agregar producto
    agregarProducto(producto) {
        this.productos.push(producto);
    }
    
    //pop para deshacer último producto
    deshacerUltimoProducto(producto) {
        this.productos.pop(producto);
    }

    calcularTotal(){
        let total = 0;
        for (let producto of this.productos) {
            total += producto.precio;
        }
        return total;
    }

    mostrarDetalles() {
        if(this.productos.length  === 0){
            console.log("Carrito vacío.")
        } else {
            console.log("Carrito contiene: ");
            for (let producto of this.productos) {
                console.log(`${producto.nombre} - '$'${producto.precio}`);
            }
            console.log(`Total: '$'${this.calcularTotal()}`)
        }
    }

    finalizar(){
        const total = this.calcularTotal();
                console.log(`Su compra, con total de $${total}, ha finalizado`)
        this.productos = [];
    }

}

function iniciar() {
    const productosDisponibles = [
        new Producto ("🍎", 1250),
        new Producto ("🥦", 800),
        new Producto ("🍊", 1000),
        new Producto ("🍉", 4000),
        new Producto ("🥑", 2500)
    ];
    const carrito = new Carrito();
    let continuar = true;

//Listamos los productos, pedimos al usuario ingresar, validamos elección
    while (continuar){
        console.log("Productos Disponibles: ")
        //forEach para listarlos todos, index + 1 para mostrar su índice en números del 1 al 5
        productosDisponibles.forEach((producto, index)=> {
            console.log(`${index + 1}. ${producto.nombre} - $${producto.precio}`);
        });

        //Parseamos a Int, -1 al input del usuario para que coincida con el índice
        let productoSeleccionado = parseInt(prompt("Seleccione un producto del 1 al 5: ")) - 1

        if (productoSeleccionado >= 0 && productoSeleccionado < productosDisponibles.length) {
            carrito.agregarProducto(productosDisponibles[productoSeleccionado]);
            console.log(`${productoSeleccionado[productosDisponibles.nombre]} se ha agregado.`)
            carrito.mostrarDetalles()
        } else {
            console.log(`Producto seleccionado no disponible, inténtelo nuevamente.`)
            continue;
        }

        let eleccion = prompt("¿Desea continuar agregando productos (s), deshacer el último producto (d) o finalizar(n)?")
        if (eleccion === "d"){
            carrito.deshacerUltimoProducto();
        } else if(eleccion != "s") {
            continuar = false;
        } else {
            continuar = true
        }
        }

        carrito.mostrarDetalles();
        carrito.finalizar();
    }


iniciar();