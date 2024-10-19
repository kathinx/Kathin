/* Ensure popups fit correctly in mobile view */
function adjustPopup() {
    const popups = document.querySelectorAll('.popup');
    popups.forEach(popup => {
        popup.style.maxWidth = '100%';
        popup.style.wordWrap = 'break-word'; /* Prevent text overflow */
    });
}

/* Align icons and navigation boxes */
function alignNavigation() {
    const navBoxes = document.querySelectorAll('.nav-box');
    navBoxes.forEach(box => {
        const icon = box.querySelector('i');
        const text = box.querySelector('a');
        if (icon && text) {
            icon.style.marginRight = '10px'; /* Align icon with text */
        }
    });
}

/* Run adjustments when DOM is loaded */
document.addEventListener('DOMContentLoaded', () => {
    adjustPopup();
    alignNavigation();
});
