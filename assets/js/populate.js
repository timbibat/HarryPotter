var myContainer = document.getElementById("cardContainer");
Characters.forEach((character, i) => {
    myContainer.innerHTML += `
            <div class="col-lg-3 col-md-4 col-sm-6 mb-4">
                <div class="card hp-card h-100 border-0" tabindex="0">
                    <img src="${character.img}" class="card-img" alt="${character.name}" loading="lazy">
                    <div class="card-img-overlay d-flex align-items-end p-0">
                        <div class="name-overlay">
                            <h5 class="mb-0">${character.name}</h5>
                        </div>
                    </div>
                </div>
            </div>`
});