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

function logOutSeriesText(seriesDurations) {
  const lifespan = 80 * 365 * 24 * 60; //minutes in 80 years
  let total = 0;
  for (let i = 0; i < seriesDurations.length; i++) {
    const series = seriesDurations[i];
    const daysToYear = ((series.days * 24 * 60) / lifespan) * 100; //days %age in 80years
    const hoursToYear = ((series.hours * 60) / lifespan) * 100; //hours %age in 80years
    const minutesToYear = (series.minutes / lifespan) * 100; //minutes %age in 80years
    const seriesTotal = daysToYear + hoursToYear + minutesToYear; //total %age for one series in 80years
    console.log(
      'The ' +
        '"' +
        series.title +
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

logOutSeriesText(seriesDurations);
