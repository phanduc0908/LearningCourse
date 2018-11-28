// JavaScript source code
$().ready(function () {
    $(".register-form").validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
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
            name: {
                required: "Nhập tên của bạn",
                minlength: "Nhập ít nhất 2 ký tự"
            },
            email: {
                required: "Nhập email của bạn",
                email: "Email không đúng định dạng"
            },
            password: {
                required: "Nhập mật khẩu của bạn",
                minlength: "Nhập ít nhất 8 ký tự"
            }
        }
    })
})
