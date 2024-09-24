import categoryIcon from "../assets/images/icons8-menu.svg";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="header">
            <div className="container">
                <Link to="/categories" className="btn-category">                        
                    <img src={categoryIcon} alt="Menu button" />
                </Link>
            </div>
        </header>
    );
}

export default Header;
