import React from "react";

const Formulario = () => {
    return (
        <div className="md:w-1/2 lg:w-2/5">
            <h2 className="font-black text-3xl text-center">
                Seguimiento Pacientes
            </h2>
            <p className="text-lg mt-5 text-center">
                Añade Pacientes y {""}
                <span className="text-indigo-600 font-bold">Administralos</span>
            </p>

            <form className="bg-white shadow-md rounded-lg py-10 px-5">
                <div>
                    <label htmlFor="mascota" className="block text-gray-700 text-sm font-bold mb-5">
                        NOMBRE DE LA MASCOTA
                    </label>
                    <input
                        id="mascota"
                        type="text"
                        placeholder="Nombre de la mascota"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    />
                </div>
                <div>
                    <label htmlFor="propietario" className="block text-gray-700 text-sm font-bold mb-5">
                        NOMBRE DEL PROPIETARIO
                    </label>
                    <input
                        id="propietario"
                        type="text"
                        placeholder="Nombre del propietario"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-5">
                        EMAIL CLIENTE
                    </label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Email del cliente"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    />
                </div>
                <div>
                    <label htmlFor="alta" className="block text-gray-700 text-sm font-bold mb-5">
                        Alta
                    </label>
                    <input
                        id="alta"
                        type="date"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    />
                </div>
            </form>
        </div>
    );
};

export default Formulario;
