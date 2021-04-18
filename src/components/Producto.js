import React from 'react';

const Producto = ({producto, carrito, agregarProducto, productos}) => {
  const {id, nombre, precio} = producto;

  const selectProducto = (id) => {
    const producto = productos.filter((producto) => producto.id === id)[0];
    agregarProducto([...carrito, producto]);
  };

  const deleteProducto = (id) => {
    const productos = carrito.filter((producto) => producto.id !== id);
    agregarProducto(productos);
  };

  return (
    <div>
      <h2>{nombre}</h2>
      <p>{precio}</p>

      {productos ? (
        <button type="button" onClick={() => selectProducto(id)}>
          Comprar
        </button>
      ) : (
        <button type="button" onClick={() => deleteProducto(id)}>
          Eliminar
        </button>
      )}
    </div>
  );
};

export default Producto;
