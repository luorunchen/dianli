$(function () {



  //获取当前日期 时间
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
  //27.	报警次数前十设备
  $.ajax({
    type: 'get',
    url: url + 'alarmTop10',
    data: 'username=' + username,
    error: function (error) {
      console.log(error)
    },
    success: function (res) {
      console.log(res)
      var html = '';
      $.each(res, function (i, v) {
        html += `<tr class='info' data-imei =${v.imei}>
        <td>${v.device_name}</td>
        <td>${v.adss}</td>
        <td>${v.alarmNum}</td>
        <td>${v.alarmTime}</td>
    </tr>`


      })
      $('#alarm10').html(html)
      $('.info').click(function () {
        console.log(1234)
        $('#syInfoModal').modal("show")
        const imei = $(this).attr("data-imei")
        $.ajax({
          type: "GET",
          url: url + '/getHisalarmandfault',
          data: {
            imei: imei
          },
          success: function (res) {
            console.log(res.data, 'dadsad')

            let html

            if (res.data.length != 0) {
              $.each(res.data, function (i, v) {
                console.log(v)
                html +=
                  `
                      <tr>
                      <th scope="row">${v.imei}</th>
                      <td>${v.typeName}</td>
                      <td>${v.alarmTime}</td>
                      <td>${v.device_name}</td>
                    </tr>
                  `
              })
            } else {
              html = `<tr>
            
              <td colspan="4">暂无数据</td>
             
            </tr>`
            }



            $('.tbody').html(html)



          }
        })

      })

    }


  })


  //28.	最近十次报警
  $.ajax({
    type: 'get',
    url: url + 'alarmLately10',
    data: 'username=' + username,
    error: function (error) {
      console.log(error)
    },
    success: function (res) {
      console.log(res, 222222)

      var html = '';
      if (res.length == 0) {
        html = '暂无报警数据'
      } else {
        $.each(res, function (i, v) {
          html += `<li style='position: relative;'>
                <i class='timeLog'></i>
                <div style='padding-left: 20px;width:93%;height:170px;'>
                    <h3 style='font-size: 14px;color: #17BC76;display: inline-block;'>${v.alarmFaultDate}
                    </h3>
                    <span style='position: relative;right: -25px;'>
                        <img src="./image/xiuli.png" alt="" style='width:6%'> <span class='handles' data_name=${v.device_name} data_aid=${v.aid} data_imei=${v.imei}>处理</span>
                        
                    </span>
                    <ul data=${v.did}>
                        <li style='height:25px'>设备编号:${v.imei}</li>
                        <li style='height:25px'>设备名称:${v.device_name}</li>
                        <li style='height:25px'>设备类型:${v.dType}</li>
                        <li style='height:25px'>报警类型:${v.typeName}</li>
                        <li style='height:25px'>报警值:${v.alarmValue}</li>
                    </ul>
                </div>
            </li>`

        })
      }

      $('#alarmLately10').html(html)
      $('#alarmLately10 ul').click(function () {
        console.log(1111)
        $('#exampleModal').modal('show')
        const info = $(this).attr('data')
        console.log(info, 987)
        syShow(info)
      })
      $('.handles').click(function () {
        const name = $(this).attr('data_name')
        const aid = $(this).attr('data_aid')
        const imei = $(this).attr('data_imei')
        console.log(aid, imei, 'sssssssss')
        console.log(name)
        let html4
        html4 =
          `
          <div class="form-group">
              <label for="exampleInputEmail1">设备名称:</label>
              <input type="email" class="form-control" id="exampleInputEmail1"
                  aria-describedby="emailHelp" style="color:#fff" value=${name}>
  
          </div>
          <div class="form-group">
              <label for="exampleInputPassword1">内容:</label>
              <input type="text" style="color:#fff" class="form-control" id="exampleInputPassword2">
          </div>
              <form action='' method='post' enctype="multipart/form-data" id='form1'>
            
              <input type='file' name='file'>
            <div style='display:flex;'>
            <div id='images1'>
                
            </div>
            <div id='images2'>
              
            </div>
            <div id='images3'>
              
            </div>
            </div>
             
          </form>
          `

        $('#queryModal').modal('show')
        $('.modal-body2').html(html4)

        //添加图片

        // <img id="upload" alt="" style="width: 200px; height: 200px"
        // src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3363295869,2467511306&fm=26&gp=0.jpg">
        // <form>


        // <div class="form-group">
        //     <label for="exampleInputPassword1">照片:</label>
        //     <span>上传照片</span>
        //     <input type="file" name="file" id="fileupload"  >
        //     <img id="avatar" />
        // </div>




        // </form>
        var html = ''
        var html2 = ''
        var html3 = ''
        // <input id="" type="file" class="form-control"  name="file"  >
        $('.but').click(function () {
          data = new FormData($('#form1')[0]);
          console.log($('#form1')[0]);
          // $.post('up.php',{p:2},function(data){
          //    alert(data);
          //  })
          if (html3 != '') {
            return alert('只能上传3张')
          }
          $.ajax({
            url: url + 'upload',
            type: 'POST',
            data: data,
            // dataType: 'JSON',
            cache: false,
            processData: false,  //不处理发送的数据，因为data值是FormData对象，不需要对数据做处理 
            contentType: false   //不设置Content-type请求头
          }).done(function (ret) {
            console.log(ret);

            for (let i = 0; i < ret.data.length; i++) {
              if (html == '') {
                html += `
                <img  src='http://${ret.data[i]}' width='130px' height='130px' />
              `
              } else if (html2 == '') {
                html2 += `
                <img  src='http://${ret.data[i]}' width='130px' height='130px' />
              `
              } else if (html3 == '') {
                html3 += `
                <img  src='http://${ret.data[i]}' width='130px' height='130px' />
              `
              }

            }
            $('#images1').html(html)
            $('#images2').html(html2)
            $('#images3').html(html3)
          });
        })





        //解除报警事件




      })

    }
  })
  $('#bjOff').click(function () {

    const name = $('.handles').attr('data_name')
    const aid = $('.handles').attr('data_aid')
    const imei = $('.handles').attr('data_imei')
    // console.log(1233123)
    const inputValue = $('#exampleInputPassword2').val()
    console.log(inputValue, 99999)
    $.ajax({
      type: 'GET',
      url: url + '/delAlarm',
      data: {
        username: username,
        id: aid,
        imei: imei,
        inputValue: inputValue
      },
      success: function (res) {
        console.log(res)
        if (res.code == 200) {
          alert("解除报警成功")
          location.reload();
          // return window.opener.document.location.reload()
        }


      }
    })
  })
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
        //   var lineDatas = res.deviceDatas;

        //   $.each(lineDatas, function (i, v) {
        //     console.log(v, 66666699999)
        //     temp.push(v.temp)
        //     hum.push(v.hum)
        //     time.push(v.time)
        //   })
        // }

        var lineDatas = res.deviceDatas;


        for (let i = 0; i < lineDatas.length; i++) {
          console.log(lineDatas[i].temp)
          temp.push(lineDatas[i].temp)
          hum.push(lineDatas[i].hum)
          time.push(lineDatas[i].time)
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


  //首页设备统计报警占比
  $.ajax({
    type: 'get',
    url: url + 'pushStatistics',
    data: 'username=' + username,
    error: function (error) {
      console.log(error)
    },
    success: function (res) {
      console.log(res)
      var alar = res.alar
      var normal = res.normal
      var dom = document.getElementById("leftYuan");
      var myChart = echarts.init(dom);
      var app = {};
      option = null;
      option = {
        tooltip: {
          show: 'false',
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
          right: 80,
          bottom: 10,
          textStyle: {
            color: '#fff'
          },
          data: ['正常', '报警']
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
          center: ["29%", "50%"],
          avoidLabelOverlap: true, //是否启用防止标签重叠策略
          hoverAnimation: false, //是否开启 hover 在扇区上的放大动画效果。
          label: {

            normal: {
              padding: [2, 8],
              color: '#fff',
              padding: [0, -10], //取消hr线跟延长线之间的间隙
              rich: {
                a: {
                  color: '#999',
                  lineHeight: 20, //设置最后一行空数据高度，为了能让延长线与hr线对接起来
                  align: 'center'
                },
                hr: { //设置hr是为了让中间线能够自适应长度
                  borderColor: 'auto', //hr的颜色为auto时候会主动显示颜色的
                  width: '105%',
                  borderWidth: 0.5,
                  height: 0.5,
                },
                per: { //用百分比数据来调整下数字位置，显的好看些。如果不设置，formatter最后一行的空数据就不需要
                  padding: [4, 0],
                }
              }
            }

          },
          labelLine: {
            normal: {
              length: 5,
            }
          },
          data: [{
            value: normal,
            name: '正常'
          },
          {
            value: alar,
            name: '报警'
          },
          ]
        }]
      };
      myChart.setOption(option, true);
    }
  })
  //首页统计报警类型占比
  $.ajax({
    type: 'get',
    url: url + 'pushAlarmType',
    data: 'username=' + username,
    error: function (error) {
      console.log(error)
    },
    success: function (res) {
      console.log(res)
      var data = res.mess;
      var name = [];
      var num = [];
      var value = []
      $.each(data, function (i, v) {
        name.push(v.name)
        num.push(v.num)
        value.push({
          value: v.num,
          name: v.name
        })
      })
      console.log(num, name)
      var dom = document.getElementById("rightYuan");
      var myChart = echarts.init(dom);
      var app = {};
      option1 = null;
      option1 = {
        tooltip: {
          show: 'false',
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          right: 10,
          bottom: 10,
          textStyle: {
            color: '#fff'
          },
          data: name
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
          avoidLabelOverlap: true, //是否启用防止标签重叠策略
          hoverAnimation: false, //是否开启 hover 在扇区上的放大动画效果。
          label: {
            show: false,
            position: 'center',
            // normal: {
            //   padding: [2, 8],
            //   color: '#fff',
            //   padding: [0, -10], //取消hr线跟延长线之间的间隙
            //   formatter: "{a|{b}:{d}%}",
            //   rich: {
            //     a: {
            //       color: '#fff',
            //       lineHeight: 20, //设置最后一行空数据高度，为了能让延长线与hr线对接起来
            //       align: 'center'
            //     },
            //     hr: { //设置hr是为了让中间线能够自适应长度
            //       borderColor: 'auto', //hr的颜色为auto时候会主动显示颜色的
            //       width: '105%',
            //       borderWidth: 0.5,
            //       height: 0.5,
            //     },
            //   }
            // }

          },
          labelLine: {
            normal: {
              length: 5,
            }
          },
          data: value
        }]
      };
      myChart.setOption(option1, true);
    }
  })
  //首页七天报警分析
  $.ajax({
    type: 'get',
    url: url + 'alarmTopByDay',
    data: 'username=' + username,
    error: function (error) {
      console.log(error)
    },
    success: function (res) {
      console.log(res, 99999)
      var time = [];
      var data = [];

      $.each(res, function (i, v) {
        // v[1].alarmTime = '2021-01-15 09:19:47.0'
        time.push(v.alarmTime)
        data.push(v.value)
      })
      console.log(time, 789789)
      time[1] = "2021-01-15 09:19:47.0"
      data[0] = '1'
      data[1] = '0'
      var dom = document.getElementById("bottomZhe");
      var myChart = echarts.init(dom);
      var app = {};
      option3 = null;
      option3 = {
        tooltip: { //提示框组件
          trigger: 'axis', //触发类型。
          textStyle: {
            color: '#fff',
          },
          axisPointer: { //配置坐标轴指示器的快捷方式
            type: 'shadow', // 阴影指示器
            label: { //坐标轴指示器的文本标签。
              show: true, //是否显示文本标签。
              backgroundColor: '#062F2B',
            },
            // shadowStyle:{
            //   backgroundColor:'#062F2B',
            // }
          },

        },
        calculable: true,
        legend: {
          //  data: ['温度', '湿度', '烟雾', '灭火器'], //图例的数据数组
          itemGap: 1, //图例每项之间的间隔,
          textStyle: {
            color: '#fff',
          },
        },
        grid: {
          top: '12%', //grid 组件离容器上侧的距离。
          left: '1%',
          right: '1%',
          containLabel: true //区域是否包含坐标轴的刻度标签。
        },
        xAxis: [{
          type: 'category', //坐标轴类型。,
          axisLine: {
            lineStyle: {
              color: '#fff'
            },
          },
          data: time
        }],
        yAxis: [{
          type: 'value',
          axisLine: {
            lineStyle: {
              color: '#fff'
            },
          },
          data: data
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
          name: '隐患值',
          type: 'line',
          smooth: true, //这个是把线变成曲线
          data: data
        }]
      };
      myChart.setOption(option3, true);

    }
  })
})