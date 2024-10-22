import { usePatientStore } from "../store";
import PatientDetail from "./PatientDetail";

export default function PatientList() {
    const patients = usePatientStore((state) => state.patients);
    return (
        <div className="max-h-screen md:overflow-y-scroll">
            <PatientDetail patients={patients} />
        </div>
    );
}
