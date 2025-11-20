export function Footer() {
    const footer = document.createElement("footer");
    footer.setAttribute("aria-label", "Pie de página");

    footer.innerHTML = `
        <small>Hecho por:</small>
        <h3 aria-label="autor">SAMUEL RIVERA</h3>
        <a
            href="#"
            target="_blank"
            rel="noonpener noreferrer"
            aria-label="Github Repository Link"
            >&copy;2025 DETECTIVE / Operación San Lorenzo</a
        >
  `;

    return footer;
}
