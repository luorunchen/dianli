$(function () {
    var map = new BMap.Map("centet_map");
    var point = new BMap.Point(110.795905,32.619646);
    map.centerAndZoom(point, 6);
    map.enableScrollWheelZoom(true);

    var username='13076920054'
    function selectPage(pno,pageSize){
        $.ajax({
            type:'get',
            url:url+'/getRegister',
            data:'username='+username+'&pno='+pno+'&pageSize='+pageSize,
            error:function(error){console.log(error)},
            success:function(res){
                console.log(res);
            }
        })
    }
    selectPage(1,10)

    $.ajax({
        type:'get',
        url:url+'/alarmLately10',
        data:'username='+username,
        error:function(error){console.log(error)},
        success:function(res){
            console.log(res);
            var html="";
            if(res.length!=0){
                for(var item of res){
                    var {imei,type,typeName,alarmFaultDate,image,remark,alarmValue} =res
                    html=`<li class="layui-timeline-item">
                    <i class="layui-icon layui-timeline-axis">&#xe63f;</i>
                    <div class="layui-timeline-content layui-text">
                      <h3 class="layui-timeline-title">
                        8月16日 17:33 
                        <span style='position: relative;right: -200px;'>
                          <img src="./image/setting.png" alt="" style='width:6%'>
                          <img src="./image/shuzhuang.png" alt="" style='width:6%'>
                        </span>
                      </h3>
                      <ul>
                        <li>设备ID:</li>
                        <li>设备名称:u创谷20号</li>
                        <li>单位名称:鹏胜智联科技有限公司</li>
                        <li>设备类型:温度检测器</li>
                        <li>报警类型:温度报警</li>
                        <li>报警值:99°C</li>
                      </ul>
                    </div>
                  </li>`
                }
               
            }
        }
    })
    /*********/
    var dom = document.getElementById("bottom_zhe");
    var myChart = echarts.init(dom);
    var app = {};
    option = null;
    option = {
        tooltip: { //提示框组件
            trigger: 'axis', //触发类型。
            axisPointer: { //配置坐标轴指示器的快捷方式
                type: 'shadow', // 阴影指示器
                label: { //坐标轴指示器的文本标签。
                    show: true //是否显示文本标签。
                }
            }
        },
        toolbox: { //工具栏	
            show: true, //是否显示工具栏组件。
            feature: { //各工具配置项。
                mark: {
                    show: true
                },
                //dataView : {show: true, readOnly: false},
                magicType: {
                    show: true,
                    type: ['line', 'bar']
                },
                // restore : {show: true},
                saveAsImage: {
                    show: true
                }
            }
        },
        calculable: true,
        legend: {
            data: ['温度', '湿度', '烟雾', '灭火器'], //图例的数据数组
            itemGap: 1 //图例每项之间的间隔
        },
        grid: {
            top: '12%', //grid 组件离容器上侧的距离。
            left: '1%',
            right: '10%',
            containLabel: true //区域是否包含坐标轴的刻度标签。
        },
        xAxis: [{
            type: 'category', //坐标轴类型。
            data: ['2020-7-15', '2020-7-16', '2020-7-17', '2020-7-18', '2020-7-19', '2020-7-20', '2020-7-21']
        }],
        yAxis: [{
            type: 'value',

        }],
        dataZoom: [ //用于区域缩放
            {
                show: true,
                start: 0, //数据窗口范围的起始百分比
                end: 100
            },
            {
                type: 'inside',
                start: 0,
                end: 100
            },
        ],
        series: [{
                name: '温度',
                type: 'line',
                data: ['30', '0', '300', '10', '20', '80', '10']
            },
            {
                name: '湿度',
                type: 'line',
                data: ['30', '0', '300', '10', '20', '80', '10']
            },
            {
                name: '烟雾',
                type: 'line',
                data: ['30', '0', '300', '10', '20', '80', '10']
            },
            {
                name: '灭火器',
                type: 'line',
                data: ['30', '0', '300', '10', '20', '80', '10']
            }
        ]
    };
    myChart.setOption(option, true);


    /*************/
    var dom = document.getElementById("top_left");
    var myChartTopLeft = echarts.init(dom);
    option = {
        title: {
            text: '设备情况',
            left: 'left',
            textStyle: {
                color: '#333333',
                fontWeight: 10,
                fontSize: 13
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
            type: 'plain',
            orient: 'vertical',
            left: 5,
            top: 50,
            data: ['正常', '报警']
        },
        series: [{
            type: 'pie',
            radius: '65%',
            center: ['50%', '50%'],
            selectedMode: 'single',
            label: {
                show: false,
            },
            data: [{
                    value: 535,
                    name: '正常'
                },
                {
                    value: 510,
                    name: '报警'
                },
            ],
        }]
    };
    myChartTopLeft.setOption(option, true);


    /*************/
    var dom = document.getElementById("top_right");
    var myChartTopRight = echarts.init(dom);
    option = {
        title: {
            text: '报警占比',
            left: 'left',
            textStyle: {
                color: '#333333',
                fontWeight: 10,
                fontSize: 13
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
            type: 'plain',
            orient: 'vertical',
            right: 5,
            top: 0,
            data: ['温度', '湿度', '烟雾', '灭火器']
        },
        series: [{
            type: 'pie',
            radius: '65%',
            center: ['50%', '50%'],
            selectedMode: 'single',
            label: {
                show: false,
            },
            data: [{
                    value: 535,
                    name: '温度'
                },
                {
                    value: 510,
                    name: '湿度'
                },
                {
                    value: 50,
                    name: '烟雾'
                },
                {
                    value: 610,
                    name: '灭火器'
                }
            ],
        }]
    };
    myChartTopRight.setOption(option, true);




    /*******************/
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