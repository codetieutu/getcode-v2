$(document).ready(() => {
    $('.save').click((e) => {
        const textarea = $("#input-mail").val();
        const datas = textarea.split("\n");
        datas.forEach((data, index) => {
            const [mail, pass, token, client_id] = data.split('|').map(item => item.trim());
            $.ajax({
                url: "/addmail",
                type: "POST",
                contentType: "application/json",
                data: JSON.stringify({ mail: mail, token: token, client_id: client_id }),
                success: (data) => {
                    // console.log("check data", data);
                    if (data.added) {
                        showNotice(`${data.mail} is added`, 'success');
                    } else {
                        showNotice(`${data.mail} error`, 'error');
                    }
                },
                error: (error) => {
                    console.log(error);

                }
            })
        })
        $("#input-mail").text("");

    })
})
let showNotice = (message, type) => {
    let bgColor;
    if (type === "success") bgColor = "linear-gradient(to right, #00b09b, #96c93d)";
    else if (type === "error") bgColor = "linear-gradient(to right, #dc3545, #ff6666)";
    else bgColor = "linear-gradient(to right, #17a2b8, #66d9ff)";
    Toastify({
        text: message,
        duration: 3000,
        close: true,
        gravity: "top",
        position: "right",
        backgroundColor: bgColor,
        stopOnFocus: true
    }).showToast();
}