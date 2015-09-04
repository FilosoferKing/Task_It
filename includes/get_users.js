$(document).ready(function(){
    get_users();
});

function get_users(){
    $.ajax({
        url: 'includes/get_users.php',
        dataType: 'json',
        method: 'GET',
        success: function(response){
            console.log("Get users: ", response);
            for (var i = 0; i < response.user.length; i++) {
                var user = $('<p>', {
                    class: 'user',
                    text: response.user[i],
                    id: response.id[i]
                });

                $('.todoContainer').append(user);
            }

            $('.user').on('click', function(){
                var post_id = $(this).parents('li').find('.editTodo').attr('id');
                var assignee_id = $(this).attr('id');
                console.log("Post_id: ", post_id, "Assignee_id: ", assignee_id);
                assign_user(post_id, assignee_id);
            });
        },
        error: function(response){
            console.log('Error users: ', response);
        }
    })
}