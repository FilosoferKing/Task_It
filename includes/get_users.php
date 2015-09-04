<?php

require('../mysql_connect.php');

$query = "SELECT id, username FROM `users`";

$result = mysqli_query($conn, $query);

$output = [];

if(mysqli_num_rows($result) > 0){
    while($row = mysqli_fetch_assoc($result)){
        $output['user'][] = $row['username'];
        $output['id'][] = $row['id'];
    }
}
$output_string = json_encode($output);

print($output_string);

?>