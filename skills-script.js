function toggleDropdown(id) {
    const dropdown = document.getElementById(id);
    dropdown.classList.toggle('active'); // Toggle the visibility of the dropdown
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block'; // Show/Hide effect
}

function showExplanation(id) {
    const explanation = document.getElementById(id);
    explanation.style.display = 'block'; // Show the explanation
}

function hideExplanation(id) {
    const explanation = document.getElementById(id);
    explanation.style.display = 'none'; // Hide the explanation
}
