<?php
// define variables and set to empty values
$name = $email = $number = $companyname = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {

//   echo "data in " . $_POST["data"];
  $name = test_input($_POST["name"]);
  $number = test_input($_POST["number"]);
  $companyname = test_input($_POST["companyname"]);
  $to = "aakash.xcvi@gmail.com";
  $from = test_input($_POST['email']);
  
  $subject = $name . " is trying to reach you ";
  $body = " You got a message from : " . $name . " Contact: " . $number . " Company Name:" .$companyname ;
  $headers = "From: $from";
  $send = mail($to, $subject, $body, $headers);
  echo "mail sent by " . $from . " with " . $body;
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