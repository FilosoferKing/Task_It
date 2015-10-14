$('.newUser').on('click', function(){
    buildUserSignUpModal();
});


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
        class: "col-xs-12 username",
        type: "text",
        name: "username",
        placeholder: "Username"
    });
    var emailInput = $('<input>', {
        class: "col-xs-12 email",
        type: "text",
        name: "email",
        placeholder: "Email"
    });
    var passwordInput = $('<input>', {
        class: "col-xs-12 password",
        type: "text",
        name: "password",
        placeholder: "Password"
    });
    var confirmPasswordInput = $('<input>', {
        class: "col-xs-12 confirmPassword",
        type: "text",
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
        text: "Cancel Account"
    });

    title.append(titleText);
    inputDiv.append(usernameInput, emailInput, passwordInput, confirmPasswordInput);
    modal.append(title, inputDiv, createButton, cancelButton);
    modalContainer.append(modal);
    $('body').append(modalContainer);

}
