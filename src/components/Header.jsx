import React from "react";

export default function header(props){
    return (
        <header className="row block-titulo">
            <div>
                <a>
                    <h1>Todo Computacion.</h1>
                </a>
                <a>
                    <h2>Tienda especializada en Informatica</h2>
                </a>
            </div>
            <div>
                <a href="/#">Historial de Compras</a>
            </div>
        </header>
    )
}