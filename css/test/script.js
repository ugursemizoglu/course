// Sahte veri (normalde JSON dosyadan ajax ile çekeriz)
const projects = [
    { title: "Mr. Koyuncu", category: "Residental Projects", image: "https://bhumandesignstudio.com/wp-content/uploads/2024/10/1-27.jpg" },
    { title: "IPS Sollner", category: "Residental Projects", image: "https://bhumandesignstudio.com/wp-content/uploads/2024/10/1-27.jpg" },
    { title: "Modern Office", category: "Residental Projects", image: "https://bhumandesignstudio.com/wp-content/uploads/2024/10/1-27.jpg" },
    { title: "Family House", category: "Steel Construction", image: "https://bhumandesignstudio.com/wp-content/uploads/2024/10/1-27.jpg" },
    { title: "Cozy Cafe", category: "Steel Construction", image: "https://bhumandesignstudio.com/wp-content/uploads/2024/10/1-27.jpg" },
    { title: "Luxury Sauna", category: "Steel Construction", image: "https://bhumandesignstudio.com/wp-content/uploads/2024/10/1-27.jpg" },
    { title: "Fashion Store", category: "Turnkey Projects", image: "https://bhumandesignstudio.com/wp-content/uploads/2024/10/1-27.jpg" },
    { title: "Villa Exterior", category: "Turnkey Projects", image: "https://bhumandesignstudio.com/wp-content/uploads/2024/10/1-27.jpg" },
    { title: "Construction Site", category: "Turnkey Projects", image: "https://bhumandesignstudio.com/wp-content/uploads/2024/10/1-27.jpg" },
    { title: "Blueprint Design", category: "Project Design", image: "https://bhumandesignstudio.com/wp-content/uploads/2024/10/1-27.jpg" },
    { title: "Mr. Koyuncu", category: "Project Design", image: "https://bhumandesignstudio.com/wp-content/uploads/2024/10/1-27.jpg" },
    { title: "IPS Sollner", category: "Project Design", image: "https://bhumandesignstudio.com/wp-content/uploads/2024/10/1-27.jpg" },
    { title: "Modern Office", category: "Residental Projects", image: "https://bhumandesignstudio.com/wp-content/uploads/2024/10/1-27.jpg" },
    { title: "Family House", category: "Residental Projects", image: "https://bhumandesignstudio.com/wp-content/uploads/2024/10/1-27.jpg" },
    { title: "Cozy Cafe", category: "Residental Projects", image: "https://bhumandesignstudio.com/wp-content/uploads/2024/10/1-27.jpg" },
    { title: "Luxury Sauna", category: "Residental Projects", image: "https://bhumandesignstudio.com/wp-content/uploads/2024/10/1-27.jpg" },
    { title: "Fashion Store", category: "Residental Projects", image: "https://bhumandesignstudio.com/wp-content/uploads/2024/10/1-27.jpg" },
    { title: "Villa Exterior", category: "Residental Projects", image: "https://bhumandesignstudio.com/wp-content/uploads/2024/10/1-27.jpg" },
    { title: "Construction Site", category: "Residental Projects", image: "https://bhumandesignstudio.com/wp-content/uploads/2024/10/1-27.jpg" },
    { title: "Blueprint Design", category: "Residental Projects", image: "https://bhumandesignstudio.com/wp-content/uploads/2024/10/1-27.jpg" },
];

// Projeleri yükleme fonksiyonu
function loadProjects(filter = 'all') {
    const grid = document.getElementById('projectGrid');
    grid.innerHTML = '';

    const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.category === filter);

    filteredProjects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.innerHTML = `
            <img src="${project.image}" alt="${project.title}">
            <div class="project-info">
                <h3>${project.title}</h3>
                <span>${project.category.toUpperCase()}</span>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Butonlara click eventi bağlama
document.querySelectorAll('.filter').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.filter').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const category = button.getAttribute('data-category');
        loadProjects(category);
    });
});

// Sayfa yüklenince tüm projeleri göster
window.onload = () => {
    loadProjects();
};
