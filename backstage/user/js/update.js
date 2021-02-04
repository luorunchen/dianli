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
  function setCheckBoxStatus(elements, data) {
    console.log(data)
      $(elements).each(function () {
        console.log($(this))
          let value = $(this).val();
          console.log(value)
          if (data.indexOf(value) >= 0) {
              $(this).prop("checked", true)
              console.log($(this).parent().parent().siblings())
              $(this).parent().parent().siblings().children().find('input[name=subMenuIdList]').prop("checked", true)
          } else {
              $(this).prop("checked", false)
          }
      })
  }
  $.ajax({
    type: 'get',
    url: url + 'getPowerByRid',
    data: 'username=' + username + '&r_id=' + global.id,
    error: function (error) {
      console.log(error)
    },
    success: function (result) {
      console.log(result)
    }
  })
  $.ajax({
    type: 'get',
    url: url + 'getUserById',
    data: 'username=' + username + '&id=' + global.id,
    error: function (error) {
      console.log(error)
    },
    success: function (result) {
      console.log(result)
      $('#name').val(result.name)
      $('#phone').val(result.phone)
      $('#adss').val(result.adss)
      var FiratId=result.role
      

      $.ajax({
        type: 'get',
        url: url + 'getRole',
        data: 'username=' + username + '&name=' + '&pno=1' + '&pageSize=1000',
        error: function (error) {
          console.log(error)
        },
        success: function (result) {
          console.log(result)
          var data = result.data;
          var html = ""
          for (var item of data) {
            var {
              name,
              id
            } = item
            html += `<label class="m-r-sm" >
                  <input type="radio"  name="menuRadio"
                  data-id="${id}"  ${FiratId === id ? 'checked' : ''}
                  class="roleIdList">&nbsp;${name}
              </label>`;
          }
          $('#roleSelect').html(html)
        }
      })
    }
  })
  

 
  $('#save-btn').click(function (e) {
    e.preventDefault();
    var name = $('#name').val();
    var phone = $('#phone').val();
    var r_id = $("input[name='menuRadio']:checked").attr('data-id');
    var company=$('#company').val();  //公司id
    var adss=$('#adss').val();
    if(name==""){
        layer.msg('请添加姓名', {
            btn: [ '知道了']
          });
    }else if(r_id==undefined){
        layer.msg('请添加角色选择', {
            btn: [ '知道了']
          });
    }else if(adss==""){   //enterprise_user
      layer.msg('请填写地址', {
          btn: [ '知道了']
        });
  }else{
      $.ajax({
        type: 'get',
        url: url + 'editUser',
        data: 'username=' + username + '&name=' + name+ '&role=' + r_id +'&adss='+adss +'&id='+global.id,
        error: function (error) {
            console.log(error)
        },
        success: function (result) {
          console.log(result)
          if(result.code=='200'){
            layer.load();
            var index = parent.layer.getFrameIndex(window.name);
            setTimeout(() => {
                parent.layer.close(index);
                parent.location.reload();  //父级刷新
            }, 1000);
          }else{
              console.log('操作错误+update')
              layer.open({
                content:result.mess
              })
          }
        }
      })
    }
  })
})