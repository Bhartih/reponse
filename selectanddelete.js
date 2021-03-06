function ResetDiv(objId){
  $("#"+objId).parent().attr("gate","");
  $("#"+objId).parent().attr("num_bits",1);
  $("#"+objId).parent().attr("ctl_enabled",0);
  $("#"+objId).parent().attr("ctl_bits",0);
  $("#"+objId).parent().attr("tgt_bits",0);
  $("#"+objId).parent().attr("arg_enabled",0);
  $("#"+objId).parent().attr("arg_value",0);
}

function ResetDivWithId(objId,rowid,colid){
  console.log("RAMAN : ResetDivWithId : "+objId);
  $("#"+objId).attr("gate","");
  $("#"+objId).attr("num_bits",1);
  $("#"+objId).attr("ctl_enabled",0);
  $("#"+objId).attr("ctl_bits",0);
  $("#"+objId).attr("tgt_bits",0);
  $("#"+objId).attr("arg_enabled",0);
  $("#"+objId).attr("arg_value",0);
  $("#"+objId).attr("name","");
  $("#"+objId).attr("rowid",rowid);
  $("#"+objId).attr("columnid",colid);
  $("#"+objId).attr("class","dropzone");
}

function AttachSelectAndDelete(){
	//alert(obj.attr("id"));
  //alert("Inside AttachSelectAndDelete..........");
  $('.draggableComp').click(function(){

    //alert("Clicked the image...........");
    if(idForDelete!=""){
      $("#"+idForDelete).parent().css("border","0px solid");
      $("#"+idForDelete).parent().css("border-color","transparent");
    }
    idForDelete=$(this).attr("id");
	parentDivToReset=$(this).parent();
    $("#"+idForDelete).parent().css("border","1px solid");
    $("#"+idForDelete).parent().css("border-color","green");
	ResetDivWithId(parentDivToReset.attr("id"),parentDivToReset.attr("rowid"),parentDivToReset.attr("columnid"));
    console.log(idForDelete);
    //$(this).css("border-color","green");
    //$(this).css("border-width","4px");
  });

/*$('body').click(function(){
  $("#"+idForDelete).parent().css("border","0px solid");
  $("#"+idForDelete).parent().css("border-color","transparent");
  idForDelete="";
});*/


  $('html').keyup(function(ev){
    //alert("Key released..........");
    if(ev.key==="Delete"){
      //$(":focus").remove();
      if(idForDelete!=""){
        $("#"+idForDelete).parent().css("border-color","blue");
        ResetDiv(idForDelete);
        if(parseInt($("#"+idForDelete).attr("num_bits")) > 1){
          UnMergeCells(idForDelete);
        }else{
          InsertConnector($("#"+idForDelete).parent().attr("id"));
        }
        $("#"+idForDelete).remove();
        
        idForDelete="";

      }
    }
  });
}
