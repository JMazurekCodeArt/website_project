 $(document).ready(function(){
    $("img").hover(function(){
        $(this).css("scale", "1.1");
    },
    function(){
        $(this).css("scale", "1");
    }); 
  });
