$(document).ready(function () {
    console.log("Login Ready");

    loadTodoList();

    update_dom();

    //initiates the login function//
    $('.login_button').on('click', function () {
        var user_name = $('.username').val();
        var pass_word = $('.password').val();
        var url_page = $(this).attr('data_url');
        var url_target = $(this).attr('data_target');
        login(user_name, pass_word, url_page, url_target);
    });

    //initiates the logout function//
    $(".logout").click(function(){
        var url_page = $(this).attr('data_url');
        var url_target = $(this).attr('data_target');
        logout(url_page, url_target);
    });


});

/***************************************
 * NAME: login
 * PARAMS: user_name, pass_word, url_page, url_target
 * GLOBAL VARIABLES: none
 * LOCAL VARIABLES: none
 * PURPOSE:  checks user authenticity and sends back user information also displaying the landing page
 * FUNCTIONS USED: update_dom(), getTaskList()
 */
function login(user_name, pass_word, url_page, url_target){
    $.ajax({
        url: 'includes/login.php',
        data: {username: user_name, password: pass_word},
        method: 'POST',
        dataType: "json",
        cache: false,
        success: function (response) {
            //console.log("Login response: ", response);
            //console.log(response.friends);
            update_dom(url_page, url_target, response.friends);
            getTaskList();

        },
        error: function (response) {
            //console.log(response);
        }
    });
}

/***************************************
 * NAME: update_dom
 * PARAMS: url, target, friends
 * GLOBAL VARIABLES: none
 * LOCAL VARIABLES: none
 * PURPOSE:  calls functions to list out friends and to load task creation form as well as load click handlers
 * if login is successful, otherwise it will keep the login page loaded
 * FUNCTIONS USED: view_list(), view_friends(), add_friend(), login(), logout(), buildUserSignUpoModal()
 */
function update_dom(url, target, friends) {
    console.log(url, target);
    $.ajax({
        url: url,
        method: 'GET',
        dataType: 'html',
        success: function (response) {
            //console.log("Append response: ", target, response);
            $(target).html(response);


            view_list();//this will load the item creation form

            view_friends();

            $(".addFriendBtn").on('click', function(){
                add_friend($(".addFriend").val());
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

            $('.newUser').on('click', function(){
                buildUserSignUpModal();
            });

        },
        error: function (response) {
            //console.log("Error: ", response);
        }
    });
}