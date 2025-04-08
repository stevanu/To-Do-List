const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value.trim() === '') {
        alert("You must write something");
    } else {
        let li = document.createElement("li");
        li.textContent = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = ''; // Kosongkan input setelah menambahkan task
    saveData ();
    
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData ();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData ();
        
    }
}, false);

inputBox.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        e.preventDefault(); // cegah form submit/reload
        addTask();
    }
});


function saveData () {
    localStorage.setItem("data",listContainer.innerHTML);    
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();

