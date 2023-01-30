import { Route, Routes } from 'react-router-dom';
import Home from '../views/Home';
import Login from '../views/Login';
import DisplaySearch from '../views/DisplaySearch';


const MainBody = () => {
    
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/displaysearch" element={<DisplaySearch />} />
        </Routes>
    )
}

export default MainBody;