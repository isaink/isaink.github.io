	// Global Variable: new notes is in a array.
	var storage = []; 
	var noteList = document.getElementById("list");


	//Properties of NoteTaker
	function Note(){
		var Note = {
	    	text: document.getElementById("plusInput").value,
	    	important: colorForm.Importants.value,
	    	time: new Date().toLocaleTimeString()
	    }
	    return Note;
	}
 //    var buttonAdd = document.getElementById("plusButton");
	// buttonAdd.addEventListener("click", addButtonClick);

	function addButtonClick(){
		var note = Note();
		storage.push(note);
		displayNotes();

	}

	var noteR = document.getElementById("redNotes");
	noteR = [];

	var noteY = document.getElementById("yellowNotes");
	noteY = [];

	var noteG = document.getElementById("greenNotes");
	noteG = [];
	
	// Action to make a list.
	function displayNotes(){
		document.getElementById("yellowL").innerHTML = "";
		document.getElementById("redL").innerHTML="";
		document.getElementById("greenL").innerHTML="";

		for (var i = 0; i < storage.length; i++){
			//document.getElementById("list").innerHTML += "<li style='background-color:"+storage[i].important+"'>"+ storage[i].text + "</li>";
		
		if (storage[i].important == 'red') {
				document.getElementById("redL").innerHTML += "<li>"+storage[i].text+"</li>"+ storage[i].time +"<br>";
		} else if (storage[i].important == 'yellow'){
				document.getElementById("yellowL").innerHTML += "<li>"+ storage[i].text + "</li>" + storage[i].time + "<br>";
		}else if(storage[i].important == 'green'){
				document.getElementById("greenL").innerHTML += "<li>"+ storage[i].text + "</li>" + storage[i].time + "<br>";
			}
		}
	}

	// var not = document.getElementById("deleteButton"); 
	// 	not.addEventListener("click", deleteButtonClick);

	function deleteButtonClick(){
		displayNotes();
		var h = prompt("Wich one you want to delete? Example: 1, 2, 3");
		storage.splice(0,1);
		
		displayNotes();	
	}

	// function dataNotes(){
	// 	console.log("test");
	// 	for (var i = 0; i < storage.length; i++){
	// 		if (storage[i].important == 'red') {
	// 			document.getElementById("redL").innerHTML += "<li>"+storage[i].text+"</li>";
	// 		} else if (storage[i].important == 'yellow'){
	// 			document.getElementById("yellowL").innerHTML += "<li>"+ storage[i].text + "</li>";
	// 		} else{
	// 			document.getElementById("greenL").innerHTML += "<li>"+ storage[i].text + "</li>";
	// 		}
	// 	}
	//}
