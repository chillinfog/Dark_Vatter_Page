<?php
$name = $_POST['name'];
$nickname = $_POST['nickname'];
$message = $_POST['message'];
$email = $_POST['email'];
$headers = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
$headers = "From:".$_POST['email'];

// detect & prevent header injections
$checkit = "/(content-type|bcc:|cc:|to:)/i";
foreach ( $_POST as $key => $val ) {
if ( preg_match( $checkit, $val ) ) {
  exit;
}
}

if (empty($email)) {
    echo "Can't find your e-mail adress. Send field.";
} else {
    mail("a.saracevic@me.com", 
    $name . " send you a message!",
     'From: ' . $name . ' (' . $email . ')' . "\r\n" .
     'Nickname: ' . $nickname . "\r\n" .
     "\n\n" . $message,
     $headers );
}
?>