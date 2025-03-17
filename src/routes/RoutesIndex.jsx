import {Routes, Route} from 'react-router-dom';
import {Home, Dashboard, Secret, Login, Sign} from '@/pages';
import { useAuthContext } from '@/hooks/useAuthContext';
import ShoppingCart from '@/pages/ShoppingCart';


const RoutesIndex = ({searchItem}) => {
    const {isAuth} = useAuthContext();

    return ( 
        <Routes>
            <Route path='/' element= {<Home searchItem={searchItem}/>}/>
            <Route path='/Cart' 
            element = {
            isAuth
                ?<ShoppingCart/>
                : <Login/>
            }/>
            <Route path='/Dashboard' 
            element= {
            isAuth
                ? <Dashboard/>
                : <Login/>
            }
            />
            <Route path='/Secret' 
            element={ 
            isAuth 
                ? <Secret/> 
                : <Login/>
            }
            />
            <Route path='/Login' element= {<Login/>}/>  
            <Route path='/Sign' element= {<Sign/>}/>
        </Routes>
    )
}

export default RoutesIndex;