document.addEventListener('DOMContentLoaded', function() {
    
  
    const catalogBtn = document.getElementById('load-catalog');

    if (catalogBtn) {
        catalogBtn.addEventListener('click', function(e) {
            e.preventDefault(); 
            loadCategories();   
        });
    } else {
        console.error("Кнопку з id='load-catalog' не знайдено в HTML!");
    }
});
function loadCategories() {
    fetch('categories.json')
        .then(response => response.json())
        .then(data => {
            let html = '<h2>Наше меню</h2><div class="list-group">';
            data.forEach(cat => {
                html += `<a href="#" class="list-group-item" onclick="loadItems('${cat.shortname}')">${cat.name}</a>`;
            });
            
            const randomCat = data[Math.floor(Math.random() * data.length)].shortname;
            html += `<a href="#" class="list-group-item list-group-item-warning" onclick="loadItems('${randomCat}')">Specials</a>`;
            html += '</div>';
            document.getElementById('main-content').innerHTML = html;
        });
}


function loadItems(categoryShortname) {
    fetch(`${categoryShortname}.json`)
        .then(response => response.json())
        .then(data => {
            let html = `<h3>Товари категорії: ${categoryShortname}</h3><div class="row">`;
            data.forEach(item => {
                html += `
                    <div class="col-md-4 mb-3">
                        <div class="card">
                            <img src="https://placehold.co/200x200?text=${item.shortname}" class="card-img-top" alt="${item.name}">
                            <div class="card-body">
                                <h5 class="card-title">${item.name}</h5>
                                <p class="card-text">${item.description}</p>
                                <p class="fw-bold">Ціна: ${item.price} грн</p>
                            </div>
                        </div>
                    </div>`;
            });
            html += '</div>';
            document.getElementById('main-content').innerHTML = html;
        });
}
