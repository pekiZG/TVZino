$(".form-control").keypress(function (event) {
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if (keycode == '13') {
        $("tbody").empty();

        $.get("http://tvz.com.hr/api/search/", { board: $(".form-control").val() }, function (data) {

            $.each(data, function (index, attachment) {
                $("tbody").append("<tr><th scope='row'>" + index + "</th><td><a href='http://tvz.com.hr/api/attachments/?id=" + attachment.ID_ATTACH + "'>" + attachment.filename + "</a></td></tr>");
            });

        }, "json");
    }
});

var TVZBoardsAPI = "http://tvz.com.hr/api/boards/";
$.getJSON(TVZBoardsAPI, function (data) {
    $(".form-control").autocomplete({
        source: data
    });
});
