const projects = {
    'Broceliande Immo': {
        title: 'Broceliande Immo - Agence Immobilière',
        image: 'img/broceliande_screen.png',
        description: 'Application web complète pour une agence immobilière permettant la gestion des biens, ' +
                    'des clients et des visites. Le site offre une interface moderne pour la recherche de ' +
                    'propriétés et la prise de rendez-vous en ligne.',
        technologies: [
            'PHP',
            'MySQL',
            'HTML5',
            'CSS3',
            'Bootstrap',
        ],
        features: [
            'Interface de recherche avancée de biens',
            'Espace client personnalisé',
            'Système de prise de rendez-vous en ligne',
            'Panel administratif complet',
            'Gestion des biens immobiliers',
            'Gestion des clients et des contacts',
            'Système de notifications par email',
            'Interface responsive design',
            'Galerie photos dynamique',
            'Filtres de recherche multicritères'
        ],
        github: 'https://github.com/Josephdeveze/Broceliande_immo'
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