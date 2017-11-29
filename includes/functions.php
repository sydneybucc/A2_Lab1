<?php

//these are varibles
$user = "root"; // user name
$pass = "root"; // user password
$host = "localhost"; //host we're using inside of MAMP;
$db = "cooper"; // database we're connecting to

//1. Create a connection to the database
$conn = mysqli_connect($host, $user, $pass, $db);
mysqli_set_charset($conn, 'utf8');

//test connection
if (!$conn) {
  echo 'something broke, your connection will not work';
  exit;
}


//if successful
echo 'connected, yo!';
$myQuery = "SELECT * FROM mainModel"; //this is a simple SQl query
$result = mysqli_query($conn,$myQuery); // result holds the result file
$rows = array(); //we will push this row into this array

while($row = mysqli_fetch_assoc($result)){
  $rows[]=$row; //push each row from the result (the DB rows)
}

//var_dump($rows);
if (isset($_GET['carModel'])){
  $car = $_GET['carModel'];

  $myQuery = "SELECT * FROM mainModel WHERE model = '$car'"; //this is a single SQL query
  $result = mysqli_query($conn,$myQuery); //result holds the result set

  $row = mysqli_fetch_assoc($result);

  //var_dump($row);
  echo json_encode($row);
}
?>
