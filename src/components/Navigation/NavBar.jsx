import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {


    return(
        <>
            <nav className='navbar'>
                <h2 className="logo">HEJSAN</h2>
                <div className='search-bar-button'>
                    <input type="text" placeholder="Sök produkter" />
                    <button onClick={() => searchProducts()}>Sök</button>
                </div>               
                <NavLink to="/login">Logga in</NavLink>
            </nav>
        </>
    )
}

export default NavBar;