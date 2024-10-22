import { useForm } from "react-hook-form";
import ErrorMessage from "./ErrorMessage";
import { DraftPatient } from "../types";
import { usePatientStore } from "../store";

export default function FormPatients() {
    const addPatient = usePatientStore((state) => state.addPatient);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<DraftPatient>();

    const registerPatient = (data: DraftPatient) => {
        addPatient(data);
    };

    return (
        <form
            className="min-h-screen space-y-3 bg-slate-200 md:py-14 md:px-10 shadow-xl rounded-xl py-6 px-5"
            onSubmit={handleSubmit(registerPatient)}
        >
            <div className="flex flex-col gap-1">
                <label htmlFor="petName" className="text-black p-2">
                    Nombre Paciente
                </label>
                <input
                    type="text"
                    placeholder="Ingrese nombre de mascota"
                    className="p-2 placeholder:italic placeholder:text-slate-400 text-black"
                    {...register("petName", { required: "Nombre del paciente obligatorio" })}
                />
                {errors.petName && <ErrorMessage>{errors.petName.message}</ErrorMessage>}
            </div>
            <div className="flex flex-col">
                <label htmlFor="ownerName" className="text-black p-2">
                    Nombre Dueño
                </label>
                <input
                    type="text"
                    placeholder="Ingrese nombre de propietario"
                    className="p-2 placeholder:italic placeholder:text-slate-400 text-black"
                    {...register("ownerName", { required: "Nombre del dueño obligatorio" })}
                />
                {errors.ownerName && <ErrorMessage>{errors.ownerName.message}</ErrorMessage>}
            </div>
            <div className="flex flex-col">
                <label htmlFor="email" className="text-black p-2">
                    Email
                </label>
                <input
                    type="mail"
                    placeholder="Ingrese mail de registro"
                    className="p-2 placeholder:italic placeholder:text-slate-400 text-black"
                    {...register("email", { required: "Email obligatorio" })}
                />
                {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
            </div>
            <div className="flex flex-col">
                <label htmlFor="date" className="text-black p-2">
                    Fecha de ingreso
                </label>
                <input
                    type="date"
                    className="p-2 text-slate-400 italic"
                    {...register("date", { required: "Fecha de ingreso obligatorio" })}
                />
                {errors.date && <ErrorMessage>{errors.date.message}</ErrorMessage>}
            </div>
            <div className="flex flex-col">
                <label htmlFor="symptoms" className="text-black p-2">
                    Síntomas
                </label>
                <textarea
                    placeholder="Síntomas del paciente"
                    rows={5}
                    className="p-2 placeholder:italic placeholder:text-slate-400 text-black"
                    {...register("symptoms", { required: "Los síntomas son obligatorios" })}
                ></textarea>
                {errors.symptoms && <ErrorMessage>{errors.symptoms.message}</ErrorMessage>}
            </div>

            <button type="submit" className="uppercase bg-gray-800 py-2 w-full hover:bg-gray-950">
                Ingresar paciente
            </button>
        </form>
    );
}
