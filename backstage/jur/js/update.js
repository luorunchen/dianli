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
  $('#cancel-btn').click(function () {
    var index = parent.layer.getFrameIndex(window.name);
    parent.layer.close(index);
  })
  $.ajax({
    type: 'get',
    url: url + 'getPower',
    data: 'username=' + username,
    error: function (error) {
      console.log(error)
    },
    success: function (result) {
      console.log(result)
      var html = ""
      $.each(result, function (k, v) {
        html += "<dd><dl class='cl permission-list2'><dt><label><input type='checkbox' value='" + k + "' name='subMenuIdList' >&nbsp;" + k + "<input type='hidden' id='menuAlias_" + k + "' value='" + k + "'></label></dt><dd>"
        $.each(v, function (k, v) {
          html += "<label><input type='checkbox' name='thirdMenuIdList'value='" + v.id + "'>&nbsp;" + v.name + "</label>"
        })
        html += "</dd></dl></dd>"
      })
      $('.permission-list').html(html)

      $("input[name='subMenuIdList']").click(function () {
        var that = $(this);
        console.log(that)
        var LefeCheck = that.parent().parent().siblings().children()
        console.log(LefeCheck)
        if (that.is(':checked') == true) {
          that.prop("checked", true)
          for (var i = 0; i < LefeCheck.length; i++) {
            LefeCheck[i].firstChild.checked = true
          }
        } else {
          that.prop("checked", false)
          for (var i = 0; i < LefeCheck.length; i++) {
            LefeCheck[i].firstChild.checked = false
          }
        }

      })
      $("input[name='thirdMenuIdList']").click(function () {
        var that = $(this);
        that.parent().parent().children().find("input[name='thirdMenuIdList']").is(':checked')
        //判断点击子节点的checkbox 是否已经选中   
        if (that.is(':checked') == true) {
          //未选中就选中
          that.prop("checked", true)
          that.parent().parent().siblings().children().children().first().prop("checked", true)
        } else {
          //选中就取消选中
          that.prop("checked", false)
          if (that.parent().parent().children().find("input[name='thirdMenuIdList']").is(':checked') == false) {
            that.parent().parent().siblings().children().children().first().prop("checked", false)
          }
        }
      })
    }
  })
  //获取小权限
  $.ajax({
    type: 'get',
    url: url + 'getPowerByRid',
    data: 'username=' + username + '&r_id=' + global.id,
    error: function (error) {
      console.log(error)
    },
    success: function (result) {
      console.log(result.power)
      var data = result.power
      var checkboxs = $('input[name=thirdMenuIdList]')
      var str = [];
      $.each(data, function (i, v) {
        str.push(v.id)
      })

      setCheckBoxStatus(checkboxs, str)
    }

  })
  //获取权限信息
  $.ajax({
    type: 'get',
    url: url + 'getRoleById',
    data: 'username=' + username + '&id=' + global.id,
    error: function (error) {
      console.log(error)
    },
    success: function (result) {
      console.log(result)
      $('#name').val(result.name)
    }

  })

  function setCheckBoxStatus(elements, data) {
    var power = data.join(',');
    $(elements).each(function () {
      let value = $(this).val();
      if (power.indexOf(value) >= 0) {
        $(this).prop("checked", true)
        $(this).parent().parent().siblings().children().find('input[name=subMenuIdList]').prop("checked", true)
      } else {
        $(this).prop("checked", false)
      }
    })
  }




  $('#save-btn').click(function () {
    var obj = document.getElementsByName("thirdMenuIdList");
    var check_val = [];
    for (var k in obj) {
      if (obj[k].checked) {
        check_val.push(obj[k].value);
      }
    }
    var p_id = check_val.join(',');
    console.log(p_id)
    var name = $('#name').val();
    var region = ''
    if (name == "") {
      alert('请填写角色名')
    } else {
      $.ajax({
        type: 'get',
        url: url + '/editRole',
        data: 'username=' + username + '&role_name=' + name + '&p_id=' + p_id + '&r_id=' + global.id,
        error: function (error) {
          console.log(error)
        },
        success: function (result) {
          console.log(result)
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