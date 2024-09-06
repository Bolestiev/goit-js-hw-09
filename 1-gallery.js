import"./assets/styles-B4s-4mBC.js";import{S as t}from"./assets/vendor-CgTBfC_f.js";const i=[{src:"path/to/small-image1.jpg",largeSrc:"path/to/large-image1.jpg",alt:"Image description 1"},{src:"path/to/small-image2.jpg",largeSrc:"path/to/large-image2.jpg",alt:"Image description 2"}],g=a=>a.map(({src:e,largeSrc:l,alt:r})=>`
            <li class="gallery-item">
                <a class="gallery-link" href="${l}">
                    <img class="gallery-image" src="${e}" alt="${r}" />
                </a>
            </li>
        `).join(""),o=document.querySelector(".gallery");o.innerHTML=g(i);new t(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});
//# sourceMappingURL=1-gallery.js.map
