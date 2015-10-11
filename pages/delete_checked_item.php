<?php

session_start();

require('../mysql_connect.php');


if(isset($_POST[id])){
    $id = $_POST[id];
    $deleted = $_POST[deleted];
    $query = "UPDATE `todo_items` SET `deleted` = '$deleted' WHERE `id` = '$id'";
} else {
    $query = "DELETE FROM `todo_items` WHERE `deleted` = 1 AND `status` = 1";
}

$result = mysqli_query($conn, $query);

$user_output = mysqli_affected_rows($conn);

print($user_output);

?>