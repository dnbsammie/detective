export function Inventory(items: { img: string; name: string }[] = []) {
    const div = document.createElement("div");
    div.className = "inventory";

    div.innerHTML = `
    <h6>INVENTARIO</h6>
    <hr>
    <div class="item-list"></div>
  `;

    const list = div.querySelector(".item-list") as HTMLElement;

    let currentPreview: { modal: HTMLElement; timeoutId: number } | null = null;

    items.forEach(item => {
        const container = document.createElement("div");
        container.className = "item";

        container.innerHTML = `
            <img src="${item.img}" alt="${item.name}">
            <p class="item-name">${item.name}</p>
        `;

        container.addEventListener("mouseenter", () => {
            openImage(item.img, item.name);
        });

        container.addEventListener("mouseleave", () => {
            clearPreview();
        });

        container.addEventListener("click", () => {
            openImage(item.img, item.name);
        });

        list.appendChild(container);
    });

    function clearPreview() {
        if (!currentPreview) return;
        try {
            clearTimeout(currentPreview.timeoutId);
        } catch (e) { }
        currentPreview.modal.remove();
        currentPreview = null;
    }

    function openImage(url: string, name: string) {
        clearPreview();

        const modal = document.createElement("div");
        modal.className = "modal-img";
        modal.innerHTML = `
      <div class="modal-bg"></div>
      <div class="modal-content">
      <img src="${url}" alt="${name}">
      </div>
    `;

        modal.querySelector(".modal-bg")?.addEventListener("click", () => {
            if (currentPreview) {
                clearTimeout(currentPreview.timeoutId);
                currentPreview = null;
            }
            modal.remove();
        });

        document.body.appendChild(modal);

        const PREVIEW_MS = 1500;
        const t = window.setTimeout(() => {
            modal.remove();
            if (currentPreview) currentPreview = null;
        }, PREVIEW_MS);

        currentPreview = { modal, timeoutId: t };
    }

    return div;
}