import { usePatientStore } from "../store";
import PatientDetail from "./PatientDetail";

export default function PatientList() {
    const patients = usePatientStore((state) => state.patients);
    return (
        <div className="h-screen overflow-y-scroll">
            <PatientDetail patients={patients} />
        </div>
    );
}
