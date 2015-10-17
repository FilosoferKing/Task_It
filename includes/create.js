/***************************************
 * NAME: create_todo_item
 * PARAMS: item_title, item_due_date, item_priority, item_details
 * GLOBAL VARIABLES: none
 * LOCAL VARIABLES: none
 * PURPOSE:  creates a task item to be loaded in the to do list
 * FUNCTIONS USED: getTaskList()
 */
function create_todo_item(item_title, item_due_date, item_priority, item_details){
    $.ajax({
        url: 'includes/insert_create.php',
        data: {title: item_title, due_date: item_due_date, details: item_details, priority: item_priority},
        dataType: 'text',
        method: 'POST',
        cached: false,
        success: function(response){
            console.log("Success create: ", response);
            $('.create input, .create textarea').val('');
            getTaskList();
        },
        error: function(response){
            console.log("Error create: ", response);
        }
    })


}