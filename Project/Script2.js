// JavaScript source code
$().ready(function () {
    $(".comments-form").validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            name: {
                required: "Nhập tên của bạn",
                minlength: "Nhập ít nhất 2 ký tự"
            },
            email: {
                required: "Nhập email của bạn",
                email: "Email không đúng định dạng"
            }
        }
    });
});
