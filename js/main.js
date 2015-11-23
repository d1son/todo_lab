$(document).ready(function() {
	$("input[placeholder]").each(function () {
        $(this).attr('size', $(this).attr('placeholder').length);
    });
});



