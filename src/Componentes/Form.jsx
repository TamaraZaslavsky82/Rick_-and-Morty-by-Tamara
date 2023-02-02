import React  from 'react'
import style from './Form.module.css'
import Rm from '../img/Rm.png'
import { useState } from 'react';
import validation from './validation';

function Form(props) {
  const [userData, setUserData] = useState({ 
    username: '', 
    password: '' })

    const [errors, setErrors] = useState({
      username: '', 
    password: ''
    })
const handleInputChange = (event) => {
      setUserData({...userData, [event.target.name] : event.target.value})
    setErrors(validation({...userData, [event.target.name] : event.target.value}))
}

const handleSubmit= (event) =>{
  event.preventDefault()
  props.login(userData)
}
  return (
    <div className={style.form}>
       
        <form onSubmit={handleSubmit}>
            <div>
            <img src={Rm} alt='silueta' className={style.silueta}/>
            </div>
            <div className={style.user}>
            <label>Username  </label>
            
            <input 
            name='username'
            placeholder='Escribe tu nombre de usuario'
            type='text'
            className={style.inputName}
            value={userData.username}
            onChange= {handleInputChange}
            />
            <p>{errors.username}</p>
            </div>
            <br></br>

              
            <div className={style.user}>
                <label> Password </label>
             
                <input
                name='password'
                placeholder='Escribe tu constraseña'
                type='password'
                className={style.inputName}
                value={userData.password}
                onChange= {handleInputChange}
                />
                <p>{errors.password}</p>
            </div>
            <br></br>
            <div className={style.button}>
                <button className={style.button1}>LOGIN</button>
            </div>
        </form>
    </div>
  )
}

export default Form


