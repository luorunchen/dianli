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
    $.ajax({
      type: 'get',
      url: url + 'alarmInfo',
      data: 'username=' + username + '&code=' + code + '&pno=1' + '&pageSize=1000',
      error: function (error) {
        console.log(error)
      },
      success: function (res) {
        console.log(res)
        var data = res.data

        var html = ""
        $.each(data, function (i, v) {
          html += ` <div  class='bodyContent' data-lng='${v.latitude}' data-phone='${v.zPhone}' data-name='${v.device_name}' data-dType='${v.dType}' data-typeName='${v.typeName}' data-adss='${v.adss}' data-aid='${v.aid}' data-imei='${v.imei}'>
              
          <div style='height: 70px;display: flex;position: absolute;top:25px;'>
            <div style='height: 60px;line-height: 60px;'>
                <img  class="img " src="image/供电公司.png" style='margin-left:5px;'>
            </div>
            <div  class='' style="    display: inline-block;
            line-height: 25px;
            height: 50px;
            margin: 10px 0 0 5px;
            font-size: 14px;">
                <p>${v.device_name}</p>
                <p style='color:#2DBB8B'>${v.alarmDate}</p>
            </div>
          </div>
          <div style='width:100%;height: 155px;display: flex;position: absolute;top:95px;'>
            <table  width='90%' style='margin-left:10px;border-collapse: inherit;'>
              <tbody>
                  <tr>
                      <td style='width:30%;'>
                          <span style='color:#2AB889'>设备类型:</span>
                      </td>
                      <td>${v.dType}</td>
                  </tr>
                  <tr>
                      <td style='width:30%;'>
                          <span style='color:#2AB889'>报警类型:</span>
                      </td>
                      <td>${v.typeName}</td>
                  </tr>
                  <tr>
                      <td style='width:30%;'>
                          <span style='color:#2AB889'>联系人:</span>
                      </td>
                      <td>${v.zName}</td>
                  </tr>
                  <tr>
                      <td style='width:30%;'>
                          <span style='color:#2AB889'>联系电话:</span>
                      </td>
                      <td>${v.zPhone}</td>
                  </tr>
                  <tr>
                      <td style='width:30%;'>
                          <span style='color:#2AB889'>设备地址:</span>
                      </td>
                      <td > <p> ${v.adss}</p> </td>
                  </tr>
              </tbody>
          </table>
          </div>
        </div>`
        })
        $('.bodyAll').html(html)



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
    $.ajax({
      type: 'get',
      url: url + 'alarmInfo',
      data: 'username=' + username + '&code=' + code + '&pno=1' + '&pageSize=1000',
      error: function (error) {
        console.log(error)
      },
      success: function (res) {
        console.log(res)
        var data = res.data

        var html = ""
        $.each(data, function (i, v) {
          html += ` <div  class='bodyContent' data-lng='${v.latitude}' data-name='${v.device_name}' data-dType='${v.dType}' data-typeName='${v.typeName}' data-adss='${v.adss}'>
              
          <div style='height: 70px;display: flex;position: absolute;top:25px;'>
            <div style='height: 60px;line-height: 60px;'>
                <img  class="img " src="image/供电公司.png" style='margin-left:5px;'>
            </div>
            <div  class='' style="    display: inline-block;
            line-height: 25px;
            height: 50px;
            margin: 10px 0 0 5px;
            font-size: 14px;">
                <p>${v.device_name}</p>
                <p style='color:#2DBB8B'>${v.alarmDate}</p>
            </div>
          </div>
          <div style='width:100%;height: 155px;display: flex;position: absolute;top:95px;'>
            <table  width='90%' style='margin-left:10px;border-collapse: inherit;'>
              <tbody>
                  <tr>
                      <td style='width:30%;'>
                          <span style='color:#2AB889'>设备类型:</span>
                      </td>
                      <td>${v.dType}</td>
                  </tr>
                  <tr>
                      <td style='width:30%;'>
                          <span style='color:#2AB889'>报警类型:</span>
                      </td>
                      <td>${v.typeName}</td>
                  </tr>
                  <tr>
                      <td style='width:30%;'>
                          <span style='color:#2AB889'>联系人:</span>
                      </td>
                      <td>${v.zName}</td>
                  </tr>
                  <tr>
                      <td style='width:30%;'>
                          <span style='color:#2AB889'>联系电话:</span>
                      </td>
                      <td>${v.zPhone}</td>
                  </tr>
                  <tr>
                      <td style='width:30%;'>
                          <span style='color:#2AB889'>设备地址:</span>
                      </td>
                      <td>${v.adss}</td>
                  </tr>
              </tbody>
          </table>
          </div>
        </div>`
        })
        $('.bodyAll').html(html)



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
    $('#mapbox').hide();
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
    //data-lng='${v.latitude}' data-name='${v.device_name}' data-dType='${v.dType}' data-typeName='${v.typeName}' data-adss='${v.adss}'
    var lng = $(this).attr('data-lng')
    var name = $(this).attr('data-name')
    var dType = $(this).attr('data-dType')
    var typeName = $(this).attr('data-typeName')
    var adss = $(this).attr('data-adss')
    var phone = $(this).attr('data-phone')
    var aid = $(this).attr('data-aid')
    var imei = $(this).attr('data-imei')
    map(lng, name, dType, typeName, adss, phone, aid, imei)
  })
  function map(lng, name, dType, typeName, adss, phone, aid, imei) {
    $('#mapbox').show();
    var pp = lng.split(',');
    console.log(pp);
    if (pp[1] > 54) { // 纬度
      console.log(pp[1])
      var lng = pp[1] //经度
      var lat = pp[0] //纬度
    } else {
      var lng = pp[0]
      var lat = pp[1]
    }
    var map = new BMap.Map("mapbox");
    var point = new BMap.Point(lng, lat);
    var marker = new BMap.Marker(point); // 创建标注
    map.addOverlay(marker);
    map.centerAndZoom(point, 15);
    map.enableScrollWheelZoom(true);
    map.addOverlay(marker);
    var content = `<p style='font-size:14px;'>设备名称：${name}</p><p style='font-size:14px;'>设备类型：${dType}</p><p style='font-size:14px;'>报警类型：${typeName}</p><p style='font-size:14px;'>联系电话:${phone}</p><button class='btnBjCl'>报警处理</button>`
    var searchInfoWindow1 = new BMapLib.SearchInfoWindow(map, content, {
      title: adss, //标题
      panel: "panel", //检索结果面板
      enableAutoPan: true, //自动平移
      enableSendToPhone: false,
      searchTypes: [
        BMAPLIB_TAB_TO_HERE, //到这里去
        BMAPLIB_TAB_FROM_HERE, //从这里出发
        // BMAPLIB_TAB_SEARCH   //周边检索
      ]
    });
    searchInfoWindow1.open(new BMap.Point(lng, lat));
    marker.addEventListener("click", function () {
      searchInfoWindow1.open(new BMap.Point(lng, lat));
    });

    $('.btnBjCl').click(function () {
      console.log(1231231)


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




    })
    $('#bjOff').click(function () {
      var aid = $('.bodyAll').attr('data-aid')
      var imei = $('.bodyAll').attr('data-imei')
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
  }




})


