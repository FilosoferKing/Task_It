<?php

session_start();

require('../mysql_connect.php');


if(isset($_POST[id])){
    $id = $_POST[id];
    $query = "UPDATE `todo_items` SET `deleted` = 1 WHERE `id` = '$id'";
} else {
    $query = "DELETE FROM `todo_items` WHERE `deleted` = 1";
}

$result = mysqli_query($conn, $query);

$user_output = mysqli_affected_rows($conn);

print($user_output);

?>