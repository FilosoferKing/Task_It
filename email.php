<?php

$to = 'filosoferking@yahoo.com';
$subject = 'Mail Test';
$message = 'This is a test';
$message = wordwrap($message, 70, "\r\n");
$from = "master3dtech@yahoo.com";

mail("filosoferking@yahoo.com", $subject, $message);

?>