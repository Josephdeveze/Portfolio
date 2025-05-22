const projects = {
    'Facturation': {
        title: 'Système de Facturation',
        image: 'img/Facturation.png',
        description: 'Application de gestion de facturation développée dans le cadre scolaire. ' +
                    'Cette solution permet aux entreprises de gérer leurs factures, clients et produits ' +
                    'de manière efficace et intuitive.',
        technologies: [
            'JAVA',
            'MySQL',
            'HTML5',
            'Scene Builder',
            'JavaFX',
        ],
        features: [
            'Création et gestion des factures',
            'Base de données clients',
            'Catalogue de produits et services',
            'Génération automatique de PDF',
            'Tableau de bord avec statistiques',
            'Gestion des devis',

        ],
        github: 'https://github.com/Josephdeveze/Recepter'
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