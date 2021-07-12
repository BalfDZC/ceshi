$(document).ready(function () {
  // 基于准备好的dom，初始化echarts实例
  var permeate = echarts.init(document.getElementById('permeate'));
  var safety = echarts.init(document.getElementById('safety'));
  var intranet = echarts.init(document.getElementById('intranet'));
  var gtf = echarts.init(document.getElementById('gtf'));
  // 指定图表的配置项和数据
  var option = {
    title: {
      text: '95%',
      x: 'center',
      y: 'center',
      textStyle: {
        fontSize: '20',
        color: '#dcdcdc',
        foontWeight: '700',
      },
    },
    polar: {
      radius: ['42%', '52%'],
      center: ['50%', '50%'],
    },
    angleAxis: {
      maxInterval: 4,
      min: 0,
      max: 100,
      axisLabel: {
        show: false
      },
      axisTick: {
        show: true,
        lineStyle: {
          color: "#ccc",
          width: 1,
          type: "dashed"
        },
        length: 7,
      },
      show: true,
    },
    radiusAxis: {
      type: 'category',
      show: true,
      axisLabel: {
        show: false,
      },
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
    },
    series: [{
      name: '',
      type: 'bar',
      roundCap: true,
      barWidth: 90,
      showBackground: true,
      backgroundStyle: {
        color: '#f7f7f7',
      },
      data: [95],
      coordinateSystem: 'polar',
      itemStyle: {
        normal: {
          color: '#6cb670',
        },
      },
    }, ],
  };
  var option2 = {
    title: {
      text: '90%',
      x: 'center',
      y: 'center',
      textStyle: {
        fontSize: '20',
        color: '#dcdcdc',
        foontWeight: '700',
      },
    },
    polar: {
      radius: ['42%', '52%'],
      center: ['50%', '50%'],
    },
    angleAxis: {
      maxInterval: 4,
      min: 0,
      max: 100,
      axisLabel: {
        show: false
      },
      axisTick: {
        show: true,
        lineStyle: {
          color: "#ccc",
          width: 1,
          type: "dashed"
        },
        length: 7,
      },
      show: true,
    },
    radiusAxis: {
      type: 'category',
      show: true,
      axisLabel: {
        show: false,
      },
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
    },
    series: [{
      name: '',
      type: 'bar',
      roundCap: true,
      barWidth: 90,
      showBackground: true,
      backgroundStyle: {
        color: '#f7f7f7',
      },
      data: [90],
      coordinateSystem: 'polar',
      itemStyle: {
        normal: {
          color: '#6cb670',
        },
      },
    }, ],
  };
  var option3 = {
    title: {
      text: '85%',
      x: 'center',
      y: 'center',
      textStyle: {
        fontSize: '20',
        color: '#dcdcdc',
        foontWeight: '700',
      },
    },
    polar: {
      radius: ['42%', '52%'],
      center: ['50%', '50%'],
    },
    angleAxis: {
      maxInterval: 4,
      min: 0,
      max: 100,
      axisLabel: {
        show: false
      },
      axisTick: {
        show: true,
        lineStyle: {
          color: "#ccc",
          width: 1,
          type: "dashed"
        },
        length: 7,
      },
      show: true,
    },
    radiusAxis: {
      type: 'category',
      show: true,
      axisLabel: {
        show: false,
      },
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
    },
    series: [{
      name: '',
      type: 'bar',
      roundCap: true,
      barWidth: 90,
      showBackground: true,
      backgroundStyle: {
        color: '#f7f7f7',
      },
      data: [85],
      coordinateSystem: 'polar',
      itemStyle: {
        normal: {
          color: '#6cb670',
        },
      },
    }, ],
  };
  var option4 = {
    title: {
      text: '70%',
      x: 'center',
      y: 'center',
      textStyle: {
        fontSize: '20',
        color: '#dcdcdc',
        foontWeight: '700',
      },
    },
    polar: {
      radius: ['42%', '52%'],
      center: ['50%', '50%'],
    },
    angleAxis: {
      maxInterval: 4,
      min: 0,
      max: 100,
      axisLabel: {
        show: false
      },
      axisTick: {
        show: true,
        lineStyle: {
          color: "#ccc",
          width: 1,
          type: "dashed"
        },
        length: 7,
      },
      show: true,
    },
    radiusAxis: {
      type: 'category',
      show: true,
      axisLabel: {
        show: false,
      },
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
    },
    series: [{
      name: '',
      type: 'bar',
      roundCap: true,
      barWidth: 90,
      showBackground: true,
      backgroundStyle: {
        color: '#f7f7f7',
      },
      data: [70],
      coordinateSystem: 'polar',
      itemStyle: {
        normal: {
          color: '#6cb670',
        },
      },
    }, ],
  };
  // 使用刚指定的配置项和数据显示图表。
  permeate.setOption(option);
  safety.setOption(option2);
  intranet.setOption(option3);
  gtf.setOption(option4);
})