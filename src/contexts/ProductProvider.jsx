import { useState, createContext } from "react";
import GetDbProducts from "../services/ProductRepo";

export const ProductContext = createContext();

const ProductProvider = (props) => {
    const [productList, setProductList] = useState();

    const getProducts = async (searchVal) => {
        let products = await GetDbProducts(searchVal);
        setProductList(products);
    }

    return (
        <ProductContext.Provider value={{getProducts, productList}}>
            {props.children}
        </ProductContext.Provider>
    );
}

export default ProductProvider;