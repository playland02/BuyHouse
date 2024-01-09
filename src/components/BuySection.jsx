
import { useGetHouse } from "../hooks/useGetHouse"

import { useState } from "react"

import Alerts from "./Alerts"


//css 
import './styles/BuySection.css'


function BuySection() {

    const [url, setUrl] = useState('http://localhost:5000/houses')
    const [page, setPage] = useState(0)

    const { data: house, loading } = useGetHouse(url)

    //style-inline
    const img_bg = {
        backgroundImage: `url(${house && house[page].url_file})`
    }



    return (
        <>
            {loading === true && <Alerts error='Carregando aguarde...' type='error' />}
            <div className="page-buy">
                <div className="img-house" style={img_bg}></div>
                <div className="container-buy">
                    <p>{house && house[page].description}</p>
                </div>

            </div>

        </>
    )


} export default BuySection