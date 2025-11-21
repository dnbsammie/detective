const MAX_LOGS = 4;
export function GameLog() {
  const div = document.createElement("div");
  div.className = "gamelog";

  div.innerHTML = `
    <h6>GAME LOG</h6>
    <hr>
    <ul class="log-list"></ul>
  `;

  const list = div.querySelector(".log-list") as HTMLUListElement;

  function add(message: string) {
    const li = document.createElement("li");
    li.textContent = message;

    list.appendChild(li);

    if (list.children.length > MAX_LOGS) {
      const firstLog = list.firstChild;
      if (firstLog) {
        list.removeChild(firstLog);
      }
    }

    div.scrollTop = div.scrollHeight;
  }

  return { element: div, add };
}
