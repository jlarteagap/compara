import React, { Component } from 'react'
// import axios from 'axios'
import FormCreditoConsumo from './FormCreditoConsumo';


class CreditoConsumo extends Component{
    state = {
        anhos : '',
        cantidad: '',
    }
    enviarDatos = (data) => {
        const {anhos, cantidad} = data.datos
        this.setState({
            anhos,
            cantidad
        })
    }

    render(){
        return(
            <>
                <h2>Calcula tu Crédito Consumo</h2>
                <p>Calcula tu próximo credito consumo y encuentra la mejor tasa de interés y el menor costo asociado al crédito.</p>
                <FormCreditoConsumo
                    enviarDatos = {this.enviarDatos}
                />
            </>
        )
    }
}

export default CreditoConsumo