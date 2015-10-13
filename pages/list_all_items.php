<?php

session_start();

require('../mysql_connect.php');

if(isset($_SESSION[id])){
    $query = "SELECT * FROM `todo_items` WHERE `user_id` = '$_SESSION[id]'";

//    $query = "SELECT id FROM `todo_items` WHERE `user_id` = '$_SESSION[id]'
//              UNION
//              SELECT post_id FROM `assignments` WHERE `assignee` = '$_SESSION[id]'";

    $result = mysqli_query($conn, $query);
}

$todo_output = [];

$_POST[timestamp] = date("m-d-Y h:i A", strtotime($_POST[timestamp]));

if(mysqli_num_rows($result) > 0){
    $i = 0;
    while($row = mysqli_fetch_assoc($result)){
        $todo_output[$i] = $row;
        $todo_output[$i][created] = date("Y-m-d g:i:s a", strtotime($todo_output[$i]['created']));
        $todo_output[$i][updated] = date("Y-m-d g:i:s a", strtotime($todo_output[$i]['updated']));
        $todo_output[$i][due_date] = date("m-d-Y g:i:s a", strtotime($todo_output[$i]['due_date']));
        $todo_output[$i][completed_datetime] = date("Y-m-d g:i:s a", strtotime($todo_output[$i]['completed_datetime']));
        $i++;
    }
} else {
    $todo_output['error'] = 'No todo items';
}

$output_string = json_encode($todo_output);

print($output_string);

?>