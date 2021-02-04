$(function(){
  var accessToken='at.4xexgpnl8o4t47j0d0wbrqexbrx3wyrb-54w2hi5cau-09se8bn-bkfymxgqo'
  layui.use('laydate', function(){
    var laydate = layui.laydate;
    laydate.render({
      elem: '#date'
      ,type: 'datetime'
      ,range: true
      ,format:'yyyyMMddHHmmss'
      ,change:function(value, date, endDate){
        console.log(value)
      }
      ,done: function(value, date, endDate){
        console.log(value)
        console.log(value.split(' - '))	
        var start=value.split(' - ')[0]
        var end=value.split(' - ')[1]
        var accessToken='at.4xexgpnl8o4t47j0d0wbrqexbrx3wyrb-54w2hi5cau-09se8bn-bkfymxgqo'
        var url="ezopen://MTHHWY@open.ys7.com/D76375435/1.rec?begin="+start+"&end="+end+"";
        console.log(url)
        $('#date').attr('data-val',value)
      }
    });
  })
  $('.leftbody ul').on('click','li',function(){
    console.log($(this).attr('data-num'));
    var num=$(this).attr('data-num')
    var yan=$(this).attr('data-yan')
    $('#shiBody').show();
		var url="ezopen://"+yan+"@open.ys7.com/"+num+"/1.hd.live";
    var decoder = new EZUIKit.EZUIPlayer({
				id: 'playWind',
				autoplay: true,
				url: url,
				accessToken: accessToken,
				decoderPath: '',
				width: (width-(width*0.25)),
				height: (height-height*0.40),
      });
      console.log(decoder)
    function close(){
      decoder.closeSound();
    }
    setTimeout(() => {
      close()
    }, 2000);
  })
  $('#rec').click(function(){
    var url=$('#date').attr('data-val');
    var ur2l=$('#date').val();
    console.log(url)
    console.log(ur2l)
    if(url==undefined){
      var url="ezopen://MTHHWY@open.ys7.com/D76375435/1.hd.live";
    }else{
      var start=url.split(' - ')[0]
      var end=url.split(' - ')[1]
      var url="ezopen://MTHHWY@open.ys7.com/D76375435/1.rec?begin="+start+"&end="+end+"";
    }
    var width = $(window).width();
    var height = $(window).height();
    var decoder = new EZUIKit.EZUIPlayer({
      id: 'playWind',
      autoplay: true,
      url: url,
      accessToken: accessToken,
      decoderPath: '',
      width: (width-(width*0.25)),
      height: (height-height*0.40),
    });
    decoder.closeSound();
  })
})