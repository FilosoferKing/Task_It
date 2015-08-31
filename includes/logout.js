function logout(page, target){
    $.ajax({
        url: './includes/logout.php',
        method: "POST",
        dataType: 'text',
        success: function(response){
            console.log(response);
            update_dom(page, target);
        },
        error: function(){
            console.log("NO BUENO");
            $(".messageArea").html(response.message);
        }
    });
}