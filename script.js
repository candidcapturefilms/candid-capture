/*
  CANDID CAPTURE — quick settings
  1. Replace WHATSAPP_NUMBER with your WhatsApp number including country code,
     digits only. Bangladesh example format: 8801XXXXXXXXX (no +, spaces or dashes).
  2. Add your real Instagram/Facebook URLs below.
*/
const WHATSAPP_NUMBER = "8801804358062";
const INSTAGRAM_URL = "";
const FACEBOOK_URL = "https://www.facebook.com/candidcapturefilms";

document.getElementById("year").textContent = new Date().getFullYear();

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");
menuToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.textContent = open ? "×" : "☰";
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.textContent = "☰";
}));

if (INSTAGRAM_URL) document.getElementById("instagramLink").href = INSTAGRAM_URL;
if (FACEBOOK_URL) document.getElementById("facebookLink").href = FACEBOOK_URL;

document.getElementById("bookingForm").addEventListener("submit", function(event) {
  event.preventDefault();
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
    alert("Before booking inquiries can work, open script.js and replace WHATSAPP_NUMBER with your WhatsApp number (digits only, e.g. 8801XXXXXXXXX).");
    return;
  }
  window.open("https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(fields.join("\n")), "_blank", "noopener");
});
