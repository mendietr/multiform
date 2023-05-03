import {ADD_PRODUCT, GET_PRODUCTS} from './actionTypes.js'

export function addProduct (payload) {
    return {
        type: ADD_PRODUCT,
        payload
    }
}

export function loading (){
    return {
        type: "LOADING"
    }
}

export function getProducts () {
    return function (dispatch){
        dispatch(loading())
        return fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then(res => {
            dispatch({
                type: GET_PRODUCTS,
                payload: res

            })
        })
    }
}

export function deleteProduct (id) {
    return {
        type: 'DELETE',
        payload: id
    }
}

export function getProductsById (productId) {
    return function (dispatch){
        dispatch(loading())
        return fetch(`https://jsonplaceholder.typicode.com/photos/${productId}`)
        .then(res => res.json())
        .then(res => {
            dispatch({
                type: "GET_PRODUCTS_BY_ID",
                payload: res

            })
        })
    }
}

export function clearDetail () {
    return{
        type: 'CLEAR'
    }
}