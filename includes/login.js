$(document).ready(function () {
    console.log("Login Ready");
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
    $.ajax({
        url: 'http://s-apis.learningfuze.com/todo/login',
        data: {username: user_name, password: pass_word},
        method: 'POST',
        dataType: "json",
        cache: false,
        success: function (response) {
            console.log("Login response: ", response);
            sessionsCall(response, url_page, url_target);
            loadTodoList(response.id);
            //bump update_dom to here once we don't need sessionsCall
        },
        error: function (response) {
            console.log(response);
        }
    });
}

function sessionsCall(loginData, page, target) {
    $.ajax({
        url: 'includes/login.php',
        data: loginData,
        method: 'POST',
        dataType: "text",
        cache: false,
        success: function (response) {
            console.log("Login response: ", response);
            update_dom(page, target);
        },
        error: function (response) {
            console.log(response);
        }
    });
}

function update_dom(url, target) {
    $.ajax({
        url: url,
        method: 'GET',
        dataType: 'html',
        success: function (response) {
            console.log(response);
            $(target).html(response);

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