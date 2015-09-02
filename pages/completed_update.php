<?php

session_start();

require('../mysql_connect.php');


$id = $_POST[id];
$status = $_POST[status];
$query = "UPDATE `todo_items` SET `status` = '$status' WHERE `id` = '$id'";

$result = mysqli_query($conn, $query);

$user_output = mysqli_affected_rows($conn);

print($user_output);

?>