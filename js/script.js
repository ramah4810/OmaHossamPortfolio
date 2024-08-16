// تعديل الوظيفة sendMail لمنع إعادة تحميل الصفحة
function sendMail(event) {
    event.preventDefault(); // منع إعادة تحميل الصفحة

    // الحصول على البيانات من النموذج
    var params = {
        user_name: document.getElementById("name").value,
        user_email: document.getElementById("email").value,
        user_message: document.getElementById("message").value
    };
    console.log("Sending email with params: ", params);

    const serviceID = "service_00bwlvm";
    const templateID = "template_elc1e3d";

    emailjs.send(serviceID, templateID, params)
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            alert("Your message has been sent successfully!");
        }, (error) => {
            console.log('FAILED...', error);
            alert("Failed to send the message, please try again.");
        });

    // تنظيف الحقول بعد الإرسال
    document.getElementById("contact-form").reset();
}

// التأكد من ربط الوظيفة بالزر submit
document.querySelector('.btn-submit').addEventListener('click', sendMail);
