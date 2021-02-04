$(function(){
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

  $('#headTitle').html(global.title)
  $('#dataV').on('click','.table-action-button',function(){
    console.log($(this).attr('data-id'))
  })
})