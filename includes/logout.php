<?php
session_start();
session_destroy();

$output = ["success" => true, "message" => "Logout Successful"];
$output_string = json_encode($output);

session_start();

print($output_string);

?>