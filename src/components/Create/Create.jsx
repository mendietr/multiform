import React from "react";
import { addProduct } from "../../Redux/actions";
import {connect} from 'react-redux'
import {useHistory} from 'react-router-dom'

function Create({add}) {
    const initialState = {
        name: "",
        price: 0,
        location: "",
        seller: "",
    };

    let [input, setInput] = React.useState(initialState);

    let history = useHistory()

    let handleOnChange = (e) => {
        setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    };

    let handleOnSubmit = (e) => {
        e.preventDefault();
        add(input)
        setInput(initialState)
        history.push('/local')
    }

    return(
        <div>
            <h1>CREATE NEW PRODUCT</h1>
            <hr />
            <form onSubmit={handleOnSubmit}>
                <div>
                    <input
                        type='text'
                        name='name'
                        value={input.name}
                        onChange={handleOnChange}
                        />
                </div>
                <input type='submit' value='CREATE' disabled={!input.name? true : false}
                />

    <div>
        <label> NAME: </label>
        <input
        type='text'
        name= 'name'
        value={input.name}
        onChange={handleOnChange}
        />
    </div>
    <div>
        <label> PRICE: </label>
        <input
        type='number'
        name= 'price'
        value={input.price}
        onChange={handleOnChange}
        />
    </div>
    <div>
        <label> SELLER: </label>
        <input
        type='text'
        name='seller'
        value={input.seller}
        onChange={handleOnChange}
        />
    </div>
    <div>
        <label> LOCATION: </label>
        <input
        type='text'
        name= 'location'
        value={input.location}
        onChange={handleOnChange}
        />
        </div>  
        <input type='submit' value="CREATE" disabled={!input.name? true : false}/>        
            </form>
        </div>
    );
}

function mapDispatchToProps (dispatch){
    return{
        add: input => dispatch(addProduct(input))
    }
}

export default connect(null, mapDispatchToProps)(Create);
