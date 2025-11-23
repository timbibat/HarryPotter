var myContainer = document.getElementById("cardContainer");
if (!myContainer) {
  console.error('cardContainer element not found');
} else if (typeof Characters === 'undefined' || !Array.isArray(Characters)) {
  console.error('Characters array not found or not an array');
} else {
  const FALLBACK_IMG = 'assets/img/Hogwarts-Crest.png';

  Characters.forEach((character) => {
    const imgSrc = character.img || character.image || FALLBACK_IMG;

    myContainer.innerHTML += `
            <div class="col-xl-3 col-lg-4 col-md-6 mb-4">
                <div class="card h-100 border-0 bg-transparent" 
                     style="cursor: pointer;"
                     tabindex="0"
                     role="link"
                     onclick="window.location.href='view.html?characterID=${encodeURIComponent(character.name)}';"
                     onkeypress="if(event.key === 'Enter' || event.key === ' ') { window.location.href='view.html?characterID=${encodeURIComponent(character.name)}'; }">
                    
                    <div class="position-relative rounded-3 overflow-hidden shadow" 
                         style="border: 1px solid rgba(255, 255, 255, 0.15);">
                        
                        <img src="${imgSrc}" class="w-100" alt="${character.name}" loading="lazy" 
                             style="height: 450px; object-fit: cover; transition: transform 0.4s ease;"
                             onmouseover="this.style.transform='scale(1.05)'"
                             onmouseout="this.style.transform='scale(1)'"
                             onerror="this.onerror=null;this.src='${FALLBACK_IMG}';">
                        
                        <div class="position-absolute bottom-0 start-0 w-100 d-flex flex-column justify-content-end align-items-center pb-4 pt-5" 
                             style="background: linear-gradient(to top, rgba(0,0,0,0.95) 10%, rgba(0,0,0,0.6) 50%, transparent 100%); pointer-events: none;">
                            
                            <h3 class="text-white fw-bold text-center mb-2 px-2" 
                                style="font-family: serif; letter-spacing: 0.5px; text-shadow: 0 2px 10px rgba(0,0,0,0.8); font-size: 1.5rem;">
                                ${character.name}
                            </h3>
                            
                            <div class="bg-warning" style="height: 2px; width: 40px; box-shadow: 0 0 10px #ffc107;"></div>
                            
                            <small class="text-white-50 mt-2 text-uppercase" style="font-size: 0.7rem; letter-spacing: 2px;">View Profile</small>
                        </div>
                    </div>
                </div>
            </div>`;
  });
}

const getCharacterDetails = async (characterName) => {
  try {
    if (typeof Characters === 'undefined' || !Array.isArray(Characters)) {
      console.error('Characters array not available for getCharacterDetails');
      return;
    }

    const character = Characters.find(c => c.name === characterName);

    if (character) {
      document.title = `${character.name}`;
      const FALLBACK_IMG = 'assets/img/Hogwarts-Crest.png';
      const profileImgEl = document.getElementById("profileImg");
      if (profileImgEl) {
        profileImgEl.src = character.img || character.image || FALLBACK_IMG;
        profileImgEl.onerror = () => {
          profileImgEl.onerror = null;
          profileImgEl.src = FALLBACK_IMG;
        };
      }
    }
  } catch (error) {
    console.error('Error getting character details:', error);
  }
};