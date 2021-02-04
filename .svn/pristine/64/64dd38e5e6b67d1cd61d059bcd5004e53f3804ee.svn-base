//打开内容编辑窗口
function openWindow(Grid, keyValue,urlParam, Fun) {

    var gconfig  =  Grid.Config;
    var url = gconfig.editUrl;

    if (url == null || url == "") return;
    if (url.indexOf("?") < 0) {
        url += "?";
    }
    else {
        url += "&";
    }
    url += "keyValue=" + keyValue;

    if (urlParam && urlParam != "") {
        url += "&" + urlParam;
    }

    editWindow = window.top.OpenFrame(url, gconfig.editWidth, gconfig.editHeight, "win", gconfig.editTitle, "", Grid.LoadData);
}

//添加按钮点击事件处理函数
function AddClick(Grid, urlParam) {
    openWindow(Grid, "",urlParam);
}

//编辑按钮点击事件处理函数
function EditClick(Grid, urlParam) {
    var key = Grid.SelectKey();
    if (key == null) {
        alert("请先选择要编辑的记录！");
        return;
    };
    openWindow(Grid, key,urlParam);
}

function RefreshClick(Grid) {
    if (event && event.srcElement) {
        var treeID = $(event.srcElement).attr("treeID");
        if (treeID) {
            var treeObj = $.fn.zTree.getZTreeObj(treeID);
            treeObj.reAsyncChildNodes(null, "refresh");
        }
    }
    Grid.LoadData({ pageIndex: 1 });
}
function DeleteClick(Grid) {
    var key= Grid.SelectKey();
    if (key == null) {
        alert("请先选择要删除的记录！");
        return;
    };
    if (confirm("确定要删除所选记录!") == false) {
        return;
    }
    Grid.LoadData(null,{deleteKey: key });
}

//导出Excel
function ExportClick(Grid) {
    Grid.ExportData();
}