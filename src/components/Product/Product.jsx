import React from "react"
import {Link} from 'react-router-dom'

function Product(props) {
    let {id} = props

    return (
        <div>
        <h2> NAME: <Link to= {`/product/${id}`}>{props.name}</Link> </h2>
        <h4> PRICE: {props.price} </h4>
        </div>
        )
    }

    export default Product