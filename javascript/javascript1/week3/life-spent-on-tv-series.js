const seriesDurations = [
  {
    title: 'OC',
    days: 2,
    hours: 16,
    minutes: 24,
  },
  {
    title: 'Friends',
    days: 6,
    hours: 18,
    minutes: 44,
  },
  {
    title: 'Homeland',
    days: 10,
    hours: 10,
    minutes: 44,
  },
];

function logOutSeriesText(data) {
  let daysToYear,
    hoursToYear,
    minutesToYear,
    seriesTotal,
    total = 0;
  for (let i = 0; i < data.length; i++) {
    daysToYear = (data[i].days / (365 * 80)) * 100; //days %age in 80years
    hoursToYear = (data[i].hours / (365 * 80 * 24)) * 100; //hours %age in 80years
    minutesToYear = (data[i].minutes / (365 * 80 * 24 * 60)) * 100; //minutes %age in 80years
    seriesTotal = daysToYear + hoursToYear + minutesToYear; //total %age for one series in 80years
    console.log(
      'The ' +
        '"' +
        data[i].title +
        '"' +
        ' took ' +
        seriesTotal.toFixed(3) +
        '% of my life'
    );
    total += seriesTotal; //calculating total %age for all series in 80years
  }
  console.log(
    'In total that is ' +
      total.toFixed(3) +
      ' % of MY LIFE and now I am feeling bad about this realization:-('
  );
}

logOutSeriesText(seriesDurations); //calling function
