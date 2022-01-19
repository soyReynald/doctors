import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListadoPacientes from "./components/ListadoPacientes";

function App() {
    return (
        <>
            <div className="container mx-auto pt-20">
                <Header />
                <div className="mt-12 md:flex w-full justify-between">
                    <Formulario />
                    <ListadoPacientes />
                </div>
            </div>
        </>
    );
}

export default App;
