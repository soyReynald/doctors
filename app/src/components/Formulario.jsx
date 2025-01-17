import { useState, useEffect } from "react";
import Error from "./Error";

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {
    // Main States
    const [nombre, setNombre] = useState("");
    const [propietario, setPropietario] = useState("");
    const [email, setEmail] = useState("");
    const [fecha, setFecha] = useState("");
    const [sintomas, setSintomas] = useState("");


    const resetForm = () => {
        setNombre("");
        setPropietario("");
        setEmail("");
        setFecha("");
        setSintomas("");
    }

    const generateUniqueId = () => {
        return Math.random().toString(36).substring(2) + Date.now().toString(36);
    }

    // Flow states
    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if ([nombre, propietario, email, fecha, sintomas].includes("")) {
            setError(true);
            return;
        }
        setError(false);

        // Create new paciente object
        const pacienteObj = {
            nombre,
            propietario,
            email,
            fecha,
            sintomas
        };

        if(paciente.id){
            // Update paciente
            pacienteObj.id = paciente.id
            setPacientes(pacientes.map(pac => pac.id === paciente.id ? pacienteObj : pac));

            // Reset paciente
            return resetForm()
        } 
        
        pacienteObj.id =  generateUniqueId();
        // Add new paciente to the list
        setPacientes([...pacientes, pacienteObj]);
        // Reset paciente
        return resetForm()
    };

    // Functionality
    useEffect(() => {
        const getPacientes = () => {
            if (localStorage.getItem("pacientes")) {
                setPacientes(JSON.parse(localStorage.getItem("pacientes")));
            }
        }
        getPacientes()
    }, [])

    useEffect(() => {
        localStorage.setItem("pacientes", JSON.stringify(pacientes ?? []));
    }, [pacientes])

    useEffect(() => {
        if (Object.keys(paciente).length > 0) {
            setNombre(paciente.nombre);
            setPropietario(paciente.propietario);
            setEmail(paciente.email);
            setFecha(paciente.fecha);
            setSintomas(paciente.sintomas);
        }
    }, [paciente]);

    return (
        <div className="md:w-1/2 lg:w-2/5">
            <h2 className="font-black text-3xl text-center">
                Seguimiento Pacientes
            </h2>
            <p className="text-lg mt-5 text-center">
                Añade Pacientes y {""}
                <span className="text-indigo-600 font-bold">Administralos</span>
            </p>

            <form
                className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
                onSubmit={handleSubmit}
            >
                {error && (
                    <Error>
                        <p className="text-white uppercase">
                            Todos los campos son obligatorios
                        </p>
                    </Error>
                )}
                <div className="mb-5">
                    <label
                        htmlFor="mascota"
                        className="block text-gray-700 text-sm font-bold"
                    >
                        NOMBRE DE LA MASCOTA
                    </label>
                    <input
                        id="mascota"
                        type="text"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        placeholder="Nombre de la mascota"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    />
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="propietario"
                        className="block text-gray-700 text-sm font-bold"
                    >
                        NOMBRE DEL PROPIETARIO
                    </label>
                    <input
                        id="propietario"
                        type="text"
                        value={propietario}
                        onChange={(e) => setPropietario(e.target.value)}
                        placeholder="Nombre del propietario"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    />
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="email"
                        className="block text-gray-700 text-sm font-bold"
                    >
                        EMAIL CLIENTE
                    </label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email del cliente"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    />
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="alta"
                        className="block text-gray-700 text-sm font-bold"
                    >
                        Alta
                    </label>
                    <input
                        id="alta"
                        type="date"
                        value={fecha}
                        onChange={(e) => setFecha(e.target.value)}
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    />
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="sintomas"
                        className="block text-gray-700 text-sm font-bold"
                    >
                        Sintomas
                    </label>
                    <textarea
                        id="sintomas"
                        value={sintomas}
                        onChange={(e) => setSintomas(e.target.value)}
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        placeholder="Describe los sintomas"
                    />
                </div>

                <input
                    type="submit"
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
                    value={paciente.id ? "Editar Paciente" : "Agregar Paciente"}
                />
            </form>
        </div>
    );
};

export default Formulario;
