var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	setToggleDoneClass(li);
	createDeleteButton(li);
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function setToggleDoneClass(li) {
	li.setAttribute("class", "done");
	li.classList.toggle("done");
	li.addEventListener("click", function() {
		li.classList.toggle("done");
	});
}

function createDeleteButton(element) {
	var deleteBtn = document.createElement("button");
	deleteBtn.appendChild(document.createTextNode("Delete"));
	deleteBtn.addEventListener("click", function() {
		element.remove();
	})
	element.appendChild(deleteBtn);
}

/*add event listener to all li element that has been created
*/
button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

for (var i = 0; i < ul.children.length; i++) {
	setToggleDoneClass(ul.children[i]);
	createDeleteButton(ul.children[i]);
}