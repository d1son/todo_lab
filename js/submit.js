//start js

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

//to prevent duplicate to do items

		if(isDuplicate) {
			$(".alert-danger").show();
			return;
		}

		var newRow = $("<tr>");
		var inputTd = $("<td>").addClass("word-td").append(toDo1);
		var deleteBtn = $("<button>").append("Delete").addClass("btn btn-danger");
		var deleteTd = $("<td>").append(deleteBtn);
		var checkBox = $("<input type='checkbox' id='strikeBox'>");

    deleteTd.append(checkBox);
		
		newRow.append(inputTd);
		newRow.append(deleteTd);

		$("tbody").append(newRow);


		$(input).val("").focus();
	});

	$("input type").on("click", function() {
			alert("hey")
			// $("table").addClass("checkBox")
		});


	$("table").on("click", ".btn-danger", function() {
			$(this).parent().parent().remove()
	});

	$("#input").on("keydown", function() {
		$(".alert-danger").hide();
	});
});