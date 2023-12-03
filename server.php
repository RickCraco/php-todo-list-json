<?php 

$list = file_get_contents('data.json');
$todoList = json_decode($list, true);

header('Content-Type: application/json');
echo json_encode($todoList);

?>