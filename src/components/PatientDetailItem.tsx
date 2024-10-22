import { Patient } from "../types";

type PatientDetailItemProps = {
    patient: Patient;
};

export default function PatientDetailItem({ patient }: PatientDetailItemProps) {
    return (
        <div className="bg-slate-200 md:py-14 md:px-10 shadow-xl rounded-xl py-6 px-5 md:mr-5 space-y-2">
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
        </div>
    );
}
