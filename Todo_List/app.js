class Note {
  constructor(title, description){
    this.title = title;
    this.description = description;
  }
}

class Notes {
  constructor(container) {
    this.container = container;
  }

  render(note) {
    const div = document.createElement("div");
    div.classList.add("card");
    div.classList.add("flex-ctr-ctr");
    const h3 = document.createElement("h3");
    h3.innerText = note.title;
    div.append(h3);
    const p = document.createElement("p");
    p.innerText = note.description;
    p.classList.add("flex-ctr-ctr");
    div.append(p);
    this.container.append(div);
  }
}

const form = document.querySelector('form');
const title = document.querySelector("#title");
const description = document.querySelector("#description");
const cards = document.querySelector(".cards");


const list = new Notes(cards);
form.addEventListener('submit', (e) => {
  if(form.checkValidity()) {
    e.preventDefault();
    const note = new Note(title.value, description.value);
    list.render(note);
    form.reset();
  }
})