<?php

session_start();

require('../mysql_connect.php');

if(isset($_SESSION[id])){

    $task_ids = implode(',', $_SESSION[task_id]);

    $query = "SELECT * FROM `todo_items` WHERE `id` in ({$task_ids})";

    $result = mysqli_query($conn, $query);
}

$todo_output = [];

$assigned_tasks = [];

$check_id = [];

$_POST[timestamp] = date("m-d-Y h:i A", strtotime($_POST[timestamp]));

if(mysqli_num_rows($result) > 0){
    $i = 0;
    while($row = mysqli_fetch_assoc($result)){
            $check_id = $row[user_id];

            $todo_output[$i] = $row;
            $todo_output[$i][created] = date("Y-m-d g:i:s a", strtotime($todo_output[$i]['created']));
            $todo_output[$i][updated] = date("Y-m-d g:i:s a", strtotime($todo_output[$i]['updated']));
            $todo_output[$i][due_date] = date("m-d-Y g:i:s a", strtotime($todo_output[$i]['due_date']));
            $todo_output[$i][completed_datetime] = date("Y-m-d g:i:s a", strtotime($todo_output[$i]['completed_datetime']));

            if($check_id == $_SESSION[id]) {
                $todo_output[$i][current_user] = $row[user_id];
            } else {
                $todo_output[$i][current_user] = "Not current user";
            }

        $i++;
    }
} else {
    $todo_output['error'] = 'No todo items';
}

$output_string = json_encode($todo_output);

print($output_string);

?>