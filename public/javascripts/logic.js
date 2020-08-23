$(document).ready(function(){

    /* Container1 */
    $(".buttonYes1").click(function(){
        $(".buttonYes1").css("background", "green");
        $(".buttonNo1").attr("disabled", "true");
        $(".trueText1").fadeIn("slow");
        $(".container2").fadeIn("slow");
    });

    $(".buttonNo1").click(function(){
        $(".buttonNo1").css("background", "red");
        $(".buttonYes1").attr("disabled", "true");
        $(".falseText1").fadeIn("slow");
        $(".new1").fadeIn("slow");
    });

    /* Container 2 */
    $(".buttonYes2").click(function(){
        $(".buttonYes2").css("background", "green");
        $(".buttonNo2").attr("disabled", "true");
        $(".trueText2").fadeIn("slow");
        $(".container3").fadeIn("slow");
    });

    $(".buttonNo2").click(function(){
        $(".buttonNo2").css("background", "red");
        $(".buttonYes2").attr("disabled", "true");
        $(".falseText2").fadeIn("slow");
        $(".new2").fadeIn("slow");
    });

    $(".new1").click(function(){
        location.reload();
    });

    $(".new2").click(function(){
        location.reload();
    });

});