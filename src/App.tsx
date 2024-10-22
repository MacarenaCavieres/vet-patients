import { useMemo } from "react";
import FormPatients from "./components/FormPatients";
import { usePatientStore } from "./store";

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

            <main className="grid md:grid-cols-2 gap-10 md:m-14 mx-5 my-10">
                <section>
                    <h2 className="text-3xl mb-10 text-center font-bold">
                        <span className="text-amber-600 underline">Formulario</span> de pacientes
                    </h2>
                    <FormPatients />
                </section>
                {isPatient ? (
                    <p className="text-3xl mb-10 text-center font-bold">Sin Pacientes</p>
                ) : (
                    <section className="overflow-y-scroll">
                        <h2 className="text-3xl mb-10 text-center font-bold">
                            Pacientes en <span className="text-amber-600 underline">atención</span>
                        </h2>
                        <p>algo</p>
                    </section>
                )}
            </main>
        </>
    );
}

export default App;
