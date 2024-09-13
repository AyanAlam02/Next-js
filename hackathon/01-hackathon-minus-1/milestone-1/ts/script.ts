// Get the sections and buttons by their IDs
const skillsSection = document.getElementById('skills') as HTMLElement;
const experienceSection = document.getElementById('experience') as HTMLElement;
const personalInfoSection = document.getElementById('personal-info') as HTMLElement;
const educationSection = document.getElementById('education') as HTMLElement;
const projectsSection = document.getElementById('projects') as HTMLElement;

const toggleProjectsBtn = document.getElementById('toggleProjects') as HTMLButtonElement;
const toggleSkillsBtn = document.getElementById('toggleSkills') as HTMLButtonElement;
const toggleExperienceBtn = document.getElementById('toggleExperience') as HTMLButtonElement;
const togglePersonalInfoBtn = document.getElementById('togglePersonalInfo') as HTMLButtonElement;
const toggleEducationBtn = document.getElementById('toggleEducation') as HTMLButtonElement;

// Set default display for sections
const sections = [skillsSection, experienceSection, personalInfoSection, educationSection, projectsSection];
sections.forEach(section => {
    if (!section.style.display) {
        section.style.display = 'block'; // show all sections by default
    }
});

// Function to toggle visibility of a section
function toggleSection(section: HTMLElement) {
    if (section.style.display === 'none') {
        section.style.display = 'block';
    } else {
        section.style.display = 'none';
    }
}

// Add event listeners for each button to toggle respective sections
toggleSkillsBtn.addEventListener('click', () => {
    toggleSection(skillsSection);
});

toggleExperienceBtn.addEventListener('click', () => {
    toggleSection(experienceSection);
});

togglePersonalInfoBtn.addEventListener('click', () => {
    toggleSection(personalInfoSection);
});

toggleEducationBtn.addEventListener('click', () => {
    toggleSection(educationSection);
});

toggleProjectsBtn.addEventListener('click', () => {
    toggleSection(projectsSection);
});
