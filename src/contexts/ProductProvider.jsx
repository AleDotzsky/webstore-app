import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState, createContext } from "react";
import { GetDbProducts, GetDbSingleProduct } from "../services/ProductRepo";

export const ProductContext = createContext();

const ProductProvider = (props) => {
    const [productList, setProductList] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState();
    const [selectedId, setSelectedId] = useState();
    const [cartProducts, setCartProducts] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        getProducts("");
    }, [])

    const changePageSearch = () => {
        navigate("/displaysearch");
    }

    const changePageDetails = () => {
        navigate("/detailview")
    }

    const getProducts = async (searchVal) => {
        let products = await GetDbProducts(searchVal);
        setProductList(products);
    }

    const chooseProduct = (productId) => {
        setSelectedId(productId);
        getSingleProduct(productId);
    }

    const getSingleProduct = async (productId) => {
        let product = await GetDbSingleProduct(productId);
        setSelectedProduct(product);
    }

    return (
        <ProductContext.Provider value={{getProducts, productList, chooseProduct, selectedProduct, getSingleProduct, selectedId, 
        changePageSearch, changePageDetails}}>
            {props.children}
        </ProductContext.Provider>
    );
}

export default ProductProvider;