export const formatDate = (date: string | number | number[] | null | undefined): string => {
    if (!date) return '-';

    try {
        // Handle array format [year, month, day, hour, minute, second]
        if (Array.isArray(date)) {
            const [year, month, day, hour, minute, second] = date;
            return new Date(year, month - 1, day, hour || 0, minute || 0, second || 0).toLocaleDateString();
        }

        let dateStr = date;
        if (typeof dateStr === 'string') {
            // Handle SQL timestamp format "YYYY-MM-DD HH:mm:ss" -> "YYYY-MM-DDTHH:mm:ss"
            if (dateStr.includes(' ') && !dateStr.includes('T')) {
                dateStr = dateStr.replace(' ', 'T');
            }
            // Truncate microseconds (e.g., .931861) to milliseconds (.931) for JS Date compatibility
            dateStr = dateStr.replace(/(\.\d{3})\d+/, '$1');
        }

        // Handle timestamp or ISO string
        const d = new Date(dateStr as string | number);
        if (isNaN(d.getTime())) {
            console.warn('Invalid date input:', date);
            return '-';
        }

        return d.toLocaleDateString();
    } catch (e) {
        return '-';
    }
};
