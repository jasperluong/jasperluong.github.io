$(document).ready(function (){
    $('#animated-button').on('click', function(){
            $("h1")
                .css("color", "red")
                .animate({"font-size": "+=1rem"}, 3000)
                .animate({"font-size": "-=1rem"}, 3000);
            setTimeout(() => {
                $("h1").css("color", "black")
                $("#Jasper-picture").css("border", "10px double black")
            }, 6000);
    })
})