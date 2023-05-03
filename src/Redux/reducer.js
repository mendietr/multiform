import {ADD_PRODUCT, GET_PRODUCTS} from './actionTypes'

const initialState = {
    products : [],
    productDetail: {},
    localProduct: [],
    loading: false,
    description: false
}

let localId = 5001

export default function reducer (state = initialState, action) {
    switch(action.type){
        case ADD_PRODUCT:
            return {
                ...state,
                localProduct: [...state.localProduct, {...action.payload, id: localId++}]

            }
        case GET_PRODUCTS:
            return {
                ...state,
                loading:false,
                products: action.payload
            }
        case 'LOADING':
            return {
                ...state,
                loading: true
            }
        case 'DELETE':
            return {
                ...state,
                products: state.products.filter(el => el.id !==action.payload),
                localProduct: state.localProduct.filter(el => el.id !== action.payload)
            }
        case 'GET_PRODUCTS_BY_ID':
            return {
                ...state,
                loading: false,
                products: [action.payload],
                productDetail: action.payload
            }
        case 'CLEAR':
            return{
                ...state,
                productDetail: {}
            }
        
            default:
                return state
    }
}