<?php
session_start();

require("../mysql_connect.php");

$title = $_POST['title'];
$due_date = $_POST['due_date'];
$details = $_POST['details'];

$query = "INSERT INTO todo_items (title, dueDate, details)
VALUES ('".$title."', '".$due_date."', '".$detials."')";

$result = mysqli_query($conn, $query);

mysqli_affected_rows($conn);

?>