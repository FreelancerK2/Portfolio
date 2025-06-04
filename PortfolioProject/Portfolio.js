var typed = new Typed(".text", {
    strings:["Fontend Developer", "Web Developer","Freelancer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

document.getElementById('menu-icon').addEventListener('click', function() {
    document.querySelector('.navbar').classList.toggle('active');
});

// Add click event listeners to all navbar links
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', function() {
        // Remove active class from navbar to close the menu
        document.querySelector('.navbar').classList.remove('active');
    });
});



