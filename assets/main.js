const btnNewTask = document.querySelector(".btn-newtask");
const notes = JSON.parse(localStorage.getItem("notes"));

if (notes) {
  notes.forEach((note) => {
    addNewNote(note);
  });
}

btnNewTask.addEventListener("click", () => {
  addNewNote();
});

function addNewNote(text = "") {
  const myContainer = document.querySelector(".container");

  const note = document.createElement("div");
  note.classList.add("box-note");

  note.innerHTML = `
    <div class="top-color">
        <i class="fa-solid fa-pen-to-square btn-edit" title="Editar ou salvar"></i>
        <i class="fa-solid fa-trash btn-delete" title="Deletar nota"></i>
    </div>
    <textarea class="${
      text ? "hidden" : ""
    }" name="" id="" cols="20" rows="15"></textarea>
    `;

  const btnDelete = note.querySelector(".btn-delete");
  const btnEdit = note.querySelector(".btn-edit");
  const textArea = note.querySelector("textarea");
  textArea.value = text;

  btnDelete.addEventListener("click", () => {
    note.remove();
    pesistData();
  });

  btnEdit.addEventListener("click", () => {
    const noteCurrent = note.querySelector("textarea");
    noteCurrent.classList.toggle("hidden");
  });

  textArea.addEventListener("input", (e) => {
    const { value } = e.target;
    pesistData();
  });

  myContainer.appendChild(note);
}

function pesistData() {
  const notesText = document.querySelectorAll("textarea");
  // console.log(notesText.values);

  const notes = [];

  notesText.forEach((note) => {
    console.log(note.value);
    notes.push(note.value);
  });

  localStorage.setItem("notes", JSON.stringify(notes));
}
