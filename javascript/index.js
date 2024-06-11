
// BEGIN NAVBAR RELATED JS
function toggleNav() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active');
    if (navLinks.classList.contains('active')) {
        document.addEventListener('click', closeNavOnClickOutside);
    } else {
        document.removeEventListener('click', closeNavOnClickOutside);
    }
}

function closeNavOnClickOutside(event) {
    const navLinks = document.getElementById('nav-links');
    const navToggle = document.getElementById('nav-toggle');
    if (!navLinks.contains(event.target) && !navToggle.contains(event.target)) {
        navLinks.classList.remove('active');
        document.removeEventListener('click', closeNavOnClickOutside);
    }
}
// END NAVBAR RELATED JS