<?php
// define variables and set to empty values
$name = $email = $number = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = test_input($_POST["name"]);
  $number = test_input($_POST["number"]);
  $to = "imkanikagarg@gmail.com";
  $from = test_input($_POST['email']);
  $subject = $name . " is trying to reach you ";
  $body = " You got a message from : " . $name . " Contact: " . $number;
  $headers = "From: $from";
  $send = mail($to, $subject, $body, $headers);
  header("Location: /");
}

else {
    header("Location: /"); 
}

function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}

?>