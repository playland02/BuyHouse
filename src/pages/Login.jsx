import { useContext, useState } from 'react'

import { Navigate, useNavigate } from 'react-router-dom'


//components
import Alerts from '../components/Alerts'

//css
import './styles/Login.css'

//context
import { UserContext } from '../contexts/UserContext'



const URL = 'http://localhost:3000/auth'





const Login = () => {


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [alert, setAlert] = useState(null)

    const navigate = useNavigate()
    const { setUser } = useContext(UserContext)


    let config = {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({ email: email, password: password }),
    }

    async function onClickSubmit(event) {
        event.preventDefault()

        const post = await fetch(URL, config)
        const res = await post.json()

        if (res.status === 'ok') {
            
            setUser(res.user)
            navigate('/')
            
        } else {
            setAlert(res.status)
        }
    }


    return (
        <>
            {alert && <Alerts error='Email ou senha estão invalidos' type={'error'} />}
            <section className="container-register">
                <div className="card">
                    <div className="card-header">
                        <h2> Login</h2>
                    </div>
                    <div className="card-body">
                        <form onSubmit={onClickSubmit}>
                            <div>
                                <input onChange={(e) => (setEmail(e.target.value))} value={email} type="email" className="form-control" name="email" id="email" placeholder='example@email.com' required />
                            </div>
                            <div>

                                <input onChange={(e) => (setPassword(e.target.value))} value={password} type="password" className="form-control" name="password" id="password" placeholder='*******' required />
                            </div>
                            <button type="submit" className="btn-register">Entrar</button>
                        </form>


                        <div className="card-footer">
                            <a href="#">Não tem uma conta? Registre-se!</a>
                        </div>
                    </div>

                </div>
            </section>

        </>
    )
}
export default Login