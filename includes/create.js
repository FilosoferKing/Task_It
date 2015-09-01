function create_todo_item(){
    $.ajax({
        url: 'includes/insert_create.php',
        data: blah,
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