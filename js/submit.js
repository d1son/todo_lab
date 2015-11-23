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
		var checkBox = $("<input type='checkbox' id='strikeBox'>").attr("id", "strikeBox").attr("data-state", "not");

    deleteTd.append(checkBox);
		
		newRow.append(inputTd);
		newRow.append(deleteTd);

		$("tbody").append(newRow);


		// $(document).on("click", ".checkboxes", function(){
  //   var dataState = $(this).attr("data-state");
  //   if(dataState === "not-checked"){
  //   $(this).parent().attr("class", "str");
  //   $(this).attr("data-state", "checked");
  //   }
  //   else{
  //   $(this).parent().removeClass();
  //   $(this).attr("data-state", "not-checked");
  //   }

		$(document).on("click", "#strikeBox", function() {
		var dataState = $(this).attr("data-state");
			if(dataState === "not-checked") {
				$(this).parent().attr("class", "checkBox");
				$(this).attr("data-state", "checked");
			} else {
				$(this).parent().removeClass();
	  		$(this).attr("data-state", "not-checked");
			}
		});


		$(input).val("").focus();
	});



	$("table").on("click", ".btn-danger", function() {
			$(this).parent().parent().remove()
	});

	$("#input").on("keydown", function() {
		$(".alert-danger").hide();
	});
});