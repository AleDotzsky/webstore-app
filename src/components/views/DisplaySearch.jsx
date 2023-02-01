import { ProductContext } from '../../contexts/ProductProvider';
import { useContext } from 'react';
import "./DisplaySearch.css";


const ProductCard = ({product}) => {
    const{chooseProduct, changePageDetails} = useContext(ProductContext);

    return(
        <div className='product-card'>
            <img src={require(`${product.data.image}`)} alt="" />
            <h3>{product.data.name}</h3>
            <p>Price: {product.data.price}</p>
            <button onClick={() => {
                changePageDetails();
                chooseProduct(product.id)
            }}>View Details</button>
        </div>
    )
}

const SearchResult = () => {
    const{productList} = useContext(ProductContext);

    return(
        <div className='search-result'>
            {productList && productList.map((product) => (
                <ProductCard product={product} />
            ))}
        </div>
        
    )
}

export default SearchResult;