import React, {Component} from 'react';
import './Buscador.css'


class Buscador extends Component {

    leerDatos = (e) => {
        //busqueda
    const termino = e.target.value;

    //enviarlo por props
    this.props.busqueda(termino);
        
    }


    render() {
        return (
        <form className="buscador">
            <input type="text" placeholder='Busqueda' onChange={this.leerDatos} className="text"/>
             </form>
        )
    }
}

export default Buscador;
