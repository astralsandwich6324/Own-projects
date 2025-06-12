$(document).ready(function () {

    $("#frm").submit(function (e) {
        e.preventDefault();

        url = "@Url.Content("~/Access/Enter")"
        parametros = $(this).serialize();

        $.post(url, parametros, function (data) {
            if (data == "1") {
                document.location.href = "@Url.Content("~/")";
            }
        })
    })
})
