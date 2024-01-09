import { useState } from 'react'

//custom hooks



//css
import './styles/Register.css'


const URL = 'http://localhost:3000/users'





const Register = () => {
  
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    

    let config = {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({name:name,email:email,password:password}),
    }
     async function onClickSubmit(event){
        event.preventDefault()
             

        const post = await fetch(URL,config)
        const res = await post.json()
        console.log(res)
     
        
    }


    return (
        <>
            <section className="container-register">
                <div className="card">
                    <div className="card-header">
                        <h2> Pagina de Registro</h2>
                    </div>
                    <div className="card-body">
                        <form  onSubmit={onClickSubmit}>
                            <div className="form-group">
                                
                                <input onChange={(e)=>(setName(e.target.value))} value={name} type="text" className="form-control" name="name" id="name" placeholder='Nome completo' required />
                            </div>
                            <div>
                                
                                <input  onChange={(e)=>(setEmail(e.target.value))} value={email} type="email" className="form-control" name="email" id="email" placeholder='example@email.com' required />
                            </div>
                            <div>
                                
                                <input  onChange={(e)=>(setPassword(e.target.value))} value={password} type="password" className="form-control" name="password" id="password" placeholder='*******' required />
                            </div>
                            <button type="submit" className="btn-register">Registar</button>
                        </form>


                        <div className="card-footer">
                            <a href="#">Ja tem uma conta ?</a>
                        </div>
                    </div>

                </div>
            </section>

        </>
    )
}
export default Register