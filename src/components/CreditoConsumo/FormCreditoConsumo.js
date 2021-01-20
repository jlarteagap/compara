import React, { useState } from 'react'

const FormCreditoConsumo = ({enviarDatos}) => {
    const [datos, setDatos] = useState({
        cantidad: '',
        anhos: ''
    })

    const inputData = (e) => {
        setDatos({
            ...datos,
            [e.target.name] : e.target.value
        })
    }


    const sendData = (e) => {
        e.preventDefault()
        let data = {datos}
        
        enviarDatos(data)
    }
    return(
        <form onSubmit={sendData}>
            <input
                onChange = {inputData}
                type="number" 
                name="cantidad" 
                placeholder="5000" />
            <input
                onChange = {inputData}
                type="number" 
                name="anhos" 
                placeholder="5" />
            <button 
                type="submit">Realizar consulta</button>
        </form>
    )
}

export default FormCreditoConsumo;