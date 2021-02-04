$(function(){
  var myChart1 = echarts.init(document.getElementById("senseTuTop"));
  console.log(myChart1)
  var option1 = {
    tooltip: { //提示框组件
      trigger: 'axis', //触发类型。
      axisPointer: { //配置坐标轴指示器的快捷方式
        type: 'shadow', // 阴影指示器
        label: { //坐标轴指示器的文本标签。
          show: true //是否显示文本标签。
        }
      }
    },
    grid: {
      left: '3%',
      top:'15%',
      right: '4%',
      bottom: '20%',
      containLabel: true
    },
    toolbox: { //工具栏
      show: false, //是否显示工具栏组件。
      feature: { //各工具配置项。
        mark: {
          show: true
        },
        //dataView : {show: true, readOnly: false},
        magicType: {
          show: true,
          type: ['bar']
        },
        restore: {
          show: true
        },
        saveAsImage: {
          show: true
        }
      }
    },
    calculable: true,
    legend: {
      data: ['湿度'], //图例的数据数组
      itemGap: 1, //图例每项之间的间隔,
      pageIconColor: '#3cf',
      pageTextStyle: {
        color: '#3cf'
      },
      top: 10,
      textStyle: {
        color: '#3cf'
      },
    },
    xAxis: [{
      type: 'category', //坐标轴类型。
      axisLine:{
        lineStyle:{
          color:'#3cf'
        }
      },
      data: ['01:00','02:00','03:00','04:00','05:00','06:00','07:00','08:00','09:00','10:00','11:00','12:00','13:00','14:00'],
  
    }],
    yAxis: [{
      type: 'value',
      name: '湿度(%)',
      axisLine:{
        lineStyle:{
          color:'#3cf'
        }
      },
      nameTextStyle: {
        color: '#3cf'
      }
    }],
    dataZoom: [ //用于区域缩放
      {
        show: true,
        start: 0, //数据窗口范围的起始百分比
        end: 100
      },
      {
        type: 'inside',
        start: 0,
        end: 100
      },
    ],
    series: [{
        name: '湿度(%)',
        type: 'line',
        data: [2,8,6,5,1,3,5,1,2,6,4,0,5,0]
      }
    ]
  }
  myChart1.setOption(option1, true);
  // myChart1.resize();
  

  var myChart2 = echarts.init(document.getElementById("senseTuBottom"));
  myChart2.setOption(option1, true);
})