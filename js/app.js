// Init variables
const contentItems = document.querySelector('.content__items');
const mobileInput = document.querySelector('.content__show-input');


// event listeners
window.addEventListener('keydown', (e) => {
    contentItems.innerHTML = `
    <div class="content__item">
    <span class="content__item-title">key</span>
    <p class="content__item-key">${e.key === ' ' ? 'Space' : e.key}</p>
</div>

<div class="content__item">
    <span class="content__item-title">keyCode</span>
    <p class="content__item-key">${e.keyCode}</p>
</div>

<div class="content__item">
    <span class="content__item-title">code</span>
    <p class="content__item-key">${e.code}</p>
</div>

<input type="text" class="content__show-input">
    `;
})

function detectMob() {

    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
        // true for mobile device
        mobileInput.style.display = 'block';
      }else{
        // false for not mobile device
        mobileInput.style.display = 'none';
      }


}

detectMob();