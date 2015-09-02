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

    <script src="includes/login.js"></script>

    <script src="includes/logout.js"></script>

    <script src="pages/list_all_items.js"></script>

    <style>
        .log {
            padding: 0;
            margin: 0;
        }

        .log h1 {
            text-align: center;
        }

        .log .input {
            margin: 0 auto;
        }

        .log {
            padding: 0;
        }

        .header_title {
            text-align: center;
        }

        .view, .create, .logout {
            padding: 0;
            text-align: center;
        }

        .view_text, .create_text, .logout_text {
            padding: 0;
        }

        .list_item_container {
            padding: 0;
        }

        .item {
            padding: 0;
        }

        .dropdown {
            position: relative;
            padding: 0;
        }

        .dropdown ul {
            width: 100%;
            padding: 0;
        }

        .dropdown button {
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            width: 100%;
        }

        .create_item {
            padding: 0;
        }

        .input_container {
            padding: 0;
        }

        .title, .due_date, .notes {

        }

        .create_item .input_container > .title {
            padding: auto 15px:
        }

        .create_button {

        }

    </style>

    <script>

        $(document).ready(function(){

            function create_todo_item(){
                var item_title = $('#item_title').val();
                var item_due_date = $('#item_due_date').val();
                var item_details = $('#item_details').val();

                $('.list_item_container:nth-child(4) .item:nth-child(1) p:nth-child(1)').text(item_title);
                $('.list_item_container:nth-child(4) li:nth-child(1)').text(item_details);
                $('.list_item_container:nth-child(4) .date p:nth-child(1)').text(item_due_date);
            }

            $('.create_button').on('click', function(){
                create_todo_item();
            });





        });

    </script>
</head>
<body>
<header id="top_nav">
    <?php
    include($page_list['header']);
    ?>
</header>
<?php
//include($page_list['create_todo_item']);
//include($page_list['list_all_items']);
//include($page_list['display_item']);
//include($page_list['footer']);
?>

</body>
</html>