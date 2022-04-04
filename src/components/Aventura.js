import React, { Component } from 'react';
import data from "./data.json";
import "../index.css";
import swal from 'sweetalert2';

const eleccionesA = data.filter(indice => indice.id.charAt(1)==="a");
const eleccionesB = data.filter(indice => indice.id.charAt(1)==="b");
export default class Aventura extends Component {

    constructor() {
        super();
        this.state = {
            historiaActual: data[0],
            contador: 0,
        };
    }
    
    onClickOpcionA() {
        if(this.state.contador < eleccionesA.length){
            this.props.agregarHistorial("A");
            if(this.state.historiaActual === data[0]) {
                this.setState({
                    historiaActual : eleccionesA[0],
                    contador : this.state.contador+1
                })
            }
            else {
                this.setState({
                    historiaActual : eleccionesA[this.state.contador],
                    contador : this.state.contador+1
                })
            }
        }
        else{
            swal.fire("FIN")
        }
    }

    onClickOpcionB(){
        if(this.state.contador <eleccionesB.length){
            this.props.agregarHistorial("B");
            if(this.state.historiaActual === data[0])
            {
                this.setState({
                    historiaActual : eleccionesB[0],
                })
            }
            else{
                this.setState({
                    historiaActual : eleccionesB[this.state.contador],
                })
            }
            this.setState({
                contador : this.state.contador+1
            })
        }
        else{
            swal.fire("FIN")
        }
    }
        render() {
            return (
            <>
                <div className='layout'>
                    <h2 className='historia'>{this.state.historiaActual.historia}</h2>
                    <div className='opcion'>
                        <button className='botones' onClick={() => this.onClickOpcionA()}>A</button>
                        <p className='opciones'>{this.state.historiaActual.opciones.a}</p>
                    </div>
                    <div className='opcion'>
                        <button className='botones' onClick={() => this.onClickOpcionB()}>B</button>
                        <p className='opciones'>{this.state.historiaActual.opciones.b}</p>
                    </div>
                </div>
            </>
            );
        }
}
