var assignVisible = false;

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
                class: "col-xs-12 col-sm-12 todoList"
            });
            console.log(response.length);
            for(i = 0; i < response.length; i++){
                var li = $("<li>", {
                    class: "col-xs-12 todoContainer deleted" + response[i].deleted + " completed" + response[i].status,
                    "deleteStatus": response[i].deleted,
                    "todoId": response[i].id        //store todo item's id
                });
                var deleteBtn = $("<button>",{
                    class: "col-sm-1 deleteTodo btn",
                    text: "Delete"
                });
                var editBtn = $("<button>",{
                    class: "col-sm-1 editTodo btn",
                    id: response[i]['id'],
                    text: "Edit"
                });
                var moreBtn = $("<button>",{
                    class: "col-sm-1 moreTodo btn",
                    id: response[i]['id'],
                    text: "More"
                });
                var assignBtn = $("<button>",{
                    class: "assignTodo btn",
                    id: "assign" + response[i]['id'],
                    "btn_assign_num": response[i]['id'],
                    text: 'Assign task'
                });
                var assign_container = $("<div>", {
                    class: " col-xs-12 assign_container",
                    id: "assign_container" + response[i]['id']
                })
                var assignUl = $("<ul>", {
                    class: "friendsList",
                    "todo_num": response[i]['id']
                });
                $(".friendsList li").each(function(){
                    assignUl.append(this);
                });
                var todoDiv = $("<div>");
                var completedCheck = $("<input>",{
                    type: "checkbox",
                    class: " col-sm-1 statusCheck",
                    "checked": (response[i].status==1 ? "checked" : null)
                });

                var todoSpan = $("<span>",{
                    text: response[i]['title'],
                    class: "col-xs-5 todoItem"
                });
                var priority = $("<span>",{
                    text: response[i].priority,
                    class: "col-xs-2 priority"
                });
                var todoDetails = $("<div>",{
                    class: "col-sm-12 todoDetails"
                });
                var pDetails = $("<p>", {
                    text: response[i].details
                });
                var pTimeStamp = $("<p>",{
                    text: response[i].due_date
                });
                todoDetails.append(pDetails, pTimeStamp, assignBtn);
                todoDiv.append(completedCheck, todoSpan, priority, moreBtn);
                assign_container.append(assignUl);
                li.append(deleteBtn, editBtn, todoDiv, todoDetails, assign_container);
                todoList.append(li);
                $('.view').append(todoList);
            }


            var clearBtn = $("<button>",{
                class: "clearTodo btn",
                text: "Clear all completed items"
            });

            $(".view").append(clearBtn);
            $(".assign_container").hide();

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

            $('.editTodo').on('click', function(){
                console.log('Edit clicked');
                var itemId = $(this).attr('id');
                $("#" + itemId + " ~ .todoDetails").slideToggle();
                edit_todo_item(itemId);
            });

            $(".clearTodo").click(function(){
                deleteItem();
            });

            $(".moreTodo").click(function(){
                $(this).parents("li").find(".todoDetails").slideToggle();
                if($(this).text() == "More") {
                    $(this).text('Less');
                } else {
                    $(this).text('More');
                    if(assignVisible == true) {
                        var btn_assign_num = $(this).parents("li").find(".assignTodo").attr("btn_assign_num");
                        $("#assign_container" + btn_assign_num).slideToggle();
                        assignVisible = false;
                    }
                }
            });

            $(".assignTodo").on('click', function(){
                if (assignVisible === false) {
                    assignVisible = true;
                    console.log("Assign clicked");
                    var btn_assign_num = $(this).attr("btn_assign_num");
                    $("#assign_container" + btn_assign_num).slideToggle();
                } else if (assignVisible == true) {
                    var btn_assign_num = $(this).attr("btn_assign_num");
                    $("#assign_container" + btn_assign_num).slideToggle();
                    assignVisible = false;
                }

            });

            $(".friendsList").on("click", ".friend", function(){
                console.log("Friend assigned");
                var todo_num = $(this).parent().attr("todo_num");
                var assignee_num = $(this).attr("friend_num");
                console.log("todo id: ", todo_num);
                console.log("assignee id: ", assignee_num);
                assign_user(todo_num, assignee_num);
            });


        },
        error: function(){
            console.log("No bueno");
        }
    });
}