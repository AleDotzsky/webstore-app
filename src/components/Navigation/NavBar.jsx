import { NavLink } from 'react-router-dom';
import './NavBar.css';
import { useRef, useContext } from 'react';
import { ProductContext } from '../../contexts/ProductProvider';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
    const{getProducts, changePageSearch} = useContext(ProductContext);
    const searchVal = useRef();
    const element = <FontAwesomeIcon icon={faCartShopping} />

    return(
        <>
            <nav className='navbar'>
                <NavLink to="/" className="logo">TopStyle</NavLink>
                <div className='search-bar-button'>
                    <input type="text" ref={searchVal} placeholder="Sök produkter" />
                    <button className='search-button' onClick={() => {
                        changePageSearch();
                        getProducts(searchVal.current.value)
                        }}>Sök</button>
                </div>
                <div className='cart-login'>
                    <NavLink className="cart" to="/">{element}</NavLink> 
                    <NavLink className="login" to="/login">Logga in</NavLink>
                </div>               
            </nav>
        </>
    )
}

export default NavBar;