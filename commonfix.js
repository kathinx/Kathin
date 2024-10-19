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
/* advice button */

function showForm() {
    document.getElementById("advice-form").style.display = "block";
}

function submitAdvice() {
    const advice = document.getElementById("advice-text").value;
    if(advice) {
        const email = "your-email@example.com";
        const whatsapp = "+919976507561"; // Replace with your WhatsApp number
        window.open(`mailto:${email}?subject=Career Advice&body=${advice}`, '_blank');
        window.open(`https://wa.me/${whatsapp}?text=${encodeURIComponent(advice)}`, '_blank');
        document.getElementById("advice-form").style.display = "none";
        document.getElementById("advice-text").value = ""; // Clear the text area
    }
}

/* Run adjustments when DOM is loaded */
document.addEventListener('DOMContentLoaded', () => {
    adjustPopup();
    alignNavigation();
});
