import MainBody from './components/Navigation/MainBody';
import NavBar from './components/Navigation/NavBar';
import ProductProvider from './contexts/ProductProvider';

function App() {

  

  return (
    <ProductProvider>
      <NavBar />
      <MainBody />
    </ProductProvider>

  );
}

export default App;
