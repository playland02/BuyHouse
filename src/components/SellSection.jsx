//react
import { useState, useContext } from 'react'


import axios from 'axios'
//css
import './styles/SellSection.css'



//contexts
import { UserContext } from '../contexts/UserContext'

//hooks


//components
import Alerts from './Alerts'




const URL = 'http://localhost:3000/houses'


function SellSection() {

    const { user } = useContext(UserContext)



    //states
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(false)

    const [price, setPrice] = useState('')
    const [location, setLocation] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('')



    async function onClickSubmit(event) {
        event.preventDefault()
        setLoading(true)

        const formdata = new FormData()


        formdata.append('price', price)
        formdata.append('location', location)
        formdata.append('description', description)
        formdata.append('thumbnail', image)




        let config = {
            method: "POST",
            headers: {
                "Content-type": "multipart/form-data boundary=MyBoundary",
                'user_id': '6592ec159637c03d58a78e59'
            },
            body:{"thumbnail":formdata.get('thumbnail')}
        }
        console.log(config)

        const res = await fetch(URL, config)
        const json = await res.json()
        setData(json)
        console.log(json)

        setLoading(false)

    }


    return (
        <>
            <div className="page-sell">
                <div className="branch">
                    <h1>BUY-HOUSE</h1>
                    <p>{user.name},anuncie sua casa!.</p>
                </div>

                <form className='form-sell' onSubmit={onClickSubmit}>
                    <fieldset>
                        <legend>Preço</legend>
                        <label htmlFor="price">
                            <input onChange={(e) => setPrice(e.target.value)} value={price} type="text" name='price' id='price' />
                        </label>
                    </fieldset>
                    <fieldset>
                        <legend>Localização</legend>
                        <label htmlFor="location">
                            <input onChange={(e) => setLocation(e.target.value)} value={location} type="text" name='location' id='location' />
                        </label>
                    </fieldset>
                    <fieldset>
                        <legend>Descrição</legend>
                        <label htmlFor="description">
                            <input onChange={(e) => setDescription(e.target.value)} value={description} type="text" name='description' id='description' />
                        </label>
                    </fieldset>
                    <fieldset>
                        <legend>Foto</legend>
                        <label htmlFor="thumbnail">
                            <input onChange={(e) => setImage(e.target.files[0])} type="file" name='thumbnail' id='thumbnail' />
                        </label>
                    </fieldset>

                    <button type='submit'>Criar</button>
                </form>
            </div>
        </>
    )


} export default SellSection