import React, { Component } from 'react'
import Aventura from './components/Aventura';
import Historial from './components/Historial';
import swal from 'sweetalert2';

export default class App extends Component {
  constructor() {
    super();
    this.state= {
      historial: [],
      opcionAnterior: "",
    }
    this.agregarHistorial = this.agregarHistorial.bind(this);
  }
  componentDidMount() {
    swal.fire("Empieza tu aventura");
  }

  agregarHistorial = (opcionAgregada) => {
    let NuevoHistorial = this.state.historial;
    NuevoHistorial.push(opcionAgregada);
    this.setState({historial: NuevoHistorial});
  };

  render() {
    return (
      <div className='black'>
        <Aventura agregarHistorial={this.agregarHistorial} opcionAnterior={this.state.opcionAnterior}/>
        <Historial historial={this.state.historial} opcionAnterior={this.state.opcionAnterior}/>
      </div>
    )
  }
}