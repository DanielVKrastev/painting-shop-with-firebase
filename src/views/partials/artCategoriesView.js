import { html, render } from "lit-html";

const template = () => html`
<div class="site-section site-blocks-2">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-7 site-section-heading pt-4 text-center">
              <h2>Категории</h2>
            </div>
        </div>
        <div class="row">
          <div class="col-sm-6 col-md-6 col-lg-4 mb-4 mb-lg-0" data-aos="fade" data-aos-delay="">
            <a class="block-2-item" href="#">
              <figure class="image">
                <img src="../../assets/images/test_draw.jpg" alt="" class="img-fluid">
              </figure>
              <div class="text">
                <span class="text-uppercase">Категория</span>
                <h3>Портрети</h3>
              </div>
            </a>
          </div>
          <div class="col-sm-6 col-md-6 col-lg-4 mb-5 mb-lg-0" data-aos="fade" data-aos-delay="100">
            <a class="block-2-item" href="#">
              <figure class="image">
                <img src="../../assets/images/test_draw.jpg" alt="" class="img-fluid">
              </figure>
              <div class="text">
                <span class="text-uppercase">Категория</span>
                <h3>Пейзажи</h3>
              </div>
            </a>
          </div>
          <div class="col-sm-6 col-md-6 col-lg-4 mb-5 mb-lg-0" data-aos="fade" data-aos-delay="200">
            <a class="block-2-item" href="#">
              <figure class="image">
                <img src="../../assets/images/test_draw.jpg" alt="" class="img-fluid">
              </figure>
              <div class="text">
                <span class="text-uppercase">Категория</span>
                <h3>Абстрактни картини</h3>
              </div>
            </a>
          </div>
        </div>
    </div>
</div>

`;

export default function(featuresDiv){
    render(template(), featuresDiv);
}