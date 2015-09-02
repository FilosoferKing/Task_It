function create_todo_item(item_title, item_due_date, item_details){
    console.log('Item created');
    $.ajax({
        url: 'includes/insert_create.php',
        data: {title: item_title, due_date: item_due_date, details: item_details},
        dataType: 'json',
        method: 'POST',
        cached: false,
        success: function(response){
            console.log("Success: ", response);
        },
        error: function(response){
            console.log("Success: ", response);
        }
    })


}