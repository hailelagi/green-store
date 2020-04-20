import React, {Component} from 'react';
import {Link} from 'react-router-dom';

/* import brand_logo from '../'; */

/* TODO add brand logo svg */
/* TODO update router links */
/* TODO styling of icons and link text */

class Navbar extends Component {
    render() {
        return (
            <nav className="bg-dark navbar-dark">
                <ul className="navbar-nav">
                    <li>
                        <Link to="/">
                    {/*<img src={logo} alt="store"/>*/}
                    <i className="fas fa-home"/>
                        </Link>
                    </li>
                    <li>
                        <Link to="/products">
                            <i className="fas fa-seedling"/>
                        </Link>
                    </li>
                    <li className="search-bar">
                        <input placeholder="search for stuff"/>
                        <Link to="/products"> <button>
                            <i className="fas fa-search"/>
                        </button> </Link>
                    </li>
                    <li>
                        <Link to="/profile">
                            <i className="fas fa-user"/>
                        </Link>
                    </li>
                    <li>
                        <Link to="/cart">
                            <button>
                                <i className="fas fa-cart-plus">
                                </i>
                            </button>
                        </Link>
                    </li>
                </ul>
            </nav>

        );
    }
}

export default Navbar;