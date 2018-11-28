// JavaScript source code
$().ready(function () {
    $(".login-form").validate({
        rules: {
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                minlength: 8
            }
        },
        messages: {
            email: {
                required: "Nhập email của bạn",
                email: "Email không đúng định dạng"
            },
            password: {
                required: "Nhập mật khẩu của bạn",
                minlength:"Nhập ít nhất 8 ký tự"
            }
        }
    })
})
