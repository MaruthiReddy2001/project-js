const searchButton = document.getElementById('searchButton');
const searchInput = document.getElementById('searchInput');
const articles = document.querySelectorAll('.article');

searchButton.addEventListener('click', () => {
    const searchTerm = searchInput.value.toLowerCase();

    articles.forEach(article => {
        const title = article.getAttribute('data-title').toLowerCase();
        if (title.includes(searchTerm)) {
            article.style.display = 'block';
        } else {
            article.style.display = 'none';
        }
    });
});

// Optional: Handle 'Enter' key to search
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        searchButton.click();
    }
});
