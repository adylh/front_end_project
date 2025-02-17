const contactMethod = document.getElementById("contactMethod");
const emailContainer = document.getElementById("emailContainer");
const whatsappContainer = document.getElementById("whatsappContainer");
const instagramContainer = document.getElementById("instagramContainer");

contactMethod.addEventListener("change", () => {
    emailContainer.classList.add("hidden");
    whatsappContainer.classList.add("hidden");
    instagramContainer.classList.add("hidden");

    const selected = contactMethod.value;
    if (selected === "email") emailContainer.classList.remove("hidden");
    if (selected === "whatsapp") whatsappContainer.classList.remove("hidden");
    if (selected === "instagram") instagramContainer.classList.remove("hidden");
});

document.getElementById("serviceForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const userName = document.getElementById("name").value;
    alert(`Thanks ${userName} for filling in the form! We'll contact you shortly.`);
    this.reset();
    emailContainer.classList.add("hidden");
    whatsappContainer.classList.add("hidden");
    instagramContainer.classList.add("hidden");
});
