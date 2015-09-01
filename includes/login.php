<?php
session_start();

require('../mysql_connect.php');

$username = $_POST['username'];
$password = $_POST['password'];




$query = "SELECT id, username, email FROM users WHERE username = '".$username."' AND password = '".$password."'";

$result = mysqli_query($conn, $query);

$user_output = [];

if(mysqli_num_rows($result) > 0){
    while($row = mysqli_fetch_assoc($result)){
        $user_output['id'] = $row['id'];
        $user_output['username'] = $row['username'];
        $user_output['email'] = $row['email'];

    }
} else {
    $user_output['error'] = 'Incorrect username or password';
    session_destroy();
}

$_SESSION = $user_output;

$output_string = json_encode($user_output);

print($output_string);
?>