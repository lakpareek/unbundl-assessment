const accordionHeaders = document.querySelectorAll(".accordion-header");
const accordionContents = document.querySelectorAll(".accordion-content");

accordionHeaders.forEach((header) => {
  header.addEventListener("click", () => {
    const accordionItem = header.parentElement;
    const accordionContent = accordionItem.querySelector(".accordion-content");
    const accordionIcon = header.querySelector(".accordion-icon");

    const isActive = accordionContent.classList.contains("active");

    // Collapse all others
    accordionContents.forEach((content) => {
      if (content !== accordionContent) {
        content.classList.remove("active");
        content.style.maxHeight = "0px";

        const icon = content.parentElement.querySelector(".accordion-icon");
        if (icon) icon.textContent = "+";
      }
    });

    // Toggle current
    if (isActive) {
      accordionContent.classList.remove("active");
      accordionContent.style.maxHeight = "0px";
      accordionIcon.textContent = "+";
    } else {
      accordionContent.classList.add("active");
      accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
      accordionIcon.textContent = "−";
    }
  });
});
