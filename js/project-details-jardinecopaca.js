const projects = {
    'Jardin EcoPaca': {
        title: 'Jardin EcoPaca',
        image: 'img/jardinecopaca_screen.png',
        description: 'Jardin EcoPaca est une entreprise spécialisée dans la création et l\'entretien d\'espaces verts. ' +
                    'J\'ai développé leur site web vitrine pour mettre en valeur leurs services et réalisations. ' +
                    'Le site est conçu pour être moderne, responsive et facile à naviguer.',
        technologies: ['HTML5', 'CSS3', 'Bootstrap'],
        features: [
            'Design responsive adapté à tous les appareils',
            'Galerie de photos des réalisations',
            'Présentation des services d\'aménagement paysager',
            'Interface utilisateur intuitive et moderne',
        ],
        site: 'http://www.jardinecopaca.fr',
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