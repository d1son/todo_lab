$(document).ready(function() {
	$(".alert-danger").hide();
	$("#submit").on("click", function(e){
		e.preventDefault();
		
		var toDo1 = $("#input").val();
		var isDuplicate = false;
		$("td.word-td").each(function() {
			if($(this).text() === toDo1) {
				isDuplicate = true;
			}
		});

		if(isDuplicate) {
			$(".alert-danger").show();
			return;
		}

		var newRow = $("<tr>");
		var inputTd = $("<td>").addClass("word-td").append(toDo1);
		var deleteBtn = $("<button>").append("Delete");
		var deleteTd = $("<td>").append(deleteBtn);

		newRow.append(inputTd);
		newRow.append(deleteTd);

		$("tbody").append(newRow);

		$(deleteBtn).addClass("btn btn-danger")
		$(input).val("").focus();
	});

	$("checkbox")
	var checkBox = $("<checkbox>")

	$("table").on("click", ".btn-danger", function() {
			$(this).parent().parent().remove()
	});

	$("#input").on("keydown", function() {
		$(".alert-danger").hide();
	});
});