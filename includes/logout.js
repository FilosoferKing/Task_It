/***************************************
 * NAME: logout
 * PARAMS: page, target
 * GLOBAL VARIABLES: none
 * LOCAL VARIABLES: none
 * PURPOSE:  logs out user and replaces page with login page
 * FUNCTIONS USED: update_dom()
 */
function logout(page, target){
    $.ajax({
        url: './includes/logout.php',
        method: "POST",
        dataType: 'text',
        success: function(response){
            //console.log(response);
            update_dom(page, target);
            $(".todoList").remove();
            $(".clearTodo").remove();
        },
        error: function(){
            //console.log("NO BUENO");
            $(".messageArea").html(response.message);
        }
    });
}