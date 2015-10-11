function setToDelete(todoId, todoDeleted){
    var todoIdDelete = {
        id: todoId,
        deleted: todoDeleted
    };
    $.ajax({
        url: './pages/delete_item.php',
        method: 'POST',
        dataType: "text",
        cache: false,
        data: todoIdDelete,
        success: function(response){
            console.log(response, " rows affected");
            //loadTodoList();
        },
        error: function(){
            console.log("Don work");
        }
    });
}

function deleteItem(){
    $.ajax({
        url: './pages/delete_item.php',
        method: 'GET',
        dataType: "text",
        cache: false,
        success: function(response){
            console.log(response, " rows affected");
            loadTodoList();
        },
        error: function(){
            console.log("Don work");
        }
    });
}
