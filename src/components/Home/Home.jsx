import React from "react";
import ApiProducts from "../ApiProducts/ApiProducts";
import LocalProduct from '../../components/LocalProduct/LocalProduct.jsx'

function Home({name, location}) {
    return (
        <div>
            <h2>Este es el nuevo {name} </h2>
            <LocalProduct/>
            <ApiProducts/>

        </div>
    )
}

export default Home