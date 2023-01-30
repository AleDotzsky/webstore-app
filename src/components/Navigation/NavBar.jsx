import { NavLink, useNavigate } from 'react-router-dom';
import './NavBar.css';
import { useRef, useContext } from 'react';
import { ProductContext } from '../../contexts/ProductProvider';

const NavBar = () => {
    const navigate = useNavigate();
    const{getProducts} = useContext(ProductContext);
    const searchVal = useRef();

    const handleClick = () => {
        navigate("/displaysearch");
    }

    return(
        <>
            <nav className='navbar'>
                <NavLink to="/" className="logo">TopStyle</NavLink>
                <div className='search-bar-button'>
                    <input type="text" ref={searchVal} placeholder="Sök produkter" />
                    <button onClick={() => {
                        handleClick();
                        getProducts(searchVal.current.value)
                        }}>Sök</button>
                </div>               
                <NavLink to="/login">Logga in</NavLink>
            </nav>
        </>
    )
}

export default NavBar;