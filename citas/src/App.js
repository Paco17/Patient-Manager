import React, {Fragment, useState} from 'react';
import Formulario from './components/Formulario';
import Consulta from './components/Consulta';

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

  //Función Eliminar consulta
  const eliminarConsulta = id => {
    const nuevasConsultas  = consultas.filter(consulta => consulta.id !== id);
    guardarConsultas(nuevasConsultas);
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
              <h2>Consultas</h2>
              {consultas.map(consulta =>(
                <Consulta
                  id = {consulta.id}
                  consulta = {consulta}
                  eliminarConsulta = {eliminarConsulta}
                />
              ))}
            </div>
          </div>
        </div>
    </Fragment>
  );
}

export default App;
