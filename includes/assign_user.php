<?php
session_start();

require('../mysql_connect.php');

$assignee_id = $_POST['assignee_id'];
$post_id = $_POST['post_id'];
$assigner_id = $_SESSION['id'];

print($assignee_id.$post_id.$assigner_id);


//$query = "INSERT INTO `assignments`
//SET assigner = '".$assigner_id."', post_id = '".$post_id."', assignee = '".$assignee_id."'";
//
//print($query);

//$result = mysqli_connect($conn, $query);
//
//print_r(mysqli_affected_rows($conn));

?>