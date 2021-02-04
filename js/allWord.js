$(function(){
  $('#ctitle').on('click','div',function(){
      $(this).addClass('active').siblings().removeClass('active')
      var show =$(this).attr('data-show');
      if(show=='1'){
          $('#center01').show();
          $('#center02').hide();
          $('#center03').hide();
      }else if(show=='2'){
          $('#center01').hide();
          $('#center02').show();
          $('#center03').hide();
      }else{
          $('#center01').hide();
          $('#center02').hide();
          $('#center03').show();
      }
  })

  $('.data-icon').click(function(){
      console.log($(this))
      var title=$(this).attr('data-sign'); //0发电  1输电  2变电  3配电
      var width = $(window).width();
      var height = $(window).height();
      console.log(height)
      layer.open({
          type: 2,
          title: false, //不显示标题栏
          closeBtn:false,
          shadeClose:true,
          area: [width * 0.7 + 'px', height - 200 + 'px'],
          shade: 0.5,
          skin:'yourclass',
          // maxmin: true,  // 关闭键
          offset: ['100px'],
          end:function(e){
              console.log(e)
          },
          content: 'facDetail/zhiNengAdmin.html?title='+title
      });
  })

  $('#inforUl').on('click','li',function(){
      var width = $(window).width();
      var height = $(window).height();
      console.log(height)
      layer.open({
          type: 2,
          title: false, //不显示标题栏
          closeBtn:false,
          shadeClose:true,
          area: [width * 0.7 + 'px', height - 200 + 'px'],
          shade: 0.5,
          skin:'yourclass',
          // maxmin: true,  // 关闭键
          offset: ['100px'],
          content: 'facDetail/facAdmin.html'
      });
  })

  $('#userName').click(function(){
    location.href='首页.html'
  })
})