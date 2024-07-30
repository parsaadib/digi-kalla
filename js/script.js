$(document).ready(function(){

    var i =1;
   var slider =  $(".slider img").length
next = function(){
   var a = "#pic" + i ; 
      $(a).removeClass("active")
      i+=1;
      if(i>slider){
        i=1;
        $("#pic1").addClass("active")
      }
      else{
        var next_slide= "#pic"+ i
        $(next_slide).addClass("active")}         }
      
past = function(){
          var a = "#pic" + i ; 
      $(a).removeClass("active")
      i-=1;
      if(i<1){
        i = slider;
        $("#pic4").addClass("active")
      }
      else{
        var past_slide= "#pic"+ i
        $(past_slide).addClass("active")
      }                                            }
        


    $(".next").on("click", function(){
     next();
    })
    

    $(".past").on("click", function(){
      past();
    })

   //setInterval(next , 3000);













  //  parsa=function(){
   //     $(".attention-window").animate({
    //        top:"-51%",
    //        opacity:"0",},2000,) 
    //        $(".balck-bourd").hide(1,)
    //}
     
   // $(".attention-window-img").on("click", function(){
   //    parsa()})

   // $(".balck-bourd").on("click", function(){
   //     parsa()
   //  })

     
})