import { html, render } from "lit-html";
import paintingApi from "../api/paintingApi";

const rootEl = document.getElementById('site-root');

const template = (paintings) => html`
    <div class="bg-light py-3">
      <div class="container">
        <div class="row">
          <div class="col-md-12 mb-0"><a href="/">Начало</a> <span class="mx-2 mb-0">/</span> <strong class="text-black">Портфолио</strong></div>
        </div>
      </div>
    </div>

    <div class="site-section">
      <div class="container">

        <div class="row mb-5">
          <div class="col-md-12 order-2">

            <div class="row">
              <div class="col-md-12 mb-5">
                <div class="float-md-left mb-4"><h2 class="text-black h5">Портфолио - всички</h2></div>
                <div class="d-flex">
                  <div class="dropdown mr-1 ml-md-auto">
                  <button type="button" class="btn btn-secondary btn-sm dropdown-toggle" id="dropdownMenuReference" data-toggle="dropdown">Сортиране</button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuReference">
                      <a class="dropdown-item" href="#">Име, А до Я</a>
                      <a class="dropdown-item" href="#">Име, Я до А</a>
                      <div class="dropdown-divider"></div>
                      <a class="dropdown-item" href="#">Цена, възходяща</a>
                      <a class="dropdown-item" href="#">Цена, низходяща</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row mb-5">

            ${
            paintings.map(paint => html`
              <div class="col-sm-6 col-lg-4 mb-4" data-aos="fade-up">
                <div class="block-4 text-center border">
                  <figure class="block-4-image">
                    <a href="/dashboard?id=${paint.id}"><img src="${paint.imageUrl}" alt="${paint.name}" class="img-fluid"></a>
                  </figure>
                  <div class="block-4-text p-4">
                    <h3><a href="shop-single.html">${paint.name}</a></h3>
                    <p class="mb-0">Размери: ${paint.size}</p>
                    <p class="text-primary font-weight-bold">${paint.price} лв.</p>
                  </div>
                </div>
              </div>
              `)
        }

            </div>
            <div class="row" data-aos="fade-up">
              <div class="col-md-12 text-center">
                <div class="site-block-27">
                  <ul>
                    <li><a href="#">&lt;</a></li>
                    <li class="active"><span>1</span></li>
                    <li><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                    <li><a href="#">4</a></li>
                    <li><a href="#">5</a></li>
                    <li><a href="#">&gt;</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          </div>
        </div>

      </div>
    </div>

    <!-- Art categories  VIEW --> 

`;

export default async function(ctx){

    try{
        const paintings = await paintingApi.getAll();
        //console.log(paintings);
        ctx.render(template(paintings));
    }catch(error){
        console.log(error.message);
        
    }
    
}