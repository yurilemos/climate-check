export function formatDate(input) {
  var datePart = input.match(/\d+/g),
    year = datePart[0].substring(2), // get only two digits
    month = datePart[1],
    day = datePart[2];

  return day + "/" + month + "/" + year;
}

export function getHour(input) {
  const time = input.split(" ")[1];
  const hour = time.substring(0, 2);

  return hour;
}
