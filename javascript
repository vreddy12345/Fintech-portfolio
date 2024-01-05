function showSection(sectionId) {

    const sections = document.querySelectorAll('.portfolio-section');
    sections.forEach(section => {
        section.style.display = 'none';
    });


    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }
}

function addProject() {

    const projectName = prompt('Enter project name:');
    const projectDescription = prompt('Enter project description:');

    if (projectName && projectDescription) {
        const projectsView = document.getElementById('projects-view');


        const projectElement = document.createElement('div');
        projectElement.classList.add('project-item');
        projectElement.innerHTML = `<h3>${projectName}</h3><p>${projectDescription}</p>`;


        projectsView.appendChild(projectElement);
    } else {
        alert('Please enter both project name and description.');
    }
}
