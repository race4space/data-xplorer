class ThemeData{
  constructor() {
    this.str_border_color='border-primary';
    this.str_border_size='';
    this.str_border_rounded='rounded';
    this.str_theme="dark";
    this.str_theme_color=this.str_theme;
    this.str_text_color="text-white";
    this.str_color="white";

    this.str_bg_color="bg-"+this.str_theme_color;
    //this.str_border="border";
    this.str_border="";
    this.str_shadow="shadow";
    this.str_class=this.str_bg_color+' '+this.str_text_color+' '+this.str_border_rounded+' '+this.str_border+' '+this.str_border_color+' '+this.str_shadow;

    this.blue="#007bff";this.indigo="#6610f2";this.purple="#6f42c1";this.pink="#e83e8c";this.red="#dc3545";this.orange="#fd7e14";this.yellow="#ffc107";this.green="#28a745";this.teal="#20c997";this.cyan="#17a2b8";this.white="#fff";this.gray="#6c757d";this.gray_dark="#343a40";this.primary="#007bff";this.secondary="#6c757d";this.success="#28a745";this.info="#17a2b8";this.warning="#ffc107";this.danger="#dc3545";this.light="#f8f9fa";this.dark="#343a40";

    switch (this.str_theme) {case "blue":this.theme_color=this.blue;break;case"indigo":this.theme_color=this.indigo;break;case"purple":this.theme_color=this.purple;break;case"pink":this.theme_color=this.pink;break;case"red":this.theme_color=this.red;break;case"orange":this.theme_color=this.orange;break;case"yellow":this.theme_color=this.yellow;break;case"green":this.theme_color=this.green;break;case"teal":this.theme_color=this.teal;break;case"cyan":this.theme_color=this.cyan;break;case"white":this.theme_color=this.white;
    break;case"gray":this.theme_color=this.gray;break;case"gray_dark":this.theme_color=this.gray_dark;break;case "primary":this.theme_color=this.primary;break;case"secondary":this.theme_color=this.secondary;break;case"success":this.theme_color=this.success;break;case"info":this.theme_color=this.info;break;case"warning":this.theme_color=this.warning;break;case"danger":this.theme_color=this.danger;break;case "light":this.theme_color=this.light;break;case
    "dark":this.theme_color=this.dark;break;default:this.theme_color=this.cyan;
    }
  }
  fn_get_theme_pills() {
    //return '<style>.nav-pills > li > a.active {background-color: '.$str_color.'!important;}</style>';
    var s="";
    s+="<style>";
    s+="a{color:black;text-decoration:none;}";
    s+="a:hover{color:black;}";
    s+=".nav-item > a.active {background-color: "+this.theme_color+"!important;} ";
    //s+=".nav-link > a{text-decoration:none;}";
    //s+=".recordtable {width: inherit;}";
    //s+=".recordlabel {text-align:right;width:10%;}";
    //s+=".my-max {max-width: 100%;height: auto !important;}";
    s+="</style>";
    return s;
  }
}//END CLASS THEMEDATA
