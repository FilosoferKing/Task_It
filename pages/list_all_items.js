function loadTodoList(){
    $.ajax({
        url: 'pages/list_all_items.php',
        method: "GET",
        dataType: 'json',
        cache: 'false',
        success: function(response){
            console.log(response);
            $(".todoList").remove();
            var todoList = $("<div>", {
                class: "todoList"
            });
            console.log(response.length);
            for(i = 0; i < response.length; i++){
                var li = $("<li>");
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
                todoDiv.append(todoSpan, priority);
                li.append(todoDiv, deleteBtn, editBtn, todoDetails);
                todoList.append(li);
            }
            $("body").append(todoList);
            $(".todoDetails").hide();
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