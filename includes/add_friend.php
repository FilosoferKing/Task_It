<?php

session_start();

require('../mysql_connect.php');

$user_output = [];

//conditional to check if user is already added, then activate code below



$friendsNum = implode(",", $_SESSION['friends']);

$query = "SELECT id FROM `users` WHERE `email` = '".$_POST['friendEmail']."'";

$result = mysqli_query($conn, $query);

$friendId = "";

if(mysqli_num_rows($result) > 0){
    while($row = mysqli_fetch_assoc($result)){
        $friendId= $row['id'];              //Set $friendId to found friend based off of email
        if(array_search(strval($row['id']), $_SESSION['friends'])){
            exit();
        }
    }
}else {
    $user_output['error'] = 'E-mail not found';
}

$friendsNum .= ",".$friendId;

$_SESSION['friends'] = explode(",", $friendsNum);

$query = "UPDATE users SET friends = '".$friendsNum."' WHERE id = '".$_SESSION['id']."'";

$result = mysqli_query($conn, $query);

print_r(mysqli_affected_rows($conn));

?>
