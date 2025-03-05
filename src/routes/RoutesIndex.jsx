import {Routes, Route} from 'react-router-dom';
import {Home, Dashboard, Secret, Login, Sign} from '@/pages';


const RoutesIndex = () => {
    return ( 
        <Routes>
            <Route path='/' element= {<Home/>}/>
            <Route path='/Dashboard' element= {<Dashboard/>}/>
            <Route path='/Secret' element= {<Secret/>}/>
            <Route path='/Login' element= {<Login/>}/>  
            <Route path='/Sign' element= {<Sign/>}/>
        </Routes>
    )
}

export default RoutesIndex;