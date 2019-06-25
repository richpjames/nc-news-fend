export default function timestampMaker(dateObject) {
  const year = dateObject.getFullYear();
  const month = dateObject.getMonth();
  const day = dateObject.getDate();
  let hours = dateObject.getHours();
  const minutes = dateObject.getMinutes();

  let zeroAdder = timeUnit => {
    if (timeUnit.toString().length < 2) return `0${timeUnit}`;
    else return timeUnit;
  };
  const twoDigitHours = zeroAdder(hours);
  const twoDigitMinutes = zeroAdder(minutes);
  const twoDigitMonth = zeroAdder(month);
  const dateString = `${twoDigitHours}:${twoDigitMinutes} on ${day}/${twoDigitMonth}/${year}`;
  return dateString;
}
