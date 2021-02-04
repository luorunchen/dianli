$(function () {
  var map = new BMap.Map("mapbox", {
    mapType: BMAP_HYBRID_MAP
  });
  var point = new BMap.Point(110.795905, 32.619646);
  map.centerAndZoom(point, 13);
  map.enableScrollWheelZoom(true);
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
          title: "<h4>项目名称:" + list[i].name + "</h4>", // 信息窗口标题
          enableMessage: true, //设置允许信息窗发送短息
          message: ""
        }
        if (list[i].aPid == '') {
          console.log(66666)
          var myIcon = new BMap.Icon("./image/red_yuan.png", new BMap.Size(20, 30), {
            // 指定定位位置
            offset: new BMap.Size(10, 25),
            // 当需要从一幅较大的图片中截取某部分作为标注图标时，需要指定大图的偏移位置   
            imageOffset: new BMap.Size(0, 0) // 设置图片偏移  
          });
        } else {
          // console.log(77777)
          var myIcon = new BMap.Icon("./image/green_yuan.png", new BMap.Size(20, 30), {
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
        marker.addEventListener("click", function () {
          // console.log(123)
          html =
            `
            <div class='block3D'>
              <div class='none3D'>  <div class='smallBox3D' style='float'>
              <span id='name'>屈显</span>
              <span id='role' style='margin-left:20px;'>超级管理员</span>
              <span id='time' style='margin-left:20px;'> 2020-09-01 周二 </span>
               <p class='off3d' style='    float: right;line-height: 30px; margin-right: 20px;'>  <img src="./image/exit.png" alt=""></i>退出</p>
              </div>
           </div>
              <div  style='background:#031B1D'>
              
              <iframe src="http://www.thingjs.com/pp/4932cabc4379ea4a8e3690fe" width="100%" height="900px"></iframe>
              </div>
            </div> 
          `
          $('.threeD').html(html)

          $('.threeD').css('display', 'block')
          $('.none3D').css("background", '#031B1D')
          $('.none3D').css("width", '100%')
          $('.none3D').css("fontSize", '20px')
          // $('.none3D').css("height", '30px')


          $('.off3d').click(function () {
            console.log(123)
            $('.threeD').css('display', 'none')
          })
        });
      }

      function addClickHandler(content, marker) {
        console.log(123)
        marker.addEventListener("click", function (e) {
          var p = e.target;
          var point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
          var infoWindow = new BMap.InfoWindow(content, opts);  // 创建信息窗口对象 
          map.openInfoWindow(infoWindow, point); //开启信息窗口
        });
      }
    }
  })


})