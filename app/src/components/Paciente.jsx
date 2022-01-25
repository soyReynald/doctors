import React from "react";

const Paciente = ({nombre, propietario, email, fecha, sintomas}) => {
  return (
    <div className="m-2 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold md-3 text-gray-700 uppercase my-1">
        Nombre: {""}
        <span className="font-normal normal-case">{nombre}</span>
      </p>

      <p className="font-bold md-3 text-gray-700 uppercase my-1">
        Proopietario: {""}
        <span className="font-normal normal-case">{propietario}</span>
      </p>

      <p className="font-bold md-3 text-gray-700 uppercase my-1">
        Email: {""}
        <span className="font-normal normal-case">{email}</span>
      </p>

      <p className="font-bold md-3 text-gray-700 uppercase my-1">
        Fecha Alta: {""}
        <span className="font-normal normal-case">{fecha}</span>
      </p>

      <p className="font-bold md-3 text-gray-700 uppercase my-1">
        Descripción Sintomas: {""}
        <span className="font-normal normal-case">
          {sintomas}
        </span>
      </p>
    </div>
  );
};

export default Paciente;
