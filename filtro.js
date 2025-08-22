// Tenemos un li de productos

const productos = [
  { nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg" },
  { nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg" },
  { nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg" },
  { nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg" },
  { nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg" }
]
//corregimos nombres para mejor comprensión
const lista = document.getElementById("lista-de-productos");
const input = document.querySelector('input');
const botonDeFiltro = document.querySelector("button");

//mostramos productos con una función
mostrarProductos(productos);

botonDeFiltro.onclick = function () {
  while (lista.firstChild) {
    lista.removeChild(lista.firstChild);
  }

  const texto = input.value;
  console.log(texto);
  const productosFiltrados = filtrado(productos, texto);
  //optimizamos con una función
  mostrarProductos(productosFiltrados);
}

const filtrado = (productos = [], texto) => {
  return productos.filter(item => 
    item.tipo.includes(texto) || 
    item.color.includes(texto));
}

function mostrarProductos(productos = productosFiltrados) {
  
  for (let i = 0; i < productos.length; i++) {
    //cambiamos nombres para mejor comprensión
    const div = document.createElement("div");
    div.classList.add("producto");

    var titulo = document.createElement("p");
    titulo.classList.add("titulo");
    titulo.textContent = productos[i].nombre;

    var imagen = document.createElement("img");
    imagen.setAttribute('src', productos[i].img);

    div.appendChild(titulo);
    div.appendChild(imagen);

    lista.appendChild(div);
  }
  
}