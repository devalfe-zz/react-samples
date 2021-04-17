import React, { Fragment, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Producto from './components/Producto';
import Carrito from './components/Carrito';


function App() {
  const initialState = [
    {
      id:1,
      nombre:'React js',
      precio:50
    },
    {
      id:2,
      nombre:'React jdds',
      precio:20
    },
    {
      id:3,
      nombre:'React jddds',
      precio:30
    }
  ]
  const initialCarrito = []
  const [productos, guardarProductos] = useState(initialState)
  const [carrito, agregarProducto] = useState(initialCarrito)
  const fecha = new Date().getFullYear();
  return (
    <Fragment>
      <Header
        titulo='Tienda virtual'
      />

      <h1>lista de productos</h1>
      {productos.map(producto=> (
        <Producto
          key={producto.id}
          producto={producto}
          productos={productos}
          carrito={carrito}
          agregarProducto={agregarProducto}
        />
      ))}

      <Carrito
        carrito={carrito}
         agregarProducto={agregarProducto}
      />
      <Footer
        fecha={fecha}
      />
    </Fragment>
  );
}

export default App;
