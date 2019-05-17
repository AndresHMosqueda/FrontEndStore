import React, { Component } from 'react';
import './Nosotros.css'

class Nosotros extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="contenedor-nosotros">
                <div className="imagen">
                    <img src="/img/camisa_1.png" alt="imagen nosotros"/>
                </div>
                <div className="contenido">
                    <h2>Sobre nosotros</h2>
                    <p>lorem werxfrferfsadedxzsdxsax  </p>
                </div>
            </div>
         );
    }
}
 
export default Nosotros;