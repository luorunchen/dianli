$(function(){
  $('.perUl').on('click','li',function(){
    console.log()
    var index=$(this).attr('data-index')
    $(this).addClass('PerActive')
      $(this).siblings().removeClass('PerActive')
    if(index=='1'){
      $(this).children(':first-child').attr('src','../image/text_on.png')
      $(this).siblings().children(':first-child').attr('src','../image/suo.png')
      $('#top1').show();
      $('#top2').hide();
    }else{
      $(this).siblings().children(':first-child').attr('src','../image/text.png')
      $(this).children(':first-child').attr('src','../image/suo_on.png')
      $('#top1').hide();
      $('#top2').show();
    }
  })
})