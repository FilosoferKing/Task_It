<?php
session_start();

require('../mysql_connect.php');

$username = $_POST['username'];
$password = sha1($_POST['password']);


$query = "SELECT id, username, email, friends FROM `users` WHERE `username` = '".$username."' AND password = '".$password."'";

$result = mysqli_query($conn, $query);

$user_output = [];

if(mysqli_num_rows($result) > 0){
    while($row = mysqli_fetch_assoc($result)){
        $user_output['id'] = $row['id'];
        $user_output['username'] = $row['username'];
        $user_output['email'] = $row['email'];
        $user_output['friends'] = explode(",",$row['friends']);
        $_SESSION = $user_output;
    }
} else {
    $user_output['error'] = 'Incorrect username or password';
    session_destroy();
}


$output_string = json_encode($user_output);

print($output_string);
?>