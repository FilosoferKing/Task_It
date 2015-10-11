<?php
session_start();

require("../mysql_connect.php");

$title = $_POST['title'];
$due_date = date('Y-m-d', strtotime(str_replace('-', '/', $_POST['due_date'])));
$priority = $_POST['priority'];
$details = $_POST['details'];
$user_id = $_SESSION['id'];

$query = "INSERT INTO `todo_items` (created, title, due_date, details, priority, user_id)
VALUES (NOW(), '".$title."', '".$due_date."', '".$details."', '".$priority."','".$user_id."')";

//$_SESSION['query'] = $query;
//print_r($query);

$result = mysqli_query($conn, $query);

print_r(mysqli_affected_rows($conn));

print($due_date = date('Y-m-d', strtotime(str_replace('-', '/', $due_date))));

?>