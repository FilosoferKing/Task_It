<?php
session_start();

?>


<header class="col-xs-12 container log row">
    <?php
    if (empty($_SESSION['id'])) {
    ?>
    <div class="col-xs-12 col-sm-4 col-sm-push-4 header_title">
        <img src="img/taskitalt.png" id="taskit" alt="Task It">
    </div>
    <div class="col-xs-10 col-xs-offset-1 col-sm-4 col-sm-pull-1 input_div row">
        <div class="col-xs-12 col-sm-4 input">
            <input class="col-xs-12 username" type="text" name="username" placeholder="Username">
        </div>
        <div class="col-xs-12 col-sm-4 input">
            <input class="col-xs-12 password" type="text" name="password" placeholder="Password">
        </div>
        <button class="col-xs-12 col-sm-4 login_button" data_url="template/header.php" data_target="#top_nav"
                type="button" name="login">
            LOGIN
        </button>
    </div>
</header>
<?php
} else {
    ?>
    <header class="col-xs-12 logged_in">
        <div class="col-sm-12 firstHeader">
            <div class="col-xs-12 col-sm-3 header_title">
                <img src="img/taskitrev.png" id="taskithead" alt="Task It">
            </div>
            <div class="col-xs-3 col-sm-3 col-sm-offset-6 logout" data_url="template/header.php" data_target="#top_nav">
                <div class="col-xs-12 logout_text">
                    <h2>Logout</h2>
                </div>
            </div>
        </div>
        <div class="col-xs-3 col-sm-3 friends">
            <div class="col-xs-12 friends_text">
                <h2>Friends</h2>
            </div>
            <div class="col-xs-12 col-sm-12 friendsListContainer">
                <input class="addFriend" type="text" placeholder="Enter friend's email">
                <button class="addFriendBtn" type="button">Add friend</button>
                <ul class="friendsList">
                </ul>
            </div>
        </div>
        <div class="col-xs-3 col-sm-6 view">
            <div class="col-xs-12 view_text">
                <h2>Task List</h2>
            </div>
            <div class="col-xs-12 view_titles">
                <h4 class="col-sm-1">Delete</h4>
                <h4 class="col-sm-1">Edit</h4>
                <h4 class="col-sm-2">Complete</h4>
                <h4 class="col-sm-4">Task</h4>
                <h4 class="col-sm-2">Priority</h4>
            </div>
        </div>
        <div class="col-xs-3 col-sm-3 create">
            <div class="col-xs-12 create_text">
                <h2>Create</h2>
            </div>
            <div class="col-xs-12 create_title">
                <h4>Create New Task</h4>
            </div>
        </div>
    </header>
    <?php
}
?>



