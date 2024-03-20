$(()=>{
    if(window.matchMedia("(max-width:899px)").matches){ //450px
        $("nav").hide();
        let count=0;
        $("header").click(function(){
            count++;
            if(count%2==0){
                $("nav").slideUp();
            }
            if(count%2==1){
                $("nav").slideDown();
            }
        });
    }

    

    

    //contact 이메일 복사하기
    let copyText=(text)=>{
        navigator.clipboard.writeText(text);
        copyText.textContent=text;
        alert("복사되었습니다.");
    }

    let emailClick=document.querySelector(".emailSrc");
    emailClick.addEventListener("click",()=>{
        copyText("frontweb99@gmail.com");
    })


    // 스킬 박스 위에 호버하면 글씨들 보였다 안 보였다
    $(".skill-text").hide();
    $(".skill-wrap>div").hover(function(){
        $(this).find("div").stop().fadeIn();
    },function(){
        $(this).find("div").stop().fadeOut();
    });


    // scroll 이벤트

    $(window).scroll(() => {
        let scroll = $(window).scrollTop();
        // console.log(scroll);
        // topbtn
        if (scroll > 100) {
            $(".topbtn").fadeIn();
        }
        if (scroll < 99) {
            $(".topbtn").fadeOut();
        }
        
        if (matchMedia("(min-width:1400px)").matches) {
            //skill
            if (scroll < 950) {
                $("#skill h1").css({ "transform": "translateX(-150%)", "opacity": "0" })
            }
            if (scroll > 1300) { //1400
                $("#skill h1").css({ "transform": "translateX(8%)", "opacity": "1" });

            }
            if (scroll > 2050) {
                $("#skill h1").css({ "transform": "translateX(-150%)", "opacity": "0" })
            }

            // project
            if (scroll < 1775) {
                $("#project>h1").css({ "transform": "translateX(-150%)", "opacity": "0" })
            }
            if (scroll > 2000) {
                $("#project>h1").css({ "transform": "translateX(5%)", "opacity": "1" })
            }
            if (scroll > 3500) { //2870
                $("#project>h1").css({ "transform": "translateX(-150%)", "opacity": "0" })
            }

            // design
            if (scroll < 2790) { //2790
                $("#design>h1").css({ "transform": "translateX(-120%)", "opacity": "0" });
            }
            if (scroll > 3400) { //3170
                $("#design>h1").css({ "transform": "translateX(6%)", "opacity": "1" });
            }
            if (scroll > 4100) { //3900
                $("#design>h1").css({ "transform": "translate(-120%)", "opacity": "0" });
            }

            //mouse
            // if (scroll < 3999) {
            //     $(".mouse").fadeIn();
            // }
            // if (scroll > 4000) {
            //     $(".mouse").fadeOut();
            // }
            // if(scroll<200){
            //     $(".mouse").fadeIn()
            // }
            // if (scroll>201){
            //     $(".mouse").fadeOut();
            // }
        }
    });
  
    
    $(".topbtn").click(function(){
        $('html').animate({scrollTop:0},400);
    });

    

    // a 태그 클릭 시 부드럽게 섹션 이동하기
    $("nav a:nth-of-type(1)").click(function(){
        let intro=$("#intro");
        let offset=intro.offset().top

        $("html").animate({scrollTop:offset},500)
    });
    $("nav a:nth-of-type(2)").click(function(){
        let profile=$("#profile");
        let offset=profile.offset().top-25;
        
        $("html").animate({scrollTop:offset},500)
    });
    $("nav a:nth-of-type(3)").click(function(){
        let skill=$("#skill");
        let offset=skill.offset().top-55;

        $("html").animate({scrollTop:offset},500);
    })
    $("nav a:nth-of-type(4)").click(function(){
        let project=$("#project");
        let offset=project.offset().top-60;

        $("html").animate({scrollTop:offset},500);
    });
    $("nav a:nth-of-type(5)").click(function(){
        let design=$("#design");
        let offset=design.offset().top-70;

        $("html").animate({scrollTop:offset},500);
    });


    // 디자인 섹션 배너디자인 슬라이드 이동
    $(".pre").click(function(){
        $(".banner-imgbox img:last").prependTo(".banner-imgbox");
        $(".banner-imgbox").css("margin-left","-100%");
        $(".banner-imgbox").stop().animate({marginLeft:0},700);
    });
    $(".next").click(function(){
        $(".banner-imgbox").stop().animate({marginLeft:"-100%"},700, function(){
            $(".banner-imgbox img:first").appendTo(".banner-imgbox");
            $(".banner-imgbox").css("margin-left",0);
        });
    });

    //디자인 섹션 모달팝업창
    // 인스타 디자인 부분
    $(".insta-imgbox img").click(function(){
        let index=$(this).index();
        $(".insta-modal").show();
        $(".insta-modal-wrap").eq(index).show();
        $(".insta-modal-wrap").eq(index).siblings().hide();
    });

    // 배너 디자인 부분
    $(".banner-imgbox>img").eq(0).click(function(){
        $(".banner-modal").show();
        $(".banner-modal-wrap").eq(0).show();
        $(".banner-modal-wrap").eq(0).siblings().hide();
    });

    $(".banner-imgbox>img").eq(1).click(function(){
        $(".banner-modal").show();
        $(".banner-modal-wrap").eq(1).show();
        $(".banner-modal-wrap").eq(1).siblings().hide();
    })

    // 디자인 섹션 모달팝업창 닫기
    // 1. 닫기 버튼 누르기
    $(".modal-closebtn").click(function(){
        $(".insta-modal").hide();
        $(".banner-modal").hide();
    })
    // 2. 모달팝업 이미지 누르기
    $(".insta-modal-wrap img").click(function(){
        $(".insta-modal").hide();
    });
    $(".banner-modal-wrap img").click(function(){
        $(".banner-modal").hide();
    })


    $(".project-tab a").click(function(){ //.project-tab li
        let index=$(this).index();
        // console.log(index);

        $(this).addClass("tabclick");
        $(this).siblings().removeClass("tabclick");
        $(".project-report>div").eq(index).show().css("display","flex").siblings().hide()
    })
});