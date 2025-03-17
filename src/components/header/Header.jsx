import './Header.scss'
import {NavLink} from 'react-router-dom';
import { useAuthContext } from '@/hooks/useAuthContext';

const Header = ({setSearchItem}) => {
    const {isAuth, logout} = useAuthContext();

    const linkIsActive = (isActive) => isActive ? 'header__item-link header__item-link--is-active' : 'header__item-link';
    
    const handleSearchChange = (e) => {
        setSearchItem (e.target.value);
    }


    return (
        <>
                <nav className='header'>
                    <NavLink className='header__logo' to='/'>Market Libre</NavLink>
                    <ul className='header__nav-list'/>
                        <li className='header__list-item'>
                            <NavLink className= {({isActive})=> linkIsActive(isActive)} to='/'>Home</NavLink>
                        </li>
                        <li className='header__list-item'>
                            <NavLink className={({ isActive }) => linkIsActive(isActive)} to='/Cart'>Shop</NavLink>                                
                        </li>

                        {isAuth 
                        ?(
                            <>
                                <li className='header__list-item'>
                                <NavLink className= {({isActive})=> linkIsActive(isActive)} to='/Dashboard'>Dashboard</NavLink>
                                </li>
                                <li className='header__list-item'>
                                    <NavLink className={({ isActive }) => linkIsActive(isActive)} to='/Secret'>Secret</NavLink>
                                </li>
                                <li className='header__list-item'>
                                    <NavLink className='header__item-link' onClick={logout}>Logout</NavLink>
                                </li>
                            </>
                        )
                        :(
                            <div className='header__list-div'>
                                <li className='header__list-item px-4'>
                                    <NavLink className={({ isActive }) => linkIsActive(isActive)} to='/Login'>Login</NavLink>
                                </li>
                                <li className='header__list-item'>
                                    <NavLink className={({ isActive }) => linkIsActive(isActive)} to='/Sign'>Sign up</NavLink>
                                </li>
                            </div>
                        )}
                        
                        <form>
                            <input 
                            type="text" 
                            placeholder='Search'
                            onChange={handleSearchChange}
                            className='header__search'
                            />
                        </form>
                </nav>
        </>
    )
}

export default Header;