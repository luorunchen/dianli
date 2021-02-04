$(function () {
  $.ajax({
    type: 'get',
    url: 'data/data.js',
    dataJSON: 'json',
    error: function (error) {
      console.log(error)
    },
    success: function (res) {
      var res = eval(res)
      var data = res[0];
      var html = ""
      $.each(res, function (i, v) {
        html += `<div class='divdemo' data-ad='${v.name}' data-id='${v.id}'>
          <img id="u222_img" class="img " src="./image/dianli.png">
          <div class='demoText' >
            <p><span>设备数：100台</span></p>
            <p><span>报警：100台</span></p>
            <p><span>在线：100台</span></p>
          </div>
        </div>`
      })
      $('#PageDetail').html(html)
    }
  })

  function before(treeNode) {
    console.log(treeNode)
    $('#PageDetail').show();
    $('#FacDetail').hide();
    var data = treeNode.children
    var html = ""
    if (data != undefined) {
      $.each(data, function (i, v) {
        html += `<div  class='Centertable' data-name='${v.name}' data-id='${v.id}'>
        <div class='CentertableTop'>
          <span style='position: absolute;left:30px;'>设备数</span>
          <span style='position: absolute;right:20px;'>100</span>
        </div>
        <div style='display: flex;'>
          <div  class='CenterTopImg'>
            <img  class="img " src="images/实时数据-广东省/u279.svg">
          </div>
          <div  class='CenterWen'>
            <p style='  margin-top: 19px;'>${v.name}</p>
            <p>更新时间:2020-08-05 20:00:00</p>
          </div>
        </div>
        <div  class='CenterBottom'>
          <div class='bottomInfo'>
            <div style='width:50%;'>
              <img  class="img " src="images/实时数据-广东省/u286.svg" style='    margin-top:10px;'>
            </div>
            <div  class='bottomInfoDetail'>
              <p style='margin-top:10px;'>报警</p>
              <p>100</p>
            </div>
          </div>
          <div class='bottomInfo'>
            <div style='width:50%;'>
              <img  class="img " src="images/实时数据-广东省/u287.svg" style='    margin-top:10px;'>
            </div>
            <div class='bottomInfoDetail'>
              <p style='margin-top:10px;'>正常</p>
              <p>100</p>
            </div>
          </div>
          <div style="width:30%;display: flex;">
            <div style='width:40%;'>
              <img  class="img " src="images/实时数据-广东省/u294.svg" style='    margin-top:10px;'>
            </div>
            <div class='bottomInfoDetail' style='width:55%;'>
              <p style='margin-top:10px;'>在线/离线</p>
              <p>100/0</p>
            </div>
          </div>
        </div>
      </div>`
      })
    } else {
      html = `<div  class='Centertable' data-name='${treeNode.name}' data-id='${treeNode.id}'>
        <div class='CentertableTop'>
          <span style='position: absolute;left:30px;'>设备数</span>
          <span style='position: absolute;right:20px;'>100</span>
        </div>
        <div style='display: flex;'>
          <div  class='CenterTopImg'>
            <img  class="img " src="images/实时数据-广东省/u279.svg">
          </div>
          <div  class='CenterWen'>
            <p style='  margin-top: 19px;'>${treeNode.name}</p>
            <p>更新时间:2020-08-05 20:00:00</p>
          </div>
        </div>
        <div  class='CenterBottom'>
          <div class='bottomInfo'>
            <div style='width:50%;'>
            <img  class="img " src="images/实时数据-深圳市-宝安区-福永-众祥安全科技有限公司-1楼/u1628.svg" style='    margin-top:10px;'>
            </div>
            <div  class='bottomInfoDetail'>
              <p style='margin-top:10px;'>未处理</p>
              <p>100</p>
            </div>
          </div>
          <div class='bottomInfo'>
            <div style='width:50%;'>
            <img  class="img " src="images/实时数据-广东省/u287.svg" style='    margin-top:10px;'>
            </div>
            <div class='bottomInfoDetail'>
              <p style='margin-top:10px;'>已处理</p>
              <p>100</p>
            </div>
          </div>
          <div style="width:30%;display: flex;">
            <div style='width:40%;'>
            <img class="img " src="images/实时数据-深圳市-宝安区-福永-众祥安全科技有限公司-1楼/设备信息_u1629.svg" style='    margin-top:10px;'>
            </div>
            <div class='bottomInfoDetail' style='width:55%;'>
              <p style='margin-top:10px;'>状态</p>
              <p>正常</p>
            </div>
            <div>
            <img  class="img " src="images/实时数据-深圳市-宝安区-福永-众祥安全科技有限公司-1楼/u1776.svg" tabindex="0" style='    margin-top:10px;'>
            </div>
          </div>
        </div>
      </div>`
    }


    $('#PageDetail').html(html)
    if (treeNode.id == 1010101010) {
      $('.CenterBottom').click(function (e) {
        e.preventDefault();
        var width = $('#u219_state0_content').width();
        var height = $('#u219_state0_content').height();
        layer.open({
          type: 2,
          title: '设备处理信息',
          maxmin: true,
          offset: 'auto',
          shadeClose: true, //点击遮罩关闭层
          shade: 0.5, //不显示遮罩
          area: [width * 0.8 + 'px', height - 50 + 'px'],
          content: './facDetail.html'
        });
      })
    }

  }
  var setting = {
    async: {
      enable: true,
      type: 'get',
      url: 'data/data.js',
      autoParam: ["id=code"], //异步加载时需要自动提交父节点属性的参数。
      otherParam: {
        "otherParam": "zTreeAsyncTest"
      }, //Ajax 请求提交的静态参数键值对
    },
    callback: {
      onClick: onClick,
      onAsyncSuccess: zTreeOnAsyncSuccess, // 异步加载正常结束的事件回调函数
    }
  };

  function onClick(event, treeId, treeNode, clickFlag) {
    var regionName = treeNode.name;
    var code = treeNode.id;
    // console.log(regionName)
    // console.log(code)
    console.log(treeNode)
    before(treeNode)
    var zTree = $.fn.zTree.getZTreeObj("treeDemo");
    zTree.expandNode(treeNode); //点击文件夹展开

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
  var str = '1'
  //
  $('.center_index').on('click', '.divdemo', function () {
    var now = $(this).attr('data-ad')
    var id = $(this).attr('data-id')
    console.log(id)
    var treeObj = $.fn.zTree.getZTreeObj('treeDemo')
    var nodes = treeObj.getNodes();
    if (nodes.length > 0) {
      for (var i = 0; i < nodes.length; i++) {
        treeObj.expandNode(nodes[i], true, false, false); //默认展开第一级节点
      }
    }
    if (id == '1') {
      before(nodes[0])
    }
  })
  var timeout = null;
  $('#PageDetail').on('click', '.Centertable', function () {
    clearTimeout(timeout); //停止单击定时事件
    timeout = window.setTimeout(function () { //延迟单击事件触发内容  
      console.log("this is click event");
    }, 200);
  })
  $('#PageDetail').on('dblclick', '.Centertable', function () {
    var now = $(this).attr('data-name')
    var id = $(this).attr('data-id')
    var treeObj = $.fn.zTree.getZTreeObj('treeDemo')
    var nodes = treeObj.getNodes();
    if (nodes.length > 0) {
      for (var i = 0; i < nodes.length; i++) {
        treeObj.expandNode(nodes[i], true, false, false); //默认展开第一级节点
      }
    }
    if (id == '10') {
      $('#PageDetail').show();
      $('#FacDetail').hide();
      var data = nodes[0].children
      $.each(data, function (i, v) {
        if (v.name == now) {
          console.log(v)
          before(v)
          var zTree = $.fn.zTree.getZTreeObj("treeDemo");
          zTree.expandNode(v); //点击文件夹展开
        }
      })
    } else if (id == '1010') {
      $('#PageDetail').show();
      $('#FacDetail').hide();
      var data = nodes[0].children[0].children
      $.each(data, function (i, v) {
        if (v.name == now) {
          before(v)
          var zTree = $.fn.zTree.getZTreeObj("treeDemo");
          zTree.expandNode(v); //点击文件夹展开
        }
      })
    } else if (id == '101010') {
      $('#PageDetail').show();
      $('#FacDetail').hide();
      var data = nodes[0].children[0].children[0].children
      $.each(data, function (i, v) {
        if (v.name == now) {
          before(v)
          var zTree = $.fn.zTree.getZTreeObj("treeDemo");
          zTree.expandNode(v); //点击文件夹展开
        }
      })
    } else if (id == '10101010') {
      $('#PageDetail').show();
      $('#FacDetail').hide();
      var data = nodes[0].children[0].children[0].children[0].children
      $.each(data, function (i, v) {
        console.log(v)
        if (v.name == now) {
          before(v)
          var zTree = $.fn.zTree.getZTreeObj("treeDemo");
          zTree.expandNode(v); //点击文件夹展开
        }
      })
    } else if (id == '1010101010') {
      var data = nodes[0].children[0].children[0].children[0].children[0].children[0]
      console.log(data)
      before(data)
      if (data.children == undefined) {
        $('#PageDetail').hide();
        $('#FacDetail').show();
        $(window).trigger('resize');
      }

    }
  })

  $('.header').on('click', 'i', function () {
    console.log($(this))
    var who = $(this).attr('data-who');
    console.log(who)
    var width = $(window).width();
    var height = $(window).height();
    var aFid = $(this).attr('data-aFid')
    if (who == 3) {
      layer.open({
        type: 2,
        title: '报警解除处理',
        maxmin: true,
        offset: ['50px'],
        shadeClose: true, //点击遮罩关闭层
        shade: 0.5, //不显示遮罩
        area: [width * 0.8 + 'px', height - 100 + 'px'],
        // content:'123'
        content: "./relieve.html?aFid=" + aFid
      })
    }
  })

  function select() {
    var dom = document.getElementById("topTu");
    var myChart = echarts.init(dom);
    var app = {};
    option = null;
    option = {
      tooltip: { //提示框组件
        trigger: 'axis', //触发类型。
        axisPointer: { //配置坐标轴指示器的快捷方式
          type: 'shadow', // 阴影指示器
          label: { //坐标轴指示器的文本标签。
            show: true //是否显示文本标签。
          }
        }
      },
      toolbox: { //工具栏	
        show: true, //是否显示工具栏组件。
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
        data: ['温度', '湿度', '烟雾', '灭火器'], //图例的数据数组
        itemGap: 1 //图例每项之间的间隔
      },
      grid: {
        top: '18%', //grid 组件离容器上侧的距离。
        left: '1%',
        right: '10%',
        containLabel: true //区域是否包含坐标轴的刻度标签。
      },
      xAxis: [{
        type: 'category', //坐标轴类型。
        data: ['8-15', '8-16', '8-17', '8-18', '8-19']
      }],
      yAxis: [{
        type: 'value',
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
        name: '温度',
        type: 'line',
        data: ['30', '0', '300', '10', '20', '80', '10']
    },
    {
        name: '湿度',
        type: 'line',
        data: ['30', '0', '300', '10', '20', '80', '10']
    },
    {
        name: '烟雾',
        type: 'line',
        data: ['30', '0', '300', '10', '20', '80', '10']
    },
    {
        name: '灭火器',
        type: 'line',
        data: ['30', '0', '300', '10', '20', '80', '10']
    }
      ]
    };
    myChart.setOption(option, true);
    $(window).resize(myChart.resize);

  }
  select()

  $('#u3').click(function () {
    location.href = "首页.html"
  })
  $('#u4').click(function () {
    location.href = "实时数据.html"
  })
  $('#u5').click(function () {
    location.href = "报警信息.html"
  })
  $('#u6').click(function () {
    location.href = "监控中心.html"
  })
  $('#u7').click(function () {
    location.href = "统计信息.html"
  })
})