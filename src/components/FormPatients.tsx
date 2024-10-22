export default function FormPatients() {
    return (
        <form className="space-y-5 bg-slate-200 py-14 px-10 shadow-xl rounded-xl">
            <div className="flex flex-col gap-1">
                <label htmlFor="petName" className="text-black p-2">
                    Nombre Paciente
                </label>
                <input
                    type="text"
                    name="petName"
                    placeholder="Ingrese nombre de mascota"
                    className="p-2 placeholder:italic placeholder:text-slate-400 text-black"
                />
            </div>
            <div className="flex flex-col">
                <label htmlFor="ownerName" className="text-black p-2">
                    Nombre Dueño
                </label>
                <input
                    type="text"
                    name="ownerName"
                    placeholder="Ingrese nombre de propietario"
                    className="p-2 placeholder:italic placeholder:text-slate-400 text-black"
                />
            </div>
            <div className="flex flex-col">
                <label htmlFor="email" className="text-black p-2">
                    Email
                </label>
                <input
                    type="mail"
                    name="email"
                    placeholder="Ingrese mail de registro"
                    className="p-2 placeholder:italic placeholder:text-slate-400 text-black"
                />
            </div>
            <div className="flex flex-col">
                <label htmlFor="date" className="text-black p-2">
                    Fecha de ingreso
                </label>
                <input
                    type="date"
                    name="date"
                    className="p-2 text-slate-400 italic valid:text-black valid:not-italic"
                />
            </div>
            <div className="flex flex-col">
                <label htmlFor="symptoms" className="text-black p-2">
                    Síntomas
                </label>
                <textarea
                    name="symptoms"
                    placeholder="Síntomas del paciente"
                    rows={5}
                    className="p-2 placeholder:italic placeholder:text-slate-400 text-black"
                ></textarea>
            </div>
        </form>
    );
}
