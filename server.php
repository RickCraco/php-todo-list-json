<?php 

$list = file_get_contents('data.json');
$todoList = json_decode($list, true);

if(isset($_POST['text'])){
    $todo = [
        'id' => count($todoList) + 1,
        'text' => $_POST['text'],
        'done' => false
    ];
    array_push($todoList, $todo);
    file_put_contents('data.json', json_encode($todoList));
}

if(isset($_POST['remove'])){
    $index = $_POST['remove'];
    array_splice($todoList, $index, 1);
    file_put_contents('data.json', json_encode($todoList));
}

header('Content-Type: application/json');
echo json_encode($todoList);

?>