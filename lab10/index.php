<?php
$serverName = 'locahost';
$userName = 'username';
$password = 'password';

//create connection

$connect = new mysqli($serverName, $userName, $password);

//check connection 

if ($connect->connect_error) {
  die('data is not connected' . $connect);
} else {
  echo "data is conected successfully";
}

?>