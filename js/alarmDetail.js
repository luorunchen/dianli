$(function(){
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
  function zTreeOnAsyncSuccess(){}
  function before(){}
  $(document).ready(function () {
    $.fn.zTree.init($("#treeDemo"), setting);
  });

  $('.CenterInfo').on('mouseenter', '.detailInfo', function(){
    var lng=$(this).attr('data-lng')
    map(lng)
  })
  function map(lng){
    var pp = lng.split(',');
    console.log(pp);
    if (pp[1] > 54) { // 纬度
      var lng = pp[1] //经度
      var lat = pp[0] //纬度
    } else {
      var lng = pp[0]
      var lat = pp[1]
    }
    var map = new BMap.Map("u1988_div");
    var point = new BMap.Point(lng,lat);
    var marker = new BMap.Marker(point); // 创建标注
    map.addOverlay(marker);
    map.centerAndZoom(point, 15);
    map.enableScrollWheelZoom(true);
    map.addOverlay(marker);
    var top_right_navigation = new BMap.NavigationControl({
      anchor: BMAP_ANCHOR_TOP_RIGHT,
      type: BMAP_NAVIGATION_CONTROL_SMALL
    }); //右上角，仅包含平移和缩放按钮
    var opts = {
      width: 200, // 信息窗口宽度
      height: 100, // 信息窗口高度
    }
    var infoWindow = new BMap.InfoWindow("<p style='font-size:14px;'>设备名称：u创谷</p><p style='font-size:14px;'>设备类型：	温度探测器</p><p style='font-size:14px;'>报警类型：	温度报警</p>", opts); // 创建信息窗口对象 
    map.openInfoWindow(infoWindow, point); //开启信息窗口
    marker.addEventListener("click", function () {
      map.openInfoWindow(infoWindow, point); //开启信息窗口
    });
  }
  
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