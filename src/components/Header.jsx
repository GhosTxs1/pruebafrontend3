import React from "react";

export default function header(props){
    return (
        <header className="row block center">
            <div>
                <a href="#/">
                    <h1>Todo Computacion</h1>
                </a>
            </div>
            <div>
                <a href="#/cart"></a>
                <a href="#/signIn"></a>
            </div>
        </header>
    )
}