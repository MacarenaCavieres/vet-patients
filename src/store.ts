import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { DraftPatient, Patient } from "./types";
import { v4 as uuidv4 } from "uuid";

type PatientStore = {
    patients: Patient[];
    activeId: Patient["id"];
    addPatient: (patient: DraftPatient) => void;
    removePatient: (id: Patient["id"]) => void;
    editingPatient: (id: Patient["id"]) => void;
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
                activeId: "",
                addPatient: (data) => {
                    const newPatient = createPatient(data);
                    set((state) => ({
                        patients: [...state.patients, newPatient],
                    }));
                },

                removePatient: (id) => {
                    set((state) => ({
                        patients: state.patients.filter((patient) => patient.id !== id),
                    }));
                },

                editingPatient: (id) => {
                    set(() => ({
                        activeId: id,
                    }));
                },
            }),
            {
                name: "vet-storage",
            }
        )
    )
);
