$(document).ready(function(){
console.log("Login Ready");
    $('.login_button').on('click', function(){
        var user_name = $('.username').val();
        var pass_word = $('.password').val();
        var url_page = $(this).attr('data_url');
        var url_target = $(this).attr('data_target');

        $.ajax({
            url: 'includes/login.php',
            data: {username: user_name, password: pass_word},
            method: 'POST',
            dataType: "text",
            cache: false,
            success: function(response) {
                console.log("Login response: ", response);
                update_dom(url_page, url_target);
            },
            error: function(response){
                console.log(response);
            }
        });
    });

});

function update_dom(url, target){
    $.ajax({
        url: url,
        method: 'GET',
        dataType: 'html',
        success: function(response){
            $(target).html(response);

        },
        error: function(response){
            console.log("Error: ", response);
        }

    });
}