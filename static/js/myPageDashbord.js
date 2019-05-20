function exeData(num, type) {
    var dashbordType = $("#dashbordType").val();
    window.location.href="/article-dashbord/"+num;  
    //loadData(num);
    //loadpage();
}
function loadpage() {
    var myPageCount = parseInt($("#PageCount").val());
    var myPageSize = parseInt($("#PageSize").val());
    var countindex = myPageCount % myPageSize > 0 ? (myPageCount / myPageSize) + 1 : (myPageCount / myPageSize);
    var current = $("#currentPage").val();
    var dashbordType = $("#dashbordType").val();
    var firstPage = '/article-dashbord'+'/1';
    var prevPage = '/article-dashbord/'+(parseInt(current)-1);
    var nextPage = '/article-dashbord/'+(parseInt(current)+1);
    var lastPage = '/article-dashbord/'+parseInt(countindex);
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