document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('.navigation');

    navToggle.addEventListener('click', function () {
        nav.classList.toggle('navigation--visible');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Select the nav-toggle button and dropdown menu
    var navToggle = document.querySelector('.nav-toggle');
    var dropdownMenu = document.querySelector('.dropdown-menu');

    // Toggle the dropdown menu on click
    navToggle.addEventListener('click', function () {
        dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
    });
});

document.addEventListener('click', function(event) {
    var isClickInsideMenu = document.querySelector('.dropdown-menu').contains(event.target);
    var isClickOnToggle = document.querySelector('.nav-toggle').contains(event.target);

    // Hide dropdown if click is outside the menu and not on the toggle button
    if (!isClickInsideMenu && !isClickOnToggle) {
        document.querySelector('.nav-toggle').classList.remove('active');
        document.querySelector('.dropdown-menu').style.display = 'none';
    }
});
