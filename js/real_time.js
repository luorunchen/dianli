$(function () {
  sessionStorage.removeItem('two')
  sessionStorage.removeItem('three')
  sessionStorage.removeItem('four')
  sessionStorage.removeItem('one')
  sessionStorage.removeItem('five')

  function selectPage(code, name) {
    var one = sessionStorage.getItem('one')
    var two = sessionStorage.getItem('two')
    var three = sessionStorage.getItem('three')
    var four = sessionStorage.getItem('four')
    var five = sessionStorage.getItem('five')
    console.log(one)
    console.log(two)
    console.log(three)
    console.log(four)
    var html = `<li><a href="javascrip:;">&nbsp;襄阳供电公司&nbsp;</a>`;
    if (two != null) {
      html += `<li><a href="javascrip:;">&gt;&nbsp;${two}&nbsp;</a>`
    }
    if (three != null) {
      html += `<li><a href="javascrip:;">&gt;&nbsp;${three}&nbsp;</a>`
    }
    if (four != null) {
      html += `<li><a href="javascrip:;">&gt;&nbsp;${four}&nbsp;</a>`
    }
    if (five != null) {
      html += `<li><a href="javascrip:;">&gt;&nbsp;${five}&nbsp;</a>`
    }
    $('.breadcrumb').html(html)
    console.log(code, 22222222222)
    $.ajax({
      type: 'get',
      url: url + 'realDataByCode',
      data: 'username=' + username + '&code=' + code + '&pno=1' + '&pageSize=1000',
      error: function (error) {
        console.log(error)
      },
      success: function (res) {
        // console.log(res, 66666666666666)
        var data = res.data
        // console.log(data.code, 77777)

        window.a = []
        data.forEach((element, index) => {
          $.ajax({
            type: 'get',
            url: url + 'realDataByCode',
            data: 'username=' + username + '&code=' + element.code + '&pno=1' + '&pageSize=1000',
            error: function (error) {
              console.log(error)
            },
            success: function (res) {
              var data2 = res.data

              a.push(data2)

              let n = []

              for (let i = 0; i < a.length; i++) {

                // console.log(a[i][0])
                if (a[i][0] != undefined) {

                  if (a[i][0].name.slice(0, 2) === element.name.slice(0, 2)) {
                    element.onlie = a[i][0].onlie
                    element.offline = a[i][0].offline
                    element.nanum = a[i][0].nanum
                    //   console.log(element,77777)
                  }
                }
              }

              let v = element



              html += `
              
           
                <div  class='bodyRightCenter' data-name="${v.name}" data-id="${v.id}" data-type="${v.type}" data-code="${v.code}" data-index="1">
              <div  class='bodyRightCenterHeader'>总设备数:${v.dnum}</div>
              <div style='height: 100px;display: flex;'>
                  <div style='height: 100px;line-height: 100px;'>
                      <img  class="img " src="image/供电公司.png" style='margin-left:20px;;'>
                  </div>
                  <div  class='bodyRightCenterTitle'>
                      <p>${v.name}</p>
                      <p style='color:#2DBB8B'>更新时间:${v.rdate}</p>
                  </div>
              </div>
              <div  class='bodyRightCenterDetail'>
                  <div style='width:30%;line-height: 30px;'>
                      <p style='margin-top:10px;'>${v.anum}</p>
                      <p style='color:#2DBB8B'>报警</p>
                  </div>
                  <div style='width:30%;line-height: 30px;'>
                      <p style='margin-top:10px;'>${v.nanum}</p>
                      <p style='color:#2DBB8B'>正常</p>
                  </div>
                  <div style='width:30%;line-height: 30px;'>
                      <p style='margin-top:10px;'>${v.onlie}/${v.offline}</p>
                      <p style='color:#2DBB8B'>在线/离线</p>
                  </div>
                  <div style="width:2px;height:40px;position: absolute;top:25%;left:35%;background-image: linear-gradient(to top, #083c31 ,  #159960 ,#083c31 );">
                  </div>
                  <div style="width:2px;height:40px;position: absolute;top:25%;left:65%;background-image: linear-gradient(to top, #083c31 ,  #159960 ,#083c31 );">
                  </div>
              </div>
        
             </div>
              
              `
              $('.bodyRightAll').html(html)
            }
          })
        });



        if (data.length < 8) {
          $('.bodyRightAll').css('height', 'auto')
        } else {
          $('.bodyRightAll').css('height', '745px')
        }
        var html = ""




        // $.each(data, function (i, v) {
        //     // console.log(i,789789789)
        //   // if(data2 ===v.name){
        //     // console.log(window,887797878)
        //   // }
        //   // console.log(v,888 )

        // })

        // console.log(a,55665545 )



      }
    })


  }
  selectPage('', '')


  function before(code) {
    var one = sessionStorage.getItem('one')
    var two = sessionStorage.getItem('two')
    var three = sessionStorage.getItem('three')
    var four = sessionStorage.getItem('four')
    var five = sessionStorage.getItem('five')
    var html = `<li><a href="javascrip:;">&nbsp;襄阳供电公司&nbsp;</a>`;
    if (two != null) {
      html += `<li><a href="javascrip:;">&gt;&nbsp;${two}&nbsp;</a>`
    }
    if (three != null) {
      html += `<li><a href="javascrip:;">&gt;&nbsp;${three}&nbsp;</a>`
    }
    if (four != null) {
      html += `<li><a href="javascrip:;">&gt;&nbsp;${four}&nbsp;</a>`
    }
    if (five != null) {
      html += `<li><a href="javascrip:;">&gt;&nbsp;${five}&nbsp;</a>`
    }
    $('.breadcrumb').html(html)

    // code =1001001006000
    // console.log(code,1111)
    $.ajax({
      type: 'get',
      url: url + 'getProject',
      data: 'username=' + username + '&code=' + code + '&pno=1' + '&pageSize=1000',
      error: function (error) {
        console.log(error)
      },
      success: function (res) {
        // console.log(res)
        var data = res.data
        // console.log(res)
        var html = "";
        $.each(data, function (i, v) {
          html += `<div  class='bodyRightCenter' data-name="${v.name}" data-id="${v.pid}"  data-code="${v.code}" data-index="10"  data-pid="${v.pid}">
            <div  class='bodyRightCenterHeader'>总设备数:${v.dnum}</div>
            <div style='height: 100px;display: flex;'>
                <div style='height: 100px;line-height: 100px;'>
                    <img  class="img " src="image/供电公司.png" style='margin-left:20px;;'>
                </div>
                <div  class='bodyRightCenterTitle'>
                    <p>${v.name}</p>
                    <p style='color:#2DBB8B'>项目地址:${v.adss}</p>
                </div>
            </div>
            <div  class='bodyRightCenterDetail'>
                <div style='width:30%;line-height: 30px;'>
                    <p style='margin-top:10px;'>${v.anum}</p>
                    <p style='color:#2DBB8B'>报警</p>
                </div>
                <div style='width:30%;line-height: 30px;'>
                    <p style='margin-top:10px;'>${v.nanum}</p>
                    <p style='color:#2DBB8B'>正常</p>
                </div>
                <div style='width:30%;line-height: 30px;'>
                    <p style='margin-top:10px;'>${v.onlie}/${v.offline}</p>
                    <p style='color:#2DBB8B'>在线/离线</p>
                </div>
                <div style="width:2px;height:40px;position: absolute;top:25%;left:35%;background-image: linear-gradient(to top, #083c31 ,  #159960 ,#083c31 );">
                </div>
                <div style="width:2px;height:40px;position: absolute;top:25%;left:65%;background-image: linear-gradient(to top, #083c31 ,  #159960 ,#083c31 );">
                </div>
            </div>
        </div>`
        })
        $('.bodyRightAll').html(html)

        $('.bodyRightCenter').click(function () {
          console.log($(this).attr('data-index'))
          var Sindex = $(this).attr('data-index')
          var pid = $(this).attr('data-pid')
          if (Sindex == '10') {
            getDevice(pid)

          }
        })
      }
    })
  }

  function getDevice(code) {
    $.ajax({
      type: 'get',
      url: url + 'getDevice',
      data: 'username=' + username + '&pid=' + code + '&pno=1' + '&pageSize=1000',
      error: function (error) {
        console.log(error)
      },
      success: function (res) {
        console.log(res, 988787)
        var data = res.data
        console.log(data)
        var html = "";
        $.each(data, function (i, v) {
          html += `<div  class='bodyRightCenter' data-did="${v.did}" data-index="100">
          <div  class='bodyRightCenterHeader'>总报警数:${v.alarmNum}</div>
          <div style='height: 100px;display: flex;'>
              <div style='height: 100px;line-height: 100px;'>
                  <img  class="img " src="image/供电公司.png" style='margin-left:20px;;'>
              </div>
              <div  class='bodyRightCenterTitle'>
                  <p>${v.dname}</p>
                  <p style='color:#2DBB8B'>设备编号:${v.imei}</p>
              </div>
          </div>
          <div  class='bodyRightCenterDetail'>
              <div style='width:30%;line-height: 30px;'>
                  
              </div>
              <div style='width:30%;line-height: 30px;'>
                  <p style='margin-top:10px;'>${v.alarmNum}</p>
                  <p style='color:#2DBB8B'>未处理</p>
              </div>
              <div style='width:30%;line-height: 30px;'>
                  <p style='margin-top:10px;'>${v.alarmType}</p>
                  <p style='color:#2DBB8B'>状态</p>
              </div>
              <div style="width:2px;height:40px;position: absolute;top:25%;left:35%;background-image: linear-gradient(to top, #083c31 ,  #159960 ,#083c31 );">
              </div>
              <div style="width:2px;height:40px;position: absolute;top:25%;left:65%;background-image: linear-gradient(to top, #083c31 ,  #159960 ,#083c31 );">
              </div>
          </div>
      </div>`
        })
        // html = 
        // `
        //   <div class='block3D'>
        //     <div class='none3D'>  <div class='smallBox3D' style='float'>
        //     <span id='name'>屈显</span>
        //     <span id='role' style='margin-left:20px;'>超级管理员</span>
        //     <span id='time' style='margin-left:20px;'> 2020-09-01 周二 </span>
        //      <p class='off3d' style='    float: right;
        // line-height: 30px;
        // margin-right: 20px;'>  <img src="./image/exit.png" alt=""></i>
        // 退出</p>
        // </div>
        // </div>

        //     <iframe src="http://www.thingjs.com/pp/4932cabc4379ea4a8e3690fe" width="100%" height="900px"></iframe>

        //   </div> 
        // `
        $('.bodyRightAll').html(html)

        // $('.threeD').html(html)

        // $('.threeD').css('display','block')
        // $('.none3D').css("background",'rgb(35,211,200)')
        // $('.none3D').css("width",'100%')
        // $('.none3D').css("fontSize",'20px')
        // $('.none3D').css("height",'30px')


        // $('.off3d').click(function(){
        //   console.log(123)
        //   $('.threeD').css('display','none')
        // })

        $('.bodyRightCenter').click(function () {
          console.log($(this).attr('data-index'))
          var Sindex = $(this).attr('data-index')
          var did = $(this).attr('data-did')
          console.log(did, '我是did')
          if (Sindex == '100') {
            getDeviceById(did)
          }
        })
      }
    })
  }

  function getDeviceById(code) {
    $.ajax({
      type: 'get',
      url: url + 'getDeviceRealTime',
      data: 'username=' + username + '&did=' + code,
      error: function (error) {
        console.log(error)
      },
      success: function (res) {
        console.log(res, 99999)
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

        // html =
        //   `
        //   <div class='block3D'>
        //     <div class='none3D'>  <div class='smallBox3D' style='float'>
        //     <span id='name'>屈显</span>
        //     <span id='role' style='margin-left:20px;'>超级管理员</span>
        //     <span id='time' style='margin-left:20px;'> 2020-09-01 周二 </span>
        //      <p class='off3d' style='    float: right;
        // line-height: 30px;
        // margin-right: 20px;'>  <img src="./image/exit.png" alt=""></i>
        // 退出</p>
        // </div>
        // </div>

        //     <iframe src="http://www.thingjs.com/pp/4932cabc4379ea4a8e3690fe" width="100%" height="900px"></iframe>

        //   </div> 
        // `
        html = `<div class="bodyRightDetail">
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
            <div style='width:69%;height:99.5%;display: flex;align-content: space-between;flex-wrap: wrap;'>
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
        // $('.threeD').html(html)

        // $('.threeD').css('display', 'block')
        // $('.none3D').css("background", 'rgb(35,211,200)')
        // $('.none3D').css("width", '100%')
        // $('.none3D').css("fontSize", '20px')
        // $('.none3D').css("height", '30px')


        // $('.off3d').click(function () {
        //   console.log(123)
        //   $('.threeD').css('display', 'none')
        // })
        $('.bodyRightAll').html(html)
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
        // var lineDatas = res.deviceInfo;

        // if (res.deviceDatas.length == 0) {
        //   var lineDatas = res.deviceInfo;
        //   for (let key in lineDatas) {
        //     console.log(key)
        //     if (key == 'temp') {
        //       temp.push(lineDatas[key])
        //     }
        //     if (key == 'hum') {
        //       hum.push(lineDatas[key])
        //     }
        //     if (key == 'heartbeatTime') {
        //       time.push(lineDatas[key])
        //     }
        //   }
        // } else {
        var lineDatas = res.deviceDatas;


        for (let i = 0; i < lineDatas.length; i++) {
          console.log(lineDatas[i].temp)
          temp.push(lineDatas[i].temp)
          hum.push(lineDatas[i].hum)
          time.push(lineDatas[i].time)
        }
        // console.log(temp, time, hum, 'pppppppppp')
        var myChart1 = echarts.init(document.getElementById("senseTuTop"));
        // console.log(myChart1)
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

  function showIconForTree(treeId, treeNode) {
    // console.log(treeNode.isParent)
    return treeNode.isParent;
  };
  var setting = {
    // view: {
    //   showIcon: showIconForTree,
    //   selectedMulti: false, //设置是否能够同时选中多个节点
    //   showLine: true,
    // },
    async: {
      enable: true,
      type: 'get',
      url: url + 'getRegion',
      autoParam: ["id=code"], //异步加载时需要自动提交父节点属性的参数。
      otherParam: {
        "otherParam": "zTreeAsyncTest",
        "username": username,
      }, //Ajax 请求提交的静态参数键值对
    },
    callback: {
      onClick: onClick,
      onAsyncSuccess: zTreeOnAsyncSuccess, // 异步加载正常结束的事件回调函数

    }
  };

  function onClick(event, treeId, treeNode, clickFlag) {
    // console.log(treeId)
    // console.log(treeNode)
    if (treeNode.type == 'one') {
      sessionStorage.removeItem('two')
      sessionStorage.removeItem('three')
      sessionStorage.removeItem('four')
      sessionStorage.removeItem('five')
    } else if (treeNode.type == 'two') {
      console.log(treeNode)
      sessionStorage.setItem('two', treeNode.name)
      sessionStorage.removeItem('three')
      sessionStorage.removeItem('four')
      sessionStorage.removeItem('five')
    } else if (treeNode.type == 'three') {
      sessionStorage.setItem('one', treeNode.getParentNode().getParentNode().name)
      sessionStorage.setItem('two', treeNode.getParentNode().name)
      sessionStorage.setItem('three', treeNode.name)
      sessionStorage.removeItem('four')
      sessionStorage.removeItem('five')
    } else if (treeNode.type == 'four') {
      sessionStorage.setItem('one', treeNode.getParentNode().getParentNode().getParentNode().name)
      sessionStorage.setItem('two', treeNode.getParentNode().getParentNode().name)
      sessionStorage.setItem('three', treeNode.getParentNode().name)
      sessionStorage.setItem('four', treeNode.name)
      sessionStorage.removeItem('five')
    } else if (treeNode.type == 'five') {
      console.log('before')
      sessionStorage.setItem('one', treeNode.getParentNode().getParentNode().getParentNode().getParentNode().name)
      sessionStorage.setItem('two', treeNode.getParentNode().getParentNode().getParentNode().name)
      sessionStorage.setItem('three', treeNode.getParentNode().getParentNode().name)
      sessionStorage.setItem('four', treeNode.getParentNode().name)
      sessionStorage.setItem('five', treeNode.name)
    } else {
      console.log('out')
    }
    // console.log(pNode.name+'>'+treeNode.name)
    if (treeNode.isParent == true) {
      selectPage(treeNode.code, treeNode.name)
    } else {
      before(treeNode.code, treeNode.name)
    }
    var zTree = $.fn.zTree.getZTreeObj(treeId);
    zTree.expandNode(treeNode);
  }


  function zTreeOnAsyncSuccess(event, treeId, treeNode, msg) {
    // var treeObj = $.fn.zTree.getZTreeObj(treeId);
    // var nodes = treeObj.getNodes();
    // if (nodes.length>0) {
    //   for(var i=0;i<nodes.length;i++){
    //     treeObj.expandNode(nodes[i], true, false, false);//默认展开第一级节点
    //   }
    // }
  }
  $(document).ready(function () {
    $.fn.zTree.init($("#treeDemo"), setting);
  });



  $('.bodyAll').on('mouseenter', '.bodyContent', function () {
    var lng = $(this).attr('data-lng')
    map(lng)
  })
  var str = '1'
  //

  // var timeout = null;
  // $('.bodyRightAll').on('click', '.bodyRightCenter', function () {
  //   clearTimeout(timeout); //停止单击定时事件
  //   timeout = window.setTimeout(function () { //延迟单击事件触发内容  
  //   }, 200);
  // })
  // $('.bodyRightAll').on('dblclick', '.bodyRightCenter', function () {
  //   // var now = $(this).attr('data-name')
  //   // var id = $(this).attr('data-id')
  //   // var type = $(this).attr('data-type')
  //   // var code = $(this).attr('data-code')
  //   // $('#facTan').show();
  // })

  $('.header').on('click', 'i', function () {
    console.log($(this))
    var who = $(this).attr('data-who');
    console.log(who)
    var width = $(window).width();
    var height = $(window).height();
    var aFid = $(this).attr('data-aFid')
    if (who == 3) {
      // layer.open({
      //   type: 2,
      //   title: '报警解除处理',
      //   maxmin: true,
      //   offset: ['50px'],
      //   shadeClose: true, //点击遮罩关闭层
      //   shade: 0.5, //不显示遮罩
      //   area: [width * 0.8 + 'px', height - 100 + 'px'],
      //   // content:'123'
      //   content: "./relieve.html?aFid=" + aFid
      // })
    }
  })


  $('.OnlyCheck').click(function () {
    var that = this;
    let status = that.childNodes[1].className.indexOf('CheckBoxActive') >= 0;
    if (status) {
      that.childNodes[1].className = "layui-icon"
    } else {
      that.childNodes[1].className += ' CheckBoxActive';
    }
    let elements = document.querySelectorAll("tr>td:first-child>div>i");
    console.log(elements)
    let dstatus = true;
    for (let i = 0; i < elements.length; i++) {
      console.log(elements[i])
      if (elements[i].className.indexOf("CheckBoxActive") <= 0) {
        dstatus = false;
      } else { }
    }
    if (dstatus) {
      $('.AllCheck').children().addClass(' CheckBoxActive');
    } else {
      $('.AllCheck').children().removeClass(' CheckBoxActive');
    }
  })

  $('.AllCheck').click(function () {
    var that = this;
    let status = that.childNodes[1].className.indexOf('CheckBoxActive') >= 0;
    console.log(status)
    let elements = document.querySelectorAll("tr>td:first-child>div>i");
    var className = status == true ? "layui-icon" : "layui-icon  CheckBoxActive";
    console.log(className)
    if (status) {
      console.log(1);
      that.childNodes[1].className = "layui-icon"
    } else {
      that.childNodes[1].className += ' CheckBoxActive';
    }
    for (let i = 0; i < elements.length; i++) {
      console.log(elements[i])
      elements[i].className = className
    }

    console.log(elements)
    // let className = isSelected ? "layui-icon active" : "layui-icon";

  })



})