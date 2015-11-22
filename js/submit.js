$(document).ready(function() {
	$("#submit").on("click", function(e){
		e.preventDefault();
		
		var toDo1 = $("#input").val();


		var newRow = $("<tr>");
		var inputTd = $("<td>").append(toDo1);
		var deleteBtn = $("<button>").append("Delete");
		var deleteTd = $("<td>").append(deleteBtn);

		newRow.append(inputTd);
		newRow.append(deleteBtn);

		$("tbody").append(newRow);

		$(deleteBtn).addClass("btn btn-danger")
	});
});