const itemsPerPage = 5;
const items = Array.from({ length: 50 }, (_, i) => `Item ${i + 1}`);
const totalPages = Math.ceil(items.length / itemsPerPage);

const itemList = document.getElementById('itemList');
const pagination = document.getElementById('pagination');

// Function to render items for the current page
function renderItems(page) {
    itemList.innerHTML = '';
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const paginatedItems = items.slice(start, end);

    paginatedItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        itemList.appendChild(li);
    });
}

// Function to render pagination buttons
function renderPagination() {
    pagination.innerHTML = '';
    
    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement('button');
        button.textContent = i;
        button.classList.add(i === currentPage ? 'active' : '');
        
        button.addEventListener('click', () => {
            currentPage = i;
            renderItems(currentPage);
            renderPagination();
        });
        
        pagination.appendChild(button);
    }
}

// Initialize pagination
let currentPage = 1;
renderItems(currentPage);
renderPagination();
