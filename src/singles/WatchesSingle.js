import NavBar from "../stores/components/NavBar";
import { watchData } from "../stores/data/watch"; 
import { useParams } from "react-router-dom";
import { useCart } from "../stores/context/CartContext";
import Footer from "../stores/components/Footer";

const WatchesSingle = () => {

    const {id} = useParams();

    const {addToCart, cartItems} = useCart();

    const product = watchData.find((eachitem)=>{return eachitem.id === id});

    

    return(
        <>
        <NavBar/>
        <div className="ind-section">
            <div className="ind-image">
                <img src={product.image} alt="img"></img>
            </div>
            <div className="ind-details">
                <div className="ind-company space"><h2>{product.company}</h2></div>
                <div className="ind-model space">
                    <h3>{product.model}</h3>
                 </div>
                <div className="ind-price space">
                <h2>{product.price}</h2>
                </div>
                <div className="ind-desc space">
                    <p>{product.description}</p>
                    </div>
            <button onClick={()=>addToCart(product)}>Add To Cart</button>
            </div>
        </div>
        <Footer />
        </>
    )
};

export default WatchesSingle;