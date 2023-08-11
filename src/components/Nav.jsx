import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

function NavHeader() {
    return (
        <header>
            <h1 className="animated-heading">C<span>r</span>e<span>a</span>t<span>o</span>r<span>v</span>e<span>r</span>s<span>e</span></h1>
            <nav>
                <ul>
                    <li>
                        <Link to={"/"}>
                            <button role="button">Show all Creators</button>
                        </Link>
                    </li>
                    <li>
                        <Link to={"/new"}>
                            <button role="button">Add a Creator</button>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default NavHeader;
