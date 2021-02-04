$(function () {
    var dom = document.getElementById("leftbottom");
    var myChart = echarts.init(dom);
    var app = {};
    var dd1
    option = null;
    option = {
      tooltip: { //1提示框组件
        trigger: 'axis', //触发类型。
        axisPointer: { //配置坐标轴指示器的快捷方式
          type: 'shadow', // 阴影指示器
          label: { //坐标轴指示器的文本标签。
            show: true //是否显示文本标签。
          }
        }
      },
      toolbox: { //工具栏	
        show: false, //是否显示工具栏组件。
      },
      legend: {
        data: ['环境监测', '视频监控', '线缆', '水浸', '燃气', '风机'], //图例的数据数组
        show: true,
      },
      grid: {
        top: '5%', //grid 组件离容器上侧的距离。
        left: '6%',
        containLabel: false //区域是否包含坐标轴的刻度标签。
      },
      xAxis: [{
        type: 'category', //坐标轴类型。
        splitLine: {
          show:false
        },
        axisLabel: {
          interval:0,//代表显示所有x轴标签显示
        },
        axisLine:{
          lineStyle:{
            color:'#78deff',
          }
        },
        data: ['环境监测', '视频监控', '线缆', '水浸', '燃气', '风机']
      }],
      yAxis: [{
        name: '设备数(台)',
        type: 'value',
        splitLine: {
          show:false
        },
        nameTextStyle:{
          color:'#78deff',
        },
        axisLine:{
          lineStyle:{
            color:'#78deff',
          }
        },
        
      }],
      series: [{
        name: '数量',
        type: 'bar',
        data: ['2', '15', '35', '5', '0', '9'],
        itemStyle: {
          normal: {
            color: function (params) {
              var colorList = ['#c12e34', '#e6b600', '#0098d9', '#2b821d', '#005eaa', '#339ca8', '#cda819'];
              return colorList[params.dataIndex]
            }
          }
        },
      }]
    };
    myChart.setOption(option, true);
    myChart.on('click', function (params) { 
      console.log(params);
      console.log(params.name);
      
      var width = $(window).width();
      var height = $(window).height();
      console.log(height)
      if(params.dataIndex=='0'){ //环境监测

      }else if(params.dataIndex=='1'){ //视频监控

      }else if(params.dataIndex=='2'){ //线缆

      }else if(params.dataIndex=='3'){ //水浸

      }else if(params.dataIndex=='4'){ //燃气

      }else {//风机
        
      }
      layer.open({
        type: 2,
        title: false, //不显示标题栏
        closeBtn:false,
        shadeClose:true,
        area: [width * 0.7 + 'px', height - 200 + 'px'],
        shade: 0.5,
        skin:'yourclass',
        // maxmin: true,  // 关闭键
        offset: ['100px'],
        end:function(e){
          console.log(e)
        },
        content: 'facDetail/camera.html'
      });
    })
})