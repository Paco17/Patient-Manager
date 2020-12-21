import React, {Fragment, useState} from 'react';
import Formulario from './components/Formulario';

function App() {

  // Arreglo de consultas
  const [consultas, guardarConsultas] = useState([]);

  // Función tomar consultas anteriores y agregar la nueva
  const crearConsulta = consulta =>{
    guardarConsultas([
      ...consultas,
      consulta
    ]);
  }

  return (
    <Fragment>
        <h1>Administrador de Pacientes</h1>
        
        <div className= "container">
          <div className = "row">
            <div className= "one-half column">
              <Formulario
                crearConsulta={crearConsulta}
              />
            </div>
            <div className = "one-half column">
              2
            </div>
          </div>
        </div>
    </Fragment>
  );
}

export default App;
