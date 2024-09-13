"use strict";
// Get the sections and buttons by their IDs
const skillsSection = document.getElementById('skills');
const experienceSection = document.getElementById('experience');
const personalInfoSection = document.getElementById('personal-info');
const educationSection = document.getElementById('education');
const projectsSection = document.getElementById('projects');
const toggleProjectsBtn = document.getElementById('toggleProjects');
const toggleSkillsBtn = document.getElementById('toggleSkills');
const toggleExperienceBtn = document.getElementById('toggleExperience');
const togglePersonalInfoBtn = document.getElementById('togglePersonalInfo');
const toggleEducationBtn = document.getElementById('toggleEducation');
// Set default display for sections
const sections = [skillsSection, experienceSection, personalInfoSection, educationSection, projectsSection];
sections.forEach(section => {
    if (!section.style.display) {
        section.style.display = 'block'; // show all sections by default
    }
});
// Function to toggle visibility of a section
function toggleSection(section) {
    if (section.style.display === 'none') {
        section.style.display = 'block';
    }
    else {
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
