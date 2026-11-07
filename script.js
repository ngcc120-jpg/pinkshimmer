const WHATSAPP = "529995404895";

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".main-nav");
menuButton.addEventListener("click", () => {
  const isOpen = navigation.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");
});

navigation.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
  navigation.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "Abrir menú");
}));

function openWhatsApp(message) {
  window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
}

document.querySelector("#booking-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const message = [
    "Hola Pink Shimmer, me gustaría cotizar una decoración.",
    `Nombre: ${data.get("name")}`,
    `WhatsApp: ${data.get("phone")}`,
    `Celebración: ${data.get("event")}`,
    `Fecha: ${data.get("date")}`,
    data.get("details") ? `Mi idea: ${data.get("details")}` : "",
  ].filter(Boolean).join("\n");
  document.querySelector("#form-message").textContent = "Abriendo WhatsApp con los datos de tu evento…";
  openWhatsApp(message);
});

document.querySelector("#product-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const question = document.querySelector("#product-question").value.trim();
  if (question) openWhatsApp(`Hola Pink Shimmer, tengo una pregunta sobre sus productos: ${question}`);
});

const dateInput = document.querySelector('input[name="date"]');
const today = new Date();
dateInput.min = new Date(today.getTime() - today.getTimezoneOffset() * 60000).toISOString().slice(0, 10);

