import { html, render } from "lit-html";

const template = () => html`
<div class="site-section block-3 site-blocks-2 bg-light">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-7 site-section-heading text-center pt-4">
            <h2>Нови картини</h2>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="nonloop-block-3 owl-carousel">
                    <div class="item">
                        <div class="block-4 text-center">
                            <figure class="block-4-image">
                                <img src="../../assets/images/test_draw_swan.jpg" alt="Image placeholder" class="img-fluid">
                            </figure>
                            <div class="block-4-text p-4">
                                <h3><a href="#">Лебедово езеро test</a></h3>
                                <p class="mb-0">Размери: 25см / 34см</p>
                                <p class="text-primary font-weight-bold">80 лв.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

`;

export default function(artCarousel){
    render(template(), artCarousel);
}