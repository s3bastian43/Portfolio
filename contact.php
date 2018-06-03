<?php

if(isset($_POST['submit'])) {
    $to      = 'sebastian.ciobanu06@gmail.com';
    $subject = $_POST['subject'];
    $message = $_POST['message'];
    $headers = 'From: ' . $_POST['email'] . "\r\n" .
        'Reply-To: ' . $_POST['email'] . "\r\n" .
        'X-Mailer: PHP/' . phpversion();

    if(mail($to, $subject, $message, $headers)){       
        echo "Mail sent";
    } else{
        echo "Mail bounced";
    }
} else {
    header("Location: /");
    exit();
}
?>