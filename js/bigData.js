$(function () {
  var map = new BMap.Map("mapbox", {
    mapType: BMAP_HYBRID_MAP
  });
  var point = new BMap.Point(110.795905, 32.619646);
  map.centerAndZoom(point, 13);
  map.enableScrollWheelZoom(true);




  function todayTime() {
    var date = new Date();
    var curYear = date.getFullYear();
    var curMonth = date.getMonth() + 1;
    var curDate = date.getDate();
    if (curMonth < 10) {
      curMonth = '0' + curMonth;
    }
    if (curDate < 10) {
      curDate = '0' + curDate;
    }
    var curHours = date.getHours();
    var curMinutes = date.getMinutes();
    var curtime = curYear + ' 年 ' + curMonth + ' 月 ' + curDate + ' 日'
    console.log(curtime, 6654123211)
    $('#time').html(curtime)
  }


  todayTime()





  function selectHome(pno, pageSize, code) {
    $.ajax({
      type: 'get',
      url: url + 'alarmInfo',
      data: 'username=' + username + '&code=' + code + '&pno=' + pno + '&pageSize=' + pageSize,
      error: function (error) {
        console.log(error)
      },
      success: function (res) {
        console.log(res)
        var data = res.data
        $('.alarmNum').html(res.pageCount + '个')
        var html = "";
        $.each(data, function (i, v) {
          html += `<li  >
          <ul class='outUl' data=${v.did}>
            <li>
              <span style='color:#2DBB8B'>设备名称:</span>${v.device_name}
            </li>
            <li>
              <span style='color:#2DBB8B'>设备编号:</span>${v.imei}
            </li>
            <li>
              <span style='color:#2DBB8B'>设备地址:</span>${v.adss}
            </li>
            <li>
              <span style='color:#2DBB8B'>报警类型:</span>${v.typeName}
            </li>
            <li>
              <span style='color:#2DBB8B'>报警时间:</span>${v.alarmTime}
            </li>
          </ul>
        </li>`
        })
        $('#panalUl').html(html)
        $('.outUl').click(function () {

          var did = $(this).attr('data')
          console.log(did)
          syShow(did)
          $('#exampleModal').modal('show')
        })
      }
    })
  }
  selectHome(1, 1, '')

  function syShow(code) {
    $.ajax({
      type: 'get',
      url: url + 'getDeviceRealTime',
      data: 'username=' + username + '&did=' + code,
      error: function (error) {
        console.log(error)
      },
      success: function (res) {
        console.log(res, 75546213)
        var {
          dname,
          adss,
          type,
          imei,
          alarmType,
          heartbeatTime,
          hum,
          rssi,
          temp
        } = res.deviceInfo
        var html = "";

        html = `<div class="bodyRightDetail" styly='display: flex;'>
            <div style='width:29%;height:99.5%;display: flex;align-content: space-between;flex-wrap: wrap;'>
                <div style='width:100%;height:29.5%;border:1px solid #159C61;'>
                    <div class='bctitle' style='    margin: 7px 0 0 7px;display: inline-block;position: relative;'>
                        终端信息
                    </div>
                    <div style="color:#fff;text-align: left;;display: inline-block;position: relative;    width: 10%;
                    height: 25px;    right: -25px;">
                        <i style='background:url(../image/i_1.png);width:16px;height:16px;position: absolute;top:12px;'></i>
                        <i style='background:url(../image/i_2.png);width:16px;height:16px;position: absolute;top:12px;right:-7px'></i>
                        <i style='background:url(../image/i_3.png);width:16px;height:16px;position: absolute;top:12px;right:-25px'></i>
                    </div>
                    <div  class='topTable'>
                        <table  width='90%' style='margin-top:10px;margin-left:10px;border-collapse: inherit;'>
                            <tbody>
                                <tr>
                                    <td style='width:30%;'>
                                        <span style='color:#2AB889'>设备名称:</span>
                                    </td>
                                    <td>${dname}</td>
                                </tr>
                                <tr>
                                    <td style='width:30%;'>
                                        <span style='color:#2AB889'>设备状态:</span>
                                    </td>
                                    <td>${alarmType == 0 ? '正常' : alarmType == 1 ? '报警' : '故障'}</td>
                                </tr>
                                <tr>
                                    <td style='width:30%;'>
                                        <span style='color:#2AB889'>设备类型:</span>
                                    </td>
                                    <td>${type}</td>
                                </tr>
                                <tr>
                                    <td style='width:30%;'>
                                        <span style='color:#2AB889'>设备ID:</span>
                                    </td>
                                    <td>${imei}</td>
                                </tr>
                                <tr>
                                    <td style='width:30%;'>
                                        <span style='color:#2AB889'>创建时间:</span>
                                    </td>
                                    <td>${heartbeatTime}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
    
                </div>
                <div style='width:100%;height:69%;border:1px solid #159C61;'>
                    <div class='bctitle' style='    margin: 7px 0 0 7px;'>传感器数据</div>
                    <ul  class='ul_center' style='position: relative;' id='bottomInfo'>
                        <li > 
                            <div style='width:75%;'>
                                <p style='margin:10px 0 0 20px;'>湿度</p>
                                <p style='color:#aaa'><i class="sense" ></i> <span style='margin-left: 40px;'>${heartbeatTime}</span></p>
                            </div>
                            <div style='width:19%;line-height: 60px;text-align: right  ;'>
                                <span>${hum}%</span>
                            </div>
                        </li>
                        <li > 
                            <div style='width:75%;'>
                                <p style='margin:10px 0 0 20px;'>温度</p>
                                <p style='color:#aaa'><i class="sense" ></i> <span style='margin-left: 40px;'>${heartbeatTime}</span></p>
                            </div>
                            <div style='width:19%;line-height: 60px;text-align: right  ;'>
                                <span>${temp}°C</span>
                            </div>
                        </li>
                        <li > 
                            <div style='width:75%;'>
                                <p style='margin:10px 0 0 20px;'>信号值</p>
                                <p style='color:#aaa'><i class="sense" ></i> <span style='margin-left: 40px;'>${heartbeatTime}</span></p>
                            </div>
                            <div style='width:19%;line-height: 60px;text-align: right  ;'>
                                <span>${rssi}</span>
                            </div>
                        </li>
                    </ul>
                    <div class='bctitle' style='    margin: 7px 0 0 7px;'>报警</div>
                    <ul  class='ul_center' style='position: relative;' id='bottomAlarmInfo'>
                          
                    </ul>
                </div>
            </div>
            <div style='width:69%;height:680px;display: flex;align-content: space-between;flex-wrap: wrap;'>
                <div style='width:100%;height:49.5%;border:1px solid #159C61;'>
                  <div class='bctitle' style='    margin: 7px 0 0 7px;'>温度趋势变化图</div>
                    <div id="senseTuTop" style='width:100%;height:90%'></div>
                </div>
                <div style='width:100%;height:49.5%;border:1px solid #159C61;'>
                <div class='bctitle' style='    margin: 7px 0 0 7px;'>湿度趋势变化图</div>
                    <div id="senseTuBottom" style='width:100%;height:90%'></div>
                </div>
            </div>
        </div>`

        $('.modal-body').html(html)
        var alarmInfo = res.alarms;
        var alarmHtml = ''
        $.each(alarmInfo, function (i, v) {
          alarmHtml += `<li > 
        <div style='width:75%;'>
            <p style='margin:10px 0 0 20px;'>${v.typeName}</p>
            <p style='color:#aaa'><i class="sense" ></i> <span style='margin-left: 40px;'>${heartbeatTime}</span></p>
        </div>
        <div style='width:19%;line-height: 60px;text-align: right  ;'>
            <span>${v.alarmValue}</span>
        </div>
        </li>`
        })
        $('#bottomAlarmInfo').html(alarmHtml)

        var temp = []
        var hum = [];
        var time = []

        if (res.deviceDatas.length == 0) {
          var lineDatas = res.deviceInfo;
          for (let key in lineDatas) {
            console.log(key)
            if (key == 'temp') {
              temp.push(lineDatas[key])
            }
            if (key == 'hum') {
              hum.push(lineDatas[key])
            }
            if (key == 'heartbeatTime') {
              time.push(lineDatas[key])
            }
          }
        } else {
          var lineDatas = res.deviceDatas;

          $.each(lineDatas, function (i, v) {
            console.log(v, 66666699999)
            temp.push(v.temp)
            hum.push(v.hum)
            time.push(v.time)
          })
        }





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
            top: '15%',
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
            pageIconColor: '#159C61',
            pageTextStyle: {
              color: '#159C61'
            },
            top: 10,
            textStyle: {
              color: '#159C61'
            },
          },
          xAxis: [{
            type: 'category', //坐标轴类型。
            axisLine: {
              lineStyle: {
                color: '#159C61'
              }
            },
            data: time,

          }],
          yAxis: [{
            type: 'value',
            name: '湿度(%)',
            axisLine: {
              lineStyle: {
                color: '#159C61'
              }
            },
            nameTextStyle: {
              color: '#159C61'
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
            data: hum
          }]
        }
        myChart1.setOption(option1, true);
        var option2 = {
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
            top: '15%',
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
            data: ['温度'], //图例的数据数组
            itemGap: 1, //图例每项之间的间隔,
            pageIconColor: '#159C61',
            pageTextStyle: {
              color: '#159C61'
            },
            top: 10,
            textStyle: {
              color: '#159C61'
            },
          },
          xAxis: [{
            type: 'category', //坐标轴类型。
            axisLine: {
              lineStyle: {
                color: '#159C61'
              }
            },
            data: time,

          }],
          yAxis: [{
            type: 'value',
            name: '温度(°C)',
            axisLine: {
              lineStyle: {
                color: '#159C61'
              }
            },
            nameTextStyle: {
              color: '#159C61'
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
            name: '温度(°C)',
            type: 'line',
            data: temp
          }]
        }
        var myChart2 = echarts.init(document.getElementById("senseTuBottom"));
        myChart2.setOption(option2, true);
      }


    })
  }



  function selectMore(pno, pageSize, code) {
    $.ajax({
      type: 'get',
      url: url + 'alarmInfo',
      data: 'username=' + username + '&code=' + code + '&pno=' + pno + '&pageSize=' + pageSize,
      error: function (error) {
        console.log(error)
      },
      success: function (res) {
        console.log(res)
        var data = res.data
        var html = "";
        $.each(data, function (i, v) {
          html += `<li  style='border-bottom: 1px solid #1b5b46;padding-bottom: 10px;    margin-bottom: 10px;'>
          <ul class='outUl' data=${v.did}>
            <li>
              <span style='color:#2DBB8B'>设备名称:</span>${v.device_name}
            </li>
            <li>
              <span style='color:#2DBB8B'>设备编号:</span>${v.imei}
            </li>
            <li>
              <span style='color:#2DBB8B'>设备地址:</span>${v.adss}
            </li>
            <li>
              <span style='color:#2DBB8B'>报警类型:</span>${v.typeName}
            </li>
            <li>
              <span style='color:#2DBB8B'>报警时间:</span>${v.alarmTime}
            </li>
          </ul>
        </li>`

        })
        $('#panalUl').html(html)
        $('.outUl').click(function () {
          let did = $(this).attr('data')
          console.log(did)
          syShow(did)
          $('#exampleModal').modal('show')
        })
      }
    })
  }
  function color16() {
    //十六进制颜色随机
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    //var color = '#'+r.toString(16)+g.toString(16)+b.toString(16); 
    var rs = r.toString(16);
    var gs = g.toString(16);
    var bs = b.toString(16);
    if (rs.length < 2) rs = "0" + rs;
    if (gs.length < 2) gs = "0" + gs;
    if (bs.length < 2) bs = "0" + bs;
    return '#' + rs + gs + bs;
  }
  //服务数据
  $.ajax({
    type: 'get',
    url: url + 'jkAlarmData',
    data: 'username=' + username,
    error: function (error) {
      console.log(error)
    },
    success: function (res) {
      console.log(res)
      var data = [];
      var code = [];
      var facData = []
      var html = "";
      for (var i in res) {
        if (i !== 'code') {
          if (i !== 'data') {
            if (i !== '服务次数') {
              var color = color16();
              html += ` <div class='h25'>
            <span class='serveBottom' style='background:${color}'></span>
            <span class='serveBSpan'> ${i}- ${res[i]}次</span>
          </div>`
            } else {
              var AlarmAllStr = res[i] + "";
              console.log(AlarmAllStr)
              AlarmAllStr = "0000" + AlarmAllStr;
              AlarmAllStr = AlarmAllStr.substr(AlarmAllStr.length - 4, 4);
              console.log(AlarmAllStr)
              $("#serverTime").find(".serveRight").each(function (i, v) {
                $(v).html(AlarmAllStr.substr(i, 1));
              });
            }

          } else {
            facData.push(res[i])
          }
        }
      }
      $('#serverInfo').html(html)
      console.log(facData)
      var outData = [];
      $.each(facData[0], function (i, v) {
        outData.push({
          value: v.num,
          name: v.name,
        })
      })
      console.log(outData)
      var dom = document.getElementById("alarmPie");
      var myChart2 = echarts.init(dom);
      option = {
        tooltip: {
          show: 'false',
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        grid: {
          left: 10,
          top: '10%',
          right: '10%'
        },
        series: [{
          name: '设备状态',
          type: 'pie',
          radius: ['40%', '50%'],
          center: ["40%", "50%"],
          avoidLabelOverlap: true,  //是否启用防止标签重叠策略
          hoverAnimation: false, //是否开启 hover 在扇区上的放大动画效果。
          label: {
            normal: {
              padding: [2, 8],
              color: '#fff',
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
            normal: {
              length: 5,
            }
          },
          data: outData
        }]
      }
      myChart2.setOption(option, true);
    }
  })


  //报警记录
  $.ajax({
    type: 'get',
    url: url + 'AlarmCount',
    data: 'username=' + username,
    error: function (error) {
      console.log(error)
    },
    success: function (res) {
      console.log(res)
      var data = [];
      var code = [];
      var out = []
      for (var i in res) {
        if (i != 'code') {
          if (i != 'all') {
            data.push(i)
            code.push(res[i])
          } else {
            out.push(res[i])
          }
        }
      }
      console.log(out)
      //alarmPro
      var dom = document.getElementById("alarmPro");
      var myChart1 = echarts.init(dom);
      option1 = {
        grid: { // 直角坐标系内绘图网格
          left: '20', //grid 组件离容器左侧的距离,
          //left的值可以是80这样具体像素值，
          //也可以是'80%'这样相对于容器高度的百分比
          top: '0',
          right: '30',
          bottom: '0',
          containLabel: true //gid区域是否包含坐标轴的刻度标签。为true的时候，
          // left/right/top/bottom/width/height决定的是包括了坐标轴标签在内的
          //所有内容所形成的矩形的位置.常用于【防止标签溢出】的场景
        },
        xAxis: { //直角坐标系grid中的x轴,
          //一般情况下单个grid组件最多只能放上下两个x轴,
          //多于两个x轴需要通过配置offset属性防止同个位置多个x轴的重叠。
          type: 'value', //坐标轴类型,分别有：
          //'value'-数值轴；'category'-类目轴;
          //'time'-时间轴;'log'-对数轴
          splitLine: {
            show: false
          }, //坐标轴在 grid 区域中的分隔线
          axisLabel: {
            show: true
          }, //坐标轴刻度标签
          splitNumber: '10',
          axisTick: {
            show: true
          }, //坐标轴刻度
          axisLine: {
            show: true
          }, //坐标轴轴线
        },
        yAxis: {
          type: 'category',
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          splitNumber: '10',
          boundaryGap: ['20%', '20%'],
          axisLabel: {
            color: '#fff',
            fontSize: 12
          },
          data: data //类目数据，在类目轴（type: 'category'）中有效。
          //如果没有设置 type，但是设置了axis.data,则认为type 是 'category'。
        },
        series: [ //系列列表。每个系列通过 type 决定自己的图表类型
          {
            name: '', //系列名称
            type: 'bar', //柱状、条形图
            barWidth: 10, //柱条的宽度,默认自适应
            data: code, //系列中数据内容数组
            label: { //图形上的文本标签
              show: true,
              position: 'right', //标签的位置
              offset: [-10, -10], //标签文字的偏移，此处表示向上偏移40
              formatter: '{c}{a}', //标签内容格式器 {a}-系列名,{b}-数据名,{c}-数据值
              color: '#fff', //标签字体颜色
              fontSize: 20 //标签字号
            },
            itemStyle: { //图形样式
              normal: { //normal 图形在默认状态下的样式;
                //emphasis图形在高亮状态下的样式
                barBorderRadius: 10, //柱条圆角半径,单位px.
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
            zlevel: 1 //柱状图所有图形的 zlevel 值,
            //zlevel 大的 Canvas 会放在 zlevel 小的 Canvas 的上面
          },
          {
            name: '进度条背景',
            type: 'bar',
            barGap: '-100%', //不同系列的柱间距离，为百分比。
            // 在同一坐标系上，此属性会被多个 'bar' 系列共享。
            // 此属性应设置于此坐标系中最后一个 'bar' 系列上才会生效，
            //并且是对此坐标系中所有 'bar' 系列生效。
            barWidth: 10,
            data: [out[0], out[0], out[0]],
            // color: '#fff',//柱条颜色
            itemStyle: {
              normal: {
                // barBorderRadius: 10
                color: '#fff',
                opacity: 0.1,
                borderColor: '#ddd'
              }

            }
          }
        ]
      };
      myChart1.setOption(option1, true);
    }
  })

  //地图
  $.ajax({
    type: 'get',
    url: url + 'projectHome',
    data: 'username=' + username,
    error: function (error) {
      console.log(error)
    },
    success: function (res) {
      console.log(res)
      var list = res.list;
      for (var i = 0; i < list.length; i++) {
        console.log(list[i])
        var opts = {
          width: 210, // 信息窗口宽度
          height: 83, // 信息窗口高度
          title: "<h4>" + list[i].name + "</h4>", // 信息窗口标题
          enableMessage: true, //设置允许信息窗发送短息
          message: ""
        }
        if (list[i].aPid == '') {
          var myIcon = new BMap.Icon("./image/green_yuan.png", new BMap.Size(20, 30), {
            // 指定定位位置
            offset: new BMap.Size(10, 25),
            // 当需要从一幅较大的图片中截取某部分作为标注图标时，需要指定大图的偏移位置   
            imageOffset: new BMap.Size(0, 0) // 设置图片偏移  
          });
        } else {
          var myIcon = new BMap.Icon("./image/red_yuan.png", new BMap.Size(20, 30), {
            // 指定定位位置
            offset: new BMap.Size(10, 25),
            // 当需要从一幅较大的图片中截取某部分作为标注图标时，需要指定大图的偏移位置   
            imageOffset: new BMap.Size(0, 0) // 设置图片偏移  
          });
        }
        var pp = list[i].longitude;
        if (pp.split(',')[0] > 54) {
          var lng = pp.split(',')[0]
          var lat = pp.split(',')[1]
        } else {
          var lng = pp.split(',')[1]
          var lat = pp.split(',')[0]
        }
        var pt = new BMap.Point(lng, lat)
        var marker = new BMap.Marker(pt, { icon: myIcon });  // 创建标注
        var content = `状态:<span style='${list[i].aPid == '' ? 'color:#27CC32' : 'color:red'}'>${list[i].aPid == '' ? '正常' : '报警'}</span>`//data_info[i][2];

        map.addOverlay(marker);               // 将标注添加到地图中
        addClickHandler(content, marker);
      }
      function addClickHandler(content, marker) {
        marker.addEventListener("click", function (e) {
          var p = e.target;
          var point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
          var infoWindow = new BMap.InfoWindow(content, opts);  // 创建信息窗口对象 
          map.openInfoWindow(infoWindow, point); //开启信息窗口
        });
      }
    }
  })
  $('#alarmInfo').click(function () {
    var moreHeight = $('.bodyRight').height() - 140;
    var direaction = $(this).attr('data-dir')
    if (direaction == 'drop') {
      $('.panalarm').css('height', moreHeight);
      $('#alarmInfo').css('background', "url('../image/top.png')")
      $('#alarmInfo').css('background-size', "100% 100%")
      $('#panalUl').css('height', '580px')
      $(this).attr('data-dir', 'top')
      selectMore(1, 4, '')

    } else {
      $('.panalarm').css('height', '25%');
      $('#panalUl').css('height', 'auto')
      $('#alarmInfo').css('background', "url('../image/drop.png')")
      $('#alarmInfo').css('background-size', "100% 100%")
      $(this).attr('data-dir', 'drop')
      selectHome(1, 1, '')
    }

  })
  //关闭
  $('.errorBtn').click(function () {
    var out = $(this).attr('data-out')
    if (out == '0') {
      $('.serviceData').hide()
    } else if (out == '1') {
      $('.alarmRecord').hide()
    } else if (out == '2') {
      $('.panalarm').hide()
    }
  })
  //圆圈
  $('.centerRound').click(function () {
    var out = $(this).attr('data-out')
    if (out == '0') {
      $('.serviceData').show()
    } else if (out == '1') {
      $('.alarmRecord').show()
    } else if (out == '2') {
      $('.panalarm').show()
    }
  })

})