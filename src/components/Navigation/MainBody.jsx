import { Route, Routes } from 'react-router-dom';
import Home from '../views/Home';
import Login from '../views/Login';
import SearchResult from '../views/SearchResult';


const MainBody = () => {
    
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/searchresult" element={<SearchResult />} />
        </Routes>
    )
}

export default MainBody;