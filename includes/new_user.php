<?php

session_start();

require('../mysql_connect.php');

$username = $_POST['username'];
$email = $_POST['email'];
$password = sha1($_POST['password']);

$query = "SELECT id FROM `users` WHERE `email` = '".$email."'";

$result = mysqli_query($conn, $query);

if(mysqli_num_rows($result) > 0){

    print("User already exists");

} else {

    $query = "INSERT INTO `users` (username, email, password) VALUES ('".$username."', '".$email."', '".$password."')";

    $result = mysqli_query($conn, $query);

    print_r(mysqli_affected_rows($conn));

}

?>