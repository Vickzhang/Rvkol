function exeData(num, type) {
    var leixing = $("#leixing").val();
    window.location.href="/articles/"+leixing+"/"+num;  
    //loadData(num);
    //loadpage();
}
function loadpage() {
    var myPageCount = parseInt($("#PageCount").val());
    var myPageSize = parseInt($("#PageSize").val());
    var countindex = myPageCount % myPageSize > 0 ? (myPageCount / myPageSize) + 1 : (myPageCount / myPageSize);
    var current = $("#currentPage").val();
    var leixing = $("#leixing").val();
    var firstPage = '/articles/'+leixing+'/1';
    var prevPage = '/articles/'+leixing+'/'+(parseInt(current)-1);
    var nextPage = '/articles/'+leixing+'/'+(parseInt(current)+1);
    var lastPage = '/articles/'+leixing+'/'+parseInt(countindex);
    //var pointPage = '/articles/'+leixing+'/'+num;

    $.jqPaginator('#pagination', {
        totalPages: parseInt(countindex),
        visiblePages: parseInt($("#visiblePages").val()),
        currentPage: parseInt(current),
        first: '<li class="first"><a href="'+firstPage+'">首页</a></li>',
        prev: '<li class="prev"><a href="'+prevPage+'"><i class="arrow arrow2"></i>上一页</a></li>',
        next: '<li class="next"><a href="'+nextPage+'">下一页<i class="arrow arrow3"></i></a></li>',
        last: '<li class="first"><a href="'+lastPage+'">末页</a></li>',
        // page: '<li class="page"><a href="'+'/articles/'+leixing+'/'+num+'">{{page}}</a></li>',
        page: '<li class="page"><a href="javascript:;">{{page}}</a></li>',
        onPageChange: function (num, type) {
            if (type == "change") {
                exeData(num, type);
            }
        }
    });
}
$(function () {
    loadData(1);
    loadpage();
});