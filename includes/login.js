$(document).ready(function () {
    console.log("Login Ready");

    //$('.create').on('click', function(){
    //    console.log("Worked");
          view_list();
    //});

    loadTodoList();
    view_friends();
    $(".friends_text").on('click', function(){
        $(".friendsListContainer").slideToggle();
    });

    $('.login_button').on('click', function () {
        var user_name = $('.username').val();
        var pass_word = $('.password').val();
        var url_page = $(this).attr('data_url');
        var url_target = $(this).attr('data_target');
        login(user_name, pass_word, url_page, url_target);
    });

    $(".logout").click(function(){
        var url_page = $(this).attr('data_url');
        var url_target = $(this).attr('data_target');
        logout(url_page, url_target);
    });

});

function login(user_name, pass_word, url_page, url_target){
    console.log(user_name, pass_word);
    $.ajax({
        url: 'includes/login.php',
        data: {username: user_name, password: pass_word},
        method: 'POST',
        dataType: "json",
        cache: false,
        success: function (response) {
            console.log("Login response: ", response);
            console.log(response.friends);
            update_dom(url_page, url_target, response.friends);
            loadTodoList(response.id);
        },
        error: function (response) {
            console.log(response);
        }
    });
}

function update_dom(url, target, friends) {
    console.log(url, target);
    $.ajax({
        url: url,
        method: 'GET',
        dataType: 'html',
        success: function (response) {
            console.log("Append response: ", target, response);
            $(target).html(response);

            view_list();

            view_friends();
            $(".friends_text").on('click', function(){
                $(".friendsListContainer").slideToggle();
            });

            $(".logout").click(function(){
                var url_page = $(this).attr('data_url');
                var url_target = $(this).attr('data_target');
                logout(url_page, url_target);
            });

            $('.login_button').on('click', function () {
                var user_name = $('.username').val();
                var pass_word = $('.password').val();
                var url_page = $(this).attr('data_url');
                var url_target = $(this).attr('data_target');
                login(user_name, pass_word, url_page, url_target);
            });

        },
        error: function (response) {
            console.log("Error: ", response);
        }
    });
}