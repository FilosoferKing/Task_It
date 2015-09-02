function view_list(){
    $.ajax({
        url: 'pages/create_todo_item.php',
        dataType: 'html',
        method: 'GET',
        success: function(response){
            console.log("Success view list: ", response);
            $('.display').html(response);
            $('.create_button').on('click', function(){
                var title = $('.item_title').val();
                var due_date = $('.item_due_date').val();
                var details = $('.item_details').val();
                create_todo_item(title, due_date, details);
            })
        },
        error: function(response){
            console.log("Success: ", response);
        }
    })


}