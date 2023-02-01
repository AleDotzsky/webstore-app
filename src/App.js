import MainBody from './components/Navigation/MainBody';
import NavBar from './components/Navigation/NavBar';
import ProductProvider from './contexts/ProductProvider';
import UserProvider from './contexts/UserProvider';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  

  return (
    <UserProvider>
      <ProductProvider>
        <NavBar />
        <MainBody />
      </ProductProvider>
    </UserProvider>
  );
}

export default App;
