import { useState } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListadoPacientes from "./components/ListadoPacientes";

function App() {
    const [pacientes, setPacientes] = useState([]);
    const [paciente, setPaciente] = useState({});


    const eliminarPaciente = id => {
        setPacientes(pacientes.filter(pac => pac.id !== id));
        localStorage.setItem('pacientes', JSON.stringify(pacientes.filter(pac => pac.id !== id)));
    }

    return (
        <>
            <div className="container mx-auto pt-20">
                <Header />
                <div className="mt-12 md:flex w-full justify-between">
                    <Formulario
                        pacientes={pacientes}
                        setPacientes={setPacientes}
                        paciente={paciente}
                        setPaciente={setPaciente}
                    />
                    <ListadoPacientes
                        pacientes={pacientes}
                        setPaciente={setPaciente}
                        eliminarPaciente={eliminarPaciente}
                    />
                </div>
            </div>
        </>
    );
}

export default App;
