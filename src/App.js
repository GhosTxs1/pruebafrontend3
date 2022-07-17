import Header from './components/Header';
import Main from './components/Main';
import Carrito from './components/Carrito';
import data from './data';
import { useState } from 'react';


function App() {
  const {productos} = data;
  const [itemsCarrito, setItemsCarrito] = useState([]);
  const onAdd = (producto) => {
    const exist = itemsCarrito.find(x => x.id === producto.id);
    if(exist) {
      setItemsCarrito(
        itemsCarrito.map(x =>
          x.id === producto.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setItemsCarrito([...itemsCarrito, {...producto, qty: 1}]);
    }
  }
  const onRemove = (producto) => {
    const exist = itemsCarrito.find((x) => x.id === producto.id);
    if(exist.qty === 1) {
      setItemsCarrito(itemsCarrito.filter((x)=> x.id !== producto.id));
    } else{
      setItemsCarrito(
        itemsCarrito.map(x =>
          x.id === producto.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  }
  return (
    <div className="App">
      <Header></Header>
      <div className='row'>
        <Main onAdd={onAdd} productos={productos}></Main>
        <Carrito onAdd={onAdd} onRemove={onRemove} itemsCarrito={itemsCarrito}></Carrito>
      </div>
    </div>
  );
}

export default App;
