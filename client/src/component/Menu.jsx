
import {NavLink} from "react-router-dom";

const Menu = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg  bg-body-tertiary">
            <div className="container ">
                <ul className="nav justify-content-center">
                    <li className="nav-item">
                        <NavLink className="nav-link" to={"/"}>ALl Blog</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link"  to={"/create"}>Create Blog</NavLink>
                    </li>
                </ul>
            </div>
            </nav>
        </div>

    );
};

export default Menu;