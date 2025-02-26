$(document).ready(() => {
    $(".delete").click(function () {
        const id = $(this).attr('data-id');
        $.ajax({
            url: "/delete",
            type: "POST",
            contentType: "application/json",
            data: JSON.stringify({ id: id }),
            success: (data) => {
                if (data.deleted) {
                    showNotice(`${id} is deleted`, 'success');
                }
                else {
                    showNotice(`${id} isn't deleted`, "error");
                }
            },
            error: (error) => {
                console.log(error);
            }
        })
        $(this).closest("tr").remove();
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