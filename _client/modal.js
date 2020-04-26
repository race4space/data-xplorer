
class cls_modal{
  constructor() {
  }
  fn_root(str_tag){
    var s='';
    s+='<div class="modal" id="infoModal" tabindex="-1" role="dialog" aria-labelledby="infoModal" aria-hidden="true">';
    s+='<div class="modal-dialog" role="document">';
    s+='<div class="modal-content">';
    s+='<div class="modal-header">';
    s+='<h5 class="modal-title" id="exampleModalLabel">Information</h5>';
    s+='<button type="button" class="close" data-dismiss="modal" aria-label="Close">';
    s+='<span aria-hidden="true">&times;</span>';
    s+='</button>';
    s+='</div>';
    s+='<div id="cardmodalbody" class="modal-body">';
    s+='Message';
    s+='</div>';
    s+='<div class="modal-footer">';
    s+='<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>';
    s+='</div>';
    s+='</div>';
    s+='</div>';
    s+='</div>';
    this.obj_tag=$(str_tag);
    this.obj_tag.html(s);
    this.obj_card_message=$("#cardmodalbody");
  }
  fn_call(str_text){

    this.obj_card_message.html(str_text);
    $('#infoModal').modal({
      backdrop: "static",
      keyboard: true,
      focus: true,
      show: true
      }
    );
  }
}
