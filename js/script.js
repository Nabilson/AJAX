// Event handling
document.addEventListener("DOMContentLoaded", function (event) {
	//Unobstrusive event binding
	document.querySelector("button").addEventListener("click", function(){
		var self = this;
		var name = "";

		//Call server to get the name
		$ajaxUtils.sendGetRequest("Data/name.txt", function (request){
				var name = request.responseText;
				document.querySelector("#content")
					.innerHTML = "<h2>Hello " + name + "!"
			});

		
	});
}
);
