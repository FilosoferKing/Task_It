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
        url: 'includes/login.php',
        data: {username: user_name, password: pass_word},
        method: 'POST',
        dataType: "json",
        cache: false,
        success: function (response) {
            console.log("Login response: ", response);
            update_dom(url_page, url_target);
            //sessionsCall(response, url_page, url_target);//function to get and create session info from LearningFuze back-end

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
            console.log("Session response: ", response);
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
            console.log("Append response: ", target, response);
            $(target).html(response);

            $('.create').on('click', function(){
                view_list();
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