$(function () {
  var username = '15679193873' 
  var map = new BMap.Map("mapbox", {
    mapType: BMAP_HYBRID_MAP
  });
  var point = new BMap.Point(110.795905, 32.619646);
  map.centerAndZoom(point, 13);
  map.enableScrollWheelZoom(true);

  var dom = document.getElementById("alarmPie");
  var myChart = echarts.init(dom);
  option = {
    tooltip: {
      show:'false',
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    grid:{
      left:10,
      top:'10%',
      right:'10%'
    },
    series: [{
      name: '设备状态',
      type: 'pie',
      radius: ['40%', '50%'],
      center: ["40%", "50%"], 
      avoidLabelOverlap: true,  //是否启用防止标签重叠策略
      hoverAnimation:false, //是否开启 hover 在扇区上的放大动画效果。
      label:{
        normal:{
          padding:[2,8],
          color:'#fff',
          padding: [0, -10],//取消hr线跟延长线之间的间隙
          formatter: "{a|{b}:{d}%}",
          rich: {
              a: {
                  color: '#fff',
                  lineHeight: 20,//设置最后一行空数据高度，为了能让延长线与hr线对接起来
                  align: 'center'
              },
              hr: {//设置hr是为了让中间线能够自适应长度
                  borderColor: 'auto',//hr的颜色为auto时候会主动显示颜色的
                  width: '105%',
                  borderWidth: 0.5,
                  height: 0.5,
              },
          }
        }

      },
      labelLine: {
        normal:{
          length:5,
        }
      },
      data: [{
        value: 335,
        name: '电流'
      },{
        value: 335,
        name: '漏电'
      },{
        value: 335,
        name: '短路'
      },{
          value: 335,
          name: '温度'
        },
      {
          value: 31,
          name: '电压'
      },
      ]
    }]
  };
  myChart.setOption(option, true);

  //alarmPro
  var dom = document.getElementById("alarmPro");
  var myChart1 = echarts.init(dom);
  option1 = {
    grid: {   // 直角坐标系内绘图网格
      left: '20',  //grid 组件离容器左侧的距离,
                   //left的值可以是80这样具体像素值，
                  //也可以是'80%'这样相对于容器高度的百分比
     top: '0',
      right: '30',
      bottom: '0',
      containLabel: true   //gid区域是否包含坐标轴的刻度标签。为true的时候，
      // left/right/top/bottom/width/height决定的是包括了坐标轴标签在内的
      //所有内容所形成的矩形的位置.常用于【防止标签溢出】的场景
    },
    xAxis: {  //直角坐标系grid中的x轴,
              //一般情况下单个grid组件最多只能放上下两个x轴,
              //多于两个x轴需要通过配置offset属性防止同个位置多个x轴的重叠。
      type: 'value',//坐标轴类型,分别有：
                    //'value'-数值轴；'category'-类目轴;
                    //'time'-时间轴;'log'-对数轴
      splitLine: {show: false},//坐标轴在 grid 区域中的分隔线
      axisLabel: {show: true},//坐标轴刻度标签
      splitNumber:'10',
      axisTick: {show: true},//坐标轴刻度
      axisLine: {show: true},//坐标轴轴线
    },
    yAxis: {
      type: 'category',
      axisTick: {show: false},
      axisLine: {show: false},
      splitNumber:'10',
      boundaryGap : ['20%', '20%' ],
      axisLabel: {
        color: '#fff',
        fontSize: 12
      },
      data: ['接入点位','报警点位','报警次数']//类目数据，在类目轴（type: 'category'）中有效。
             //如果没有设置 type，但是设置了axis.data,则认为type 是 'category'。
    },
    series: [//系列列表。每个系列通过 type 决定自己的图表类型
      {
        name: '',//系列名称
        type: 'bar',//柱状、条形图
        barWidth: 10,//柱条的宽度,默认自适应
        data: [20,40,600],//系列中数据内容数组
        label: { //图形上的文本标签
          show: true,
          position: 'right',//标签的位置
         offset: [-10,-10],  //标签文字的偏移，此处表示向上偏移40
          formatter: '{c}{a}',//标签内容格式器 {a}-系列名,{b}-数据名,{c}-数据值
          color: '#fff',//标签字体颜色
          fontSize: 20  //标签字号
        },
        itemStyle: {//图形样式
          normal: {  //normal 图形在默认状态下的样式;
                     //emphasis图形在高亮状态下的样式
            barBorderRadius: 10,//柱条圆角半径,单位px.
                                //此处统一设置4个角的圆角大小;
                       //也可以分开设置[10,10,10,10]顺时针左上、右上、右下、左下
            color: new echarts.graphic.LinearGradient(
              0, 0, 1, 0,
              [{
                offset: 0,
                color: '#1ec4a3'
              },
                {
                  offset: 1,
                  color: '#f82f2e'
                }
              ]
            )
          }
        },
        zlevel:1//柱状图所有图形的 zlevel 值,
                //zlevel 大的 Canvas 会放在 zlevel 小的 Canvas 的上面
      },
      {
        name: '进度条背景',
        type: 'bar',
        barGap: '-100%',//不同系列的柱间距离，为百分比。
        // 在同一坐标系上，此属性会被多个 'bar' 系列共享。
        // 此属性应设置于此坐标系中最后一个 'bar' 系列上才会生效，
         //并且是对此坐标系中所有 'bar' 系列生效。
        barWidth: 10,
        data: [600, 600, 600],
        // color: '#fff',//柱条颜色
        itemStyle: {
          normal: {
           // barBorderRadius: 10
           color:'#fff',
           opacity:0.1,
           borderColor :'#ddd'
          }
          
        }
      }
  ]};
  myChart1.setOption(option1, true);

  //关闭
  $('.errorBtn').click(function(){
    console.log($(this))
    var out=$(this).attr('data-out')
    if(out=='0'){
      $('.serviceData').hide()
    }else if(out=='1'){
      $('.alarmRecord').hide()
    }else if(out=='2'){
      $('.panalarm').hide()
    }
  })
  //圆圈
  $('.centerRound').click(function(){
    console.log($(this))
    var out=$(this).attr('data-out')
    if(out=='0'){
      $('.serviceData').show()
    }else if(out=='1'){
      $('.alarmRecord').show()
    }else if(out=='2'){
      $('.panalarm').show()
    }
  })
  
})