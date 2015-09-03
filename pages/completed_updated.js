function setToCompleted(todoId, completeStatus){
    var todoIdComplete= {
        id: todoId,
        status: completeStatus,
    };
    $.ajax({
        url: './pages/completed_update.php',
        method: 'POST',
        dataType: "text",
        cache: false,
        data: todoIdComplete,
        success: function(response){
            console.log(response, " rows affected");
        },
        error: function(){
            console.log("Don work");
        }
    });
}