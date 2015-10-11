<?php
session_start();

require('../mysql_connect.php');

$title = $_POST['title'];
$due_date = $_POST['due_date'];
$priority = $_POST['priority'];
$details = $_POST['details'];
$id = $_POST['id'];
$userId = $_SESSION['id'];

$query = "UPDATE `todo_items`
SET updated = NOW(), title = '".$title."', due_date = '".$due_date."', priority = '".$priority."', details = '".$details."'
WHERE user_id = '".$userId."' AND id = '".$id."'";

$result = mysqli_query($conn, $query);

print($query);

print_r(mysqli_affected_rows($conn));

?>