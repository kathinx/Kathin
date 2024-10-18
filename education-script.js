function toggleDropdown(id) {
    const dropdown = document.getElementById(id);
    dropdown.classList.toggle('active'); // Toggle the visibility of the dropdown
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block'; // Show/Hide effect  
}
