<?php
session_start();

$page_list = [
    'header' => 'template/header.php',
    'footer' => 'template/footer.php',
    'display_item' => 'pages/display_item.php',
    'list_all_items' => 'pages/list_all_items.php',
    'create_todo_item' => 'pages/create_todo_item.php',
    'login_template' => 'pages/login_template.php'
]
?>

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>To Do List</title>

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

    <style>


    </style>

    <script>

//        $(document).ready(function () {
//
//            function create_todo_item(){
//                var item_title = $('#item_title').val();
//                var item_due_date = $('#item_due_date').val();
//                var item_details = $('#item_details').val();
//
//                $('.list_item_container:nth-child(4) .item:nth-child(1) p:nth-child(1)').text(item_title);
//                $('.list_item_container:nth-child(4) li:nth-child(1)').text(item_details);
//                $('.list_item_container:nth-child(4) .date p:nth-child(1)').text(item_due_date);
//            }
//
//            $('.create_button').on('click', function () {
//                create_todo_item();
//            });
//
//
//        });

    </script>
</head>
<body>
<header id="top_nav">
    <?php
    include($page_list['header']);
    ?>
</header>
<div class="display">
    <?php
    //include($page_list['create_todo_item']);
    //include($page_list['list_all_items']);
    //include($page_list['display_item']);
    //include($page_list['footer']);
    ?>

    <users>

    </users>
</div>

</body>
</html>