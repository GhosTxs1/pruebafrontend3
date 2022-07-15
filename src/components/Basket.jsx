import React from "react";
export default function basket(props){
    const {itemsCarrito, onAdd, onRemove} = props;
    const subTotal = itemsCarrito.reduce((a, c) => a + c.precio * c.qty, 0);
    const precioTotal = subTotal
    return <aside className="block col-1">
        <h2>Productos en Carrito</h2>
        <div>
            {itemsCarrito.length === 0 && <div>Carrito Vacio</div>}
        </div>
        {itemsCarrito.map((item) => (
            <div key={item.id} className="row">
                <div className="col-2">{item.nombre}</div>
                <div className="col-2">
                    <button onClick={()=>onAdd(item)} >+</button>
                    <button onClick={()=>onRemove(item)} >-</button>
                </div>
                <div className="col-2 texto-derecha">
                    {item.qty} x ${item.precio}
                </div>
            </div>
        ))}
        {itemsCarrito.length !== 0 && (
            <>
                <hr></hr>
                <div className="row">
                    <div className="col-2">Subtotal</div>
                    <div className="col-1 texto-derecha">${subTotal}CLP</div>
                </div>          
                <div className="row">
                    <div className="col-2">
                        <strong>Precio Total</strong>
                    </div>
                    <div className="col-1 texto-derecha"><strong>${precioTotal}CLP</strong></div>
                </div>
                <hr></hr>
                <button>Finalizar Compra</button>
                
            </>
        )}
    </aside>
}