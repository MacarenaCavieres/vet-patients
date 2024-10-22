export type Patient = {
    id: string;
    petName: string;
    ownerName: string;
    email: string;
    date: Date;
    symptoms: string;
};

export type DraftPatient = Omit<Patient, "id">;
