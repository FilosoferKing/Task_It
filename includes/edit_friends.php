<?php

session_start();

require('../mysql_connect.php');

$user_output = [];

for($i = 0; $i < count($_SESSION['friends']); $i++){
    $query = "SELECT username, email, id FROM `users` WHERE `id` = '".intval($_SESSION['friends'][$i])."'";
    $result = mysqli_query($conn, $query);
    if(mysqli_num_rows($result) > 0){
        while($row = mysqli_fetch_assoc($result)){
            $user_output[$i]['id'] = $row['id'];
            $user_output[$i]['username'] = $row['username'];
            $user_output[$i]['email'] = $row['email'];
        }
    }else {
        $user_output['error'] = 'You have no friends =(';
        session_destroy();
    }
}

$output_string = json_encode($user_output);

print($output_string);


?>