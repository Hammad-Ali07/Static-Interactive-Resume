// app.ts
var toggleButton = document.getElementById('toggle-skills');
var skillsSection = document.getElementById('skills');
// Set initial state
skillsSection.style.display = 'block';
toggleButton.addEventListener('click', function () {
    // Toggle the visibility of the skills section with smooth animation
    if (skillsSection.style.display === 'block') {
        skillsSection.style.transition = 'opacity 0.5s ease-in-out';
        skillsSection.style.opacity = '0';
        setTimeout(function () { skillsSection.style.display = 'none'; }, 500);
    }
    else {
        skillsSection.style.display = 'block';
        setTimeout(function () { skillsSection.style.opacity = '1'; }, 0);
    }
});
