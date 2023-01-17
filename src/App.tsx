import React from 'react';
import logo from './logo.svg';
import ReactECharts from 'echarts-for-react';

import './App.css';


const option = {
  title: {
    text: 'Accumulated Waterfall Chart'
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    },
    formatter: function (params: any) {
      let tar;
      if (params[1] && params[1].value !== '-') {
        tar = params[1];
      } else {
        tar = params[2];
      }
      return tar && tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
    }
  },
  legend: {
    data: ['Scans', 'Exits', 'Discrepancies', 'Net Change']
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    data: ['Expantion', 'Replacement', 'Involuntary turnover', 'Voluntary Turnover', 'Discrepancies', 'Net CHange'],
    axisLabel: {
      interval: 0,
    }
  },
  yAxis: {
    type: 'value',
    minInterval: 200
  },
  series: [
    {
      name: 'Placeholder',
      type: 'bar',
      stack: 'Total',
      silent: true,
      itemStyle: {
        borderColor: 'transparent',
        color: 'transparent'
      },
      emphasis: {
        itemStyle: {
          borderColor: 'transparent',
          color: 'transparent'
        }
      },
      data: [0, 379, 585, 350, 350, 0]
    },
    {
      name: 'Scans',
      type: 'bar',
      stack: 'Total',
      label: {
        show: true,
        position: 'top'
      },
      itemStyle: {
        borderColor: 'transparent',
        color: '#b4f5a6'
      },
      data: [379, 326, '-', '-', '-', '-']
    },
    {
      name: 'Exits',
      type: 'bar',
      stack: 'Total',
      label: {
        show: true,
        position: 'bottom'
      },
      itemStyle: {
        borderColor: 'transparent',
        color: '#f5a6b4'
      },
      data: ['-', '-', 118, 232, '-', '-', '-']
    },
    {
      name: 'Discrepancies',
      type: 'bar',
      stack: 'Total',
      label: {
        show: true,
        position: 'bottom'
      },
      itemStyle: {
        borderColor: 'transparent',
        color: '#dbd9d9'
      },
      data: ['-', '-', '-', '-', 7, '-']
    },
    {
      name: 'Net Change',
      type: 'bar',
      stack: 'Total',
      label: {
        show: true,
        position: 'top'
      },
      itemStyle: {
        borderColor: 'transparent',
        color: '#bbdefa'
      },
      data: ['-', '-', '-', '-', '-', 362]
    }
  ]
};



function App() {
  return (
    <div className="App">
      <ReactECharts option={option} />
    </div>
  );
}

export default App;
