<?php

session_start();

require('../mysql_connect.php');

$username = $_POST['username'];
$email = $_POST['email'];
$password = sha1($_POST['password']);

print("$username"."$email"."$password");

$query = "INSERT INTO `users` (username, email, password) VALUES ('".$username."', '".$email."', '".$password."')";

print("$username "."$email "."$password "."$query");

$result = mysqli_query($conn, $query);

print_r(mysqli_affected_rows($conn));

?>