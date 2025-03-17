import './App.css';
import Header from '@/components/header/Header';
import RoutesIndex from '@/routes/RoutesIndex';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from '@/context/AuthContext';
import { useState } from 'react';
import { ShoppingCartProvider } from './context/ShoppingCartContext';

function App() {
  const [searchItem, setSearchItem] = useState('');

  return (
    <>
      <AuthProvider>
      <ShoppingCartProvider>
      <BrowserRouter>
          <Header setSearchItem={setSearchItem}/>
          <RoutesIndex searchItem={searchItem}/>
        </BrowserRouter>
      </ShoppingCartProvider>
      </AuthProvider>
    </>
  )
}

export default App;
