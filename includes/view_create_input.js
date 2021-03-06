/***************************************
 * NAME: view_list
 * PARAMS: none
 * GLOBAL VARIABLES: none
 * LOCAL VARIABLES:
 * PURPOSE:  retrieves html data to load the task creation form
 * FUNCTIONS USED: none
 */
function view_list(){
    $.ajax({
        url: 'pages/create_todo_item.php',
        dataType: 'html',
        method: 'GET',
        success: function(response){
            console.log("Success view list: ", response);
            $('.create').append(response);

            $('.create_button').on('click', function(){
                console.log("create button clicked");
                var title = $('.item_title').val();
                var due_date = $('.item_due_date').val();
                var details = $('.item_details').val();
                var priority = $('.item_priority').val();
                create_todo_item(title, due_date, priority, details);
            });

            $('.cancel_button').on('click', function() {
                console.log("create button clicked");
                $('.item_title').val('');
                $('.item_due_date').val('');
                $('.item_details').val('');
                $('.item_priority').val('');
            });
        },
        error: function(response){
            console.log("Error view list: ", response);
        }
    })


}