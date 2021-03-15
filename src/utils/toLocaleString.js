export default (date) => {
  const dateObject = new Date(date);
  var day = dateObject.getUTCDate();
  var month = dateObject.getUTCMonth();
  const year = dateObject.getUTCFullYear();

  day = day < 10 ? `0${day}` : day;
  month = month < 10 ? `0${month}` : month;

  return `${day}/${month}/${year}`;
};
