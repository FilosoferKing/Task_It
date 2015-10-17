$('.newUser').on('click', function(){
    buildUserSignUpModal();
});

/***************************************
 * NAME: buildUserSignUpModal
 * PARAMS: none
 * GLOBAL VARIABLES: none
 * LOCAL VARIABLES:
 * PURPOSE:  builds and appends sign up modal
 * FUNCTIONS USED: createUser()
 */
function buildUserSignUpModal() {
    var modalContainer = $('<div>', {
        class: "col-xs-12 signUpModalContainer"
    });
    var modal = $('<div>', {
        class: "col-xs-12 signUpModal"
    });
    var title = $('<div>', {
        class: "col-xs-12 signUpTitle"
    });
    var titleText = $('<h1>', {
        text: "New User"
    });
    var inputDiv = $('<div>', {
        class: "col-xs-12 col-sm-4 input"
    });
    var usernameInput = $('<input>', {
        class: "col-xs-12 newUsername",
        type: "text",
        name: "username",
        placeholder: "Username"
    });
    var emailInput = $('<input>', {
        class: "col-xs-12 newEmail",
        type: "text",
        name: "email",
        placeholder: "Email"
    });
    var passwordInput = $('<input>', {
        class: "col-xs-12 newPassword",
        type: "password",
        name: "password",
        placeholder: "Password"
    });
    var confirmPasswordInput = $('<input>', {
        class: "col-xs-12 confirmPassword",
        type: "password",
        name: "confirmpassword",
        placeholder: "Confirm Password"
    });
    var createButton = $('<button>', {
        class: "col-xs-12 col-sm-4 col-sm-offset-2 createAccount",
        type: "button",
        name: "createaccount",
        text: "Create Account"
    });
    var cancelButton = $('<button>', {
        class: "col-xs-12 col-sm-4 cancelAccount",
        type: "button",
        name: "cancelaccount",
        text: "Cancel"
    });

    title.append(titleText);
    inputDiv.append(usernameInput, emailInput, passwordInput, confirmPasswordInput);
    modal.append(title, inputDiv, createButton, cancelButton);
    modalContainer.append(modal);
    $('body').append(modalContainer);

    $('.createAccount').on('click', function(){
        //console.log("Create account clicked!");
        var newUsername = $('.newUsername').val();
        var newEmail = $('.newEmail').val();
        var newPassword = $('.newPassword').val();
        var confirmPassword = $('.confirmPassword').val();
        if (newPassword == confirmPassword){
            createUser(newUsername, newEmail, newPassword);
        } else {
            alert('Passwords do not match');
            $('.confirmPassword').val('');
        }
    });

    $('.cancelAccount').on('click', function() {
        $('.signUpModalContainer').remove();
    });

}

/***************************************
 * NAME: createUser()
 * PARAMS: newUsername, newEmail, newPassword
 * GLOBAL VARIABLES: none
 * LOCAL VARIABLES: signIn
 * PURPOSE:  creates a user account information for the new user
 * FUNCTIONS USED: none
 */
function createUser(newUsername, newEmail, newPassword){
    $.ajax({
        url: 'includes/new_user.php',
        data: {username: newUsername, email: newEmail, password: newPassword},
        method: 'POST',
        dataType: 'json',
        cache: false,
        success: function(response){
            //console.log("Created User", response);
            if(response == 1){
                $('.signUpModal .input, .signUpModal .createAccount, .signUpModal .cancelAccount').remove();
                $('.signUpModal h1').text('Welcome ' + newUsername + '!');

                var signIn = $('<h3>', {
                    text: 'Click here to login'
                });

                $('.signUpModal').append(signIn);

                $('.signUpModal h3').on('click', function() {
                    $('.signUpModalContainer').remove();
                });
            }
        },
        error: function(response){
            //console.log("Could not connect");
            $('.signUpModal h1').text('User already exists!');
            $('.input').on('click', function(){
                $('.signUpModal h1').text('New User');
            })
        }

    });
}
