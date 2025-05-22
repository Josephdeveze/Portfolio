const projects = {
    'Maison Gannac': {
        title: 'Maison Gannac',
        image: 'img/gannac_screen.png',
        description: 'Gestion des produits et des clients pour la Maison Gannac, ' +
                    'une entreprise spécialisée dans la vente de produits locaux. ',
        technologies: ['ERP', 'ODOO'],
        features: [
            'Présentation des produits',
            'Interface responsive',
            'Galerie photos'
        ],
    },
    // Ajoutez d'autres projets ici...
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
        
        if (project.github) document.getElementById('projectGithub').href = project.github
    }
}

document.addEventListener('DOMContentLoaded', loadProjectDetails);