import './Header.scss'
import {NavLink} from 'react-router-dom'

const Header = () => {
    const linkIsActive = (isActive) => isActive ? 'header__item-link header__item-link--is-active' : 'header__item-link';
    return (
        <>
                <nav className='header'>
                    <NavLink className='header__logo' to='/'>Logo</NavLink>
                    <ul className='header__nav-list'/>
                        <li className='header__list-item'>
                            <NavLink className= {({isActive})=> linkIsActive(isActive)} to='/home'>Home</NavLink>
                        </li>
                        <li className='header__list-item'>
                            <NavLink className= {({isActive})=> linkIsActive(isActive)} to='/Dashboard'>Dashboard</NavLink>
                        </li>
                        <li className='header__list-item'>
                            <NavLink className={({isActive})=> linkIsActive(isActive)} to='/Secret'>Secret</NavLink>
                        </li>
                        <li className='header__list-item'>
                            <NavLink className={({isActive})=> linkIsActive(isActive)} to='/Login'>Login</NavLink>
                        </li>
                        <li className='header__list-item'>
                            <NavLink className='header__item-link ' to='/Sign'>Sign up</NavLink>
                        </li>
                        
                </nav>
        </>
    )
}

export default Header;