$(function () {
  var global = (function () {
    var search = location.search;
    var search = decodeURI(search);
    var global = {};
    if (search != "") {
      search.slice(1).split("&").forEach(function (val) {
        var arr = val.split("=");
        global[arr[0]] = arr[1];
      });
    }
    return global;
  })();
  console.log(global);

  function createMap() {
    var map = new BMap.Map("allmap");
    var geoc = new BMap.Geocoder(); //地址解析对象  
    var markersArray = [];
    var geolocation = new BMap.Geolocation();
    var point = new BMap.Point(114.046252, 22.640817);
    map.centerAndZoom(point, 12); // 中心点  
    geolocation.getCurrentPosition(function (r) {
      var address = r.address.province + r.address.city + r.address.district + r.address.street + r
        .address.street_number;
      var bai_lg = r.longitude + ',' + r.latitude
      sessionStorage.setItem('bai_lg', bai_lg)
      MapClick(address);
      if (this.getStatus() == BMAP_STATUS_SUCCESS) {
        var mk = new BMap.Marker(r.point);
        map.addOverlay(mk);
        map.panTo(r.point);
        map.enableScrollWheelZoom(true);
        // document.getElementById('lng').value = r.point.lng;  
        // document.getElementById('lat').value =  r.point.lat;  
        document.getElementById('address').value = address;
      } else {
        alert('failed' + this.getStatus());
      }
    }, {
      enableHighAccuracy: true
    })
    map.addEventListener("click", showInfo);
    //清除标识  
    function clearOverlays() {
      if (markersArray) {
        for (var i in markersArray) {
          map.removeOverlay(markersArray[i])
        }
      }
    }
    //地图上标注  
    function addMarker(point) {
      var marker = new BMap.Marker(point);
      markersArray.push(marker);
      clearOverlays();
      map.addOverlay(marker);
    }
    //点击地图时间处理  
    function showInfo(e) {
      map.clearOverlays();
      geoc.getLocation(e.point, function (rs) {
        var bai_lg = e.point.lng + ',' + e.point.lat
        sessionStorage.setItem('bai_lg', bai_lg)
        var addComp = rs.addressComponents;
        var address = addComp.province + addComp.city + addComp.district + addComp.street + addComp
          .streetNumber;
        console.log(address)
        document.getElementById('address').value = address;
        MapClick(address);
      });
      addMarker(e.point);
    }
    var localSearch = new BMap.LocalSearch(map);
    localSearch.enableAutoViewport(); //允许自动调节窗体大小
    function searchByStationName() {
      map.clearOverlays(); //清空原来的标注
      var address = document.getElementById("address").value;
      MapClick(address)
      //setSearchCompleteCallback--->设置检索结束后的回调函数
      localSearch.setSearchCompleteCallback(function (searchResult) {
        console.log(searchResult)
        var poi = searchResult.getPoi(0); // searchResult.Ar 数组中的第一个
        console.log(poi)
        var bai_lg = poi.point.lng + ',' + poi.point.lat;
        console.log(bai_lg)
        sessionStorage.setItem('bai_lg', bai_lg)

        map.centerAndZoom(poi.point, 20);
        var marker = new BMap.Marker(new BMap.Point(poi.point.lng, poi.point
          .lat)); // 创建标注，为要查询的地方对应的经纬度
        map.addOverlay(marker);
      });
      localSearch.search(address);
    }
    document.getElementById('r-result').onclick = function () {
      searchByStationName();
    }
  }
  createMap();

  function MapClick(address) {
    var key = "16e7b5568d36fe3ae4fb17a2deba37b0";
    $.ajax({
      type: 'get',
      url: 'https://restapi.amap.com/v3/geocode/geo',
      data: 'key=' + key + '&address=' + address,
      error: function (error) {
        console.log(error)
      },
      success: function (result) {
        console.log(result);
        if (result.geocodes.length == '0') {
          $.alert('请输入详细地址,系统获取不到地区编码')
          sessionStorage.removeItem('code')
        } else {
          var gao_lat = result.geocodes[0].location;
          sessionStorage.setItem('gao_lat', gao_lat);
          var code = result.geocodes[0].adcode;
          $('#address').attr('data-code', code)
          sessionStorage.setItem('code', code);
        }
      }
    })
  }
  
  $('#save-btn').click(function (e) {
    e.preventDefault();
    var name = $('#name').val();
    var address = $('#address').val();
    var remark = $('#remark').val();
    var type=$('#type').val()
    var imei=$('#imei').val()
    if(imei==''){
      layer.open({
        content: '请填写设备IMEI号'
      });
    }else if(type==''){
      layer.open({
        content: '请选择设备类型'
      });
    }else if(name==''){
      layer.open({
        content: '请填写设备名称'
      });
    }else{
      $.ajax({
        type: 'get',
        url: url + '/addDevice',
        data: 'name=' + name + '&username=' + username + '&adss=' + address + '&remark=' + remark+ '&pid=' + global.id +'&type='+type+'&imei='+imei,
        error: function (error) {
          console.log(error)
        },
        success: function (result) {
          console.log(result)
          var mess = result.mess;
          if (result.code == "435") {
            layer.open({
              type: 1,
              offset: 'auto',
              id: 'layerDemoauto' //防止重复弹出
                ,
              content: "<div style='padding: 20px 100px;'>" + result.mess + "</div>",
              btn: '关闭',
              btnAlign: 'c' //按钮居中
                ,
              shade: 0.2 //不显示遮罩
                ,
              yes: function () {
                layer.closeAll();
                var index = parent.layer.getFrameIndex(window.name);
                parent.layer.close(index);
              }
            });
          } else if (result.code == '455') {
            console.log('参数不足')
          } else if (result.code == '500') {
            layer.open({
              content: result.mess
            });
          } else if (result.code == '200') {
            layer.load()
            var index = parent.layer.getFrameIndex(window.name);
            setTimeout(() => {
              parent.layer.close(index);
              parent.location.reload(); //父级刷新
            }, 100);
          } else {
            console.log(2);
          }
        }
      })
    }
    

  })
})