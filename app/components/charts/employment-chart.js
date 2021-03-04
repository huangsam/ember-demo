import BaseChart from './base-chart';

// https://www.highcharts.com/demo/line-basic
export default class EmploymentChart extends BaseChart {
  chartOptions = {
    title: {
      text: 'Solar Employment Growth by Sector, 2010-2016',
    },
    subtitle: {
      text: 'Source: thesolarfoundation.com',
    },
    yAxis: {
      title: {
        text: 'Number of Employees',
      },
    },
    xAxis: {
      accessibility: {
        rangeDescription: 'Range: 2010 to 2017',
      },
    },
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle',
    },
    plotOptions: {
      series: {
        label: {
          connectorAllowed: false,
        },
        pointStart: 2010,
      },
    },
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500,
          },
          chartOptions: {
            legend: {
              layout: 'horizontal',
              align: 'center',
              verticalAlign: 'bottom',
            },
          },
        },
      ],
    },
  };
}
