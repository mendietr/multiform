import React from "react"
import {Link} from 'react-router-dom'
import Product from '../../components/Product/Product.jsx'
import {getProducts, deleteProduct, getProductsById} from '../../Redux/actions.js'
import {connect} from 'react-redux'


function ApiProducts(props) {

    let [productId, setProductId] = React.useState('')

    let handleChange = (e) => {
        setProductId(e.target.value)
    }
    let handleClick = (e, id) => {
        props.deleteProduct(id)
    }

    let handleById = () => {
        props.getProductsById(productId)
        setProductId('')
    }
    return (
        <div>
            {props.loading ? <img 
            src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921" 
            alt="Cargando..."/> : props.products?.map(el => (
                <div>
                    <Product 
                    key={el.id}
                    id={el.id}
                    name={el.title}
                    price={el.id}
                    />
                    <button onClick={(e)=> handleClick(e, el.id)}> DELETE </button>
                    </div>
                )) }
                <br/>
                <button onClick={()=>props.getProducts()}>GET API</button>

        <br/>
        <input
        type="text"
        id="productId"
        value={productId}
        onChange={handleChange}
        />
        <button onClick={()=> handleById()}>GET BY ID</button>

        </div>
    )
}

function mapStateToProps (state){
    return {
        products: state.products,
        loading: state.loading
    }
}

function mapDispatchToProps(dispatch){
    return{
        getProducts: () => dispatch(getProducts()),
        deleteProduct: id => dispatch(deleteProduct(id)),
        getProductsById: productId => dispatch(getProductsById(productId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ApiProducts)