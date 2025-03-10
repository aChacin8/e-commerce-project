import './App.css';
import Home from '@/pages/home';
import Header from '@/components/header/Header';
import RoutesIndex from '@/routes/RoutesIndex';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from '@/context/AuthContext';
import { useState } from 'react';

function App() {
  const [searchItem, setSearchItem] = useState('');

  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Header setSearchItem={setSearchItem}/>
          <RoutesIndex searchItem={searchItem}/>
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App;
