import React, { useState } from 'react'

const Form = () => {



const [ userData, setUserData ] = useState ({ name: "", email: ""})

const cancel = () => {


}
const handleSubmit = (event) => {
    event.preventDefault();
    
};



    return (
    <div>
        <h1>Formulario</h1>
        <form action="" onSubmit={handleSubmit}>
            <input type="text" placeholder='Usuario' 
            name="usuario" 
            value= {userData.name} 
            onChange={(event)=>setUserData({...userData, name: event.target.value})}/>

            <input type="text" 
            placeholder='E-Mail' 
            name="email" 
            value={userData.email} 
            onChange={(event)=> setUserData({...userData, email: event.target.value})}/>

            <button type='submit'>Enviar</button>
            
            <button type='Button' onClick={cancel}>Cancelar</button>
        </form>
    </div>
    )
}

export default Form