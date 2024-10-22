import { Patient } from "../types";
import PatientDetailItem from "./PatientDetailItem";

type PatientDetailProps = {
    patients: Patient[];
};

export default function PatientDetail({ patients }: PatientDetailProps) {
    return (
        <div className="grid gap-10">
            {patients.map((patient) => (
                <PatientDetailItem key={patient.id} patient={patient} />
            ))}
        </div>
    );
}
