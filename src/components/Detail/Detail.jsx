import React from "react"
import {useSelector, useDispatch} from 'react-redux'
import {getProductsById, clearDetail} from '../../Redux/actions.js'
import {useParams} from 'react-router-dom'


function Detail() {

    let params = useParams()

    let dispatch = useDispatch()

    let detail = useSelector(state => state.productDetail)

    let loading= useSelector (state => state.loading)

    React.useEffect(() => {
        dispatch(getProductsById(params.id))
        dispatch(clearDetail())
    }, [dispatch, params.id])

    return (
        <div>
            {loading? <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921" alt="Cargando..."/>
            : <div>
                <h3> Nombre: {detail.title} </h3>
                <img src={detail.url}alt="no se pudo cargar la imagen"/>
                </div>}
        </div>
        
    )
}

export default Detail