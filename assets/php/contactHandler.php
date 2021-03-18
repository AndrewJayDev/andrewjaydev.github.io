<?php
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$servicio = $_POST['servicio'];
$to = 'andrewjayscheuer@gmail.com';
$email_subject = "New Message from your github site";
$email_body = "You have received a new message from. \n <strong>Name:</strong> $name \n Email:
$email \n Message: \n $message \n";
$headers = "From: $email";
mail($to, $email_subject, $email_body, $headers);
echo 'We will be in touch!'
?>