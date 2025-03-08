import {Routes, Route} from 'react-router-dom';
import {Home, Dashboard, Secret, Login, Sign} from '@/pages';
import { useAuthContext } from '@/hooks/useAuthContext';


const RoutesIndex = () => {
    const {isAuth} = useAuthContext();

    return ( 
        <Routes>
            <Route path='/' element= {<Home/>}/>
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