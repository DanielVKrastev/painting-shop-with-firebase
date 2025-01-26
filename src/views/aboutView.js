import { html } from "lit-html";
import artCategoriesView from "./partials/artCategoriesView";

const template = () => html`
    <div class="bg-light py-3">
      <div class="container">
        <div class="row">
          <div class="col-md-12 mb-0"><a href="/">Начало</a> <span class="mx-2 mb-0">/</span> <strong class="text-black">За нас</strong></div>
        </div>
      </div>
    </div>  

    <div class="site-section border-bottom" data-aos="fade">
      <div class="container">
        <div class="row mb-5">
          <div class="col-md-6">
            <div class="block-16">
              <figure>
                <img src="./assets/images/elicak.jpg" alt="Image placeholder" class="img-fluid rounded">
               <!-- <a href="https://vimeo.com/channels/staffpicks/93951774" class="play-button popup-vimeo"><span class="ion-md-play"></span></a> -->

              </figure>
            </div>
          </div>
          <div class="col-md-1"></div>
          <div class="col-md-5">
            
            
            <div class="site-section-heading pt-3 mb-4">
              <h2 class="text-black">Как започнах</h2>
            </div>
            <p>Бля бля бля бля бля бля бля бля бля бля бля бля бля бля бля бля бля бля бля бля бля бля бля бля бля бля бля бля бля бля бля бля бля бля бля бля бля бля бля бля бля бля бля бля бля бля бля бля бля бля бля бля бля бля бля бля бля бля бля бля бля бля бля бля бля бля бля бля бля бля бля бля бля бля бля бля бля бля бля бля бля.</p>
            <p>Бля бля бля бля бля бля бля бля бля бля бля бля бля бля бля бля бля бля бля бля бля бля бля бля бля бля бля бля бля бля бля.</p>
            
          </div>
        </div>
      </div>
    </div>

<!-- add artworks-carousel and features -->
<div id="partials-content"> 
</div>

`;

export default function(ctx){
    ctx.render(template());

    const partialsContent = document.getElementById('partials-content');

    const artCategoriesDiv = document.createElement('div');
    artCategoriesDiv.id = 'art-categories';
    partialsContent.appendChild(artCategoriesDiv);
    artCategoriesView(artCategoriesDiv);
}