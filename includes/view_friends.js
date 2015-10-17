/***************************************
 * NAME: view_friends
 * PARAMS: none
 * GLOBAL VARIABLES: none
 * LOCAL VARIABLES: none
 * PURPOSE: gets all friend information then lists friends name in friends section
 * FUNCTIONS USED: none
 */
function view_friends(){
    $.ajax({
        url:'includes/edit_friends.php',
        dataType: 'json',
        method: "GET",
        success: function(response) {
            //console.log(response);
            $(".friendsList").empty();
            for (var i = 0; i < response.length; i++) {
                var friendLi = $("<li>", {
                    class: "friend",
                    id: "friend" + i,
                    text: response[i].username,
                    "friend_num": response[i].id
                });
                var friendEmail = $("<p>", {
                    text: response[i].email
                })
                //friendLi.append(friendEmail);
                $(".friendsList").append(friendLi);
            }
            $(".friendsListContainer").show();

        },
        error: function(){
            //console.log("No Work");
        }
    });
}

/***************************************
 * NAME: add_friend
 * PARAMS: friendEmail
 * GLOBAL VARIABLES: none
 * LOCAL VARIABLES: none
 * PURPOSE:  assigns friend to user based on their email
 * FUNCTIONS USED: view_friends()
 */
function add_friend(friendEmail){
    $.ajax({
        url: 'includes/add_friend.php',
        dataType: 'text',
        method: "POST",
        data: {friendEmail: friendEmail},
        success: function(response){
            //console.log(response);
            view_friends();

            $(".addFriend").val('');

        },
        error: function(){
            //console.log("nope");
        }
    })
}