<?php
session_start();

?>


<header class="col-xs-12 container log row">
    <?php
    if (empty($_SESSION['id'])) {
    ?>
    <style>
        body {
            background: #000 url("img/trevorhandwide.jpg") no-repeat 50% 50%;
            background-size: cover;
        }
    </style>
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
    <style>
        body {
            background: #000 url("img/tdlbg.jpg") no-repeat 50% 50%;
            background-size: cover;
        }
    </style>
    <header class="col-xs-12 logged_in">
        <div class="col-sm-12 firstHeader">
            <div class="col-xs-12 col-sm-3 header_title">
                <img src="img/taskitalt.png" id="taskithead" alt="Task It">
            </div>
            <div class="col-xs-3 col-sm-1 col-sm-offset-8 logout" data_url="template/header.php" data_target="#top_nav">
                <div class="col-xs-12 logout_text">
                    <h2>Logout</h2>
                </div>
            </div>
        </div>
        <div class="col-xs-3 col-sm-3 friends">
            <div class="col-xs-12 friends_text">
                <h2>FRIENDS</h2>
            </div>
            <div class="col-xs-12 col-sm-12 friendsListContainer">
                <input class="addFriend" type="text" placeholder="Enter friend's email">
                <button class="addFriendBtn" type="button">Add friend</button>
                <ul class="col-xs-12 friendsList">
                </ul>
            </div>
        </div>
        <div class="col-xs-3 col-sm-6 view">
            <div class="col-xs-12 view_text">
                <h2>TASK LIST</h2>
            </div>
            <div class="col-xs-12 view_titles">
                <p class="col-sm-1">Delete</p>
                <p class="col-sm-1">Edit</p>
                <p class="col-sm-2">Complete</p>
                <p class="col-sm-4">Task</p>
                <p class="col-sm-2">Priority</p>
            </div>
        </div>
        <div class="col-xs-3 col-sm-3 create">
            <div class="col-xs-12 create_text">
                <h2>CREATE</h2>
            </div>
            <div class="col-xs-12 create_title">
                <p>Create New Task</p>
            </div>
        </div>
    </header>
    <?php
}
?>



