import React from "react";

const Paciente = () => {
  return (
    <div className="m-2 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold md-3 text-gray-700 uppercase my-1">
        Nombre: {""}
        <span className="font-normal normal-case">Hook</span>
      </p>

      <p className="font-bold md-3 text-gray-700 uppercase my-1">
        Proopietario: {""}
        <span className="font-normal normal-case">Juan</span>
      </p>

      <p className="font-bold md-3 text-gray-700 uppercase my-1">
        Email: {""}
        <span className="font-normal normal-case">correo@juan.com</span>
      </p>

      <p className="font-bold md-3 text-gray-700 uppercase my-1">
        Fecha Alta: {""}
        <span className="font-normal normal-case">10 de Diciembre 2023</span>
      </p>

      <p className="font-bold md-3 text-gray-700 uppercase my-1">
        Descripción Sintomas: {""}
        <span className="font-normal normal-case">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa eaque
          quo eum ipsam deserunt ea fugiat soluta ad quas eveniet!
        </span>
      </p>
    </div>
  );
};

export default Paciente;
