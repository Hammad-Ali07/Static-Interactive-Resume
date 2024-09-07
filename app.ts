// app.ts
const ToggleButton = document.getElementById('toggle-skills') as HTMLButtonElement;
const SkillsSection = document.getElementById('skills') as HTMLElement;

// Set initial state
SkillsSection.style.display = 'block';

ToggleButton.addEventListener('click', () => {
  // Toggle the visibility of the skills section with smooth animation
  if (SkillsSection.style.display === 'block') {
    SkillsSection.style.transition = 'opacity 0.5s ease-in-out';
    SkillsSection.style.opacity = '0';
    setTimeout(() => { SkillsSection.style.display = 'none'; }, 500);
  } else {
    SkillsSection.style.display = 'block';
    setTimeout(() => { SkillsSection.style.opacity = '1'; }, 0);
  }
});
