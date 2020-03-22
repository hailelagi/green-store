import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
/* import brand_logo from '../'; */

/* TODO add brand logo svg */

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark px-sm-5">
                <Link to="/">
                    {/*<img src={logo} alt="store"/>*/}
                    <i className="fas fa-home"></i>
                </Link>

                <Ul className="navbar-nav.align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/">Store Products</Link>
                    </li>
                    <li className="search-bar nav-item ml-5">
                        <input placeholder="search for stuff"/>
                        <Link to="/"> <button>
                            <i className="fas fa-search"></i>
                        </button> </Link>
                    </li>
                    <li className="nav-item ml-5">
                        <Link to="/Product">Profile</Link>
                    </li>
                    <li className="nav-item ml-5">
                        <Link to="/cart">
                            <ButtonContainer>
                                <i className="fas fa-shopping-cart">
                                </i>
                            </ButtonContainer>
                        </Link>
                    </li>
                </Ul>
            </nav>

        );
    }
}

const ButtonContainer = styled.button`
text-transform: capitalize;
font-size: 1.4rem;
background: transparent;
border: 0.5px solid;
border-radius: 5px;
color: var(--mainGrey);
padding: 0.2em 0.5rem;
cursor: pointer;
margin; 0.2rem 0.5rem 0.2rem 0;
transition: all 0.5s ease-in-out;
&:hover{
  background: var(--lightBlue);
  color: var(--mainDark)
 }
&:focus {
  outline: none;
 }
`;

const Ul = styled.ul`
list-style-type: none;
`

export default Navbar;