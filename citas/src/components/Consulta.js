import React from 'react';

const Consulta = ({consulta}) => (
   
    <div className = "consulta">
        <p>Paciente: <span/>{consulta.paciente}</p>
        <p>Doctor: <span/>{consulta.doctor}</p>
        <p>Fecha: <span/>{consulta.fecha}</p>
        <p>Hora: <span/>{consulta.hora}</p>
        <p>Motivo: <span/>{consulta.motivo}</p>
    </div>
);

export default Consulta;