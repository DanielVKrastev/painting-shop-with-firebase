import { html, render } from "lit-html";
import artCategoriesView from "./partials/artCategoriesView";
import featuresView from "./partials/featuresView";

const rootEl = document.getElementById('site-root');

const template = (artCategoriesView) => html`
<div class="site-blocks-cover" style="background-image: url(./assets/images/background-img.jpg);" data-aos="fade">
    <div class="container">
        <div class="row align-items-start align-items-md-center justify-content-end">
        <div class="col-md-5 text-center text-md-left pt-5 pt-md-0">
            <h1 class="mb-2">Галерия - Елица Кръстева</h1>
            <div class="intro-text text-center text-md-left">
            <p class="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla. </p>
            <p>
                <a href="#" class="btn btn-sm btn-primary">Купи сега</a>
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
    ctx.render(template(), rootEl);

    const partialsContent = document.getElementById('partials-content');

    const featuresDiv = document.createElement('div');
    featuresDiv.id = 'features-container';

    partialsContent.appendChild(featuresDiv);

    featuresView(featuresDiv);

    const artCategoriesDiv = document.createElement('div');
    artCategoriesDiv.id = 'art-categories';

    partialsContent.appendChild(artCategoriesDiv);

    artCategoriesView(artCategoriesDiv);
}