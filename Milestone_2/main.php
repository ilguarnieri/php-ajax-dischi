<?php

include __DIR__ . './assets/server/db.php';

if(isset($_GET['genre']) && $_GET['genre'] != ''){

    $discs = array_filter($discs, function($el){
        return $el['genre'] === $_GET['genre'];
    });
};

if(isset($_GET['author']) && $_GET['author'] != ''){

    $discs = array_filter($discs, function($el){
        return $el['author'] === $_GET['author'];
    });
}

header('Content-Type: application/json');

echo json_encode($discs);