document.addEventListener('DOMContentLoaded', function() {
    
 
    const catalogBtn = document.getElementById('load-catalog');

    if (catalogBtn) {
        catalogBtn.addEventListener('click', function(e) {
            e.preventDefault(); 
            loadCategories();   
        });
        console.log("Успіх: Кнопка знайдена!");
    } else {
        console.error("Критика: Елемент id='load-catalog' не знайдено. Перевір HTML!");
    }
});


function loadCategories() {
    fetch('categories.json')
        .then(response => {
            if (!response.ok) throw new Error('Файл categories.json не знайдено (404)');
            return response.json();
        })
        .then(data => {
            let html = '<h2>Наше меню</h2><div class="list-group">';
            
            data.forEach(cat => {
                html += `<a href="#" class="list-group-item list-group-item-action" 
                         onclick="loadItems('${cat.shortname}')">${cat.name}</a>`;
            });
            
           
            const randomIdx = Math.floor(Math.random() * data.length);
            const randomCat = data[randomIdx].shortname;
            
            html += `<a href="#" class="list-group-item list-group-item-warning" 
                     onclick="loadItems('${randomCat}')">✨ Specials (${data[randomIdx].name})</a>`;
            
            html += '</div>';
            document.getElementById('main-content').innerHTML = html;
        })
        .catch(error => console.error("Помилка Ajax:", error));
}


function loadItems(categoryShortname) {
    fetch(`${categoryShortname}.json`)
        .then(response => {
            if (!response.ok) throw new Error(`Файл ${categoryShortname}.json не знайдено`);
            return response.json();
        })
        .then(data => {
            let html = `<h3>Категорія: ${categoryShortname}</h3><div class="row">`;
            
            data.forEach(item => {
                
                html += `
                    <div class="col-md-4 mb-3">
                        <div class="card h-100 shadow-sm">
                            <img src="https://placehold.co/200x200?text=${item.name}" 
                                 class="card-img-top" alt="${item.name}">
                            <div class="card-body">
                                <h5 class="card-title">${item.name}</h5>
                                <p class="card-text small">${item.description}</p>
                                <p class="fw-bold text-success">Ціна: ${item.price} грн</p>
                            </div>
                        </div>
                    </div>`;
            });
            
            html += '</div>';
            html += '<button class="btn btn-secondary mt-3" onclick="loadCategories()">Назад до категорій</button>';
            document.getElementById('main-content').innerHTML = html;
        })
        .catch(error => alert("Помилка завантаження: " + error.message));
}
