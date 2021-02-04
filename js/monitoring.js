$(function () {

  const type = sessionStorage.getItem('type')
  console.log(type)
  // console.log($('.perUl li'))
  // $('.perUl li')[2].attr('data-index')
  if (type == '1') {
    $('#one').addClass('PerActive')
    $('#one').siblings().removeClass('PerActive')
    selectPage(1, 10)
  } else if (type == '2') {
    $('#two').addClass('PerActive')
    $('#two').siblings().removeClass('PerActive')

    $('#two').siblings(':nth-child(1)').children(':first-child').attr('src', './image/user.png')
    $('#two').children(':first-child').attr('src', './image/suo_on.png')
    $('#two').siblings(':nth-child(3)').children(':first-child').attr('src', './image/pro.png')
    $('#two').siblings(':nth-child(4)').children(':first-child').attr('src', './image/fac.png')
    $('#top1').hide();
    $('#top2').show();
    $('#top3').hide();
    $('#top4').hide();



    jurPage(1, 10)
  } else if (type == '3') {
    // console.log(1231)
    $('#three').addClass('PerActive')
    $('#three').siblings().removeClass('PerActive')


    $('#three').siblings(':nth-child(1)').children(':first-child').attr('src', './image/user.png')
    $('#three').siblings(':nth-child(2)').children(':first-child').attr('src', './image/suo.png')
    $('#three').children(':first-child').attr('src', './image/pro_on.png')
    $('#three').siblings(':nth-child(4)').children(':first-child').attr('src', './image/fac.png')
    $('#top1').hide();
    $('#top2').hide();
    $('#top3').show();
    $('#top4').hide();
    proPage(1, 10, 'all')
  } else if (type == '4') {
    $('#four').addClass('PerActive')
    $('#four').siblings().removeClass('PerActive')
    $('#four').siblings(':nth-child(1)').children(':first-child').attr('src', './image/user.png')
    $('#four').siblings(':nth-child(2)').children(':first-child').attr('src', './image/suo.png')
    $('#four').siblings(':nth-child(3)').children(':first-child').attr('src', './image/pro.png')
    $('#four').children(':first-child').attr('src', './image/fac_on.png')
    $('#top1').hide();
    $('#top2').hide();
    $('#top3').hide();
    $('#top4').show();

    facPage(1, 10)
  }
  // console.log()
  // console.log($('.perUl li')[1])
  // console.log($('.perUl li')[2])
  // console.log($('.perUl li')[3])
  // console.log(type)


  $('.perUl').on('click', 'li', function () {
    var index = $(this).attr('data-index')
    sessionStorage.setItem('type', index)
    // console.log(index, '我是index')
    $(this).addClass('PerActive')
    $(this).siblings().removeClass('PerActive')
    if (index == '1') {
      console.log($(this).children(':first-child'))
      $(this).children(':first-child').attr('src', './image/user_on.png')
      $(this).siblings(':nth-child(2)').children(':first-child').attr('src', './image/suo.png')
      $(this).siblings(':nth-child(3)').children(':first-child').attr('src', './image/pro.png')
      $(this).siblings(':nth-child(4)').children(':first-child').attr('src', './image/fac.png')
      $('#top1').show();
      $('#top2').hide();
      $('#top3').hide();
      $('#top4').hide();
      selectPage(1, 10)
    } else if (index == '2') {
      $(this).siblings(':nth-child(1)').children(':first-child').attr('src', './image/user.png')
      $(this).children(':first-child').attr('src', './image/suo_on.png')
      $(this).siblings(':nth-child(3)').children(':first-child').attr('src', './image/pro.png')
      $(this).siblings(':nth-child(4)').children(':first-child').attr('src', './image/fac.png')
      $('#top1').hide();
      $('#top2').show();
      $('#top3').hide();
      $('#top4').hide();
      jurPage(1, 10)
    } else if (index == '3') {
      $(this).siblings(':nth-child(1)').children(':first-child').attr('src', './image/user.png')
      $(this).siblings(':nth-child(2)').children(':first-child').attr('src', './image/suo.png')
      $(this).children(':first-child').attr('src', './image/pro_on.png')
      $(this).siblings(':nth-child(4)').children(':first-child').attr('src', './image/fac.png')
      $('#top1').hide();
      $('#top2').hide();
      $('#top3').show();
      $('#top4').hide();
      proPage(1, 10, 'all')
    } else if (index == '4') {
      $(this).siblings(':nth-child(1)').children(':first-child').attr('src', './image/user.png')
      $(this).siblings(':nth-child(2)').children(':first-child').attr('src', './image/suo.png')
      $(this).siblings(':nth-child(3)').children(':first-child').attr('src', './image/pro.png')
      $(this).children(':first-child').attr('src', './image/fac_on.png')
      $('#top1').hide();
      $('#top2').hide();
      $('#top3').hide();
      $('#top4').show();
      facPage(1, 10)
    }
  })


  function selectPage(pno, pageSize) {
    var superior = '';
    var name = '';
    var phone = '';
    $.ajax({
      type: 'get',
      url: url + 'getRegister',
      data: 'username=' + username + '&name=' + name + '&phone=' + phone + '&superior=' + superior + '&pno=' + pno + '&pageSize=',
      error: function (error) {
        console.log(error)
      },
      success: function (result) {
        console.log(result)
        if (result.code == "455" || result.code == "435" || result.code == "500") {
          layer.open({
            content: result.mess
          })
        } else {
          var data = result.data;
          var html = ''
          $.each(data, function (i, v) {
            html += `
          <tr class="text-left" style='height:40px;' >
              <th style="text-align: center; width: 5%">${i + 1}</th>
              <th style="text-align: center; width: 8%">${v.name}</th>
              <th style="text-align: center; width: 18%">${v.phone}</th>
              <th style="text-align: center; width: 8%">${v.company}</th>
              <th style="text-align: center; width: 8%">${v.adss}</th>
              <th style="text-align: center; width: 18%">${v.role}</th>
              <th style="text-align: center; width: 18%">
                  <button class='layui-btn layui-btn-sm editBtn' data-id="${v.id}" data-company="${v.company}">编辑用户</button>
                  <button class='layui-btn layui-btn-sm editBtn2' style='background:red' data-id="${v.id}" data-company="${v.company}">删除用户</button>
              </th>
          </tr>`
          })
          $('#tbodyDetails').html(html)

          $('.editBtn').click(function () {
            var width = $(window).width();
            var height = $(window).height();
            var id = $(this).attr('data-id')
            var company = $(this).attr('data-company')
            layer.open({
              type: 2,
              title: '用户编辑',
              maxmin: true,
              offset: ['100px'],
              shadeClose: true, //点击遮罩关闭层
              shade: 0.5, //不显示遮罩
              area: [width * 0.7 + 'px', height * 0.8 + 'px'],
              content: "./backstage/user/update.html?id=" + id + "&company=" + company
            });
            $('.layui-layer-title').css('background', '#118153')
          })
          $('.editBtn2').click(function () {
            var width = $(window).width();
            var height = $(window).height();
            var id = $(this).attr('data-id')
            var company = $(this).attr('data-company')
            var ii = layer.open({
              type: 1,
              title: false,
              closeBtn: 0,
              area: ['200px', '80px'],
              shadeClose: true, //点击遮罩关闭层
              shade: 0.5, //不显示遮罩
              skin: 'yourclass',
              content: '<div style="font-size:20px;text-align: center;">确定删除用户吗?<button class="layui-btn layui-btn-xl qwe" style="background:red">确定</button><button class="layui-btn layui-btn-xl qwr">取消</button></div>'
            });
            $('.layui-layer-title').css('background', '#118153')
            $('.qwe').click(function () {
              layer.close(ii);
              $.ajax({
                type: 'get',
                url: url + 'delUser',
                data: 'username=' + username + '&id=' + id,
                success: function (result) {
                  console.log(result.mess, 65456554565545)


                  alert("删除成功")
                  var index = $(this).attr('data-index', '3')
                  location.reload()

                },

              })

            })
            $('.qwr').click(function () {
              layer.close(ii);
            })
          })



        }

      }


    })
  }


  function jurPage(pno, pageSize) {
    $.ajax({
      type: 'get',
      url: url + 'getRole',
      data: 'username=' + username + '&name=' + '&pno=' + pno + '&pageSize=' + pageSize,
      error: function (error) {
        console.log(error)
      },
      success: function (result) {
        console.log(result)
        if (result.code == "455" || result.code == "435" || result.code == "500") {
          layer.open({
            content: result.mess
          })
        } else {
          var html = "";
          var data = result.data
          $.each(data, function (i, v) {
            html += `<tr class="text-left" style='height:40px;'>
            <th style="text-align: center; width: 5%">${i + 1}</th>
          <th style="text-align: center; width: 18%">${v.name}</th>
          <th style="text-align: center; width: 18%">${v.create_user}</th>
          <th style="text-align: center; width: 18%">${v.region}</th>
          <th style="text-align: center; width: 18%">${v.createDate}</th>
          <th style="text-align: center; width: 18%">
              <button class='layui-btn layui-btn-sm editBtn' data-id="${v.id}">编辑权限</button>
              <button class='layui-btn layui-btn-danger layui-btn-sm deleteBtn' data-id="${v.id}">删除权限</button>
          </th>
      </tr>`
          })
          $('#getRole').html(html)

          $('.editBtn').click(function () {
            var width = $(window).width();
            var height = $(window).height();
            var id = $(this).attr('data-id')
            layer.open({
              type: 2,
              title: '权限编辑',
              maxmin: true,
              offset: ['100px'],
              shadeClose: true, //点击遮罩关闭层
              shade: 0.5, //不显示遮罩
              area: [width * 0.7 + 'px', height * 0.8 + 'px'],
              content: "./backstage/jur/update.html?id=" + id
            });
            $('.layui-layer-title').css('background', '#118153')
          })

          $('.deleteBtn').click(function () {
            var id = $(this).attr('data-id')
            layer.confirm('删除后数据将无法恢复,确认要删除吗？', function (index) {
              $.ajax({
                type: 'get',
                url: url + 'delRole',
                data: 'username=' + username + '&r_id=' + id,
                error: function (error) {
                  console.log(error)
                },
                success: function (result) {
                  console.log(result)
                  if (result.code == '200') {
                    layer.load();
                    // var index = parent.layer.getFrameIndex(window.name);
                    setTimeout(() => {
                      location.reload();  //父级刷新
                    }, 1000);
                  } else {
                    console.log('操作错误+update')
                  }
                  layer.close(index);
                }
              })
              $('.layui-layer-title').css('background', '#118153')
            })
          })
        }
      }

    })
  }

  function proPage(pno, pageSize, code) {
    var object = ''
    $.ajax({
      type: 'get',
      url: url + 'getProject',
      data: 'username=' + username + '&code=' + code + '&object=' + object + '&pno=' + pno + '&pageSize=',
      error: function (error) {
        console.log(error)
      },
      success: function (result) {
        console.log(result)
        var data = result.data;
        var html = ''
        $.each(data, function (i, v) {
          html += `<tr class="text-left" style='height:40px;' >
          <th style="text-align: center; width: 5%">${i + 1}</th>
          <th style="text-align: center; width: 8%">${v.name}</th>
          <th style="text-align: center; width: 18%">${v.adss}</th>
          <th style="text-align: center; width: 8%">${v.fName}</th>
          <th style="text-align: center; width: 8%">${v.fPhone}</th>
          <th style="text-align: center; width: 8%">${v.zName}</th>
          <th style="text-align: center; width: 8%">${v.zPhone}</th>
          <th style="text-align: center; width: 8%">${v.remark}</th>
          <th style="text-align: center; width: 18%">
              <button class='layui-btn layui-btn-sm editBtn' data-id="${v.pid}">编辑项目</button>
              <button class='layui-btn layui-btn-normal layui-btn-sm newFac' data-id="${v.pid}">新增设备</button>
              <button class='layui-btn layui-btn-danger layui-btn-sm deleteBtn' data-id="${v.pid}">删除项目</button>
          </th>
      </tr>`;
        })

        $('#getProject').html(html)

        $('.editBtn').click(function () {
          var width = $(window).width();
          var height = $(window).height();
          var id = $(this).attr('data-id')
          layer.open({
            type: 2,
            title: '项目编辑',
            maxmin: true,
            offset: ['100px'],
            shadeClose: true, //点击遮罩关闭层
            shade: 0.5, //不显示遮罩
            area: [width * 0.7 + 'px', height * 0.8 + 'px'],
            content: "./backstage/pro/update.html?id=" + id
          });
          $('.layui-layer-title').css('background', '#118153')
        })
        //newFac
        $('.newFac').click(function () {
          var width = $(window).width();
          var height = $(window).height();
          var id = $(this).attr('data-id')
          layer.open({
            type: 2,
            title: '新增设备',
            maxmin: true,
            offset: ['100px'],
            shadeClose: true, //点击遮罩关闭层
            shade: 0.5, //不显示遮罩
            area: [width * 0.7 + 'px', height * 0.8 + 'px'],
            content: "./backstage/pro/newFac.html?id=" + id
          });
          $('.layui-layer-title').css('background', '#118153')
        })

        $('.deleteBtn').click(function () {
          var id = $(this).attr('data-id')
          layer.confirm('删除后数据将无法恢复,确认要删除吗？', function (index) {
            $.ajax({
              type: 'get',
              url: url + 'delProject',
              data: 'username=' + username + '&pid=' + id,
              error: function (error) {
                console.log(error)
              },
              success: function (result) {
                console.log(result)
                if (result.code == '200') {
                  layer.load();
                  setTimeout(() => {
                    location.reload();  //父级刷新
                  }, 1000);
                } else {
                  console.log('操作错误+update')
                }
                layer.close(index);
              }
            })
          })
          $('.layui-layer-title').css('background', '#118153')
        })
      }
    })
  }

  function facPage(pno, pageSize) {
    var object = ''
    $.ajax({
      type: 'get',
      url: url + 'getDevice',
      data: 'username=' + username + '&pid=all' + '&object=' + object + '&pno=' + pno + '&pageSize=' + pageSize,
      error: function (error) {
        console.log(error)
      },
      success: function (result) {
        console.log(result)
        var data = result.data;
        var html = ''
        console.log()
        $.each(data, function (i, v) {
          var date = v.regdate.time
          html += `<tr class="text-left" style='height:40px;' >
          <th style="text-align: center; width: 5%">${i + 1}</th>
          <th style="text-align: center; width: 8%">${v.pname}</th>
          <th style="text-align: center; width: 18%">${v.dname}</th>
          <th style="text-align: center; width: 8%">${v.imei}</th>
          <th style="text-align: center; width: 8%">${v.adss}</th>
          <th style="text-align: center; width: 8%">${timestampToTime(date)}</th>
          <th style="text-align: center; width: 18%">
              <button class='layui-btn layui-btn-sm editBtn' data-id="${v.did}">编辑设备</button>
              <button class='layui-btn layui-btn-danger layui-btn-sm deleteBtn' data-id="${v.did}">删除设备</button>
          </th>
      </tr>`;
        })
        $('#getDevice').html(html)

        $('.editBtn').click(function () {
          var width = $(window).width();
          var height = $(window).height();
          var id = $(this).attr('data-id')
          layer.open({
            type: 2,
            title: '设备编辑',
            maxmin: true,
            offset: ['100px'],
            shadeClose: true, //点击遮罩关闭层
            shade: 0.5, //不显示遮罩
            area: [width * 0.7 + 'px', height * 0.8 + 'px'],
            content: "./backstage/pro/facUpdate.html?id=" + id
          });
          $('.layui-layer-title').css('background', '#118153')
        })

        $('.deleteBtn').click(function () {
          var id = $(this).attr('data-id')
          layer.confirm('删除后数据将无法恢复,确认要删除吗？', function (index) {
            $.ajax({
              type: 'get',
              url: url + 'delDevice',
              data: 'username=' + username + '&did=' + id,
              error: function (error) {
                console.log(error)
              },
              success: function (result) {
                console.log(result)
                if (result.code == '200') {
                  layer.load();
                  setTimeout(() => {
                    location.reload();  //父级刷新
                  }, 1000);
                } else {
                  console.log('操作错误+update')
                }
                layer.close(index);
              }
            })
          })
          $('.layui-layer-title').css('background', '#118153')
        })
      }
    })
  }
  //时间戳转换时间
  function timestampToTime(timestamp) {
    var date = new Date(timestamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
    var Y = date.getFullYear() + '-';
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    var D = date.getDate() < 10 ? '0' + date.getDate() + ' ' : date.getDate() + ' ';
    var h = date.getHours() + ':';
    var m = date.getMinutes() + ':';
    var s = date.getSeconds();
    return Y + M + D + h + m + s;
  }
  $('.newAll').click(function () {
    console.log($(this))
    var width = $(window).width();
    var height = $(window).height();
    var index = $(this).attr('data-index')
    console.log(width)
    var weqr = layer.open({
      type: 2,
      title: index == 1 ? '用户新增' : index == 2 ? '权限新增' : index == 3 ? '项目新增' : '',
      maxmin: true,
      offset: ['100px'],
      shadeClose: true, //点击遮罩关闭层
      shade: 0.5, //不显示遮罩
      area: [width * 0.7 + 'px', height * 0.8 + 'px'],
      content: index == 1 ? "./backstage/user/add.html" : index == 2 ? "./backstage/jur/add.html" : index == 3 ? "./backstage/pro/add.html" : ''
    });
    $('.layui-layer-title').css('background', '#118153')
  })




})