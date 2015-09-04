function assign_user(id, assignee){
    console.log(id, assignee);
    $.ajax({
        url: 'includes/assign_user.php',
        data: {post_id: id, assignee_id: assignee},
        method: 'POST',
        dataType: 'text',
        success: function(response){
            console.log("Assigned: ", response);
        },
        error: function(response){
            console.log("Assigned failed: ", response);
        }

    });
}