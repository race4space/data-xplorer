$( document ).ready(function() {
  var obj_data, obj_ini;
  obj_ini=new Object();
  obj_ini.str_tag="data-xplorer";
  obj_ini.bln_data_menu=true;
  obj_ini.bln_navbar_btm=false;
  fn_add_con(obj_ini);
  obj_data=new cls_data(obj_ini);
  obj_data.fn_execute();
});
function fn_add_con(obj_ini){
  var obj_con;
  obj_ini.arr_con=[];
  obj_con=new Object();
  obj_con.str_name="con-local";
  obj_con.str_title="Local Host";
  obj_con.str_host="localhost";
  obj_con.str_user="";
  obj_con.str_password="";
  obj_con.str_schema="";
  obj_ini.arr_con.push(obj_con);

  obj_con=new Object();
  obj_con.str_name="con-vm-racespace";
  obj_con.str_title="vm-racespace";
  obj_con.str_host="34.69.26.186";
  obj_con.str_user="";
  obj_con.str_password="";
  obj_con.str_schema="";
  obj_ini.arr_con.push(obj_con);

  obj_con=new Object();
  obj_con.str_name="con-vm-myrsstestdomain";
  obj_con.str_title="vm-myrsstestdomain";
  obj_con.str_host="146.148.26.192";
  obj_con.str_user="";
  obj_con.str_password="";
  obj_con.str_schema="";
  obj_ini.arr_con.push(obj_con);

  obj_con=new Object();
  obj_con.str_name="con-rss-db-testing";
  obj_con.str_title="rss-db-testing";
  obj_con.str_host="linux-db-testing.reallysimplesystems.com";
  obj_con.str_user="";
  obj_con.str_password="";
  obj_con.str_schema="";
  obj_ini.arr_con.push(obj_con);

  obj_con=new Object();
  obj_con.str_name="con-rss-live";
  obj_con.str_title="RSS Live";
  obj_con.str_host="104.199.12.102";
  obj_con.str_user="";
  obj_con.str_password="";
  obj_con.str_schema="";
  obj_ini.arr_con.push(obj_con);








}
