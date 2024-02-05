import { useEffect } from 'react';
import './App.css';
import { useTelegram } from './hooks/useTelegram';
import Header from './components/header/Header';
import { Route, Routes } from 'react-router-dom';
import ProductList from './components/productList/ProductList';
import Form from './components/form/Form';
import Way from './components/way/Way';

function App() {
  const {tg, onToggleButton} = useTelegram()

  useEffect(() => {
    tg.ready();
  }, [])

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<ProductList />}/>
        <Route path={'form'} element={<Form />}/>  
        <Route path={'way'} element={<Way/>}/>
      </Routes>     
    </div>
  );
}

export default App;
