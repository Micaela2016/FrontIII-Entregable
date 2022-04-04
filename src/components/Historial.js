import React, { Component } from 'react'

export default class Historial extends Component {
    render() {
        return (
            <>
            <div className='recordatorio'>
                <p className='historia'> Seleccion Anterior: {this.props.historial.length> 1 ? this.props.historial[(this.props.historial.length)-2]:" "}</p>
            </div>
            <div>
                <p className='historia'>Historial de opciones elegidas: </p>
                <ul>
                    {this.props.historial.map((opcionElegida,index) => {
                        return (
                            <>
                                <li key={index}>{opcionElegida}</li>   
                            </>
                        );
                    })}
                </ul>
            </div>
            </>
        );
    }
}