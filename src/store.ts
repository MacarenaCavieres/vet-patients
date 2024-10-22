import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { DraftPatient, Patient } from "./types";
import { v4 as uuidv4 } from "uuid";

type PatientStore = {
    patients: Patient[];
    addPatient: (patient: DraftPatient) => void;
};

const createPatient = (patient: DraftPatient): Patient => {
    return {
        ...patient,
        id: uuidv4(),
    };
};

export const usePatientStore = create<PatientStore>()(
    devtools(
        persist(
            (set) => ({
                patients: [],
                addPatient: (data) => {
                    const newPatient = createPatient(data);
                    set((state) => ({
                        patients: [...state.patients, newPatient],
                    }));
                },
            }),
            {
                name: "vet-storage",
            }
        )
    )
);
