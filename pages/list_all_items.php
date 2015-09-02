<?php

session_start();

require('../mysql_connect.php');

if(isset($_SESSION[id])){
    $query = "SELECT * FROM `todo_items` WHERE `user_id` = '$_SESSION[id]'";
    $result = mysqli_query($conn, $query);
}

$todo_output = [];

if(mysqli_num_rows($result) > 0){
    $i = 0;
    while($row = mysqli_fetch_assoc($result)){
        $todo_output[$i] = $row;
        $i++;
    }
} else {
    $todo_output['error'] = 'No todo items';
}

$output_string = json_encode($todo_output);

print($output_string);

?>git statu