import { html, render } from "lit-html";
import artCategoriesView from "./partials/artCategoriesView";
import featuresView from "./partials/featuresView";
import artWorksCarouselView from "./partials/artWorksCarouselView";

const template = (artCategoriesView) => html`
<div class="site-blocks-cover" style="background-image: url(./assets/images/background-img.jpg);" data-aos="fade">
    <div class="container">
        <div class="row align-items-start align-items-md-center justify-content-end">
        <div class="col-md-5 text-center text-md-left pt-5 pt-md-0">
            <h1 class="mb-2">Галерия - Елица Кръстева</h1>
            <div class="intro-text text-center text-md-left">
            <p class="mb-4">Свят на цветове, емоции и уникални творби, които носят радост и вдъхновение. </p>
            <p>
                <a href="/artshop" class="btn btn-sm btn-primary">Купи сега</a>
            </p>
            </div>
        </div>
        </div>
    </div>
</div>

<div id="partials-content"> 
</div>

`;

export default function(ctx, next){
    ctx.render(template());

    const partialsContent = document.getElementById('partials-content');

    const featuresDiv = document.createElement('div');
    featuresDiv.id = 'features-container';
    partialsContent.appendChild(featuresDiv);
    featuresView(featuresDiv);

    const artCategoriesDiv = document.createElement('div');
    artCategoriesDiv.id = 'art-categories';
    partialsContent.appendChild(artCategoriesDiv);
    artCategoriesView(artCategoriesDiv);

    /*
    const artCarouselDiv = document.createElement('div');
    artCarouselDiv.id = 'art-carousel-container';
    partialsContent.appendChild(artCarouselDiv);
    artWorksCarouselView(artCarouselDiv);
    */
}