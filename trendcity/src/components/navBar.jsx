import { CartItem } from "./cartItem";

function NavBar(){

    return(
        <div className="navbar">
            <h1>Trendcity</h1>
            <ul>
                <li><a href="#">Remeras</a></li>
                <li><a href="#">Shorts</a></li>
                <li><a href="#">Zapatillas</a></li>
            </ul>
            <CartItem/>
        </div>
    )
}

export default NavBar;