$(document).ready(function(){



    $('.carousel').carousel();
    
    $(".myhamblock").hide();


    $(".mynavham").click(function(){
        $(".myhamblock").toggle();
    });

    $(".myhamitem").click(function(){
        $(".myhamblock").hide();
    })

 

    $("#faccardblack1").hide();
    $("#fac1").click(function(){
        $("#faccardblack1").toggle(1000);
    })

    $("#faccardblack2").hide();
    $("#fac2").click(function(){
        $("#faccardblack2").toggle(1000);
    })

    $("#faccardblack3").hide();
    $("#fac3").click(function(){
        $("#faccardblack3").toggle(1000);
    })

    $("#faccardblack4").hide();
    $("#fac4").click(function(){
        $("#faccardblack4").toggle(1000);
    })

    $("#faccardblack5").hide();
    $("#fac5").click(function(){
        $("#faccardblack5").toggle(1000);
    })

    $("#faccardblack6").hide();
    $("#fac6").click(function(){
        $("#faccardblack6").toggle(1000);
    })


   
})



