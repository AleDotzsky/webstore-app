import { useState, createContext } from "react";

export const ProductContext = createContext();

const ProductProvider = (props) => {
const [productList, setProductList] = useState();



    return (
        <ProductContext.Provider value={{}}>
            {props.children}
        </ProductContext.Provider>
    );
}

export default ProductProvider;