export const formatDate = (date: Date | string) => {
  const parsedDate = typeof date === "string" ? new Date(date) : date;

  return parsedDate.toLocaleString("us-US", { hour12: false });
};
