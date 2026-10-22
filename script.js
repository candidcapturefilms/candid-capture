/*
  CANDID CAPTURE — easy settings
  WhatsApp number is already set to the number used by your current website.
  Format: country code + number, digits only (no +, spaces or dashes).
*/
const WHATSAPP_NUMBER = "8801804358062";
const INSTAGRAM_URL = ""; // Add your Instagram profile link between the quotes.
const FACEBOOK_URL = "https://www.facebook.com/candidcapturefilms";

const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");
if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
    menuToggle.textContent = open ? "×" : "☰";
  });
  nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
    menuToggle.textContent = "☰";
  }));
}

const instagramLink = document.getElementById("instagramLink");
const facebookLink = document.getElementById("facebookLink");
const whatsappLink = document.getElementById("whatsappLink");
if (instagramLink && INSTAGRAM_URL) {
  instagramLink.href = INSTAGRAM_URL;
  instagramLink.target = "_blank";
  instagramLink.rel = "noopener";
}
if (facebookLink && FACEBOOK_URL) {
  facebookLink.href = FACEBOOK_URL;
  facebookLink.target = "_blank";
  facebookLink.rel = "noopener";
}
if (whatsappLink && /^880\d{10}$/.test(WHATSAPP_NUMBER)) {
  whatsappLink.href = "https://wa.me/" + WHATSAPP_NUMBER;
  whatsappLink.target = "_blank";
  whatsappLink.rel = "noopener";
}

const bookingForm = document.getElementById("bookingForm");
if (bookingForm) {
  bookingForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const status = document.getElementById("formStatus");
    const form = new FormData(this);
    const fields = [
      "Hello Candid Capture! I'd like to enquire about your services.",
      "",
      "Name: " + (form.get("name") || ""),
      "Phone / WhatsApp: " + (form.get("phone") || ""),
      "Event: " + (form.get("event") || ""),
      "Event date: " + (form.get("date") || "Not decided"),
      "Details: " + (form.get("message") || "Not provided")
    ];
    if (!/^880\d{10}$/.test(WHATSAPP_NUMBER)) {
      if (status) status.textContent = "The WhatsApp number needs to be checked in the settings at the top of script.js.";
      return;
    }
    const url = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(fields.join("\n"));
    window.open(url, "_blank", "noopener");
    if (status) status.textContent = "WhatsApp should open in a new tab with your inquiry ready to send.";
  });
}
