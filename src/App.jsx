import './App.css';
import Home from '@/pages/home';
import Header from '@/components/header/Header';
import RoutesIndex from '@/routes/RoutesIndex';
import { BrowserRouter } from 'react-router-dom';

function App() {


  return (
    <>
      <BrowserRouter>
        <Header />
        <RoutesIndex />
      </BrowserRouter>
    </>
  )
}

export default App;
