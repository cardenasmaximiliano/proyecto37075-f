

import './App.css';
import CartWidget from './components/header/Cartwidget';
import NavBar from './components/header/NavBar';
import Banner from './components/main/Banner';
import ItemListContainer from './container/ItemListContainer';
import auri1 from './container/ItemListContainer/img/auri1.png';
import auri2 from './container/ItemListContainer/img/auri2.png';
import auri3 from './container/ItemListContainer/img/auri3.jpg';

  function App() {
    return (
      <div classNameName="App">
        <header className='container-fluid'>
          <div className='row'>
            <div className='col-9'>
            <NavBar />
            </div>
            <div className='col-3 d-flex justify-content-end'>
              <CartWidget />
          </div>
          </div>
        </header>
        <main className='container-fluid main-style'>
          <Banner />
          <section className='d-flex row'>
            <h2>Ofertas</h2>
            <div className='container d-flex justify-content-around'>
                <ItemListContainer precio={2000} nombre={"philips"} img={auri1}/>
                <ItemListContainer precio={3000} nombre={"sony"} img={auri2} />
                <ItemListContainer precio={4000} nombre={"jbl"} img={auri3} />
            </div>
          </section>
        </main>
      </div>
    );
  }

export default App;
