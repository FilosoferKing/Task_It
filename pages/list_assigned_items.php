<?php

session_start();

require('../mysql_connect.php');

if(isset($_SESSION[id])){

    $query = "SELECT id FROM `todo_items` WHERE `user_id` = '$_SESSION[id]'
              UNION
              SELECT post_id FROM `assignments` WHERE `assignee` = '$_SESSION[id]'";

    $result = mysqli_query($conn, $query);
}

$assign_output = [];

if(mysqli_num_rows($result) > 0){
    $i = 0;
    while($row = mysqli_fetch_assoc($result)){
        $assign_output[$i]= $row[id];
        $i++;
    }
} else {
    $assign_output['error'] = 'No assigned items';
}

$_SESSION[task_id] = $assign_output;

$assignment_output_string = json_encode($_SESSION[task_id]);

print($assignment_output_string);

?>