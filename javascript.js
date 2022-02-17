var noicon = document.getElementById;
var nostatus;
nostatus = "closed";
nostatus.onclick = function(){
   if(nostatus == "closed"){
       noicon.src = "photos/yes.png";
       nostatus = "opened";
      }else{
           noicon.src = "photos/no.png";
           nostatus = "closed";
      }
}







