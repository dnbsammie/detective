export function Notebook(notes: string[] = [], suspects: string[] = []) {
    const div = document.createElement("div");
    div.className = "notebook";

    div.innerHTML = `
    <h6>NOTAS</h6>
    <hr>
    <div class="toggle">
      <button id="nb-notes">Pistas</button>
      <button id="nb-suspects">Sospechosos</button>
    </div>

    <ul class="nb-list nb-notes"></ul>
    <ul class="nb-list nb-suspects" style="display:none"></ul>
  `;

    const notesList = div.querySelector(".nb-notes") as HTMLUListElement;
    const suspectsList = div.querySelector(".nb-suspects") as HTMLUListElement;

    notes.forEach(n => {
        const li = document.createElement("li");
        li.textContent = n;
        notesList.appendChild(li);
    });

    suspects.forEach(s => {
        const li = document.createElement("li");
        li.textContent = s;
        suspectsList.appendChild(li);
    });

    // toggle logic
    div.querySelector("#nb-notes")?.addEventListener("click", () => {
        notesList.style.display = "block";
        suspectsList.style.display = "none";
    });

    div.querySelector("#nb-suspects")?.addEventListener("click", () => {
        notesList.style.display = "none";
        suspectsList.style.display = "block";
    });

    return div;
}
