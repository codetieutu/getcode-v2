$(document).ready(() => {
    $('.btn').click((e) => {
        let mail = $('#email').val();
        if (mail.length > 0) {
            $("#loading").css("display", "block");
            $.ajax({
                url: "/getcode",
                type: "POST",
                contentType: "application/json",
                data: JSON.stringify({ mail: mail }),
                success: (data) => {
                    console.log("check data", data);
                    $('.code').text(data);
                    $("#loading").css("display", "none");
                },
                error: (error) => {
                    console.log(error);
                    $("#loading").css("display", "none");
                }
            })
        }
        else {
            $(".notice").text("email empty");
        }

    })
    $('#email').on('input', () => {
        $.ajax({
            url: "/valid",
            type: "POST",
            contentType: "application/json",
            data: JSON.stringify({ mail: $('#email').val() }),
            success: (data) => {
                if (data.check) {
                    $('.notice').text("valid email");
                    $(".notice").css("color", "#39d633")
                } else {
                    $('.notice').text("unvalid email");
                    $(".notice").css("color", "#e3684f")
                }

            },
            error: (error) => {
                console.log(error);
                $("#loading").css("display", "none");
            }
        })

    })
})