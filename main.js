window.onload = () => {
    let contactMeTitle = document.querySelector(".contact-me-title");
    let contactMeItems = document.querySelector(".contact-me .item-list");
    contactMeTitle.addEventListener("click", () => {
        if (contactMeItems.style.display === "none") {
            contactMeItems.style.display = "block";
        } else {
            contactMeItems.style.display = "none";
        }
    });
};
