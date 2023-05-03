import React from "react";
import {Link} from 'react-router-dom'

function NavBar() {
    return (
        <div>
            <ul>
                <li>
                    <Link to='/'> HOME </Link>
                </li>
                <li>
                    <Link to='/about'> ABOUT </Link>
                </li>
                <li>
                    <Link to='/create'> CREATE</Link>
                </li>
            </ul>
        </div>
    )
}

export default NavBar