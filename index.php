<?php
session_start();
?>

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Task It!</title>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>

    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">

    <!-- Optional theme -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap-theme.min.css">

    <!-- Latest compiled and minified JavaScript -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>

    <!--Javascript Files-->

    <script src="includes/login.js"></script>

    <script src="includes/logout.js"></script>

    <script src="includes/view_create_input.js"></script>

    <script src="includes/create.js"></script>

    <script src="pages/list_all_items.js"></script>

    <script src="pages/delete_item.js"></script>

    <script src="includes/edit_todo_item.js"></script>

    <script src="pages/completed_updated.js"></script>

    <script src="includes/view_friends.js"></script>

    <script src="includes/assign_user.js"></script>

    <link rel="stylesheet" type="text/css" href="login.css">

    <link rel="stylesheet" type="text/css" href="style.css">

    <link rel="stylesheet" type="text/css" href="loginquery.css">

</head>
<body>

<header id="top_nav">
    <?php
    include('template/header.php');
    ?>
</header>

</body>
</html>