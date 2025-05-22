const projects = {
    'Croix Rouge': {
        title: 'Croix Rouge - Business Game',
        image: 'img/croixrouge_screen.png',
        description: 'Application web développée dans le cadre du Business Game de la Croix Rouge. Permet la gestion et le suivi des activités humanitaires.',
        technologies: ['MySQL', 'HTML', 'CSS'],
        features: [
            'Tableau de bord administratif',
            'Gestion des utilisateurs',
            'Suivi des activités',
            'Rapports statistiques'
        ],
        github: 'https://github.com/Josephdeveze/Croix-Rouge---Business-Game'
    }
};

function loadProjectDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const projectName = urlParams.get('project');
    
    if (projectName && projects[projectName]) {
        const project = projects[projectName];
        
        document.getElementById('projectTitle').textContent = project.title;
        document.getElementById('projectImage').src = project.image;
        document.getElementById('projectDescription').textContent = project.description;
        
        const techContainer = document.getElementById('projectTechnologies');
        project.technologies.forEach(tech => {
            const tag = document.createElement('span');
            tag.className = 'tag';
            tag.textContent = tech;
            techContainer.appendChild(tag);
        });
        
        const featuresList = document.getElementById('projectFeatures');
        project.features.forEach(feature => {
            const li = document.createElement('li');
            li.textContent = feature;
            featuresList.appendChild(li);
        });
        
        if (project.github) document.getElementById('projectGithub').href = project.github;
    }
}

document.addEventListener('DOMContentLoaded', loadProjectDetails);