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
      console.log(res)
      var data = res[0];
      var html = ""
      var chtml = ''
      $.each(res, function (i, v) {
        chtml = `${v.name}`
        html += `<div  class='bodyRightCenter' data-name="${v.name}" data-id="${v.id}">
        <div  class='bodyRightCenterHeader'>总设备数:20</div>
        <div style='height: 100px;display: flex;'>
            <div style='height: 100px;line-height: 100px;'>
                <img  class="img " src="image/供电公司.png" style='margin-left:20px;;'>
            </div>
            <div  class='bodyRightCenterTitle'>
                <p>${v.name}</p>
                <p style='color:#2DBB8B'>更新时间:2020-09-07 12:00:00</p>
            </div>
        </div>
        <div  class='bodyRightCenterDetail'>
            <div style='width:30%;line-height: 30px;'>
                <p style='margin-top:10px;'>0</p>
                <p style='color:#2DBB8B'>报警</p>
            </div>
            <div style='width:30%;line-height: 30px;'>
                <p style='margin-top:10px;'>0</p>
                <p style='color:#2DBB8B'>正常</p>
            </div>
            <div style='width:30%;line-height: 30px;'>
                <p style='margin-top:10px;'>0/20</p>
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
      $('#regin').html(chtml)

      $('.bodyRightCenter').click(function () {
        console.log($(this))
        var now = $(this).attr('data-name')
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
    }
  })

  function before(treeNode) {
    console.log(treeNode)
    var data = treeNode.children
    var html = ""

    //isParent
    console.log(treeNode.isParent)
    if (treeNode.isParent == true) {
      $.each(data, function (i, v) {
        html += `<div  class='bodyRightCenter' data-name="${v.name}" data-id="${v.id}">
        <div  class='bodyRightCenterHeader'>总设备数:20</div>
        <div style='height: 100px;display: flex;'>
            <div style='height: 100px;line-height: 100px;'>
                <img  class="img " src="image/供电公司.png" style='margin-left:20px;;'>
            </div>
            <div  class='bodyRightCenterTitle'>
                <p>${v.name}</p>
                <p style='color:#2DBB8B'>更新时间:2020-09-07 12:00:00</p>
            </div>
        </div>
        <div  class='bodyRightCenterDetail'>
            <div style='width:30%;line-height: 30px;'>
                <p style='margin-top:10px;'>0</p>
                <p style='color:#2DBB8B'>报警</p>
            </div>
            <div style='width:30%;line-height: 30px;'>
                <p style='margin-top:10px;'>0</p>
                <p style='color:#2DBB8B'>正常</p>
            </div>
            <div style='width:30%;line-height: 30px;'>
                <p style='margin-top:10px;'>0/20</p>
                <p style='color:#2DBB8B'>在线/离线</p>
            </div>
            <div style="width:2px;height:40px;position: absolute;top:25%;left:35%;background-image: linear-gradient(to top, #083c31 ,  #159960 ,#083c31 );">
            </div>
            <div style="width:2px;height:40px;position: absolute;top:25%;left:65%;background-image: linear-gradient(to top, #083c31 ,  #159960 ,#083c31 );">
            </div>
        </div>
    </div>`
      })
    } else {

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
                              <td>四楼手术台</td>
                          </tr>
                          <tr>
                              <td style='width:30%;'>
                                  <span style='color:#2AB889'>在线状态:</span>
                              </td>
                              <td>在线</td>
                          </tr>
                          <tr>
                              <td style='width:30%;'>
                                  <span style='color:#2AB889'>型号:</span>
                              </td>
                              <td>电力控制器</td>
                          </tr>
                          <tr>
                              <td style='width:30%;'>
                                  <span style='color:#2AB889'>设备ID:</span>
                              </td>
                              <td>456215616131</td>
                          </tr>
                          <tr>
                              <td style='width:30%;'>
                                  <span style='color:#2AB889'>创建时间:</span>
                              </td>
                              <td>2020-05-15 12:00:00</td>
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
                          <p style='margin:10px 0 0 20px;'>A相电流</p>
                          <p style='color:#aaa'><i class="sense" ></i> <span style='margin-left: 40px;'>2019-12-18 15:55:22</span></p>
                      </div>
                      <div style='width:19%;line-height: 60px;text-align: right  ;'>
                          <span>6A</span>
                      </div>
                  </li>
              </ul>
          </div>
      </div>
      <div style='width:69%;height:99.5%;display: flex;align-content: space-between;flex-wrap: wrap;'>
          <div style='width:100%;height:49.5%;border:1px solid #159C61;'>
              <div id="senseTuTop" style='width:100%;height:100%'></div>
          </div>
          <div style='width:100%;height:49.5%;border:1px solid #159C61;'>
              <div id="senseTuBottom" style='width:100%;height:100%'></div>
          </div>
      </div>
  </div>`
    }
    $('.bodyRightAll').html(html)
    if (treeNode.id == 1010101010) {
      var width = $('.bodyRight').width();
      var height = $('.bodyRight').height();
      console.log(height)
      layer.open({
        type: 2,
        title: '设备处理信息',
        maxmin: true,
        offset: 'auto',
        shadeClose: true, //点击遮罩关闭层
        shade: 0.5, //不显示遮罩
        area: [width * 0.9 + 'px', height - 50 + 'px'],
        content: './facDetail.html'
      });
    } else {
      console.log('不是设备')
    }

  }

  function showIconForTree(treeId, treeNode) {
    // console.log(treeNode.isParent)
    return treeNode.isParent;
  };
  var setting = {
    view: {
      showIcon: showIconForTree,
      selectedMulti: false, //设置是否能够同时选中多个节点
      showLine: true,
    },
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

  var timeout = null;
  $('.bodyRightAll').on('click', '.bodyRightCenter', function () {
    clearTimeout(timeout); //停止单击定时事件
    timeout = window.setTimeout(function () { //延迟单击事件触发内容  
      console.log("this is click event");
    }, 200);
  })
  $('.bodyRightAll').on('dblclick', '.bodyRightCenter', function () {
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
      var data = nodes[0].children
      console.log(data)
      $.each(data, function (i, v) {
        if (v.name == now) {
          console.log(v)
          before(v)
          var zTree = $.fn.zTree.getZTreeObj("treeDemo");
          zTree.expandNode(v); //点击文件夹展开
        }
      })
    } else if (id == '1010') {
      var data = nodes[0].children[0].children
      $.each(data, function (i, v) {
        if (v.name == now) {
          before(v)
          var zTree = $.fn.zTree.getZTreeObj("treeDemo");
          zTree.expandNode(v); //点击文件夹展开
        }
      })
    } else if (id == '101010') {
      var data = nodes[0].children[0].children[0].children
      $.each(data, function (i, v) {
        if (v.name == now) {
          before(v)
          var zTree = $.fn.zTree.getZTreeObj("treeDemo");
          zTree.expandNode(v); //点击文件夹展开
        }
      })
    } else if (id == '10101010') {
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
        $(window).trigger('resize');
      }

    } else {
      console.log(1)
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


})