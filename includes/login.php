<?php
session_start();

$user_array = [
    ['username' => 'Trevor', 'password' => '064deff2c110d69624a1749813afa7492d8667d5']
];

$username = $_POST['username'];
$password = sha1($_POST['password']);

$_SESSION['user'] = ['username' => $username, 'password' => sha1($password)];

print_r($_SESSION['user']);

$random_id = rand(1,100);
$output = [];

for ($i = 0; $i < count($user_array); $i++) {
    if ($username == $user_array[$i]['username']){
        if($password == $user_array[$i]['password']){
            $_SESSION['user_id'] = $random_id;
            $output['success'] = 'true';
            $output['user_id'] = $_SESSION['user_id'];
            $output['message'] = 'You have been successfully logged in';
        } else {
            $output['success'] = 'false';
            $output['message'] = 'You could not be logged in';
            session_destroy();
        }
    } else {
        $output['success'] = 'false';
        $output['message'] = 'You could not be logged in';
        session_destroy();
    }
    }

$output_string = json_encode($output);

print($output_string);
?>