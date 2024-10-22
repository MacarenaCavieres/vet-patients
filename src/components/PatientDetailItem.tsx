import { usePatientStore } from "../store";
import { Patient } from "../types";

type PatientDetailItemProps = {
    patient: Patient;
};

export default function PatientDetailItem({ patient }: PatientDetailItemProps) {
    const removePatient = usePatientStore((state) => state.removePatient);
    const editingPatient = usePatientStore((state) => state.editingPatient);

    const handleRemove = () => {
        removePatient(patient.id);
    };

    const handleActiveId = () => {
        editingPatient(patient.id);
    };

    return (
        <div className="bg-slate-200 md:py-10 md:px-10 shadow-xl rounded-xl py-6 px-5 md:mr-5 space-y-2">
            <p className="text-slate-500">
                ID: <span className="text-slate-700">{patient.id}</span>
            </p>
            <p className="text-slate-500">
                Paciente: <span className="text-slate-700">{patient.petName}</span>
            </p>
            <p className="text-slate-500">
                Dueño: <span className="text-slate-700">{patient.ownerName}</span>
            </p>
            <p className="text-slate-500">
                Fecha: <span className="text-slate-700">{patient.date.toString()}</span>
            </p>
            <p className="text-slate-500">
                Email: <span className="text-slate-700">{patient.email}</span>
            </p>
            <p className="text-slate-500">
                Síntomas: <span className="text-slate-700">{patient.symptoms}</span>
            </p>
            <div className="flex justify-around pt-5">
                <button
                    type="button"
                    className="uppercase bg-blue-950 hover:bg-blue-800 p-2 rounded-md"
                    onClick={handleActiveId}
                >
                    Actualizar
                </button>
                <button
                    type="button"
                    className="uppercase bg-red-800 hover:bg-red-900 p-2 rounded-md"
                    onClick={handleRemove}
                >
                    Eliminar
                </button>
            </div>
        </div>
    );
}
