function create_todo_item(item_title, item_due_date, item_priority, item_details){
    $.ajax({
        url: 'includes/insert_create.php',
        data: {title: item_title, due_date: item_due_date, details: item_details, priority: item_priority},
        dataType: 'text',
        method: 'POST',
        cached: false,
        success: function(response){
            console.log("Success create: ", response);
        },
        error: function(response){
            console.log("Error create: ", response);
        }
    })


}