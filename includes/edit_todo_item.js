function edit_todo_item(itemId) {
    var title_text = $('.todoItem').text();
    var due_date_text = $('.todoDetails p:nth-child(2)').text();
    var priority_text = $('.priority').text();
    var details_text = $('.todoDetails p:nth-child(1)').text();

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
    $('.todoItem').html(title_input);
    $('.priority').html(due_date_input);
    $('.todoDetails p:nth-child(1)').html(priority_input);
    $('.todoDetails p:nth-child(2)').html(details_input);

    var update_button = $('<button>', {
        class: 'updateTodo btn',
        id: itemId,
        text: 'Update'
    });

    $('.editTodo').remove();

    $(update_button).insertAfter('.deleteTodo');

    $('.updateTodo').on('click', function(){
        console.log('Update clicked');
        var itemId = $(this).attr('id');
        var title_text = $('.item_title').val();
        var due_date_text = $('.item_due_date').val();
        var priority_text = $('.item_priority').val();
        var details_text = $('.item_details').val();
        update_data(itemId, title_text, due_date_text, priority_text, details_text);
    });



}

function update_data(itemId, title_text, due_date_text, priority_text, details_text){

    console.log("Title: ",title_text);
    console.log("DueDate: ", due_date_text);
    console.log("Prioirity: ", priority_text);
    console.log("Details: ", details_text);
    console.log("ItemId: ", itemId);
    $.ajax({
        url: 'includes/update_todo_item.php',
        method: 'POST',
        data: {title: title_text, due_date: due_date_text, priority: priority_text, details: details_text, id: itemId},
        dataType: 'text',
        cache: false,
        success: function (response) {
            console.log("Update edit: ", response);

            var edit_button = $('<button>', {
                class: 'editTodo btn',
                id: itemId,
                text: 'Edit'
            });

            $('.updateTodo').remove();

            $(edit_button).insertAfter('.deleteTodo');

        },
        error: function (response) {

        }
    });
}
