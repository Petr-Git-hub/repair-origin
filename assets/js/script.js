$(document).ready(function () {

    $(".inp-tel").mask("+7 (999) 999-9999");

    // ******************* hamburger *******************
    $(".hamburger").click(function () {
        $(this).toggleClass("is-active");
        $("header").toggleClass("fixed");
        $("body").toggleClass("fixed");
    });

    // детальная страница товара изменение цены
    var inp = $("input[name='radio']");

    $(inp).click(function(){
        var target = $(".cp-" + $(this).val());
        $(".cardDetails-price").not(target).hide(0);
        target.fadeIn(500);
    });





    // ******************* slider *******************
    $('.slider-thumb').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        vertical: true,
        infinite: true,
        verticalSwiping: true,
        slidesPerRow: 1,
        slidesToShow: 1,
        asNavFor: '.slider-preview',
        focusOnSelect: true,
        arrows: false,
        centerMode: true,
        // draggable: false,
        centerPadding: '42px',

    });
    $('.slider-preview').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        vertical: false,
        infinite: true,
        fade: true,
        slidesPerRow: 1,
        slidesToShow: 1,
        asNavFor: '.slider-thumb',
        arrows: true,
        dots: true,
        draggable: false,
        responsive: [
            {
                breakpoint: 993,
                settings: {
                    arrows: false,
                }
            },
        ]
    });

    // клик по кнопке заявка с сайта
    $(".sale_item .right").click(function () {
        $(this).toggleClass("active");
    });

    // плавный переход якоря

    var myHash = location.hash; //получаем значение хеша
    location.hash = ''; //очищаем хеш
    if (myHash[1] != undefined) { //проверяем, есть ли в хеше какое-то значение
        $('html, body').animate({scrollTop: $(myHash).offset().top}, 500); //скроллим за полсекунды
    }


    $('.slick-reviews').slick({
        centerMode: true,
        centerPadding: '30%',
        slidesToShow: 1,
        responsive: [
            {
                breakpoint: 1301,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '20%',
                }
            },
            {
                breakpoint: 993,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '10%',
                }
            },
            {
                breakpoint: 320,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '15px',
                }
            }
        ]
    });


    // показать еще на странице о нас
    $(".still").click(function () {
        $(".reviews-about").toggleClass("open");
    });
    $(".still").on("click", function (event) {
        $(this).fadeOut(300, function () {
            $(".review_item.hidden_start").fadeIn(300);
        });
    });

    // аккордион список цен
    $(".priceBox-click").click(function () {
        if ($(this).parents(".priceBox").hasClass("active")) {
            $(this).parents(".priceBox").removeClass("active");
            $(this).parents(".priceBox").find(".priceBox-description").slideUp();
        } else {
            $(".priceBox-description").slideUp();
            $(".priceBox").removeClass("active");
            $(this).parents(".priceBox").addClass("active");
            $(this).parents(".priceBox").find(".priceBox-description").slideDown();
        }
    })


    // модальное окно
    //Открытие окна форма обратной связи
    $('.popup-open').click(function () {
        $('.popup-overlay').toggleClass('open');

    });

    //Закрытие окна по клику на кнопку
    $('.popup-close').click(function () {
        $('.popup-overlay').removeClass('open');
    });

    //Закрытие окна по клику вне элемента
    $(".popup-overlay").on('click', function (e) {
        if (!$(e.target).closest(".popup").length) {
            $(this).removeClass('open');
        }
        e.stopPropagation();
    });


    //Открытие окна политика конфиденсиальности
    $('.popup-open-politic').click(function () {
        $('.popup-politic').toggleClass('open');

    });

    //Закрытие окна по клику на кнопку
    $('.popup-close').click(function () {
        $('.popup-overlay').removeClass('open');
    });

    //Закрытие окна по клику вне элемента
    $(".popup-overlay").on('click', function (e) {
        if (!$(e.target).closest(".popup").length) {
            $(this).removeClass('open');
        }
        e.stopPropagation();
    });


    // обработкаформы обратной связи
    $('#btn_submit').click(function(){
        // собираем данные с формы
        var user_name    = $('#user_name').val();
        var user_phone   = $('#user_phone').val();
        var text_comment = $('#text_comment').val();
        // отправляем данные
        $.ajax({
            url: "action.php", // куда отправляем
            type: "post", // метод передачи
            dataType: "json", // тип передачи данных
            data: { // что отправляем
                "user_name":    user_name,
                "user_phone":   user_phone,
                "text_comment": text_comment
            },
            // после получения ответа сервера
            success: function(data){
                $('.messages').addClass("active").html(data.result); // выводим ответ сервера
                $("#feedback")[0].reset(); // отчищаем формупосле отправки
            }
        });
    });



});


$(window).scroll(function () {
    var height = $(window).scrollTop();

    if (height > 80) {
        $('header').addClass('fixed');
    } else {
        $('header').removeClass('fixed');
    }
});