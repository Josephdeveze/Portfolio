const projects = {
    'Ticketing': {
        title: 'Système de Ticketing',
        image: 'img/litemvc.png',
        description: 'Application de gestion de tickets développée avec une architecture MVC personnalisée. ' +
                    'Ce système permet de gérer les demandes de support, suivre leur progression et maintenir ' +
                    'une communication efficace entre les utilisateurs et l\'équipe support.',
        technologies: [
            'PHP',
            'MySQL',
            'Twig',
            'Altorouter',
            'Architecture MVC',
        ],
        features: [
            'Création et suivi des tickets',
            'Système de priorités',
            'Attribution des tickets aux techniciens',
            'Historique des interventions',
            'Dashboard administrateur',
            'Système de commentaires',
            'Gestion des statuts',
            'Recherche et filtrage des tickets'
        ],
        github: 'https://github.com/Josephdeveze/Ticketing'
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