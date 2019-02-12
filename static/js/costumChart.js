var ctx = document.getElementById("myChart").getContext("2d");
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',
        // The data for our dataset
        data: {
            labels: [1,2,3,4,5,6,7],
            datasets: [{
                backgroundColor: 'rgb(255, 255, 255)',//绘制双曲线的时候最好使用rgba,要不不透明的白色背景可以使得某些线条绘制不出来
                borderColor: 'rgb(255, 99, 132)',
                data: [20, 16, 50, 78, 99, 130, 245],
            }]
        },
        // 配置文件
        options: {
            //标题设置
            title:{
                display:true,
                text:'访客统计',
            },
            //禁用动画
            animation:{
              duration:0,
            },
            hover:{
                animationDuration:0,
            },
            responsiveAnimationDuration: 0,
            //提示功能
            tooltips:{
              enable:false
            },
            //顶部的文字提示
            legend:{
              display:false,
            },
            //设置x,y轴网格线显示,标题等
            scales :{
                xAxes:[{
                    //轴标题
                    scaleLabel:{
                        display:true,
                        labelString:'日期',
                        fontColor:'#666'
                    },
                    //网格显示
                    gridLines:{
                        display:false
                    },
 
 
                }],
                yAxes:[{
                    scaleLabel:{
                        display:true,
                        labelString:'访问人数'
                    },
                    gridLines:{
                        display:false
                    },
 
                }],
 
            },
 
            //禁用赛尔曲线
            elements: {
                line: {
                    tension: 0,
                }
            }
 
        }
    });

