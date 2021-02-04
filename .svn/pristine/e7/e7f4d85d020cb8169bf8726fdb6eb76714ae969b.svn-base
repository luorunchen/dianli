$(function () {
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
              data-id="${id}" 
              class="roleIdList">&nbsp;${name}
          </label>`;
      }
      $('#roleSelect').html(html)
    }
  })

  $.ajax({
    type: 'get',
    url: url + 'getCompany',
    data: 'username=' + username ,
    error: function (error) {
      console.log(error)
    },
    success: function (result) {
      console.log(result)
      var html='';
      html='<option value=""></option>'
      for (var item of result) {
        var {com_name,id} =item
        html+=`<option value="${id}">${com_name}</option>`
      }
      $('.companyList').html(html)
    }
  })
  $('#cancel-btn').click(function () {
    var index = parent.layer.getFrameIndex(window.name);
    parent.layer.close(index);
  })
  $('#save-btn').click(function (e) {
    e.preventDefault();
    var name = $('#name').val();
    var phone = $('#phone').val();
    var pass = $('#pass').val();
    var r_id = $("input[name='menuRadio']:checked").attr('data-id');
    var company=$('#company').val();  //公司id
    var adss=$('#adss').val();
    if(name==""){
        layer.msg('请添加姓名', {
            btn: [ '知道了']
          });
    }else if(phone==""){
      layer.msg('请添加手机号码', {
          btn: [ '知道了']
        });
    }else if(pass==""){
        layer.msg('请添加密码', {
            btn: [ '知道了']
          });
    }else if(r_id==undefined){
        layer.msg('请添加角色选择', {
            btn: [ '知道了']
          });
          //enterprise 公司名称
    }else if(company==""){   //enterprise_user
        layer.msg('请选择公司名称', {
            btn: [ '知道了']
          });
    }else if(adss==""){   //enterprise_user
      layer.msg('请填写地址', {
          btn: [ '知道了']
        });
  }else{
      $.ajax({
        type: 'get',
        url: url + 'addRegister',
        data: 'username=' + username + '&name=' + name+ '&phone=' + phone+ '&pass=' + pass+ '&role=' + r_id +'&company='+company+'&adss='+adss ,
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