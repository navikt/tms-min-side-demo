export const getLongDateFormat = (date: string | number | Date) => {
  const dateObject = new Date(date);

  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return dateObject.toLocaleDateString("nb-NO", options);
};