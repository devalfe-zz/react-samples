import Carrito from './components/Carrito';
import Footer from './components/Footer';
import Header from './components/Header';
import Producto from './components/Producto';

import React, {useState} from 'react';

function App() {
  const initialState = [
    {
      id: 1,
      nombre: 'React js',
      precio: 50,
    },
    {
      id: 2,
      nombre: 'React jdds',
      precio: 20,
    },
    {
      id: 3,
      nombre: 'React jddds',
      precio: 30,
    },
  ];
  const initialCarrito = [];
  const [productos, guardarProductos] = useState(initialState);
  const [carrito, agregarProducto] = useState(initialCarrito);
  const fecha = new Date().getFullYear();
  return (
    <>
      <Header titulo="Tienda virtual" />

      <h1>lista de productos</h1>
      {productos.map((producto) => (
        <Producto
          key={producto.id}
          producto={producto}
          productos={productos}
          carrito={carrito}
          agregarProducto={agregarProducto}
        />
      ))}

      <Carrito carrito={carrito} agregarProducto={agregarProducto} />
      <Footer fecha={fecha} />
    </>
  );
}

export default App;
