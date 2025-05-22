const projects = {
    'CRM': {
        title: 'Customer Relationship Management (CRM)',
        image: 'img/litecrm.png',
        description: 'Application CRM développée pour gérer la relation client. ' +
                    'Cette solution permet de suivre le planing avec les clients, ',
        technologies: [
            'PHP',
            'MySQL',
            'Twig',
            'Altorouteur',
        ],
        features: [
            'Gestion des contacts et clients',
            'Pipeline de vente',
            'Gestion des tâches et rappels',
            'Tableau de bord analytique',
            'Historique des interactions',
            'Agenda intégré',
        ],
        github: 'https://github.com/Josephdeveze/LiteCRM'
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