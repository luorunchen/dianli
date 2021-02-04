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
  console.log(global)

  if (global.now == '广东') {
    var data1 = [{
      title: '广东',
      id: 1,
      spread:true,
      children: [{
        title: '深圳',
        id: 1000,
        // spread:true,
        children: [{
          title: '龙华区',
          id: 10001
        }, {
          title: '龙岗区',
          id: 10002,
          
        }]
      }, {
        title: '汕头',
        id: 1001
      }, {
        title: '广州',
        id: 1002
      }]
    }, {
      title: '广西',
      id: 2,
      children: [{
        title: '南宁',
        id: 2000
      }, {
        title: '桂林',
        id: 2001
      }]
    }, {
      title: '陕西',
      id: 3,
      children: [{
        title: '西安',
        id: 3000
      }, {
        title: '延安',
        id: 3001
      }]
    }];
  }else{
    var data1 = [{
      title: '广东',
      id: 1,
      spread:true,
      children: [{
        title: '深圳',
        id: 1000,
        // spread:true,
        children: [{
          title: '龙华区',
          id: 10001
        }, {
          title: '龙岗区',
          id: 10002,
          
        }]
      }, {
        title: '汕头',
        id: 1001
      }, {
        title: '广州',
        id: 1002
      }]
    }, {
      title: '广西',
      id: 2,
      children: [{
        title: '南宁',
        id: 2000
      }, {
        title: '桂林',
        id: 2001
      }]
    }, {
      title: '陕西',
      id: 3,
      children: [{
        title: '西安',
        id: 3000
      }, {
        title: '延安',
        id: 3001
      }]
    }];
  }
  // console.log(data1[0].children[0].spread=true)
  console.log(data1)
  layui.use(['tree', 'util'], function () {
    var tree = layui.tree,
      layer = layui.layer,
      util = layui.util;
    tree.render({
      elem: '#test1' //默认是点击节点可进行收缩
        ,
      data: data1,
      click: function(obj){
        console.log(obj)
        console.log(obj.data); //得到当前点击的节点数据
        var name=obj.data.title
        location.href="实时数据-广东省-龙华区.html?name="+name
      }
    });
  })


  $('.Centertable').click(function(){
    console.log($(this).attr('data-name'))
    var name=$(this).attr('data-name')
    location.href="实时数据-广东省-龙华区.html?name="+name
  })
  $('#u3').click(function(){
    location.href="首页.html"
  })
  $('#u4').click(function(){
    location.href="实时数据.html"
  })
})