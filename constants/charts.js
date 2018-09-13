import {
  VictoryPie,
  VictoryBar,
  VictoryLine,
  VictoryArea,
} from 'victory';

export const chartTypes = {
  PIE: 'PIE',
  BAR: 'BAR',
  LINE: 'LINE',
  STACK: 'STACK',
  DONUT: 'DONUT',
};

export const PIE = {
  name: 'Pie Chart',
  description: 'These are the ingredients for grandma\'s tasty apple pie',
  chart: VictoryPie,
  values: {
    data: [
      { y: 13, label: 'Flour' },
      { y: 2, label: 'Salt' },
      { y: 6, label: 'Butter' },
      { y: 9, label: 'Water' },
      { y: 22, label: 'Apples' },
      { y: 3, label: 'Sugar' },
    ],
    labelRadius: 135,
  },
};

export const BAR = {
  name: 'Bar Chart',
  description: 'What our developers think, if they hear something with bar..',
  chart: VictoryBar,
  scale: {
    domainPadding: 10,
    animate: {
      duration: 2000,
    },
  },
  values: {
    data: [
      { x: 1, y: 28, label: 'Rum' },
      { x: 2, y: 76, label: 'Beer' },
      { x: 3, y: 52, label: 'Red Wine' },
      { x: 4, y: 21, label: 'Absinth' },
      { x: 5, y: 41, label: 'Whiskey' },
    ],
  },
};

export const LINE = {
  name: 'Line Chart',
  description: 'The number of people which downloaded this repository is OVER 9000!',
  chart: VictoryLine,
  scale: {
    animate: {
      duration: 2000,
    },
  },
  values: {
    data: [
      { x: 'Jul', y: 430 },
      { x: 'Aug', y: 2750, label: 2750 },
      { x: 'Sep', y: 1363 },
      { x: 'Oct', y: 6320, label: 6320 },
      { x: 'Nov', y: 6582 },
      { x: 'Dec', y: 9001, label: 9001 },
    ],
  },
};

export const DONUT = {
  name: 'Donut Chart',
  description: 'Probably Homer\'s all time favorite chart. Hmmm... Yummie!',
  chart: VictoryPie,
  values: {
    data: [
      { x: 1, y: 15, label: 'Maggie' },
      { x: 2, y: 23, label: 'Lisa' },
      { x: 3, y: 30, label: 'Bart' },
      { x: 4, y: 35, label: 'Marge' },
      { x: 5, y: 50, label: 'Homer' },
    ],
    innerRadius: 50,
  },
};

export const STACK = {
  name: 'Stack Chart',
  description: 'Looks like the Swiss alps, somehow.',
  chart: VictoryArea,
  values: [
    [{ x: 1, y: 15 }, { x: 2, y: 23 }, { x: 3, y: 30 }, { x: 4, y: 35 }, { x: 5, y: 50 }, { x: 6, y: 42 }], // eslint-disable-line
    [{ x: 1, y: 35 }, { x: 2, y: 63 }, { x: 3, y: 63 }, { x: 4, y: 38 }, { x: 5, y: 24 }, { x: 6, y: 12 }], // eslint-disable-line
    [{ x: 1, y: 25 }, { x: 2, y: 10 }, { x: 3, y: 5 }, { x: 4, y: 34 }, { x: 5, y: 49 }, { x: 6, y: 45 }], // eslint-disable-line
  ],
};

export default {
  PIE,
  BAR,
  LINE,
  DONUT,
  STACK,
};