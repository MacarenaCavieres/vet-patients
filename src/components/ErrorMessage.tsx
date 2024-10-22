import { ReactNode } from "react";

export default function ErrorMessage({ children }: { children: ReactNode }) {
    return <p className="text-rose-900">{children}</p>;
}
