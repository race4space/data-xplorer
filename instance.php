<?php
namespace DataXplorer;
require_once("vendor/autoload.php");
require_once($_SERVER['DOCUMENT_ROOT']."/data-xplorer/DataXplorer.php");
$obj_data=new DataXplorer();
$obj_data->fn_execute();
?>
