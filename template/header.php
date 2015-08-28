<?php
session_start();

?>


<header class="col-xs-12 container log row">
    <div class="col-xs-12 col-sm-4 col-sm-push-4 header_title">
        <h1>TO DO LIST</h1>
    </div>
    <?php
    if (empty($_SESSION['user'])) {
    ?>
    <div class="col-xs-12 col-sm-4 col-sm-pull-4 input row">
        <div class="col-xs-12 col-sm-4 input">
            <input class="col-xs-12 username" type="text" name="username" placeholder="Username">
        </div>
        <div class="col-xs-12 col-sm-4 input">
            <input class="col-xs-12 password" type="text" name="password" placeholder="Password">
        </div>
        <button class="col-xs-12 col-sm-4 login_button" data_url="template/header.php" data_target="#top_nav" type="button" name="login">
            LOGIN
        </button>
    </div>
</header>
<?php
} else {
    ?>
    <header class="col-xs-12 logged_in">
        <div class="col-xs-4 col-sm-4 view">
            <div class="col-xs-12 view_text">
                <h2>View</h2>
            </div>
        </div>
        <div class="col-xs-4 col-sm-4 create">
            <div class="col-xs-12 create_text">
                <h2>Create</h2>
            </div>
        </div>
        <div class="col-xs-4 col-sm-4 logout">
            <div class="col-xs-12 logout_text">
                <h2>Logout</h2>
            </div>
        </div>
    </header>
    <?php
    session_destroy();
}
?>



