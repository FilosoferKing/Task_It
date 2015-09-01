function view_list(){
    $.ajax({
        url: 'pages/create_todo_item.php',
        dataType: 'html',
        method: 'GET',
        success: function(response){
            console.log("Success: ", response);
            $('.display').html(response);
        },
        error: function(response){
            console.log("Success: ", response);
        }
    })


}