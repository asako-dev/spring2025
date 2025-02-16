// ふわっと表示 
$(function () {
    var topBtn = $('#dl_sp,#dl_pc');
    topBtn.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
});



// ハンバーガーメニュー開閉
//$(function () {
//    $("#navBtn , #navMenu a").click(function () {
//        $("#navMenu").toggleClass("show");
//    });
//});


//const btn = document.querySelector('#navBtn');
//const close = document.querySelectorAll('#navMenu a');
//const btnOpen = document.querySelector('#navMenu');
//
//btn.addEventListener('click', () => {
//    btnOpen.classList.toggle('show');
//});
//
//close.forEach(function (close) {
//    close.addEventListener('click', () => {
//        btnOpen.classList.remove('show');
//    });
//});

const btnOpen = document.querySelector('#navMenu');
const btn = document.querySelectorAll("#navBtn , #navMenu a");
//console.log(btn[2]);
btn.forEach((elm) => {
    elm.addEventListener('click', function () {
        btnOpen.classList.toggle('show');
    });
});

//btn.forEach(function (btn) {
//    btn.addEventListener('click', () => {
//        btnOpen.classList.toggle('show');
//    });
//});


// アコーディオン（PCダウンロードボタン）
$(function () {
    $("#dl_pc dt").on("click", function () {
        $(this).next().slideToggle(300);
        $(this).toggleClass("open", 300);
    });
});
