function loadTodoList(userId){
    console.log(userId);
    $.ajax({
        dataType: 'json',
        url: 'list_all_items.php',
        data: 1,
        method: "POST",
        crossDomain: true,
        data: 1,
        success: function(response){
            console.log(userId);
            console.log(response);
            //$(".todoList").html("");
            //for (var i = 0; i < response.length; i++){
            //    var li = $("<li>");
            //    var deleteBtn = $("<button>",{
            //        class: "deleteTodo btn",
            //        text: "Delete"
            //    });
            //    var editBtn = $("<button>",{
            //        class: "editTodo btn",
            //        text: "Edit"
            //    });
            //    var todoSpan = $("<span>",{
            //        text: response[i].title,
            //        class: "todoItem"
            //    });
            //    var todoDetails = $("<div>",{
            //        class: "todoDetails"
            //    });
            //    var pDetails = $("<p>", {
            //        text: response[i].details
            //    });
            //    var pTimeStamp = $("<p>",{
            //        text: response[i].timeStamp
            //    });
            //    todoDetails.append(pDetails, pTimeStamp);
            //    li.append(todoSpan, deleteBtn, editBtn, todoDetails);
            //    $(".todoList").append(li);
            //}
            //$(".todoDetails").hide();
            //$(".todoList li").click(function(){
            //    $(this).find(".todoDetails").stop().slideToggle();
            //});
        },
        error: function(){
            console.log("No bueno");
        }
    });
}