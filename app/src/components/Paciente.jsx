import React from "react";

const Paciente = ({ paciente, setPaciente }) => {
    const { nombre, propietario, email, fecha, sintomas } = paciente;
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
                <span className="font-normal normal-case">{sintomas}</span>
            </p>

            <div className="options ml-2 mt-5 ">
                <button
                    className="text-center bg-indigo-900 font-bold text-white px-3 py-2 rounded-xl hover:bg-indigo-600"
                    type="button"
                    onClick={() => setPaciente(paciente)}
                >
                    Editar
                </button>
                <button
                    className="text-center bg-rose-800 font-bold text-white px-3 py-2 rounded-xl hover:bg-rose-700 float-right"
                    type="button"
                >
                    Eliminar
                </button>
            </div>
        </div>
    );
};

export default Paciente;
