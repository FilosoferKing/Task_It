/***************************************
 * NAME: setToDelete
 * PARAMS: todoId, todoDeleted
 * GLOBAL VARIABLES: none
 * LOCAL VARIABLES: none
 * PURPOSE:  sets the task to deleted in the database, but doe not actually delete it
 * FUNCTIONS USED: none
 */
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
            //console.log(response, " rows affected");
            //loadTodoList();
        },
        error: function(){
            //console.log("Don work");
        }
    });
}

/***************************************
 * NAME: deleteItem
 * PARAMS: none
 * GLOBAL VARIABLES: none
 * LOCAL VARIABLES: none
 * PURPOSE:  deletes task permanently from database
 * FUNCTIONS USED: loadTodoList()
 */
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

/***************************************
 * NAME: deleteCheckedItem
 * PARAMS: none
 * GLOBAL VARIABLES: none
 * LOCAL VARIABLES: none
 * PURPOSE:  permanently deletes checked(completed) items
 * FUNCTIONS USED: loadTodoList()
 */
function deleteCheckedItem(){
    $.ajax({
        url: './pages/delete_checked_item.php',
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
