import React, {Fragment, useState} from 'react';

const Formulario = ()=> {

    //Crear el State de Consultas
    const [consulta, actualizaConsulta] = useState({
        paciente: '',
        doctor:  '',
        fecha: '',
        hora: '',
        motivo: ''

    });

    //Función que se ejecuta cuando el usuario actualiza el input
    const actualizaState = e => {
       actualizaConsulta({
           ...consulta,
           [e.target.name]: e.target.value
       })
    }

    //Extraer valores
    const {paciente, doctor, fecha, hora, motivo} = consulta;
    
    //Cuando el usuario presiona agregar cita
    const submitConsulta = e => {
        e.preventDefault();
        
        console.log('Enviando...')
    };
    

    return (
        <Fragment>
            <h2>Crear Consulta</h2>
            
            <form
                onSubmit={submitConsulta}
            >
                <label>Nombre del Paciente</label>
                <input
                    type="text"
                    name="paciente"
                    className="u-full-width"
                    placeholder="Nombre Paciente"
                    onChange= {actualizaState}
                    value = {paciente}
                />

            <label>Nombre del Doctor</label>
                <input
                    type="text"
                    name="doctor"
                    className="u-full-width"
                    placeholder="Nombre Doctor"
                    onChange= {actualizaState}
                    value = {doctor}
                />

            <label>Fecha</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange= {actualizaState}
                    value = {fecha}
                />

            <label>Hora</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange= {actualizaState}
                    value = {hora}
                />

            <label>Motivo de Consulta</label>
               <textarea
                    className="u-full-width"
                    name="motivo"
                    onChange= {actualizaState}
                    value = {motivo}
               />
            <button
                name="enviar"
                className="u-full-width button-primary"
            >Hacer Consulta</button>
            </form>

            

        </Fragment>
    );
}
    


export default Formulario;