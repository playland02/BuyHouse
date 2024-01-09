import { useState, useContext, useRef } from 'react'

//react-router
import { NavLink } from 'react-router-dom'


//css
import './styles/Home.css'

//custom hook
import { useGetHouse } from '../hooks/useGetHouse'


//contexts
import { UserContext } from '../contexts/UserContext'



//components
import BuySection from '../components/BuySection'
import SellSection from '../components/SellSection'
import Alerts from '../components/Alerts'






function Home() {

    //contexts
    const { user } = useContext(UserContext)

    //states
    const [section, setSection] = useState('buy')




    //refs
    const buy_ref = useRef()
    const sell_ref = useRef()


    //actives
    function onClickBuyBtn() {

        buy_ref.current.className = 'active'
        sell_ref.current.className = ''
        setSection('buy')


    }

    function onClickSellBtn() {
        sell_ref.current.className = 'active'
        buy_ref.current.className = ''
        setSection('sell')
    }




    return (
        <>
            <main className='container-home'>
                <nav className="nav-home">
                    <div className='buy-sell-btn'>
                        <button onClick={onClickBuyBtn} ref={buy_ref} className='active' >Comprar</button>
                        <button onClick={onClickSellBtn} ref={sell_ref} className='' >Vender</button>


                    </div>
                    <div className="profile-nav">
                        <button className="btn-profile">Perfil</button>
                        <button>X</button>
                    </div>
                </nav>
                <section className="section-home">

                    {section === 'buy' && <BuySection/>}
                    {section === 'sell' && <SellSection/>}
                </section>
            </main>


        </>
    )
}
export default Home