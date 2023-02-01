import { ProductContext } from "../../contexts/ProductProvider";
import { useContext } from "react";
import "./DetailView.css";

const DetailView = () => {
    const{selectedProduct} = useContext(ProductContext)

    return(
        <>
            {selectedProduct &&
                <div className="product-detail">
                    <div className="product-detail__image-container">
                        <img src={require(`${selectedProduct.image}`)} 
                        alt="product"
                        className="product-detail__image" />
                    </div>
                    <div className="product-detail__info">
                        <h1 className="product-detail__title">{selectedProduct.name}</h1>
                        <div className="product-detail__description">
                            beskrivning av produkt
                        </div>
                        <div className="product-detail__reviews">
                            <h2 className="product-detail__reviews-title">Product Reviews</h2>
                            <p>review</p>
                        </div>
                        <button className="product-detail__add-to-cart-button">Add to cart</button>
                    </div>
                </div>
            }
        </>
    )
}

export default DetailView;