import { useMemo } from "react";
import FormPatients from "./components/FormPatients";
import { usePatientStore } from "./store";
import PatientList from "./components/PatientList";
import { ToastContainer } from "react-toastify";

function App() {
    const patients = usePatientStore((state) => state.patients);

    const isPatient = useMemo(() => patients.length === 0, [patients]);

    return (
        <>
            <header>
                <h1 className="font-bold text-center text-5xl mt-20">
                    Urgencias <span className="text-amber-600">Veterinaria</span>
                </h1>
            </header>

            <main className="grid md:grid-cols-2 gap-10 md:m-14 mx-5 my-10 md:grid-rows-1">
                <section>
                    <h2 className="text-3xl mb-10 text-center font-bold">
                        <span className="text-amber-600 underline">Formulario</span> de pacientes
                    </h2>
                    <FormPatients />
                </section>
                {isPatient ? (
                    <p className="text-3xl mb-10 text-center font-bold">
                        Sin <span className="text-amber-600 underline">Pacientes</span>
                    </p>
                ) : (
                    <section>
                        <h2 className="text-3xl mb-10 text-center font-bold">
                            Pacientes en <span className="text-amber-600 underline">atención</span>
                        </h2>
                        <PatientList />
                    </section>
                )}
            </main>
            <ToastContainer />
        </>
    );
}

export default App;
