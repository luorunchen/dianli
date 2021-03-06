$(function () {


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
  //点击责任人输入框
  $('#fireman').click(function () {
    $('#fireBox').toggle();
    getFirePer(1, '')
    selectPro(1)
  })
  $('#personliable').click(function () {
    $('#personBox').toggle();
    getFirePer(2, '')
    selectPro(2)
  })

  //责任人搜索
  function selectPro(state) {
    if (state == 1) {
      var fangVal = document.getElementById('fireman')
    } else {
      var fangVal = document.getElementById('personliable')
    }
    fangVal.oninput = function () {
      var object = $(this).val();
      getFirePer(state, object)
    }
  }

  function getFirePer(index, object) {
    $.ajax({
      type: 'get',
      url: url + 'getProjectlegalfireman',
      data: 'username=' + username + '&object=' + object,
      error: function (error) {
        console.log(error)
      },
      success: function (res) {
        console.log(res)
        var html = '';
        $.each(res, function (i, v) {
          html += `<li data-id=${v.id}>${v.user_name},${v.phone}</li>`
        })
        if (index == 1) {
          $('#fireUl').html(html)
        } else {
          $('#personUl').html(html)
        }
      }
    })
  }
  //新增责任人
  $('#newFire').click(function () {
    addFirePer(0)
  })
  $('#newPro').click(function () {
    addFirePer(1)
  })

  function addFirePer(type) {
    $.login({
      title: type == '0' ? '新增防火员' : '新增责任人',
      text: '',
      username: '', // 默认用户名
      password: '', // 默认密码
      onOK: function (username, tel, beizhu) {
        var user = '15679193873'
        $.ajax({
          type: 'get',
          url: url + 'addprojectlegalfireman',
          data: 'username=' + user + '&name=' + username + '&phone=' + tel,
          error: function (error) {
            console.log(error)
          },
          success: function (res) {
            console.log(res)
            if (res.code == '200') {
              $.alert(res.mess)
            } else {
              $.alert(res.mess)
            }
          }
        })
      },
      onCancel: function () { }
    })
  }

  $('#fireBox').on('click', 'li', function () {
    console.log($(this).html())
    var id = $(this).attr('data-id')
    var value = $(this).html()
    $('#fireman').attr('data-id', id)
    $('#fireman').attr('value', value)
    $('#fireBox').hide();
  })
  $('#personBox').on('click', 'li', function () {
    console.log($(this).html())
    var id = $(this).attr('data-id')
    var value = $(this).html()
    $('#personliable').attr('data-id', id)
    $('#personliable').attr('value', value)
    $('#personBox').hide();
  })

  $('#cancel-btn').click(function () {
    var index = parent.layer.getFrameIndex(window.name);
    parent.layer.close(index);
    sessionStorage.removeItem('code')
  })

  //区域选择
  function getRegion(code, type) {
    $.ajax({
      type: 'get',
      url: url + 'getRegion',
      data: 'username=' + username + '&code=' + code + '&pno=1' + '&pageSize=10000',
      error: function (error) { console.log(error) },
      success: function (res) {
        console.log(res)
        var html = "<option></option>";
        $.each(res, function (i, v) {
          html += `<option data-code='${v.id}'>${v.name},${v.id}</option>`
        })
        if (type == 'one') {
          $('#box1').html(html)
          $('#box2').show();
        } else if (type == 'two') {
          $('#box2').html(html)
          $('#box3').show();
        } else if (type == 'three') {
          $('#box3').html(html)
          $('#box4').show();
        } else if (type == 'four') {
          $('#box4').html(html)
          $('#box5').show();
        } else {
          $('#box5').html(html)
        }

      }
    })
  }
  getRegion('', 'one')

  $('#box1').change(function () {
    var data = $(this).val().split(',')[1]
    getRegion(data, 'two')
  })
  $('#box2').change(function () {
    var data = $(this).val().split(',')[1]
    getRegion(data, 'three')
  })
  $('#box3').change(function () {
    var data = $(this).val().split(',')[1]
    getRegion(data, 'four')
  })
  $('#box4').change(function () {
    var data = $(this).val().split(',')[1]
    getRegion(data, 'five')
  })
  $('#save-btn').click(function (e) {
    e.preventDefault();
    var name = $('#name').val();
    var address = $('#address').val();
    // var code = $('#address').attr('data-code');
    var lng = sessionStorage.getItem('gao_lat');
    var fireman = $('#fireman').attr('data-id');

    var personliable = $('#personliable').attr('data-id');
    var remark = $('#remark').val();
    var code5 = $('#box5').val()
    console.log(code5 != ' ')
    if (name == '') {
      layer.open({
        content: '请填写项目名称'
      });
    } else if (fireman == undefined) {
      layer.open({
        content: '请选择防火员'
      });
    } else if (personliable == undefined) {
      layer.open({
        content: '请选择责任人'
      });
    } else if (code5 == null || code5 == "") {
      alert('请选择完整的区域,必须选择到最后一级')
    } else {
      var code = $('#box5').val().split(',')[1]
      $.ajax({
        type: 'get',
        url: url + '/addProject',
        data: 'name=' + name + '&username=' + username + '&adss=' + address + '&lon_lat=' + lng + '&code=' + code + '&fireman=' + fireman + '&personliable=' + personliable + '&remark=' + remark,
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
            // layer.load()
            // var index = layer.open();
            alert('添加成功')
            // layer.close(this.weqr);
            // layer.closeAll('dialog');
            // layer.closeAll();
            // var index = parent.layer.getFrameIndex(window.name);
            // setTimeout(() => {
            // parent.layer.close(index);
            parent.location.reload(); //父级刷新
            // alert('1325')

            // }, 100);
          } else {
            console.log(2);
          }
        }
      })
    }


  })
})