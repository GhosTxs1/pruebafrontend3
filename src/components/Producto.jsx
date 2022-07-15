import React from 'react'

export default function Producto(props) {
    const {producto, onAdd}=props;
  return (
    <div>
        <h3>{producto.nombre}</h3>
        <div>${producto.precio} CLP</div>
        <div>
            <button onClick={()=>onAdd(producto)} >Añadir al Carrito</button>
        </div>
    </div>

  )
}
