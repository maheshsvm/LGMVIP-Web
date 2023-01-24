console.log("script is working well")
showNotes();
// implementing add note functionality
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function () {
    let addTxt = document.getElementById("addTxt");
    let insertVal = addTxt.value;
    let notes = localStorage.getItem("notes");
    if (notes === null) {
        notesObj = []
    }
    else {
        notesObj = JSON.parse(notes)
    }
    notesObj.push(insertVal);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    showNotes();
})

function showNotes() {
    let notes = localStorage.getItem("notes")
    let notes_container = document.getElementById("notes_container")
    html = "";
    if (notes == null || notes == "[]") {
        html += "<p> Nothing to show use add Todos to add new todos";
    }
    else {
        notesObj = JSON.parse(notes);
        Array.from(notesObj).forEach(function (element, index) {
            html += `
            <div class="noteCard card my-3 mx-3" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">Todo ${index + 1}</h5>
                <p class="card-text">${element}</p>
                <button id = "${index}" onclick = "deleteNote(this.id)" class="btn btn-primary">Delete Todo</button>
            </div>
        </div>
            `
        })
    }
    notes_container.innerHTML = html;
}


// implementing delete note functionality
function deleteNote(index) {
    let notes = localStorage.getItem("notes")
    notesObj = JSON.parse(notes)
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}


//implementing search fuctionality
let search = document.getElementById("search");
const searchItem = () => {
    // console.log(search.value)
    let searchStr = search.value.toLowerCase();
    let allNotes = document.getElementsByClassName("noteCard");
    Array.from(allNotes).forEach(function (element) {
        let currStr = element.getElementsByTagName("p")[0].innerText.toLowerCase();
        if (currStr.includes(searchStr)) {
            element.style.display = "block";
        }
        else {
            element.style.display = "none";
        }
    })
}
search.addEventListener("input", searchItem)