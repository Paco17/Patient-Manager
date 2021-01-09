import React, {Fragment, useState, useEffect} from 'react';
import Formulario from './components/Formulario';
import Consulta from './components/Consulta';

function App() {

  //Citas en local Storage
  let consultasIniciales = JSON.parse(localStorage.getItem('consultas'));
  if(!consultasIniciales) {
    consultasIniciales = [];
  }

  // Arreglo de consultas
  const [consultas, guardarConsultas] = useState(consultasIniciales);

  //useEffect para realizar ciertas operaciones cuando el State cambia
  useEffect( () => {
    if(consultasIniciales){
      localStorage.setItem('consultas', JSON.stringify(consultas));
    }else{
      localStorage.setItem('consultas', JSON.stringify([]))
    }
  }, [consultas]);

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

  //Mensaje Condicional
  const titulo = consultas.length === 0 ? 'No hay consultas' : 'Administra tus consultas' 

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
              <h2>{titulo}</h2>
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
