import './App.css';
import Home from '@/pages/home';
import Header from '@/components/header/Header';
import RoutesIndex from '@/routes/RoutesIndex';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from '@/context/AuthContext';

function App() {


  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <RoutesIndex />
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App;
