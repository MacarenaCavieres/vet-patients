export function formatDate(dateStr: string): string {
    const dateObj = new Date(dateStr);
    const options: Intl.DateTimeFormatOptions = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        timeZone: "UTC",
    };

    return new Intl.DateTimeFormat("es-CL", options).format(dateObj);
}
