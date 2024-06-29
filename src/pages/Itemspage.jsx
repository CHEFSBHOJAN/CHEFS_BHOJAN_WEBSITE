
import DisplayGenre from "../components/DisplayGenre"
import { CartProvider } from "../contexts/CartContext"

function ItemsPage() {

    return (
        <CartProvider>
            <DisplayGenre />
        </CartProvider>
    )
}

export default ItemsPage