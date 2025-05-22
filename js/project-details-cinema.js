const projects = {
    'Cinema': {
        title: 'Application de Gestion de Cinéma',
        image: 'img/Cinema.png',
        description: 'Application web développée pour gérer un cinéma, permettant la réservation de séances, ' +
                    'la gestion des films et des salles. Le système offre une interface complète tant pour ' +
                    'les clients que pour les administrateurs.',
        technologies: [
            'Java',
            'MySQL',
            'JavaFX',
            'Scene Builder',
        ],
        features: [
            'Système de réservation de places en ligne',
            'Gestion des films et des séances',
            'Planning des salles de projection',
            'Interface administrateur pour la gestion du cinéma',
            'Gestion des tarifs et des réductions',
            'Historique des réservations',

        ],
        github: 'https://github.com/Josephdeveze/Cinema'
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