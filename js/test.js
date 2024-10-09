
window.onload = function() {
    // إظهار الشريط عند تحميل الصفحة
    var banner = document.getElementById("welcome-banner");
    var sessionName = document.querySelector("#welcome-banner h1")
    banner.style.opacity = "1"; // إظهار الشريط

    // إخفاء الشريط بعد 3 ثوانٍ
    setTimeout(function() {
        banner.style.opacity = "0", banner.style.zIndex = "-5",sessionName.style.opacity= "0"; // إخفاء الشريط
    }, 2000); // 3000 مللي ثانية = 3 ثوانٍ

    setTimeout(function() {
        sessionName.style.opacity= "0"; // إخفاء الشريط
    }, 1500); // 3000 مللي ثانية = 3 ثوانٍ
};


$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        rtl: true, // تفعيل دعم الكتابة من اليمين إلى اليسار
        loop: true, // السلايدر يعيد نفسه
        margin: 10,
        nav: true, // إظهار أزرار التنقل
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
});