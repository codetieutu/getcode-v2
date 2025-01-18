$(document).ready(() => {
    $(".delete-btn").click(() => {
        const ids = [];
        $('input.selectM:checked').each(function () {
            ids.push($(this).data("id"));
            $(this).closest("tr").remove();
        });
        $.ajax({
            url: '/delete-Mail',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({ ids: ids }),
            success: function (response) {
                alert('Đã xóa thành công và lưu trạng thái trên server!');
            },
            error: function (error) {
                console.error('Lỗi khi gửi dữ liệu:', error);
            }
        });

    });
});