$(document).ready(function(){
    var percent = [];
    $(".percent").each(function(i){
        percent[i] = ($(this).text().slice(0,2))/100;
    });
    var height = $(window).height();
    var progressWidth = $(".progress").width();
    
    var view = (height/2);
    var skillOffsetTop = $("#skills").offset().top - view;
    var experienceOffsetTop = $("#experience").offset().top - view;
    var projectOffsetTop = $("#projects").offset().top - view;
    var contactOffsetTop = $("#contact").offset().top - view;
    
    var navbar = $("#navbar");
    var navOffsetTop = navbar.offset().top;
    $(window).scroll(function(){
        //sticky navbar
        var windowOffsetTop = $(document).scrollTop();
        if (windowOffsetTop >=navOffsetTop){
            navbar.addClass("fixed-top");
        }else{
            navbar.removeClass("fixed-top");
        }
        if(windowOffsetTop >= skillOffsetTop){
            animateHeader("skills");
            animateHeaderContent("skillscontent");
            animateSkill();
        }
        if(windowOffsetTop >= experienceOffsetTop){
            animateHeader("experience");
            animateHeaderContent("experiencecontent");
        }
        if(windowOffsetTop >= projectOffsetTop){
            animateHeader("projects");
            animateHeaderContent("projectscontent");
        }
        if(windowOffsetTop >= contactOffsetTop){
            animateHeader("contact");
            animateHeaderContent("contactcontent");
        }
    });

    //    $(window).on("activate.bs.scrollspy", function(){
    //        var active = $(".active").text();
    //        switch(active){
    //            case "Skills" :
    //                $("#" + active.toLowerCase()).animate({
    //                   left: 0 
    //                }, 2000, "linear");
    //                animateSkill();
    //                break;
    //            
    //        }
    //    });
    
    //project mouseover
    $(".project-desc").mouseenter(function(){
        $(this).stop(true).animate({
            opacity: 1
        }, 300, "linear");
    });
    $(".project-desc").mouseleave(function(){
        $(this).stop(true).animate({
            opacity: 0
        }, 300, "linear");
    });
    
    function animateHeader(id){
        $("#" + id).animate({
            left:0,
            opacity: 1
        }, 1000);
    }
    function animateHeaderContent(id){
        $("#"+id).delay(1000).animate({
            opacity: 1
        }, 1000, "linear");
    }
    function animateSkill(){
        $(".progress-bar").each(function(i){
            $(this).stop(true, true).animate({
                width: progressWidth * percent[i]
            },1000);
        });
    }
});