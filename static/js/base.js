var TellUS= $('#TellUS').click(() => {
    $.ajax({
        type: 'POST',
        url: '/tellUs',
        dataType: 'json',
        data: {
            userName: $('#userName').val(),
            connection: $('#connection').val(),
            targetCar: $('#targetCar').val(),
            
        },
        success: function(data) {
            alert(data.code); 
        }, 
        error:function(){       
            alert("提交失败");       
        } 
    })
})