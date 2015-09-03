function loadTodoList(){
    $.ajax({
        url: 'pages/list_all_items.php',
        method: "GET",
        dataType: 'json',
        cache: 'false',
        success: function(response){
            console.log(response);
            $(".todoList, .clearTodo").remove();
            var todoList = $("<div>", {
                class: "todoList"
            });
            console.log(response.length);
            for(i = 0; i < response.length; i++){
                var li = $("<li>", {
                    class: "todoContainer deleted" + response[i].deleted + " completed" + response[i].status,
                    "deleteStatus": response[i].deleted,
                    "todoId": response[i].id        //store todo item's id
                });
                var deleteBtn = $("<button>",{
                    class: "deleteTodo btn",
                    text: "Delete"
                });
                var editBtn = $("<button>",{
                    class: "editTodo btn",
                    id: response[i]['id'],
                    text: "Edit"
                });
                var todoDiv = $("<div>");
                var completedCheck = $("<input>",{
                    type: "checkbox",
                    class: "statusCheck",
                    "checked": (response[i].status==1 ? "checked" : null)
                });

                var todoSpan = $("<span>",{
                    text: response[i]['title'],
                    class: "todoItem"
                });
                var priority = $("<span>",{
                    text: response[i].priority,
                    class: "priority"
                });
                var todoDetails = $("<div>",{
                    class: "todoDetails"
                });
                var pDetails = $("<p>", {
                    text: response[i].details
                });
                var pTimeStamp = $("<p>",{
                    text: response[i].due_date
                });
                todoDetails.append(pDetails, pTimeStamp);
                todoDiv.append(completedCheck, todoSpan, priority);
                li.append(todoDiv, deleteBtn, editBtn, todoDetails);
                todoList.append(li);
            }

            var clearBtn = $("<button>",{
                class: "clearTodo btn",
                text: "Clear all completed items"
            });

            $("body").append(todoList, clearBtn);

            $(".todoDetails").hide();

            $(".statusCheck").click(function(){
                var todoId = $(this).parents("li").attr("todoId");   //onclick, take the parent div's custom attribute value
                var completeStatus;
                if($(this).is(':checked')){
                    completeStatus = 1
                } else {
                    completeStatus = 0;
                }
                setToCompleted(todoId, completeStatus);
            });

            $(".deleteTodo").click(function(){
                var todoId = $(this).parent().attr("todoId");   //onclick, take the parent div's custom attribute value
                var todoDeleted;
                if ($(this).parent().attr("deleteStatus") == 0){ //toggles deleted status
                    todoDeleted = 1;
                } else {
                    todoDeleted = 0;
                }
                setToDelete(todoId, todoDeleted);
            });

            $(".clearTodo").click(function(){
                deleteItem();
            });

            $(".todoItem").click(function(){
                $(this).parents("li").find(".todoDetails").slideToggle();
            });
            $('.editTodo').on('click', function(){
                console.log('Edit clicked');
                var itemId = $(this).attr('id');
                $(".todoDetails").slideToggle();
                edit_todo_item(itemId);
            });
        },
        error: function(){
            console.log("No bueno");
        }
    });
}