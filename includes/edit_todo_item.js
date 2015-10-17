/***************************************
 * NAME: edit_todo_item
 * PARAMS: itemId
 * GLOBAL VARIABLES: none
 * LOCAL VARIABLES:
 * PURPOSE:  replaces info fields with input fields to edit the task and update the new information
 * FUNCTIONS USED: update_data()
 */
function edit_todo_item(itemId) {
    var title_text = $("#" + itemId).parents("li").find(".todoItem").text();
    var due_date_text = $("#" + itemId + ' ~ .todoDetails p:nth-child(2)').text();
    var priority_text = $("#" + itemId).parents("li").find('.priority').text();
    var details_text = $("#" + itemId + ' ~ .todoDetails p:nth-child(1)').text();

    var title_input = $('<input>', {
        id: 'item_title',
        class: 'col-xs-12 item_title',
        type: 'text',
        name: 'title',
        value: title_text
    });
    var due_date_input = $('<input>', {
        id: 'item_due_date',
        class: 'col-xs-12 item_due_date',
        type: 'text',
        name: 'due_date',
        value: due_date_text
    });
    var priority_input = $('<input>', {
        id: 'item_priority',
        class: 'col-xs-12 item_priority',
        type: 'text',
        name: 'priority',
        value: priority_text
    });
    var details_input = $('<input>', {
        id: 'item_details',
        class: 'col-xs-12 item_details',
        type: 'text',
        name: 'details',
        value: details_text
    });
    $("#" + itemId).parents("li").find(".todoItem").html(title_input);
    $("#" + itemId).parents("li").find('.priority').html(due_date_input);
    $("#" + itemId + ' ~ .todoDetails p:nth-child(1)').html(priority_input);
    $("#" + itemId + ' ~ .todoDetails p:nth-child(2)').html(details_input);

    var update_button = $('<button>', {
        class: 'col-sm-1 updateTodo btn',
        id: itemId,
        text: 'Update'
    });

    update_button.insertAfter($("#" + itemId).parents("li").find(".deleteTodo"));

    update_button.on('click', function(){
        console.log('Update clicked');
        var itemId = $(this).attr('id');
        var title_text = $("#" + itemId).parents("li").find(".item_title").val();
        var due_date_text = $("#" + itemId).parents("li").find('.item_due_date').val();
        var priority_text = $('.item_priority').val();
        var details_text = $('.item_details').val();
        console.log("update data priority:", priority_text, details_text);
        update_data(itemId, title_text, due_date_text, priority_text, details_text);

    });

    $("#" + itemId).parents("li").find('.editTodo').remove();

}


/***************************************
 * NAME: update_data
 * PARAMS: itemId, title_text, due_date_text, priority_text, details_text
 * GLOBAL VARIABLES: none
 * LOCAL VARIABLES: none
 * PURPOSE:  sends the new information to be updated for the task
 * FUNCTIONS USED: edit_todo_item(), getTaskList()
 */
function update_data(itemId, title_text, due_date_text, priority_text, details_text){

    //console.log("Title: ",title_text);
    //console.log("DueDate: ", due_date_text);
    //console.log("Prioirity: ", priority_text);
    //console.log("Details: ", details_text);
    //console.log("ItemId: ", itemId);
    $.ajax({
        url: 'includes/update_todo_item.php',
        method: 'POST',
        data: {title: title_text, due_date: due_date_text, priority: priority_text, details: details_text, id: itemId},
        dataType: 'text',
        cache: false,
        success: function (response) {
            //console.log("Update edit: ", response);

            var edit_button = $('<button>', {
                class: 'col-sm-1 editTodo btn',
                id: itemId,
                text: 'Edit'
            });

            edit_button.insertAfter($("#" + itemId).parents("li").find(".deleteTodo"));

            edit_button.on('click', function(){
                //console.log('Edit clicked');
                var itemId = $(this).attr('id');
                $("#" + itemId + " ~ .todoDetails").slideToggle();
                edit_todo_item(itemId);
            });

            $("#" + itemId).parents("li").find('.updateTodo').remove();

            getTaskList();

        },
        error: function (response) {

        }
    });
}
