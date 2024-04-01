export const dateStringToDate = (dateString: string): Date => {
  // date coming in as string like this 28/10/2018
  const dateParts = dateString.split('/').map((value: string) => {
    return parseInt(value);
  });
  return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};
