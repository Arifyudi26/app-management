import { format } from "date-fns";

/**
 * Format a given date into a specified format
 * @param date - The date to format (can be a Date object or a string)
 * @param formatString - The desired format (e.g., "yyyy-MM-dd", "dd/MM/yyyy", "MMMM d, yyyy")
 * @returns {string} - The formatted date
 */
export const formatDate = (date: Date | string, formatString: string): string => {
  try {
    const parsedDate = typeof date === "string" ? new Date(date) : date;
    return format(parsedDate, formatString);
  } catch (error) {
    console.error("Error formatting date:", error);
    return "";
  }
};
