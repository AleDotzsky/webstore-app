import { Route, Routes } from 'react-router-dom';
import Home from '../views/Home';
import Login from '../views/Login';
import DetailView from '../views/DetailView';
import DisplaySearch from '../views/DisplaySearch';
import Signup from '../views/Signup';


const MainBody = () => {
    
    return (
        <Routes>
            <Route exact path="/" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/displaysearch" element={<DisplaySearch />} />
            <Route path="/detailview" element={<DetailView />} />
            <Route path='/cart'></Route>
            <Route path="/signup" element={<Signup />} />
        </Routes>
    )
}

export default MainBody;