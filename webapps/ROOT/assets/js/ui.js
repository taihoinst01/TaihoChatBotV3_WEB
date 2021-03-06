$(function () {
    $('#wrapper').css({ 'height': ($(document).height()) + 'px'});
    $(window).resize(function () {
        //$('#wrapper').css({ 'height': ($(document).height()) + 'px' });
    });

    $(document).on('click', '#botChatBtn', function () {
		$('.wc-chatview-panel').css('bottom', 0).show();
      $('.bot-wrap').show();
	});

    //360 팝업창 생성(cardDivision : reel)
    $("#bot > div").add(
        "<div class='reel-wrapper popupArea'>" +
            "<div class='popHeader'>" +
                "<span id='reelTitle' class='popupTitle'></span>" +
                "<button class='btnTopClose'></button>" +
            "</div>" +
            "<div id='reelArea' class='popBody'>" +
                "<div class='imgBox' id='phantom black'>" +
                    "<img src='assets/image/car/00001.jpg' alt='' class='reel' id='image' data-images='assets/image/car/000##.jpg' data-frames='60' data-cw='true' />" +
                "</div>" +
                "<div class='popTxt'>" +
                    "<span>좌우로 드래그하여 돌려보세요.</span>" +
                "</div>" +
            "</div>" +
        "</div>").appendTo("#bot");
    //동영상 팝업창 생성(cardDivision : play)
    $("#bot > div").add(
        "<div class='mov-wrapper popupArea'>" +
            "<div class='popHeader'>" +
                "<span id='movTitle' class='popupTitle'></span>" +
                "<button class='btnTopClose'></button>" +
            "</div>" +
            "<div class='popBody'>" +
                "<iframe id='video' src='' frameborder='0' allowfullscreen='true' style='overflow-x:hidden;overflow:auto;width:100%;height:487px;'></iframe>" +
            "</div>" +
        "</div>").appendTo("#bot");
    //이미지 팝업창 생성(cardDivision : img)
    $("#bot > div").add(
        "<div class='img-wrapper popupArea'>" +
            "<div class='popHeader'>" +
                "<span id='imgTitle' class='popupTitle'></span>" +
                "<button class='btnTopClose'></button>" +
            "</div>" +
            "<div id='imgCarousel' class='popBody' align='center'>" +
                "<img id='imgTag' src='' width='568' height='318'>" +
            "</div> " +
        "</div>").appendTo("#bot");
    //지도 팝업창 생성(cardDivision : map)
    $("#bot > div").add(
        "<div class='map-wrapper popupArea'>" +
            "<div class='popHeader'>" +
                "<span id='mapTitle' class='popupTitle'></span>" +
                "<button class='btnTopClose'></button>" +
            "</div>" +
            "<div id='mapArea' class='popBody'>" +
            //"<div id='map' style='border:1px solid #000;'></div>"+  //V3
            "</div>" +
        "</div>").appendTo("#bot");

    //제스처 케릭터 영역 생성
    $("#bot > div").add(
        "<div class='gesture-wrapper gestureArea'>" +
            //"<div class='gestureHeader'>" +
            //    "<span id='gestureTitle' class='gestureTitle'></span>" +
            //"</div>" +
            "<div id='animationDiv'></div>" +
        "</div>").appendTo("#bot");

    //챗봇창 상단 생성
    //$(".wc-header > span").add(
    //    "<span class='chatTitle'></span>" +
    //    "<span class='chatTitleText'><strong>TIIZ</strong> ChatBot V3</span>" +
    //    "<span class='topIcon btnClose'><button class='topIcon03'></button></span>" +
    //    "<span class='topIcon btnLayer btnLayerFull'><button class='topIcon02'></button></span>" +
    //    "<span class='topIcon btnMin'><button class='topIcon01'></button></span>" +
    //    "<span class='topGestureArea'>" +
    //    "<div class='topGestureOff'>OFF</div><div class='topGestureOn'>ON</div> <div class='topGestureIcon'></div>  " +
    //    "</span>").appendTo(".wc-header");
    $(".chatbotLayer > span").add(
        "<span class='chatTitle'><span class='titleIcon'></span></span>" +
        //"<span class='chatTitleText'>TIIZ <strong>ChatBot</strong></span>" +
        "<span class='topIcon btnClose'><span class='topIcon03'></span></span>" +
        "<span class='topIcon btnLayer btnLayerFull'><span class='topIcon02'></span></span>" +
        //"<span class='topIcon btnMin'><button class='topIcon01'></button></span>" +
        //+"<span class='topGestureArea'>" +
        //    "<div class='topGestureOff'>OFF</div>" +
        //    "<div class='topGestureOn'>ON</div>" +
        //    "<div class='topGestureIcon'></div>" +
        //"</span>" +
        "<span class='topGestureArea2'>" +
            "<span class='topGestureOffImg' alt='off'></span>" +
        "</span>"
    ).appendTo(".mainBG");

    //챗봇 메뉴창 생성
    $(".wc-chatview-panel > div").add(
        "<div class='menuBox off'>" +
            "<p class='menuReStartBtn'><span> Menu </span></p>" +
            "<ul>" +
            //"<li class='menuSelectBtn'><span><a href='#' onclick='viewMenu('Accident analysis')'> Accident analysis </span></a></li>" +
            //"<li class='menuSelectBtn'><span><a href='#' onclick='viewMenu('Accident trends')'> Accident trends </span></a></li>" +
            "<li class='menuSelectBtn'><span><a href='#' onclick='viewMenu()'> return home </span></a></li>" +
            "</ul>" +
        "</div > ").appendTo(".wc-chatview-panel");

    //챗봇 마이크 생성
    $(".wc-console > div").add(
        "<div class='ttsMic ttsMicBlack' onclick='startButton(event)'>&nbsp</div > ").appendTo(".wc-console");

    //챗봇창 버튼 동작 (시연으로 인해 일단 막기)
    //$('.btnClose').click(function () {
    //    $('.wc-chatview-panel').css('bottom', 0).hide();
    //    $('.bot-wrap').hide().removeClass("chatOn").addClass("chatOff");
    //});
    $('.btnMin').click(function () {
        $('.btnTopClose').click();
        $('.wc-chatview-panel').css({ "overflow": "hidden" });
        $('.wc-chatview-panel').animate({ "height": "38px" }, "fast");
        $('.gestureArea').animate({ "height": "38px" }, "fast");
        $('.wc-console, wc-message-pane').hide();
        $('#animationDiv').hide();
        $('.btnMin').css({ 'display': 'none' });
        $('.btnLayer').removeClass('btnLayerFull').addClass('btnLayerMid');
        $('.btnLayer > span').removeClass('topIcon02').addClass('topIcon02-1');
    });
    $(document).on('click', '.chatbotLayer [class*=btnLayer]', function () {
        if ($(this).hasClass('btnLayerMid')) {
            //$('.wc-chatview-panel').animate({ "height": "528px" }, "fast");
            //$('.popupArea').animate({ 'bottom': '174px' }, "fast");
            //$('.gestureArea').animate({ "height": "528px" }, "fast");

            //창 늘릴때 바꾸는 부분
            //$('.mainBG').animate({ "width": 90 + "%", "height": 90 + "%" }, "fast");
            $('.m_mainBG').removeClass('m_mainBG').addClass('mainBG');
            $('.m_chatTitle > span').removeClass('m_titleIcon').addClass('titleIcon');
            $('.m_chatTitle').removeClass('m_chatTitle').addClass('chatTitle');
            $('.m_topIcon03').removeClass('m_topIcon03').addClass('topIcon03');
            $('.m_gestureArea').removeClass('m_gestureArea').addClass('gestureArea');
            $('.m_wc-chatview-panel').removeClass('m_wc-chatview-panel').addClass('wc-chatview-panel');
            $('.wc-console').animate({ "height": 60 + "px", "left": 0 + "px", "right": 0 + "px", "bottom": 0 + "px" }, "fast");
            $('.wc-console label').animate({ "width": 60 + "px", "height": 60 + "px" }, "fast");
            $('.m_sendIcon').removeClass('m_sendIcon').addClass('sendIcon');
            $('#animationDiv > canvas').css({ "height": 100 + "%" });
            $('.wc-carousel').css({ 'width': 706 + 'px' });

            if ($('.m_topGestureOnImg').attr('alt') == 'on') {
                $('.wc-chatview-panel').show().animate({ "right": "5%" }, "slow").fadeIn("slow");
                $('.m_topGestureOnImg').removeClass('m_topGestureOnImg').addClass('topGestureOnImg');
            } else {
                $('.wc-chatview-panel').show().animate({ "right": "27%" }, "slow").fadeIn("slow");
                $('.m_topGestureOffImg').removeClass('m_topGestureOffImg').addClass('topGestureOffImg');
            }
            $('.m_ttsMicBlack').removeClass('m_ttsMicBlack').addClass('ttsMicBlack');
            $('.m_ttsMicRed').removeClass('m_ttsMicRed').addClass('ttsMicRed');
            $('.popupArea').css({ 'bottom': 472 + 'px' });

            $('.wc-console, wc-message-pane').show();
            $('#animationDiv').show();
            $('.btnLayer').removeClass('btnLayerMid').addClass('btnLayerFull');
            $('.btnLayer > span').css({ 'display': 'inline-block' }).removeClass('m_topIcon02').addClass('topIcon02');
            //$('.btnMin').css({ 'right': '58px', 'display': 'inline-block' });

            $('.btnTopClose').click();
        } else {
            //$('.wc-chatview-panel').animate({ "height": ($(document).height()) + 'px' }, "fast");
            //$('.popupArea').animate({ 'bottom': ($(window).height() - 352) + 'px' }, "fast");

            //창 줄일때 바꾸는 부분
            //$('.mainBG').animate({ "width": 420 + "px", "height": 590 + "px" }, "fast");
            $('.mainBG').removeClass('mainBG').addClass('m_mainBG');
            $('.chatTitle > span').removeClass('titleIcon').addClass('m_titleIcon');
            $('.chatTitle').removeClass('chatTitle').addClass('m_chatTitle');
            $('.topIcon03').removeClass('topIcon03').addClass('m_topIcon03');
            $('.gestureArea').removeClass('gestureArea').addClass('m_gestureArea');
            $('.wc-chatview-panel').removeClass('wc-chatview-panel').addClass('m_wc-chatview-panel');
            $('.wc-console').animate({ "height": 37 + "px", "left":5+"px","right":5+"px","bottom":10+"px" }, "fast");
            $('.wc-console label').animate({ "width":42+"px","height": 32 + "px"}, "fast");
            $('.sendIcon').removeClass('sendIcon').addClass('m_sendIcon');
            $('#animationDiv > canvas').css({ "height": 680 + "px" });
            $('.wc-carousel').css({ 'width': 351 + 'px' });

            if ($('.topGestureOnImg').attr('alt') == 'on') {
                $('.wc-chatview-panel').show().animate({ "right": "5%" }, "slow").fadeIn("slow");
                $('.topGestureOnImg').removeClass('topGestureOnImg').addClass('m_topGestureOnImg');
            } else {
                $('.wc-chatview-panel').show().animate({ "right": "27%" }, "slow").fadeIn("slow");
                $('.topGestureOffImg').removeClass('topGestureOffImg').addClass('m_topGestureOffImg');
            }
            $('.ttsMicBlack').removeClass('ttsMicBlack').addClass('m_ttsMicBlack');
            $('.ttsMicRed').removeClass('ttsMicRed').addClass('m_ttsMicRed');
            $('.popupArea').animate({ 'bottom': 236 + 'px', 'right':421+'px' }, "fast");

            $('.btnLayer').removeClass('btnLayerFull').addClass('btnLayerMid');
            $('.btnLayer > span').css({ 'display': 'inline-block' }).removeClass('topIcon02').addClass('m_topIcon02');
        }
    });

    //챗봇 메뉴 버튼 동작
    $('.menuIcon').click(function (){
        if ($('.menuBox').hasClass("off")) {
            $('.menuBox').removeClass('off').addClass('on');
            $('.menuBox').css({ 'display': 'block' });
        } else {
            $('.menuBox').removeClass('on').addClass('off');
            $('.menuBox').css({ 'display': 'none' });
        }
    });
    
    //챗봇 제스처 동작
    var startGesture = 0;
    $('.topGestureArea2').click(function () {
        // 사이즈 클때
        if ($('.topGestureOnImg').attr('alt') == 'on') {
            //Gesture off
            $('.topGestureOnImg').attr('alt', 'off');
            $('.topGestureOnImg').removeClass('topGestureOnImg').addClass('topGestureOffImg');
            $('.gesture-wrapper').hide().animate({ "height": "0", "opacity": "0" }, "slow").fadeOut("slow");

            $('.wc-chatview-panel').show().animate({ "right": "27%" }, "slow").fadeIn("slow");
        } else if ($('.topGestureOffImg').attr('alt') == 'off') {
            //Gesture on
            $('.topGestureOffImg').attr('alt', 'on');
            $('.topGestureOffImg').removeClass('topGestureOffImg').addClass('topGestureOnImg');
            $('.topGestureIcon').css({ 'float': 'left' });
            if (startGesture == 0) {
                playAnimation('ChatBot_AniAll01');
                $('#animationDiv > canvas').css({ 'border-radius': 15 + 'px', "position": "absolute", "bottom": 0 });
                startGesture = 1;
            }
            $('.gesture-wrapper').show().animate({ "height": "100%", "opacity": "1" }, "slow").fadeIn("slow");
            $('.wc-chatview-panel').show().animate({ "right": "5%" }, "slow").fadeIn("slow");
        // 사이즈 작을때
        } else if ($('.m_topGestureOnImg').attr('alt') == 'on') {
            //Gesture off
            $('.m_topGestureOnImg').attr('alt', 'off');
            $('.gesture-wrapper').hide().animate({ "height": "0", "opacity": "0" }, "slow").fadeOut("slow");

            $('.wc-chatview-panel').show().animate({ "right": "27%" }, "slow").fadeIn("slow");
            $('.m_topGestureOnImg').removeClass('m_topGestureOnImg').addClass('m_topGestureOffImg');
        } else if ($('.m_topGestureOffImg').attr('alt') == 'off') {
            //Gesture on
            $('.m_topGestureOffImg').attr('alt', 'on');
            $('.m_topGestureOffImg').removeClass('m_topGestureOffImg').addClass('m_topGestureOnImg');
            $('.topGestureIcon').css({ 'float': 'left' });
            //if (startGesture == 0) {
            //    playAnimation('ChatBot_AniAll01');
            //    $('#animationDiv > canvas').css({ 'border-radius': 15 + 'px' });
            //    startGesture = 1;
            //}
            $('.gesture-wrapper').show().animate({ "height": "100%", "opacity": "1" }, "slow").fadeIn("slow");
            $('.wc-chatview-panel').show().animate({ "right": "5%" }, "slow").fadeIn("slow");
        }

        //Gesture 클릭시 팝업을 닫는다.
        $('.btnTopClose').click();
    });

    //닫기 버튼
    $('.btnTopClose').click(function () {
        $("#video").attr('src', '');
        $('.mov-wrapper, .img-wrapper, .map-wrapper, .reel-wrapper').hide().animate({ "right": "-380px", "opacity": "0", "display": "none" }, "fast").fadeOut("fast");
        
        if ($('.topGestureOnImg').attr('alt') == 'on') {
            $('.wc-chatview-panel').show().animate({ "right": 5 + "%" }, "fast");
        } else if ($('.topGestureOffImg').attr('alt') == 'off') {
            $('.wc-chatview-panel').show().animate({ "right": 27 + '%' }, "fast");
        }

    });

    //현재위치사용승인
    //$(document).on('click', '.wc-card > .wc-card-buttons > li > button:contains("현재 위치 사용 승인")', function () {
    //$(document).on('click', '.wc-list button:contains("현재 위치 사용 승인")', function () {
    $(document).on('click', '.ac-pushButton:contains("현재 위치 사용 승인")', function () {
        navigator.geolocation.getCurrentPosition(function (position) {
            var pos = { lat: position.coords.latitude, lng: position.coords.longitude };
            //alert("현재 위치: 위도(" + pos.lat + "), 경도(" + pos.lng + ")");
            //alert($('#conversationId').val());
            //var directLineUrl = "https://northamerica.directline.botframework.com";
            var directLineUrl = "https://directline.botframework.com";
            var secretKey = "4CfO6oobRO4.cwA.cRQ.5Ee7OFYL20UBxyyh9mEnNIzHvEU0OYads6M5C8Pz-6g";	//USWEST

            var info = JSON.stringify({
                type: 'message',
                text: 'current location:' + pos.lat + ':' + pos.lng,
                from: { id: 'userid' },
            });
            $.ajax({
                type: "POST",
                url: directLineUrl + "/v3/directline/conversations/" + $('#conversationId').val() + "/activities",
                data: info,
                //dataType : "json",
                headers: {
                    "Authorization": "Bearer " + secretKey,
                    'Content-Type': 'application/json'
                },
                success: function (data) {
                    //window.location.assign('https://openapi.naver.com/v1/map/staticmap.bin?clientId=dXUekyWEBhyYa2zD2s33&url=file:///C:/Users/user/Desktop&crs=EPSG:4326&center=127.1141382,37.3599968&level=10&w=320&h=320&baselayer=default&markers=127.1141382,37.3599968');
                },
                error: function (e) {
                    alert("error1");
                }
            });
        }, function (error) {
            //alert("에러: " + error.message);
            //var directLineUrl = "https://northamerica.directline.botframework.com";
            var directLineUrl = "https://directline.botframework.com";
            var secretKey = "4CfO6oobRO4.cwA.cRQ.5Ee7OFYL20UBxyyh9mEnNIzHvEU0OYads6M5C8Pz-6g";	//USWEST
            var info = JSON.stringify({
                type: 'message',
                text: '직접 검색',
                from: { id: 'userid' },
            })
            $.ajax({
                type: "POST",
                url: directLineUrl + "/v3/directline/conversations/" + $('#conversationId').val() + "/activities",
                data: info,
                //dataType : "json",
                headers: {
                    "Authorization": "Bearer " + secretKey,
                    'Content-Type': 'application/json'
                },
                success: function (data) {
                },
                error: function (e) {
                    alert("error2");
                }
            });
        });
    });

    //팝업 영역 호출
    $(document).on('click', '.ac-image', function () {
        var popType = $(this).parent().parent().parent().children().eq(0).children().eq(0).attr('alt');
        console.log("popType :: " + popType);

        $("#video").attr('src', '');

        var chageChatHeight = parseInt($('.wc-chatview-panel').css('height')) - 323;    //팝업창 크기가 변하면 숫자 수정해야함
        if (popType == "img") { // IMG
            $('.mov-wrapper, .map-wrapper, .reel-wrapper').fadeOut();
            $('#imgDiv > div').remove();
            var manyImg = false;
            var imgPopTitle = $(this).parent().parent().parent().children().eq(0).children().eq(1).attr('alt');
            var imgUrl = $(this).parent().parent().parent().children().eq(0).children().eq(2).attr('alt');
            var imgCnt = $(this).parent().parent().parent().children().eq(0).children().eq(3).attr('alt');
            $('#imgTag').attr('src', imgUrl);
            $('#imgTitle').text(imgPopTitle);

            if ($('.topGestureOnImg').attr('alt') == 'on') {
                $('.img-wrapper').show().animate({ "right": "780px", "opacity": "1", "bottom": chageChatHeight + "px" }, "fast");
                $('.wc-chatview-panel').show().animate({ "right": 0 }, "fast");
            } else if ($('.topGestureOffImg').attr('alt') == 'off') {
                $('.img-wrapper').show().animate({ "right": "930px", "opacity": "1", "bottom": chageChatHeight + "px" }, "fast");
                $('.wc-chatview-panel').show().animate({ "right": 150 + 'px'}, "fast");
            } else {
                $('.img-wrapper').show().animate({ "right": "421px", "opacity": "1", "bottom": chageChatHeight + "px" }, "fast");
            }
        } else if (popType == "play") { // PLAY
            $('.img-wrapper, .map-wrapper, .reel-wrapper').fadeOut();
            var movPopTitle = $(this).parent().parent().parent().children().eq(0).children().eq(1).attr('alt');
            var movPopUrl = $(this).parent().parent().parent().children().eq(0).children().eq(2).attr('alt');
            $('#movTitle').text(movPopTitle);
            $('#video').attr('src', movPopUrl);

            if ($('.topGestureOnImg').attr('alt') == 'on') {
                $('.mov-wrapper').show().animate({ "right": "780px", "opacity": "1", "bottom": chageChatHeight + "px" }, "fast");
                $('.wc-chatview-panel').show().animate({ "right": 0 }, "fast");
            } else if ($('.topGestureOffImg').attr('alt') == 'off') {
                $('.mov-wrapper').show().animate({ "right": "930px", "opacity": "1", "bottom": chageChatHeight + "px" }, "fast");
                $('.wc-chatview-panel').show().animate({ "right": 150 + 'px' }, "fast");
            } else {
                $('.mov-wrapper').show().animate({ "right": "421px", "opacity": "1", "bottom": chageChatHeight + "px" }, "fast");
            }
        } else if (popType == "map") {  // MAP
            $('.mov-wrapper, .img-wrapper, .reel-wrapper').fadeOut();
            $('#mapArea > div').remove();
            $('#mapArea').add("<div id='map' style='border:1px solid #000;'></div>").appendTo('#mapArea');
            var mapTitle = $(this).parent().parent().parent().children().eq(0).children().eq(1).attr('alt');
            $('#mapTitle').text(mapTitle);
            var coordinate = $(this).parent().parent().parent().children().eq(0).children().eq(2).attr('alt');
            var _temp = coordinate.split(',');
            var longitude = _temp[0];
            var latitude = _temp[1];
            /* V3로 변경*/
            var position = new naver.maps.LatLng(longitude, latitude);
            var map = new naver.maps.Map('map', {
                center: position,
                zoom: 12,
                size: new naver.maps.Size(568, 318)
            });
            var marker = new naver.maps.Marker({
                position: new naver.maps.LatLng(longitude, latitude),
                map: map
            });
            $('.map-wrapper').show().animate({ "right": "421px", "opacity": "1", "bottom": chageChatHeight + "px" }, "fast");
        } else if (popType == "reel") { // REEL
            $('.img-wrapper, .map-wrapper, .mov-wrapper').fadeOut();

            var reelPopTitle = $(this).parent().parent().parent().children().eq(0).children().eq(1).attr('alt');
            $('#reelTitle').text(reelPopTitle);
            if ($('.reel-wrapper').css('display', 'block')) {
                $('#image').reel({
                    images: "assets/image/car/000##.jpg",
                    frames: 60,
                    cw: true,
                    brake: 10,
                    throwable: 10
                });
            }

            $('.reel-wrapper').show().animate({ "right": "421px", "opacity": "1", "bottom": chageChatHeight + "px" }, "fast");
        }
    });

    
});

//챗봇 메뉴 처음으로 돌아가기
//function viewMenu() {
//    var returnText = "return home";     // 처음으로 돌아가는 텍스트
//    $('div.wc-console').addClass('has-text');
//    $('input[type="text"].wc-shellinput').attr('value', returnText);
//    $('input[type="text"].wc-shellinput').val(returnText);
//    $('label.wc-send').trigger('click');
//    $('input[type="text"].wc-shellinput').attr('value', '');
//    $('input[type="text"].wc-shellinput').val('');
//    $('.wc-console').removeClass('has-text');
//    $('.menuBox').removeClass('on').addClass('off');
//    $('.menuBox').css({ 'display': 'none' });
//}