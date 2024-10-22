function toggleMenu() {
  menu.style.display =
    menu.style.display === "none" || menu.style.display === ""
      ? "block"
      : "none"; // Toggle between "none" and "block"
}

function closeMenu() {
  menu.style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
  function toggleVisibility(buttonSelector, textSelector) {
    let button = document.querySelector(buttonSelector);
    let textElement = document.getElementById(textSelector);

    if (button && textElement) {
      textElement.style.visibility = "hidden";

      button.addEventListener("mouseover", function () {
        textElement.style.visibility = "visible";
      });

      button.addEventListener("mouseout", function () {
        textElement.style.visibility = "hidden";
      });
    } else {
      console.error(`Elements not found: ${buttonSelector}, ${textSelector}`);
    }
  }

  toggleVisibility(".whatsapp-btn", "whatsapp-text");
  toggleVisibility(".contact-us", "contact-text");
  toggleVisibility(".facebook-btn", "facebook-text");
});
