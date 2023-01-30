import { ProductContext } from '../../contexts/ProductProvider';
import { useContext } from 'react';
import "./DisplaySearch.css";

const ProductCard = ({product}) => {
    return(
        <div className='product-card'>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <button>View Details</button>
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