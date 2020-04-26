<?php
namespace DataXplorer;
class DataXplorer extends \phpcrud\Data{
  function __construct() {
    parent::__construct();
    $this->bln_ignore_key_filter=true;
  }
}//END CLASS DATA XPLORER
?>
